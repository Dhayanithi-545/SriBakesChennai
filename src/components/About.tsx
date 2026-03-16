"use client";

import { Cake, Sparkles, Heart, Award, Clock, Users } from "lucide-react";

export default function About() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-[#fef9f6] border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#e76f51]/10 rounded-full mb-6">
                        <Cake className="w-8 h-8 text-[#e76f51]" />
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-4">
                        Baked with Love in Chennai
                    </h2>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
                        The Journey of SRI BAKE'S
                    </h3>

                    <div className="space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                        <p className="text-justify">
                            <span className="font-semibold text-[#e76f51]">SRI BAKE'S</span> began with a simple dream – to create exquisite cakes that transform every celebration into an unforgettable memory. What started as a passionate home baking venture has blossomed into Chennai's trusted destination for custom celebration cakes, fueled by dedication, creativity, and the incredible love from our valued customers.
                        </p>
                        <p className="text-justify">
                            In those early days, every cake was a canvas for experimentation, every design a lesson in perfection, and every order handled with meticulous care. Through countless hours of practice, continuous refinement of techniques, and the unwavering trust of our customers, SRI BAKE'S steadily grew. Each creation strengthened our craft, deepened our understanding of our clients' visions, and built the solid foundation upon which our reputation stands today.
                        </p>
                        <p className="text-justify">
                            Today, <span className="font-semibold text-[#e76f51]">SRI BAKE'S</span> proudly crafts bespoke cakes for birthdays, weddings, anniversaries, baby showers, corporate events, and every special moment in between. Every cake is freshly baked to order using premium ingredients, and thoughtfully designed to bring your unique celebration theme to life. Our commitment extends beyond visual appeal – we create cakes that deliver exceptional taste experiences that linger in memory long after the last bite.
                        </p>
                        <p className="text-justify">
                            Customer trust forms the heartbeat of <span className="font-semibold text-[#e76f51]">SRI BAKE'S</span>. We approach every order with absolute responsibility, maintain clear communication throughout the process, and obsess over every detail to ensure you receive precisely what you envisioned for your special occasion. The joy and glowing reviews from our customers continue to inspire us to reach new heights of excellence.
                        </p>
                        <p className="text-justify">
                            Looking forward, our vision for <span className="font-semibold text-[#e76f51]">SRI BAKE'S</span> is to expand our reach, innovate with even more creative cake designs, and establish ourselves as Chennai's premier destination for custom celebration cakes. We're committed to continuously elevating our quality, expanding our design repertoire, and enhancing our service to ensure every client who chooses SRI BAKE'S feels confident, delighted, and completely satisfied.
                        </p>
                        <p className="text-justify font-medium">
                            At <span className="font-bold text-[#e76f51]">SRI BAKE'S</span>, every cake is more than just a dessert – it's a centerpiece of celebration, a catalyst for memories, and a source of pure joy. This purpose drives us to perfect our craft, one cake at a time, every single day.
                        </p>
                    </div>
                </div>

                <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    <div className="group p-6 sm:p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 text-center hover:-translate-y-1">
                        <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#e76f51]/10 rounded-full mb-4 sm:mb-6 group-hover:bg-[#e76f51]/20 transition-colors duration-300">
                            <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-[#e76f51]" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 tracking-tight">100% Fresh</h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            Baked completely from scratch upon receiving your order, ensuring peak freshness and flavor.
                        </p>
                    </div>
                    
                    <div className="group p-6 sm:p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 text-center hover:-translate-y-1">
                        <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#e76f51]/10 rounded-full mb-4 sm:mb-6 group-hover:bg-[#e76f51]/20 transition-colors duration-300">
                            <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-[#e76f51]" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 tracking-tight">Custom Designs</h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            Tailor-made creations that perfectly capture your event's theme and personal style.
                        </p>
                    </div>
                    
                    <div className="group p-6 sm:p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 text-center hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
                        <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#e76f51]/10 rounded-full mb-4 sm:mb-6 group-hover:bg-[#e76f51]/20 transition-colors duration-300">
                            <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-[#e76f51]" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 tracking-tight">Home Baked</h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            Crafted with strict hygiene standards, personal care, and love directly from our home kitchen.
                        </p>
                    </div>
                </div>

                <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-3">
                            <Award className="w-6 h-6 text-[#e76f51]" />
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">500+</div>
                        <div className="text-sm sm:text-base text-gray-600">Happy Customers</div>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-3">
                            <Cake className="w-6 h-6 text-[#e76f51]" />
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">1000+</div>
                        <div className="text-sm sm:text-base text-gray-600">Cakes Created</div>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-3">
                            <Users className="w-6 h-6 text-[#e76f51]" />
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">5+ Years</div>
                        <div className="text-sm sm:text-base text-gray-600">of Excellence</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
