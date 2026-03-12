"use client";

import { useRef, useState } from "react";

interface GallerySectionProps {
    title: string;
    images: string[];
    categoryId: string;
}

export default function GallerySection({ title, images, categoryId }: GallerySectionProps) {
    if (images.length === 0) return null;

    const [activeIdx, setActiveIdx] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const navigate = (dir: "prev" | "next") => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIdx((prev) => {
            if (dir === "next") return (prev + 1) % images.length;
            return (prev - 1 + images.length) % images.length;
        });
        setTimeout(() => setIsTransitioning(false), 400);
    };

    const activeImage = `/${categoryId}/${images[activeIdx]}`;

    return (
        <section id={categoryId} className="mb-24 scroll-mt-24">
            {/* ── Category Header ── */}
            <div className="flex items-center gap-4 mb-8">
                <div className="w-1.5 h-8 bg-primary rounded-full flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-bold text-dark-brown tracking-wide">
                    {title}
                </h2>
                <span className="text-sm text-dark-brown/40 font-medium ml-1">
                    ({images.length} photos)
                </span>
                <div className="flex-grow h-px bg-gradient-to-r from-primary/30 to-transparent ml-2" />
            </div>

            {/* ── Main Viewer + Arrows ── */}
            <div className="relative flex items-center gap-3 md:gap-5">

                {/* Left Arrow */}
                <button
                    onClick={() => navigate("prev")}
                    aria-label="Previous image"
                    className="flex-shrink-0 z-10 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white border border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200 group active:scale-95"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.2}
                        stroke="currentColor"
                        className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                {/* ── Featured Image Frame ── */}
                <div className="flex-1 relative">
                    {/* Outer decorative border frame */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#1a1009]
                        ring-1 ring-white/10
                        before:absolute before:inset-0 before:rounded-2xl before:border-[3px] before:border-white/5 before:z-20 before:pointer-events-none">

                        {/* Inner warm-toned mat layer */}
                        <div className="p-2 sm:p-3 bg-[#1a1009]">
                            {/* The image itself */}
                            <div className="relative w-full overflow-hidden rounded-xl"
                                style={{ aspectRatio: "4/5", maxHeight: "70vh" }}>

                                {/* Fade transition layer */}
                                <div className={`absolute inset-0 bg-[#1a1009] z-10 transition-opacity duration-300 pointer-events-none rounded-xl
                                    ${isTransitioning ? "opacity-40" : "opacity-0"}`} />

                                <img
                                    src={activeImage}
                                    alt={`${title} - Image ${activeIdx + 1}`}
                                    className="w-full h-full object-cover object-center rounded-xl transition-transform duration-500 ease-out hover:scale-105"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = "none";
                                    }}
                                />

                                {/* Bottom caption bar */}
                                <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/70 via-black/20 to-transparent px-4 pt-10 pb-3 rounded-b-xl">
                                    <p className="text-white/80 text-sm font-medium tracking-wide">
                                        {title} &nbsp;·&nbsp; {activeIdx + 1} / {images.length}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Corner ornaments — desk only */}
                        <div className="hidden sm:block absolute top-1.5 left-1.5 w-4 h-4 border-t-2 border-l-2 border-primary/40 rounded-tl-sm pointer-events-none z-30" />
                        <div className="hidden sm:block absolute top-1.5 right-1.5 w-4 h-4 border-t-2 border-r-2 border-primary/40 rounded-tr-sm pointer-events-none z-30" />
                        <div className="hidden sm:block absolute bottom-1.5 left-1.5 w-4 h-4 border-b-2 border-l-2 border-primary/40 rounded-bl-sm pointer-events-none z-30" />
                        <div className="hidden sm:block absolute bottom-1.5 right-1.5 w-4 h-4 border-b-2 border-r-2 border-primary/40 rounded-br-sm pointer-events-none z-30" />
                    </div>
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => navigate("next")}
                    aria-label="Next image"
                    className="flex-shrink-0 z-10 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white border border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200 group active:scale-95"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.2}
                        stroke="currentColor"
                        className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>

            {/* ── Dot / Thumbnail Strip ── */}
            <div className="mt-5 flex justify-center gap-1.5 flex-wrap px-4">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => !isTransitioning && setActiveIdx(idx)}
                        aria-label={`Go to image ${idx + 1}`}
                        className={`rounded-full transition-all duration-200
                            ${idx === activeIdx
                                ? "w-6 h-2.5 bg-primary shadow-sm"
                                : "w-2.5 h-2.5 bg-primary/25 hover:bg-primary/50"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
