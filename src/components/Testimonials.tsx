"use client";

import { useRef, useState, useEffect } from "react";

const reviews = [
    {
        name: "Satish Dhanasekar",
        date: "a month ago",
        text: "A Masterpiece of Craftsmanship and Care! I ordered a custom cake from Sri Bakes for my cousin's wedding, and they absolutely nailed it! I had a very specific vision for how it should look, and I am so impressed that it was delivered exactly as told.",
        initial: "S",
    },
    {
        name: "Srinidhi Laxman",
        date: "2 months ago",
        text: "We had an amazing experience with this cake business for my sister's birthday! The cake was not only beautiful but also incredibly delicious. Every detail was perfect, and the customer service was outstanding. Thank you for making my sister's birthday so special! Highly recommend!",
        initial: "S",
    },
    {
        name: "Abhishek V",
        date: "a month ago",
        text: "I ordered a custom cake from Sri Bakes for my cousin's wedding, and they absolutely nailed it! I had a very specific vision for how it should look, and I am so impressed that it was delivered exactly as told.",
        initial: "A",
    },
    {
        name: "Sowmiya Ramkumar",
        date: "3 days ago",
        text: "Cake presentation was too good as expected... was delicious as well.. highly recommended.",
        initial: "S",
    },
    {
        name: "Anjana Senthil",
        date: "2 months ago",
        text: "I have ordered bento cake for birthday and it was fantastic! The cake came out delicious and superb texture. Taste wise and quality wise it is superb. I'm waiting to order more in Sri Bakes. The cake was very fresh. Thank you so much. And special thanks for delivering the cake in person. Really very happy!",
        initial: "A",
    },
    {
        name: "Sajitha Panneerselvam",
        date: "a month ago",
        text: "Ordered her signature flavour rosemilk with gulkand cake for our engagement, it was so delicious. All our guests loved it and especially the cake design and color was wonderful and elegant as expected.",
        initial: "S",
    },
    {
        name: "C Stalin",
        date: "2 months ago",
        text: "Cake was made exactly as per the demo model. Excellent finishing and very good chocolate taste. Highly satisfied.",
        initial: "C",
    },
    {
        name: "Kavyashree Rajasekar",
        date: "3 months ago",
        text: "Ordered a customised 1/2 kg choco truffle cake just 1 day before and the cake was amazing, so moist and fresh. Obviously will recommend this home baker for further orders.",
        initial: "K",
    },
    {
        name: "Karunambigai Baskar",
        date: "3 days ago",
        text: "Cake design was exactly prescribed and delivered on time. Entire crowd was overwhelmed by the design and it's taste. Thanks to Sri Bakes team...",
        initial: "K",
    },
    {
        name: "Karthik M",
        date: "a month ago",
        text: "The cake was delicious and well-presented. Excellent service and timely delivery. Highly recommended for any occasion!",
        initial: "K",
    },
    {
        name: "Deepika Ramu",
        date: "3 months ago",
        text: "I ordered a bento cake for my friend's birthday. It was so cute and exactly how I wanted it. The taste was also very good. Thank you!",
        initial: "D",
    },
    {
        name: "Arun Kumar",
        date: "2 months ago",
        text: "Best place for custom cakes. The chocolate truffle was very rich and moist. Everyone loved it.",
        initial: "A",
    },
    {
        name: "Priya Dharshini",
        date: "4 months ago",
        text: "Ordered a birthday cake for my daughter. The design was perfect and the taste was amazing. Very professional service.",
        initial: "P",
    },
    {
        name: "Ganesh Moorthy",
        date: "a month ago",
        text: "Quality of the cake is top-notch. It was very fresh and the sweetness was just right. Will definitely order again.",
        initial: "G",
    },
    {
        name: "Sangeetha S",
        date: "5 months ago",
        text: "Highly satisfied with the cake and the service. They delivered it on time and the cake was exactly as shown in the picture.",
        initial: "S",
    },
];

// Avatar colours cycle
const avatarColors = [
    "bg-[#e76f51]",
    "bg-[#e9c46a]",
    "bg-[#2a9d8f]",
    "bg-[#6d6875]",
    "bg-[#457b9d]",
];

function StarRow() {
    return (
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#FBBC04" className="w-4 h-4">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

function ReviewCard({ review, colorClass }: { review: typeof reviews[0]; colorClass: string }) {
    const [expanded, setExpanded] = useState(false);
    const isLong = review.text.length > 160;
    const displayText = isLong && !expanded ? review.text.slice(0, 160) + "…" : review.text;

    return (
        <div className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-3 snap-start">
            {/* Header */}
            <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${colorClass} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {review.initial}
                </div>
                <div>
                    <p className="text-sm font-semibold text-[#2c2420] leading-tight">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.date}</p>
                </div>
                {/* Google G badge */}
                <div className="ml-auto">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                </div>
            </div>

            {/* Stars */}
            <StarRow />

            {/* Review text */}
            <p className="text-sm text-gray-600 leading-relaxed flex-1">
                {displayText}
                {isLong && (
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="ml-1 text-primary font-semibold hover:underline text-xs"
                    >
                        {expanded ? "less" : "more"}
                    </button>
                )}
            </p>
        </div>
    );
}

export default function Testimonials() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const scrollXRef = useRef(0);
    const rafRef = useRef<number | null>(null);
    const lastTimeRef = useRef<number | null>(null);
    const SPEED = 40; // px/s

    useEffect(() => {
        const step = (ts: number) => {
            if (lastTimeRef.current === null) lastTimeRef.current = ts;
            const delta = (ts - lastTimeRef.current) / 1000;
            lastTimeRef.current = ts;

            if (!isPaused && trackRef.current) {
                const halfW = trackRef.current.scrollWidth / 2;
                scrollXRef.current = (scrollXRef.current + SPEED * delta) % halfW;
                trackRef.current.style.transform = `translateX(-${scrollXRef.current}px)`;
            }
            rafRef.current = requestAnimationFrame(step);
        };
        rafRef.current = requestAnimationFrame(step);
        return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }, [isPaused]);

    // Touch drag
    const touchStartX = useRef(0);
    const touchStartScroll = useRef(0);
    const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const onTouchStart = (e: React.TouchEvent) => {
        if (resumeTimer.current) clearTimeout(resumeTimer.current);
        setIsPaused(true);
        touchStartX.current = e.touches[0].clientX;
        touchStartScroll.current = scrollXRef.current;
    };
    const onTouchMove = (e: React.TouchEvent) => {
        if (!trackRef.current) return;
        const dx = touchStartX.current - e.touches[0].clientX;
        const halfW = trackRef.current.scrollWidth / 2;
        scrollXRef.current = ((touchStartScroll.current + dx) % halfW + halfW) % halfW;
        trackRef.current.style.transform = `translateX(-${scrollXRef.current}px)`;
    };
    const onTouchEnd = () => {
        resumeTimer.current = setTimeout(() => { lastTimeRef.current = null; setIsPaused(false); }, 3000);
    };

    return (
        <section className="py-16 bg-[#fffaf5] overflow-hidden">
            {/* Header */}
            <div className="max-w-2xl mx-auto px-4 text-center mb-10">
                <p className="text-primary text-xs font-bold tracking-widest uppercase mb-2">
                    What Our Customers Say
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#2c2420] mb-3">
                    Real Reviews, Real Smiles
                </h2>
                <div className="w-16 h-1 bg-primary mx-auto mb-4 rounded-full" />
                {/* Google rating badge */}
                <div className="inline-flex items-center gap-2 bg-white border border-gray-100 shadow-sm rounded-full px-4 py-2">
                    <svg viewBox="0 0 24 24" className="w-4 h-4">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#FBBC04" className="w-3.5 h-3.5">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-sm font-bold text-[#2c2420]">5.0</span>
                    <span className="text-xs text-gray-400">on Google</span>
                </div>
            </div>

            {/* Scrolling card track */}
            <div
                className="relative"
                style={{
                    maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                onTouchCancel={onTouchEnd}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => { lastTimeRef.current = null; setIsPaused(false); }}
            >
                <div
                    ref={trackRef}
                    className="inline-flex gap-4 px-4 pb-4 will-change-transform"
                    style={{ transform: "translateX(0px)" }}
                >
                    {/* Duplicate for seamless loop */}
                    {[...reviews, ...reviews].map((review, idx) => (
                        <ReviewCard
                            key={idx}
                            review={review}
                            colorClass={avatarColors[idx % avatarColors.length]}
                        />
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
                <a
                    href="https://www.google.com/maps/place/Sri+Bakes+at+Chennai+(HOME+MADE+CAKES)/@12.9436159,80.1287959,15z/data=!4m8!3m7!1s0x3a525fdb7354359f:0x2aa6cd37eb455997!8m2!3d12.9436159!4d80.1287959!9m1!1b1!16s%2Fg%2F11j0_gvpct"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                    View all reviews on Google
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
