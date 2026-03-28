"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => { setOpen(false); }, [pathname]);

    // Prevent body scroll when drawer is open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    return (
        <>
            <nav
                className={`sticky top-0 z-50 w-full transition-all duration-300`}
                style={{
                    background: "#fdf6ed",
                    borderBottom: scrolled ? "none" : "1px solid #e8d5bc",
                    boxShadow: scrolled ? "0 2px 20px rgba(100,60,20,0.10)" : "none",
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-[60px] md:h-[68px]">

                        {/* ── Logo ── */}
                        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
                            <div className="h-8 w-8 md:h-10 md:w-10 overflow-hidden rounded-full">
                                <img src="/logo.png" alt="Sri Bakes Logo" className="h-full w-full object-cover" />
                            </div>
                            <span
                                className="text-[1.65rem] md:text-[1.85rem] font-black tracking-tight leading-none"
                                style={{ fontFamily: "var(--font-logo)", color: "#c65f47" }}
                            >
                                Sri Bakes
                            </span>
                        </Link>

                        {/* ── Desktop nav ── */}
                        <div className="hidden md:flex items-center gap-0">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`relative px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors duration-150
                                            ${isActive
                                                ? "text-[#c65f47]"
                                                : "text-[#7a6452] hover:text-[#2c1a0e]"
                                            }`}
                                    >
                                        {link.label}
                                        {isActive && (
                                            <span className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "#c65f47" }} />
                                        )}
                                    </Link>
                                );
                            })}

                            <Link
                                href="/contact"
                                className="ml-5 inline-flex items-center gap-2 text-white px-6 py-2.5 text-[12px] font-bold uppercase tracking-[0.14em] transition-colors duration-150"
                                style={{ background: "#2c1a0e" }}
                                onMouseEnter={e => (e.currentTarget.style.background = "#1a0e06")}
                                onMouseLeave={e => (e.currentTarget.style.background = "#2c1a0e")}
                            >
                                Book Order
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>

                        {/* ── Mobile right section ── */}
                        <div className="flex md:hidden items-center gap-2">
                            <Link
                                href="/contact"
                                className="text-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors duration-150"
                                style={{ background: "#c65f47" }}
                            >
                                Book Now
                            </Link>

                            {/* Hamburger */}
                            <button
                                onClick={() => setOpen(true)}
                                aria-label="Open menu"
                                aria-expanded={open}
                                className="flex flex-col justify-center items-center gap-[5px] w-10 h-10 transition-colors"
                                style={{ color: "#4a3425" }}
                            >
                                <span className="w-5 h-[1.5px] block" style={{ background: "#4a3425" }} />
                                <span className="w-3.5 h-[1.5px] block self-end" style={{ background: "#4a3425" }} />
                                <span className="w-5 h-[1.5px] block" style={{ background: "#4a3425" }} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* ── Mobile drawer overlay ── */}
            <div
                className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300
                    ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                style={{ background: "rgba(15,10,6,0.65)" }}
                onClick={() => setOpen(false)}
            />

            {/* ── Mobile right-side drawer ── */}
            <aside
                className={`fixed top-0 right-0 z-[70] h-full w-[78vw] max-w-[320px] md:hidden
                    flex flex-col
                    transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
                    ${open ? "translate-x-0" : "translate-x-full"}`}
                style={{ background: "#fdf6ed" }}
            >
                {/* Drawer header */}
                <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: "1px solid #e8d5bc" }}>
                    <div className="flex items-center gap-2.5">
                        <div className="h-8 w-8 overflow-hidden rounded-full">
                            <img src="/logo.png" alt="Sri Bakes Logo" className="h-full w-full object-cover" />
                        </div>
                        <span
                            className="text-2xl font-black tracking-tight leading-none"
                            style={{ fontFamily: "var(--font-logo)", color: "#c65f47" }}
                        >
                            Sri Bakes
                        </span>
                    </div>
                    <button
                        onClick={() => setOpen(false)}
                        aria-label="Close menu"
                        className="w-8 h-8 flex items-center justify-center transition-colors"
                        style={{ color: "#7a6452" }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="square" strokeLinejoin="miter" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Section label */}
                <p className="px-6 pt-5 pb-1 text-[10px] uppercase tracking-[0.22em] font-semibold" style={{ color: "#b89e88" }}>
                    Navigation
                </p>

                {/* Nav links */}
                <nav className="flex-1 flex flex-col px-4 pt-2 gap-0.5">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="flex items-center justify-between px-4 py-4 text-[13px] font-bold uppercase tracking-[0.14em] transition-colors duration-150 border-l-2"
                                style={{
                                    borderLeftColor: isActive ? "#c65f47" : "transparent",
                                    color: isActive ? "#c65f47" : "#5a4030",
                                    background: isActive ? "rgba(198,95,71,0.07)" : "transparent",
                                }}
                            >
                                {link.label}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    className="w-3.5 h-3.5"
                                    style={{ opacity: isActive ? 0.7 : 0.25 }}>
                                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        );
                    })}
                </nav>

                {/* CTA at bottom */}
                <div className="px-4 pb-8 pt-4" style={{ borderTop: "1px solid #e8d5bc" }}>
                    <p className="px-2 pb-3 text-[10px] uppercase tracking-[0.22em] font-semibold" style={{ color: "#b89e88" }}>
                        Ready to order?
                    </p>
                    <Link
                        href="/contact"
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between w-full text-white px-5 py-4 text-[12px] font-bold uppercase tracking-[0.14em] transition-colors duration-150"
                        style={{ background: "#c65f47" }}
                        onMouseEnter={e => (e.currentTarget.style.background = "#a84f3b")}
                        onMouseLeave={e => (e.currentTarget.style.background = "#c65f47")}
                    >
                        Book a Custom Order
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                        </svg>
                    </Link>
                    <a
                        href="https://wa.me/919884420725"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between w-full mt-2 px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors duration-150"
                        style={{ border: "1.5px solid #e8d5bc", color: "#7a6452" }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = "#c65f47"; e.currentTarget.style.color = "#c65f47"; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8d5bc"; e.currentTarget.style.color = "#7a6452"; }}
                    >
                        Chat on WhatsApp
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" style={{ color: "#25D366" }}>
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
                        </svg>
                    </a>
                </div>
            </aside>
        </>
    );
}
