import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Phone } from "lucide-react";

type PolicyPageShellProps = {
  title: string;
  children: ReactNode;
};

export default function PolicyPageShell({ title, children }: PolicyPageShellProps) {
  return (
    <section
      className="py-6 sm:py-10 relative"
      style={{ backgroundImage: "url('/cake-bg/header-bg.jpg')", backgroundSize: "cover", backgroundPosition: "top left" }}
    >
      <div className="absolute inset-0 bg-[#fffaf5]/88" />
      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 sm:px-6">
        <Link
          href="/"
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-[#c65f47] hover:text-[#a64e39] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <div className="rounded-2xl border border-[#f1d8cf] bg-white p-4 shadow-sm sm:p-6">
          <h1 className="text-2xl font-bold text-[#2c2420] sm:text-3xl">{title}</h1>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-[#4b3c35] sm:mt-6">
            {children}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <a
            href="tel:+919884420725"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#e76f51]/30 bg-white px-4 py-3 text-sm font-semibold text-[#c65f47]"
          >
            <Phone className="h-4 w-4" /> Call: 98844 20725
          </a>
          <a
            href="https://wa.me/919884420725"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e76f51] px-4 py-3 text-sm font-semibold text-white"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Order
          </a>
        </div>
      </div>
    </section>
  );
}
