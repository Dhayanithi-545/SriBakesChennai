import Link from "next/link";

const factors = [
    { num: "01", title: "Weight", desc: "Minimum orders generally start at around 1 Kg. More weight means more cake!" },
    { num: "02", title: "Flavour", desc: "Premium flavours cost slightly more than standard ones." },
    { num: "03", title: "Complexity", desc: "Intricate details, custom fondant, and toppers alter pricing." },
    { num: "04", title: "Delivery", desc: "Delivery charges apply based on your location in Chennai." },
];

export default function PricingInfo() {
    return (
        <section className="py-20 bg-[#f5f0eb] border-b border-[#e5ddd5]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b-2 border-[#2c2420]">
                    <div>
                        <p className="text-xs font-bold tracking-widest uppercase text-[#e76f51] mb-2">Transparent Pricing</p>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2c2420] leading-tight">
                            What Affects Your Cake Price?
                        </h2>
                    </div>
                    <p className="text-sm text-[#2c2420]/60 max-w-xs leading-relaxed">
                        Every cake is entirely custom-made — no fixed price list. We tailor the cost to your order.
                    </p>
                </div>

                {/* Factor cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
                    {factors.map((f) => (
                        <div
                            key={f.num}
                            className="bg-white border border-[#e5ddd5] border-l-4 border-l-[#e76f51] p-6 rounded-sm"
                        >
                            <span className="block text-3xl font-black text-[#e76f51]/20 mb-3 leading-none">{f.num}</span>
                            <h3 className="text-base font-bold text-[#2c2420] mb-2">{f.title}</h3>
                            <p className="text-sm text-[#2c2420]/60 leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>

                {/* CTA row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#e5ddd5]">
                    <p className="text-[#2c2420] font-medium text-sm">
                        📞 Contact us to receive an exact quote for your dream cake.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center bg-[#e76f51] hover:bg-[#d05f42] text-white px-8 py-3.5 rounded-md text-sm font-semibold transition-colors duration-150"
                    >
                        Get a Quote
                    </Link>
                </div>
            </div>
        </section>
    );
}
