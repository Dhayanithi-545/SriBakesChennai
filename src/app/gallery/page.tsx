import fs from "fs";
import path from "path";
import GallerySection from "@/components/GallerySection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cake Gallery | Sri Bakes",
    description: "Explore our diverse range of delectable cakes designed to make your celebrations unforgettable.",
};

const categories = [
    { id: "baby-kids", name: "Baby & Kids Cakes" },
    { id: "love-couple", name: "Love & Couple Cakes" },
    { id: "mini-cute", name: "Mini & Cute Cakes" },
    { id: "brownies", name: "Signature Brownies" },
    { id: "standard", name: "Standard Cakes Collection" },
    { id: "tier", name: "Tier Cakes" },
    { id: "wedding", name: "Wedding Cakes" },
];

export default function GalleryPage() {
    // Read images dynamically from public folders on the server
    const categoryImages = categories.map((cat) => {
        const dirPath = path.join(process.cwd(), "public", cat.id);
        let images: string[] = [];

        try {
            if (fs.existsSync(dirPath)) {
                const files = fs.readdirSync(dirPath);
                // Filter only image files (jpg, jpeg, png, webp, etc.)
                images = files.filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file));
            } else {
                // Fallback for demo if directory isn't found perfectly
                images = ["1.jpg"];
            }
        } catch (e) {
            console.error(`Error reading directory ${dirPath}`, e);
        }

        return {
            ...cat,
            images
        };
    });

    return (
        <div className="min-h-screen bg-light-cream pt-10 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-dark-brown mb-4">Our Creative Gallery</h1>
                    <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-dark-brown/70 max-w-3xl mx-auto mb-6">
                        A visual treat of our best works, crafted with love and precision for your special moments.
                    </p>
                    <div className="inline-block bg-white px-6 py-3 rounded-xl border border-primary/30 shadow-sm">
                        <p className="text-primary font-medium flex items-center gap-2">
                            <span>💡</span>
                            All cakes are customized. Final pricing depends on flavour, weight & design.
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
                    {categoryImages.map((category) => (
                        <GallerySection
                            key={category.id}
                            title={category.name}
                            categoryId={category.id}
                            images={category.images}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
