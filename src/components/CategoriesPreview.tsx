"use client";

import Link from "next/link";

const categories = [
    { id: "baby-kids", name: "Baby & Kids Cakes", image: "/baby-kids/IMG_20260125_152031.jpg" },
    { id: "love-couple", name: "Love & Couple Cakes", image: "/love-couple/IMG-20260301-WA0033(1).jpg" },
    { id: "mini-cute", name: "Mini & Cute Cakes", image: "/mini-cute/IMG_20251120_095944.jpg" },
    { id: "brownies", name: "Signature Brownies", image: "/brownies/IMG-20250815-WA0041.jpg" },
    { id: "standard", name: "Standard Cakes", image: "/standard/IMG_20260131_170310_1.jpg" },
    { id: "tier", name: "Tier Cakes", image: "/Hero-Images/IMG_20260220_110358.jpg" },
    { id: "wedding", name: "Wedding Cakes", image: "/wedding/IMG-20260214-WA0015.jpg" },
];

export default function CategoriesPreview() {
    return (
        <section
            className="py-24 border-b border-gray-100 relative"
            style={{ backgroundImage: "url('/cake-bg/menu-bg.jpg')", backgroundSize: "cover", backgroundPosition: "bottom left" }}
        >
            <div className="absolute inset-0 bg-white/80" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#2c2420] mb-4 tracking-tight">Our Creations</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                        Explore our wide range of custom cakes designed for every special moment.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="group overflow-hidden bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-md transition-shadow"
                        >
                            <Link href={`/gallery#${category.id}`}>
                                <div className="relative w-full aspect-square overflow-hidden bg-gray-50">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>

                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src =
                                                "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80";
                                        }}
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20 flex flex-col justify-end p-5">
                                        <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                                            {category.name}
                                        </h3>
                                        <div className="h-0.5 w-12 bg-[#e76f51] rounded-full transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/gallery"
                        className="inline-flex bg-white text-gray-900 border border-gray-200 px-8 py-3 rounded-sm font-semibold hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm"
                    >
                        View Full Gallery
                    </Link>
                    <a
                        href="https://drive.google.com/drive/folders/1v_N2JnYkEG-HmaiENW0fMTKhsHm79M7n"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#e76f51] text-white border border-[#e76f51] px-8 py-3 rounded-sm font-semibold hover:bg-[#d05f42] hover:border-[#d05f42] transition-colors shadow-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.3 78" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                            <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#fff"/>
                            <path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#fff"/>
                            <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75L86.1 57.5c.8-1.4 1.2-2.95 1.2-4.5H59.8L73.55 76.8z" fill="#fff"/>
                            <path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#fff"/>
                            <path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#fff"/>
                            <path d="M73.4 26.5L60.7 4.5C59.9 3.1 58.75 2 57.4 1.2L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#fff"/>
                        </svg>
                        More on Google Drive
                    </a>
                </div>
            </div>
        </section>
    );
}
