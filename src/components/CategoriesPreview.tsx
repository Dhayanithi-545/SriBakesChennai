"use client";

import Link from "next/link";

const categories = [
    { id: "baby-kids", name: "Baby & Kids Cakes", image: "/baby-kids/IMG-20250705-WA0072.jpg" },
    { id: "love-couple", name: "Love & Couple Cakes", image: "/love-couple/IMG-20250827-WA0037.jpeg" },
    { id: "mini-cute", name: "Mini & Cute Cakes", image: "/mini-cute/IMG-20250511-WA0021.jpg" },
    { id: "brownies", name: "Signature Brownies", image: "/brownies/IMG-20250705-WA0068.jpg" },
    { id: "standard", name: "Standard Cakes", image: "/standard/IMG-20231012-WA0002.jpg" },
    { id: "tier", name: "Tier Cakes", image: "/tier/IMG-20250427-WA0015.jpg" },
    { id: "wedding", name: "Wedding Cakes", image: "/wedding/IMG_20260128_103159.jpg" },
];

export default function CategoriesPreview() {
    return (
        <section className="py-24 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Our Creations</h2>
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

                <div className="mt-16 text-center">
                    <Link
                        href="/gallery"
                        className="inline-flex bg-white text-gray-900 border border-gray-200 px-8 py-3 rounded-sm font-semibold hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm"
                    >
                        View Full Gallery
                    </Link>
                </div>
            </div>
        </section>
    );
}
