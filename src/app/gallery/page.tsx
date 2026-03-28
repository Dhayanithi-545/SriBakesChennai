import fs from "fs";
import path from "path";
import GallerySection from "@/components/GallerySection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cake Gallery | Sri Bakes",
    description: "Explore our diverse range of delectable cakes designed to make your celebrations unforgettable.",
};

const categories = [
    { id: "wedding", name: "Wedding Cakes" },
    { id: "tier", name: "Tier Cakes" },
    { id: "love-couple", name: "Love & Couple Cakes" },
    { id: "standard", name: "Standard Cakes Collection" },
    { id: "mini-cute", name: "Mini & Cute Cakes" },
    { id: "brownies", name: "Signature Brownies" },
    { id: "baby-kids", name: "Baby & Kids Cakes" },
];

export default function GalleryPage() {
    const categoryImages = categories.map((cat) => {
        const dirPath = path.join(process.cwd(), "public", cat.id);
        let images: string[] = [];

        try {
            if (fs.existsSync(dirPath)) {
                const files = fs.readdirSync(dirPath);
                images = files.filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file));
            }
        } catch (e) {
            console.error(`Error reading directory ${dirPath}`, e);
        }

        return { ...cat, images };
    });

    return (
        <div
            className="min-h-screen pt-10 pb-20 relative overflow-x-hidden"
            style={{ backgroundImage: "url('/cake-bg/menu-bg.jpg')", backgroundSize: "cover", backgroundPosition: "bottom left", backgroundAttachment: "fixed" }}
        >
            {/* Overlay — lighter so background shows through */}
            <div className="absolute inset-0 bg-[#fffaf5]/75" style={{ zIndex: 0 }} />

            {/* ── Decorative cake & dessert illustrations ── */}
            {/* Top-left: balloons & gifts */}
            <img src="/cake-bg/footer1.png" alt="" aria-hidden
                className="absolute top-0 left-0 w-64 sm:w-80 opacity-[0.18] pointer-events-none select-none"
                style={{ zIndex: 1 }}
            />
            {/* Top-right: illustrated 2-tier cake */}
            <img src="/cake-bg/story.png" alt="" aria-hidden
                className="absolute top-4 right-0 w-44 sm:w-60 opacity-[0.22] pointer-events-none select-none drop-shadow-lg"
                style={{ zIndex: 1 }}
            />
            {/* Mid-left: baker character */}
            <img src="/cake-bg/steps2.png" alt="" aria-hidden
                className="absolute top-[28%] -left-4 w-40 sm:w-52 opacity-[0.16] pointer-events-none select-none hidden sm:block"
                style={{ zIndex: 1 }}
            />
            {/* Mid-right: chocolate raspberry cake */}
            <img src="/cake-bg/steps1.png" alt="" aria-hidden
                className="absolute top-[42%] -right-4 w-48 sm:w-64 opacity-[0.20] pointer-events-none select-none"
                style={{ zIndex: 1 }}
            />
            {/* Lower-left: birthday scene */}
            <img src="/cake-bg/steps3.png" alt="" aria-hidden
                className="absolute top-[62%] -left-6 w-52 sm:w-68 opacity-[0.15] pointer-events-none select-none hidden sm:block"
                style={{ zIndex: 1 }}
            />
            {/* Lower-right: watercolor balloons banner */}
            <img src="/cake-bg/2653243.png" alt="" aria-hidden
                className="absolute top-[75%] right-0 w-64 sm:w-80 opacity-[0.15] pointer-events-none select-none hidden sm:block"
                style={{ zIndex: 1 }}
            />
            {/* Bottom-left: balloons & gifts (right variant) */}
            <img src="/cake-bg/footer2.png" alt="" aria-hidden
                className="absolute bottom-0 left-0 w-44 sm:w-56 opacity-[0.18] pointer-events-none select-none"
                style={{ zIndex: 1 }}
            />
            {/* Bottom-right: story cake again for symmetry */}
            <img src="/cake-bg/story.png" alt="" aria-hidden
                className="absolute bottom-0 right-0 w-40 sm:w-52 opacity-[0.18] pointer-events-none select-none drop-shadow-lg"
                style={{ zIndex: 1 }}
            />

            {/* Page header */}
            <div className="relative z-10 max-w-3xl mx-auto px-4 text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-dark-brown mb-4">
                    Our Creative Gallery
                </h1>
                <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
                <p className="text-xl text-dark-brown/70 mb-6 leading-relaxed">
                    A visual treat of our best works, crafted with love and precision for your special moments.
                </p>
                <div className="inline-block bg-white px-6 py-3 rounded-xl border border-primary/30 shadow-sm mb-6">
                    <p className="text-primary font-medium">
                        All cakes are customized. Final pricing depends on flavour, weight &amp; design.
                    </p>
                </div>
                <div>
                    <a
                        href="https://drive.google.com/drive/folders/1v_N2JnYkEG-HmaiENW0fMTKhsHm79M7n"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-md font-semibold text-sm text-white bg-[#e76f51] hover:bg-[#d05f42] transition-colors duration-150 shadow-md"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.3 78" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                            <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#fff"/>
                            <path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#fff"/>
                            <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75L86.1 57.5c.8-1.4 1.2-2.95 1.2-4.5H59.8L73.55 76.8z" fill="#fff"/>
                            <path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#fff"/>
                            <path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#fff"/>
                            <path d="M73.4 26.5L60.7 4.5C59.9 3.1 58.75 2 57.4 1.2L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#fff"/>
                        </svg>
                        View All Creations
                    </a>
                    <p className="mt-2 text-sm text-dark-brown/50">See even more of our creations beyond this gallery</p>
                </div>
            </div>

            {/* Category sliders — narrower max-width to make portrait images look great */}
            <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
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
    );
}
