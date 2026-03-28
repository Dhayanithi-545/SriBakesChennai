"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Sparkles, Palette, Home } from "lucide-react";

const categories = [
    { id: "baby-kids", name: "Baby & Kids Cakes", image: "/baby-kids/IMG_20260125_152031.jpg" },
    { id: "love-couple", name: "Love & Couple Cakes", image: "/love-couple/IMG-20260301-WA0033(1).jpg" },
    { id: "mini-cute", name: "Mini & Cute Cakes", image: "/mini-cute/IMG_20251120_095944.jpg" },
    { id: "brownies", name: "Signature Brownies", image: "/brownies/IMG-20250815-WA0041.jpg" },
    { id: "standard", name: "Standard Cakes", image: "/standard/IMG_20260131_170310_1.jpg" },
    { id: "tier", name: "Tier Cakes", image: "/Hero-Images/IMG_20260220_110358.jpg" },
    { id: "wedding", name: "Wedding Cakes", image: "/wedding/IMG-20260214-WA0015.jpg" },
];

const heroImages = [
    "/Hero-Images/WhatsApp Image 2026-03-11 at 18.53.59 (1).jpeg",
    "/Hero-Images/WhatsApp Image 2026-03-11 at 18.53.59.jpeg",
    "/Hero-Images/WhatsApp Image 2026-03-11 at 18.54.15.jpeg",
    "/Hero-Images/WhatsApp Image 2026-03-11 at 18.54.50.jpeg",
    "/Hero-Images/WhatsApp Image 2026-03-11 at 18.53.17.jpeg",
    "/Hero-Images/IMG_20260220_110358.jpg",
    "/Hero-Images/IMG-20251206-WA0015.jpg",
];

// Triplicate so the loop never shows a gap
const loopedCategories = [...categories, ...categories, ...categories];

export default function Hero() {
    const [currentImageIdx, setCurrentImageIdx] = useState(0);

    // ── Marquee touch-drag state ──────────────────────────────────────
    const trackRef = useRef<HTMLDivElement>(null);
    const touchStartXRef = useRef(0);
    const touchStartScrollRef = useRef(0);
    const isDraggingRef = useRef(false);
    const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const scrollXRef = useRef(0);        // manual JS scroll position
    const rafRef = useRef<number | null>(null);
    const isAutoScrollingRef = useRef(true);
    const lastTimeRef = useRef<number | null>(null);

    // Speed: pixels per second (mirrors CSS 35s for ~2240 px half-width estimate)
    const SPEED = 60; // px/s  — tweak freely

    // ── Auto-scroll via rAF (replaces CSS animation while touch active) ──
    const startRaf = () => {
        if (rafRef.current !== null) return;
        lastTimeRef.current = null;
        const step = (timestamp: number) => {
            if (lastTimeRef.current === null) lastTimeRef.current = timestamp;
            const delta = (timestamp - lastTimeRef.current) / 1000;
            lastTimeRef.current = timestamp;

            if (isAutoScrollingRef.current && trackRef.current) {
                const track = trackRef.current;
                // Half the total scroll width (one set of categories)
                const halfW = track.scrollWidth / 3;
                scrollXRef.current = (scrollXRef.current + SPEED * delta) % halfW;
                track.style.transform = `translateX(-${scrollXRef.current}px)`;
            }
            rafRef.current = requestAnimationFrame(step);
        };
        rafRef.current = requestAnimationFrame(step);
    };

    const stopRaf = () => {
        if (rafRef.current !== null) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        }
    };

    // ── Hero image slideshow ──────────────────────────────────────────
    useEffect(() => {
        const id = setInterval(() => {
            setCurrentImageIdx((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(id);
    }, []);

    // ── Start JS-driven scroll on mount (instead of CSS animation) ────
    useEffect(() => {
        isAutoScrollingRef.current = true;
        startRaf();
        return () => stopRaf();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // ── Schedule auto-resume after 3 s of inactivity ─────────────────
    const scheduleResume = () => {
        if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = setTimeout(() => {
            isAutoScrollingRef.current = true;
            lastTimeRef.current = null;
        }, 3000);
    };

    // ── Touch handlers ────────────────────────────────────────────────
    const onTouchStart = (e: React.TouchEvent) => {
        if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
        isAutoScrollingRef.current = false;
        isDraggingRef.current = true;
        touchStartXRef.current = e.touches[0].clientX;
        touchStartScrollRef.current = scrollXRef.current;
    };

    const onTouchMove = (e: React.TouchEvent) => {
        if (!isDraggingRef.current || !trackRef.current) return;
        const dx = touchStartXRef.current - e.touches[0].clientX;
        const track = trackRef.current;
        const halfW = track.scrollWidth / 3;
        // Clamp within one full cycle
        scrollXRef.current = ((touchStartScrollRef.current + dx) % halfW + halfW) % halfW;
        track.style.transform = `translateX(-${scrollXRef.current}px)`;
    };

    const onTouchEnd = () => {
        isDraggingRef.current = false;
        scheduleResume();
    };

    return (
        <section
            className="relative w-full overflow-hidden"
            style={{ backgroundImage: "url('/cake-bg/header-bg2.jpg')", backgroundSize: "cover", backgroundPosition: "top left" }}
        >
            {/* ── Hero Background Slideshow ── */}
            {/* Mobile-first: tall on phones (85dvh), shorter on desktop (55vh) */}
            <div className="relative h-[68dvh] md:h-[60vh] min-h-[520px] md:min-h-[420px] w-full flex items-center justify-center">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 z-10" />

                {heroImages.map((src, idx) => (
                    <img
                        key={src}
                        src={src}
                        alt="Elegant custom cake by Sri Bakes"
                        className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out
                            md:blur-sm md:brightness-75 md:scale-105
                            ${idx === currentImageIdx ? "opacity-100" : "opacity-0"}`}
                        onError={(e) => {
                            (e.target as HTMLImageElement).src =
                                "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";
                        }}
                    />
                ))}

                {/* Hero Content */}
                <div className="relative z-20 text-center px-5 max-w-4xl mx-auto flex flex-col items-center mt-10">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 drop-shadow-xl tracking-tight leading-tight">
                        Turning Your Moments Into
                        <br className="hidden sm:block" />
                        {" "}Sweet Memories
                    </h1>
                    <p className="text-2xl sm:text-3xl md:text-4xl text-[#f4c98a] drop-shadow-lg mb-3" style={{ fontFamily: "var(--font-great-vibes)" }}>
                        Your Celebration Starts Here
                    </p>

                    {/* <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 drop-shadow-md font-medium max-w-2xl leading-relaxed">
                        At SRI BAKE'S, every cake is freshly baked and thoughtfully designed to make your celebrations memorable.
We create beautiful customised cakes with premium ingredients and lots of love.
Perfectly crafted to make every moment sweeter and more special.
                    </p> */}

                    {/* ── Trust bar ── */}
                    <div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-center gap-5  sm:gap-0">
                        {[
                            { icon: <Sparkles className="w-4 h-4 text-white" />, title: "100% Fresh", desc: "Baked from scratch on every order" },
                            { icon: <Palette className="w-4 h-4 text-white" />, title: "Custom Designs", desc: "Made to match your event's vibe"},
                            { icon: <Home className="w-4 h-4 text-white" />, title: "Home Baked", desc: "Crafted with hygiene, care & love"},
                        ].map((item, i) => (
                            <div key={item.title} className="flex items-center gap-2.5 sm:px-6 first:sm:pl-0 last:sm:pr-0">
                                {i > 0 && <span className="hidden sm:block w-px h-8 bg-white/15 mr-6 flex-shrink-0" />}
                                {item.icon}
                                <div>
                                    <p className="text-white text-sm font-semibold leading-tight">{item.title}</p>
                                    <p className="text-white/50 text-xs leading-snug">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto">

                        {/* Primary — Book Custom Order */}
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-sm text-white transition-colors duration-150"
                            style={{ background: "#c65f47" }}
                            onMouseEnter={e => (e.currentTarget.style.background = "#a84f3b")}
                            onMouseLeave={e => (e.currentTarget.style.background = "#c65f47")}
                        >
                            Book Custom Order
                        </Link>

                        {/* WhatsApp — split vertical border button */}
                        <a
                            href="https://wa.me/919884420725"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-stretch overflow-hidden border border-white font-semibold text-sm transition-colors duration-150"
                        >
                            {/* Green icon panel */}
                            <span className="bg-[#25D366] hover:bg-[#1ebe5d] flex items-center justify-center px-4 flex-shrink-0 transition-colors duration-150">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
                                </svg>
                            </span>
                            {/* Text panel */}
                            <span className="flex-1 flex items-center justify-center bg-white text-[#2c2420] hover:bg-[#f5ead8] px-5 py-3.5 transition-colors duration-150">
                                Chat on WhatsApp
                            </span>
                        </a>

                    </div>


                </div>
            </div>

            {/* ── Category Marquee ── */}
            <div
                className="border-t border-b border-gray-100 py-6 relative z-30 select-none"
                style={{ backgroundImage: "url('/cake-bg/steps-bg2.png')", backgroundSize: "cover", backgroundPosition: "bottom right" }}
            >
                <div className="absolute inset-0 bg-[#fdf6ed]/88" />
                {/* Touch-drag hint label — mobile only */}
                {/* <p className="text-center text-xs text-gray-400 mb-3 sm:hidden tracking-wide uppercase">
                    ← Drag to explore →
                </p> */}

                {/* Overflow wrapper with edge fade */}
                <div
                    className="overflow-hidden w-full relative"
                    style={{
                        maskImage:
                            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                        WebkitMaskImage:
                            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                    }}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    onTouchCancel={onTouchEnd}
                >
                    {/* Track — driven by JS translateX */}
                    <div
                        ref={trackRef}
                        className="inline-flex gap-4 py-2 px-2 will-change-transform"
                        style={{ transform: "translateX(0px)" }}
                    >
                        {loopedCategories.map((cat, idx) => (
                            <Link
                                key={`${cat.id}-${idx}`}
                                href={`/gallery#${cat.id}`}
                                /* Square cards: w-64 h-64 (larger than before) */
                                className="group block relative w-64 h-64 sm:w-72 sm:h-72 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex-shrink-0 cursor-pointer border border-gray-100 hover:-translate-y-1 active:scale-95"
                            >
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90" />

                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                                    loading="lazy"
                                    draggable={false}
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src =
                                            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
                                    }}
                                />

                                <div className="absolute inset-0 z-20 flex flex-col justify-end p-4">
                                    <h3 className="text-white font-bold text-base sm:text-lg leading-tight transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                                        {cat.name}
                                    </h3>
                                    <div className="h-0.5 w-8 bg-[#e76f51] mt-2 rounded-full transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
