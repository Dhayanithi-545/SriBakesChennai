"use client";

import Image from "next/image";

interface GallerySectionProps {
    title: string;
    images: string[];
    categoryId: string;
}

export default function GallerySection({ title, images, categoryId }: GallerySectionProps) {
    if (images.length === 0) return null;

    return (
        <section id={categoryId} className="mb-16 scroll-mt-24">
            <div className="flex items-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-dark-brown">{title}</h2>
                <div className="flex-grow h-px bg-primary/30 ml-6"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-pastel-pink/20 bg-light-cream"
                    >
                        {/* Loading placeholder effect */}
                        <div className="absolute inset-0 bg-primary/5 animate-pulse"></div>

                        <img
                            src={`/${categoryId}/${img}`}
                            alt={`${title} - Image ${index + 1}`}
                            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out z-10"
                            loading="lazy"
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                            }}
                        />
                        {/* Optional overlay on hover */}
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}
