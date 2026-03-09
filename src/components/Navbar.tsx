"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden shrink-0">
                                <img
                                    src="/logo.jpeg"
                                    alt="Sri Bakes Logo"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <span className="text-3xl tracking-tight text-[#c65f47]" style={{ fontFamily: 'var(--font-logo)' }}>Sri Bakes</span>
                        </Link>
                    </div>

                    <div className="hidden sm:flex sm:space-x-8 items-center">
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-[#c65f47] px-3 py-2 text-sm font-medium transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/gallery"
                            className="text-gray-700 hover:text-[#c65f47] px-3 py-2 text-sm font-medium transition-colors"
                        >
                            Gallery
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-700 hover:text-[#c65f47] px-3 py-2 text-sm font-medium transition-colors"
                        >
                            Contact
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-[#2c2420] hover:bg-black text-white px-6 py-2.5 rounded-sm text-sm font-medium transition-colors"
                        >
                            Order Now
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center sm:hidden">
                        <Link
                            href="/contact"
                            className="bg-[#2c2420] text-white px-4 py-2 rounded-sm text-sm font-medium mr-4"
                        >
                            Order
                        </Link>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMobileMenuOpen ? (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="sm:hidden bg-white border-b border-gray-100" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link
                            href="/"
                            className="text-gray-700 hover:bg-gray-50 hover:text-[#c65f47] block px-3 py-3 rounded-md text-base font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/gallery"
                            className="text-gray-700 hover:bg-gray-50 hover:text-[#c65f47] block px-3 py-3 rounded-md text-base font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Gallery
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-700 hover:bg-gray-50 hover:text-[#c65f47] block px-3 py-3 rounded-md text-base font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
