import Link from "next/link";
import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#1a1512] text-white pt-16 pb-8 border-t border-black/10 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Head Office Info */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-12 w-12 rounded-full overflow-hidden border border-white/20">
                                <img src="/logo.jpeg" alt="Sri Bakes Logo" className="h-full w-full object-cover" />
                            </div>
                            <div>
                                <h3 className="text-2xl tracking-tight text-[#e76f51]" style={{ fontFamily: 'var(--font-logo)' }}>Sri Bakes</h3>
                            </div>
                        </div>

                        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                            <h4 className="text-white font-semibold flex items-center gap-2">
                                Head Office
                            </h4>
                            <p>
                                (Central Kitchen)<br />
                                3, 3rd St, Om Shakthi Nagar, Iswarya Nagar, Nemilichery, Chromepet, Chennai, Tamil Nadu 600044

                            </p>
                            <p>
                                <a href="mailto:info@sribakes.com" className="hover:text-white transition-colors">sribakes.com</a><br />
                                <a href="tel:+919884420725" className="hover:text-white transition-colors">Ph: +91 98844 20725</a>
                            </p>
                        </div>
                    </div>

                    {/* Customer Support */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white border-b border-white/10 pb-2 inline-block">Have a question?</h4>
                        <p className="text-sm text-gray-400 mb-6">
                            Customer Support Team hours are Monday-Saturday, 10 AM - 7 PM IST
                        </p>
                        <Link href="/contact" className="inline-block bg-white text-black px-6 py-2 text-sm font-semibold hover:bg-gray-200 transition-colors">
                            CONTACT US
                        </Link>
                    </div>

                    {/* Policy Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white border-b border-white/10 pb-2 inline-block">Policy</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><Link href="/shipping-policy" className="hover:text-white transition-colors">Shipping Policy</Link></li>
                            <li><Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/cancellation-refund-policy" className="hover:text-white transition-colors">Cancellation & Refund Policy</Link></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white border-b border-white/10 pb-2 inline-block">Connect With Us</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li>
                                <a href="https://www.instagram.com/sri_bakes_at_chennai/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                                    <Instagram className="h-5 w-5" /> Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/share/1TKzWSeH74/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                                    <Facebook className="h-5 w-5" /> Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/919884420725" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                                    <MessageCircle className="h-5 w-5" /> Whatsapp
                                </a>
                            </li>
                            <li>
                                <a href="https://youtube.com/@sribakes?si=mdBQlyb7Tl12K76Z" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                                    <Youtube className="h-5 w-5" /> Youtube
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="md:hidden mb-8 rounded-xl border border-white/10 bg-white/5 p-4 text-sm">
                    <p className="text-gray-200 font-medium mb-3">Quick Order Support</p>
                    <a
                        href="https://wa.me/919884420725"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full rounded-lg bg-[#e76f51] px-4 py-2.5 font-semibold text-white hover:bg-[#d05f42] transition-colors"
                    >
                        WhatsApp: 98844 20725
                    </a>
                </div>


                {/* Top Searches — SEO */}
                <div className="pt-8 mb-8 border-t border-white/10 text-xs text-gray-400 leading-relaxed">
                    <p>
                        <strong className="text-gray-300">Top Searches:</strong> Cake shop in Chennai, Cake shop near me, Order cake online, Cake shop in Madipakkam, Order custom cakes, Cake shop in Navalur, Cake shop in Chromepet, Order Wedding cakes, cakes for girls, Order cakes for boys, cakes for kids, cakes for anniversary, order birthday cake online, Order Pastry Online, Order cakes in Egattur
                    </p>
                </div>


                <div className="pt-6 border-t border-white/10 text-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Sri Bakes. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
