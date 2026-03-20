"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Add shadow when scrolled
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close menu on route change
    useEffect(() => { setOpen(false); }, [pathname]);

    return (
        <>
            <nav
                className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-shadow duration-300
                    ${scrolled ? "shadow-md border-b-0" : "border-b border-gray-100"}`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
                            <div className="h-9 w-9 md:h-11 md:w-11 rounded-full overflow-hidden ring-2 ring-primary/20">
                                <img src="/logo.jpeg" alt="Sri Bakes Logo" className="h-full w-full object-cover" />
                            </div>
                            <span
                                className="text-4xl md:text-4xl font-black tracking-tight text-[#c65f47]"
                                style={{ fontFamily: "var(--font-logo)" }}
                            >
                                Sri Bakes
                            </span>
                        </Link>

                        {/* Desktop nav links */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors
                                            ${isActive
                                                ? "text-primary bg-primary/8"
                                                : "text-gray-600 hover:text-primary hover:bg-gray-50"
                                            }`}
                                    >
                                        {link.label}
                                        {isActive && (
                                            <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full" />
                                        )}
                                    </Link>
                                );
                            })}

                            {/* CTA */}
                            <Link
                                href="/contact"
                                className="ml-3 inline-flex items-center gap-2 bg-[#e76f51] hover:bg-[#d05f42] text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors duration-150"
                            >
                                Order Now
                            </Link>
                        </div>

                        {/* Mobile: Order pill + hamburger */}
                        <div className="flex md:hidden items-center gap-2">
                            <Link
                                href="/contact"
                                className="bg-[#e76f51] hover:bg-[#d05f42] text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-150"
                            >
                                Order
                            </Link>
                            <button
                                onClick={() => setOpen(!open)}
                                aria-label="Toggle menu"
                                aria-expanded={open}
                                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile slide-down menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
                        ${open ? "max-h-64 border-t border-gray-100" : "max-h-0"}`}
                >
                    <div className="bg-white px-4 py-3 space-y-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className={`flex items-center px-4 py-3.5 rounded-xl text-base font-medium transition-colors
                                        ${isActive
                                            ? "bg-primary/8 text-primary font-semibold"
                                            : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                                        }`}
                                >
                                    {isActive && (
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                                    )}
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {/* Mobile backdrop */}
            {open && (
                <div
                    className="fixed inset-0 z-40 bg-black/20 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}
        </>
    );
}
