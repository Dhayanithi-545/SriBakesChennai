const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walkDir(file));
        } else {
            results.push(file);
        }
    });
    return results;
}

const files = walkDir(publicDir);
const imageFiles = files.filter(file => file.match(/\.(jpg|jpeg|png)$/i));

async function processImages() {
    console.log(`Found ${imageFiles.length} images. Optimizing to save space...`);
    let totalSaved = 0;

    for (const file of imageFiles) {
        try {
            const originalStat = fs.statSync(file);
            const originalSize = originalStat.size;

            // Read into buffer to allow in-place replacement
            const buffer = fs.readFileSync(file);

            // Resize and compress
            const newBuffer = await sharp(buffer)
                .resize(1080, 1080, { fit: 'inside', withoutEnlargement: true })
                .jpeg({ quality: 75 }) // Force JPEG with lower quality for high savings
                .toBuffer();

            const newSize = newBuffer.length;

            if (newSize < originalSize) {
                fs.writeFileSync(file, newBuffer);
                const savedMbs = ((originalSize - newSize) / (1024 * 1024)).toFixed(2);
                console.log(`Compressed: ${path.basename(file)} (Saved ${savedMbs} MB)`);
                totalSaved += (originalSize - newSize);
            } else {
                console.log(`Skipped: ${path.basename(file)} (Already optimized)`);
            }
        } catch (e) {
            console.error(`Error compressing ${file}: ${e.message}`);
        }
    }
    console.log(`\nSuccessfully compressed images! Saved ${(totalSaved / (1024 * 1024)).toFixed(2)} MB in total.`);
}

processImages();
