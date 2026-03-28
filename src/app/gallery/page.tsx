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
                <div className="inline-block bg-white px-6 py-3 rounded-xl border border-primary/30 shadow-sm">
                    <p className="text-primary font-medium">
                        All cakes are customized. Final pricing depends on flavour, weight &amp; design.
                    </p>
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
