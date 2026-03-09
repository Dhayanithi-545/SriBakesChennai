"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const categories = [
    { id: "baby-kids", name: "Baby & Kids Cakes", image: "/baby-kids/IMG-20250705-WA0072.jpg" },
    { id: "love-couple", name: "Love & Couple Cakes", image: "/love-couple/IMG_20251108_145245.jpg" },
    { id: "mini-cute", name: "Mini & Cute Cakes", image: "/mini-cute/IMG-20250511-WA0021.jpg" },
    { id: "brownies", name: "Signature Brownies", image: "/brownies/IMG-20250705-WA0068.jpg" },
    { id: "standard", name: "Standard Cakes", image: "/standard/IMG-20231012-WA0002.jpg" },
    { id: "tier", name: "Tier Cakes", image: "/tier/IMG-20250427-WA0015.jpg" },
    { id: "wedding", name: "Wedding Cakes", image: "/wedding/IMG_20260128_103159.jpg" },
];

const heroImages = [
    "/tier/IMG_20250622_142348.jpg",
    "/tier/Photo from SRILAKSHMI.jpg",
    "/tier/IMG-20260226-WA0022.jpg",
    "/tier/IMG-20260224-WA0057.jpg",
    "/tier/IMG-20260219-WA0008(1).jpg",
    "/baby-kids/IMG-20250705-WA0072.jpg",
    "/love-couple/IMG_20251108_145245.jpg",
    "/standard/IMG_20250622_103956.jpg",
    "/standard/IMG-20231012-WA0002.jpg",


    "/mini-cute/Scanned_20250820-0936-08.jpg",
    "/brownies/IMG_20250411_181144.jpg",
];

export default function Hero() {
    const [currentImageIdx, setCurrentImageIdx] = useState(0);

    // Dynamic Image Slideshow Effect
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIdx((prevIdx) => (prevIdx + 1) % heroImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="relative w-full overflow-hidden bg-[#2c2420]">
            {/* Background Image / Big Photo Slideshow */}
            <div className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center">
                <div className="absolute inset-0 bg-black/50 z-10" />

                {heroImages.map((src, idx) => (
                    <img
                        key={src}
                        src={src}
                        alt="Elegant custom cake by Sri Bakes"
                        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${idx === currentImageIdx ? "opacity-100" : "opacity-0"
                            }`}
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';
                        }}
                    />
                ))}

                {/* Hero Content */}
                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-12">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-xl tracking-tight leading-tight">
                        Handcrafted Cakes For Your <br className="hidden md:block" /> Unforgettable Moments
                    </h1>

                    <p className="text-xl md:text-2xl text-white/95 mb-10 drop-shadow-md font-medium max-w-2xl leading-relaxed">
                        From elegant wedding tiers to playful kids' designs, we bake fresh, premium custom cakes tailored exactly to your vision.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center mt-4">
                        <Link
                            href="/contact"
                            className="btn-bespoke btn-primary-bespoke px-10 py-4 text-xl shadow-[0_8px_30px_rgba(231,111,81,0.3)] hover:shadow-[0_8px_30px_rgba(231,111,81,0.5)] transform transition-all"
                        >
                            Book Custom Order
                        </Link>
                        <a
                            href="https://wa.me/919884420725"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-bespoke bg-white/95 text-dark-brown hover:bg-white px-8 py-4 text-lg shadow-xl flex items-center justify-center gap-3 transform transition-all group"
                        >
                            <span className="text-[#25D366] group-hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
                                </svg>
                            </span>
                            Chat & Inquiry
                        </a>
                    </div>
                </div>
            </div>

            {/* Scrolling Category Marquee beneath Hero */}
            <div className="bg-white border-t border-b border-gray-100 py-8 relative z-30">
                <div className="marquee-container">
                    <div className="marquee-content">
                        {/* Duplicate categories array to ensure seamless infinite scroll */}
                        {[...categories, ...categories, ...categories].map((cat, idx) => (
                            <Link
                                key={`${cat.id}-${idx}`}
                                href={`/gallery#${cat.id}`}
                                className="group block relative w-72 h-48 sm:h-56 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex-shrink-0 cursor-pointer border border-gray-100 hover:-translate-y-1"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90"></div>
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    loading="lazy"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
                                    }}
                                />
                                <div className="absolute inset-0 z-20 flex flex-col justify-end p-5">
                                    <h3 className="text-white font-bold text-xl leading-tight transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                                        {cat.name}
                                    </h3>
                                    <div className="h-0.5 w-10 bg-[#e76f51] mt-3 rounded-full transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
