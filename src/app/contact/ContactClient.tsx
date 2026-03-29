"use client";

import EnquiryForm from "@/components/EnquiryForm";
import {
    Phone,
    Instagram,
    Clock,
    MapPin,
    CheckCircle2,
    ChevronRight,
} from "lucide-react";

const steps = [
    { num: 1, title: "Browse Gallery", desc: "Explore our designs or share your own idea" },
    { num: 2, title: "Reach Out", desc: "Message us on WhatsApp or fill the form below" },
    { num: 3, title: "Confirm Details", desc: "Finalise flavour, weight & pricing together" },
    { num: 4, title: "Pay Advance", desc: "Secure your slot with a small advance" },
    { num: 5, title: "Fresh Bake", desc: "We bake your cake fresh before delivery" },
    { num: 6, title: "Pickup / Delivery", desc: "Collect it or opt for our safe delivery" },
];

const contactItems = [
    {
        icon: <Phone className="w-5 h-5" />,
        label: "Phone & WhatsApp",
        value: "+91 98844 20725",
        href: "https://wa.me/919884420725",
        highlight: true,
    },
    {
        icon: <Instagram className="w-5 h-5" />,
        label: "Instagram",
        value: "@sri_bakes_at_chennai",
        href: "https://www.instagram.com/sri_bakes_at_chennai",
        highlight: false,
    },
    {
        icon: <Clock className="w-5 h-5" />,
        label: "Business Hours",
        value: "Mon – Sun · 9 AM to 9 PM",
        href: null,
        highlight: false,
    },
    {
        icon: <MapPin className="w-5 h-5" />,
        label: "Location",
        value: "Chromepet, Chennai, Tamil Nadu 600044",
        href: null,
        highlight: false,
    },
];

export default function ContactClient() {
    return (
        <div
            className="min-h-screen relative"
            style={{ backgroundImage: "url('/cake-bg/story-bg4.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
        >
            <div className="absolute inset-0 bg-[#fffaf5]/88" />

            {/* ── Hero Banner ── */}
            <div
                className="text-white pt-16 pb-12 px-4 text-center relative"
                style={{ backgroundImage: "url('/cake-bg/header-bg2.jpg')", backgroundSize: "cover", backgroundPosition: "top left" }}
            >
                <div className="absolute inset-0 bg-[#2c2420]/80" />
                <div className="relative z-10">
                <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
                    Sri Bakes · Chennai
                </p>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
                    Order Your Dream Cake
                </h1>
                {/* <p className="text-white/70 text-lg max-w-xl mx-auto">
                    Handcrafted, fresh-baked custom cakes for every occasion.
                    Reach us on WhatsApp or send an enquiry below.
                </p> */}

                {/* Quick WhatsApp CTA
                <a
                    href="https://wa.me/919884420725"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-3 bg-[#25D366] text-white px-7 py-3.5 rounded-full font-bold text-base shadow-lg hover:bg-[#1ebe5d] active:scale-95 transition-all"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
                    </svg>
                    Chat on WhatsApp
                </a> */}
                </div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto px-3 py-12 space-y-14">

                {/* ── Section 2: Enquiry Form ── */}
                <div>
                    <div className="flex items-center gap-1 mb-7">
                        {/* <h2 className="text-xl font-bold text-[#2c2420] tracking-wide">Send an Enquiry</h2> */}
                    </div>
                    <EnquiryForm />
                </div>

                {/* ── Section 1: Order Process ── */}
                <div>
                    <div className="flex items-center gap-3 mb-7">
                        <div className="w-1 h-6 bg-primary rounded-full" />
                        <h2 className="text-xl font-bold text-[#2c2420] tracking-wide">How to Order</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {steps.map((step) => (
                            <div
                                key={step.num}
                                className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm"
                            >
                                <div className="flex-shrink-0 w-9 h-9 bg-primary/10 text-primary font-bold rounded-full flex items-center justify-center text-sm">
                                    {step.num}
                                </div>
                                <div>
                                    <p className="font-semibold text-[#2c2420] text-sm">{step.title}</p>
                                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                

                {/* ── Section 3: Contact Details ── */}
                <div>
                    <div className="flex items-center gap-3 mb-7">
                        <div className="w-1 h-6 bg-primary rounded-full" />
                        <h2 className="text-xl font-bold text-[#2c2420] tracking-wide">Contact Details</h2>
                    </div>

                    <div className="space-y-3">
                        {contactItems.map((item) => (
                            <div
                                key={item.label}
                                className={`flex items-center gap-4 bg-white border rounded-2xl px-5 py-4 shadow-sm
                                    ${item.highlight ? "border-primary/30" : "border-gray-100"}`}
                            >
                                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
                                    ${item.highlight ? "bg-[#25D366] text-white" : "bg-primary/10 text-primary"}`}>
                                    {item.icon}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{item.label}</p>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-semibold text-[#2c2420] hover:text-primary transition-colors truncate block"
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="text-sm font-semibold text-[#2c2420]">{item.value}</p>
                                    )}
                                </div>

                                {item.href && (
                                    <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Trust Bar ── */}
                <div className="bg-[#2c2420] rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-white mb-4">
                    <div className="flex flex-col sm:flex-row gap-4 items-center text-center sm:text-left">
                        {["100% Custom Made", "Fresh Daily Bake", "On-Time Delivery"].map((t) => (
                            <div key={t} className="flex items-center gap-2 text-sm font-medium text-white/90">
                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                {t}
                            </div>
                        ))}
                    </div>
                    <a
                        href="https://wa.me/919884420725"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-white px-5 py-2.5 font-bold uppercase tracking-[0.14em] text-[12px] hover:bg-primary/90 transition flex-shrink-0"
                    >
                        Order Now
                    </a>
                </div>

            </div>
        </div>
    );
}
