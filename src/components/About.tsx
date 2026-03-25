"use client";

import { Cake, Sparkles, Heart, Award, Clock, Users } from "lucide-react";

export default function About() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-[#fef9f6] border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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

            </div>
        </section>
    );
}