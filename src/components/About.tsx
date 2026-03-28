"use client";

import { Cake, Sparkles, Heart, Award, Clock, Users } from "lucide-react";

export default function About() {
    return (
        <section
            className="py-16 sm:py-20 md:py-24 border-b border-gray-100 relative overflow-hidden"
            style={{ backgroundImage: "url('/cake-bg/story-bg4.jpg')", backgroundSize: "cover", backgroundPosition: "top right" }}
        >
            {/* Overlay — lighter so background & illustrations show through */}
            <div className="absolute inset-0 bg-white/55" style={{ zIndex: 0 }} />

            {/* Decorative cake illustrations */}
            <img
                src="/cake-bg/story.png" alt="" aria-hidden
                className="absolute -bottom-6 -right-6 w-52 sm:w-72 md:w-80 opacity-35 pointer-events-none select-none drop-shadow-xl"
                style={{ zIndex: 1 }}
            />
            <img
                src="/cake-bg/steps1.png" alt="" aria-hidden
                className="absolute -top-4 -left-6 w-44 sm:w-56 opacity-25 pointer-events-none select-none drop-shadow-lg"
                style={{ zIndex: 1 }}
            />
            <img
                src="/cake-bg/footer1.png" alt="" aria-hidden
                className="absolute top-1/2 -translate-y-1/2 -right-8 w-48 sm:w-64 opacity-15 pointer-events-none select-none hidden md:block"
                style={{ zIndex: 1 }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* 🔥 HEADER */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#e76f51]/10 rounded-full mb-6">
                        <Cake className="w-8 h-8 text-[#e76f51]" />
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                        Baked with Love in Chennai
                    </h2>

                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                        The Journey of SRI BAKE'S
                    </h3>

                    <div className="max-w-3xl mx-auto space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
    
    <p>
        <span className="font-semibold text-[#e76f51]">SRI BAKE'S</span> began as a small home baking passion with a simple goal — to create cakes that make every celebration unforgettable. What started with a few custom orders has now grown into a trusted name in Chennai, known for crafting personalized cakes that match every unique occasion.
    </p>

    <p>
        Today, every cake is freshly baked, thoughtfully designed, and made with attention to detail and quality ingredients. From birthdays to weddings, we focus not just on how the cake looks, but also on delivering rich taste, reliability, and a seamless experience that customers can always count on.
    </p>

</div>
                </div>

                {/* 🔥 CARDS WITH BACKGROUND IMAGES */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* CARD 1 */}
                    <div className="relative rounded-xl overflow-hidden group h-[220px] flex items-center justify-center text-center">

                        <img
                            src="/love-couple/IMG_20250310_192246.jpg"
                            className="absolute inset-0 w-full h-full object-cover blur-[2px] scale-105"
                        />

                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

                        <div className="relative z-10 px-4 text-white">
                            <Clock className="mx-auto mb-3 w-7 h-7 text-[#e76f51]" />
                            <h3 className="font-bold text-lg">100% Fresh</h3>
                            <p className="text-sm text-gray-200">
                                Freshly baked for every order
                            </p>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="relative rounded-xl overflow-hidden group h-[220px] flex items-center justify-center text-center">

                        <img
                            src="/baby-kids/IMG-20260311-WA0038.jpg"
                            className="absolute inset-0 w-full h-full object-cover blur-[2px] scale-105"
                        />

                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

                        <div className="relative z-10 px-4 text-white">
                            <Sparkles className="mx-auto mb-3 w-7 h-7 text-[#e76f51]" />
                            <h3 className="font-bold text-lg">Custom Designs</h3>
                            <p className="text-sm text-gray-200">
                                Personalized for every occasion
                            </p>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="relative rounded-xl overflow-hidden group h-[220px] flex items-center justify-center text-center">

                        <img
                            src="/mini-cute/IMG_20251120_095944.jpg"
                            className="absolute inset-0 w-full h-full object-cover blur-[2px] scale-105"
                        />

                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

                        <div className="relative z-10 px-4 text-white">
                            <Heart className="mx-auto mb-3 w-7 h-7 text-[#e76f51]" />
                            <h3 className="font-bold text-lg">Home Baked</h3>
                            <p className="text-sm text-gray-200">
                                Crafted with care and love
                            </p>
                        </div>
                    </div>
                </div>

                {/* 🔥 STATS → FORCE HORIZONTAL ON MOBILE */}
                <div className="mt-12 flex justify-between items-center text-center gap-2 sm:gap-6">

                    <div className="flex-1">
                        <Award className="mx-auto mb-2 w-5 h-5 text-[#e76f51]" />
                        <div className="text-lg sm:text-2xl font-bold text-gray-900">500+</div>
                        <div className="text-xs sm:text-sm text-gray-600">Customers</div>
                    </div>

                    <div className="flex-1">
                        <Cake className="mx-auto mb-2 w-5 h-5 text-[#e76f51]" />
                        <div className="text-lg sm:text-2xl font-bold text-gray-900">1000+</div>
                        <div className="text-xs sm:text-sm text-gray-600">Cakes</div>
                    </div>

                    <div className="flex-1">
                        <Users className="mx-auto mb-2 w-5 h-5 text-[#e76f51]" />
                        <div className="text-lg sm:text-2xl font-bold text-gray-900">5+ Years</div>
                        <div className="text-xs sm:text-sm text-gray-600">Experience</div>
                    </div>

                </div>

                {/* Drive Portfolio Link */}
                <div className="mt-10 text-center">
                    <a
                        href="https://drive.google.com/drive/folders/1v_N2JnYkEG-HmaiENW0fMTKhsHm79M7n"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-md font-semibold text-sm text-white bg-[#e76f51] hover:bg-[#d05f42] active:bg-[#c0543a] transition-colors duration-150 shadow-md"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.3 78" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                            <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#fff"/>
                            <path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#fff"/>
                            <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75L86.1 57.5c.8-1.4 1.2-2.95 1.2-4.5H59.8L73.55 76.8z" fill="#fff"/>
                            <path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#fff"/>
                            <path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#fff"/>
                            <path d="M73.4 26.5L60.7 4.5C59.9 3.1 58.75 2 57.4 1.2L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#fff"/>
                        </svg>
                        See More of Creations
                    </a>
                    <p className="mt-2 text-xs text-gray-500">Browse our complete portfolio of creations</p>
                </div>

            </div>
        </section>
    );
}