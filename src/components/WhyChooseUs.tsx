import { Cake, Paintbrush, Clock, Leaf, Smartphone } from "lucide-react";

export default function WhyChooseUs() {
    const reasons = [
        {
            title: "Freshly Baked to Order",
            description: "We never freeze our creations. Every order is baked from scratch right before delivery.",
            icon: <Cake className="w-8 h-8 text-[#e76f51]" />,
        },
        {
            title: "Custom Designs",
            description: "Your imagination is our blueprint. We bring your unique cake visions to life.",
            icon: <Paintbrush className="w-8 h-8 text-[#e76f51]" />,
        },
        {
            title: "Premium Ingredients",
            description: "We use only the best ingredients to make our cakes.",
            icon: <Leaf className="w-8 h-8 text-[#e76f51]" />,
        },
        {
            title: "On-Time Delivery",
            description: "We understand that timing is everything for your special celebration.",
            icon: <Clock className="w-8 h-8 text-[#e76f51]" />,
        },
    ];

    return (
        <section
            className="py-24 border-b border-gray-100 relative"
            style={{ backgroundImage: "url('/cake-bg/steps-bg2.png')", backgroundSize: "cover", backgroundPosition: "bottom right" }}
        >
            <div className="absolute inset-0 bg-[#fdf6ed]/82" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#2c2420] tracking-tight mb-3">Why Choose Sri Bakes?</h2>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-8 border border-[#e8d5bc] rounded-sm shadow-sm hover:shadow-md transition-shadow bg-[#fdf6ed]"
                        >
                            <div className="mb-6 p-4 bg-gray-50 rounded-full border border-gray-100">
                                {reason.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{reason.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <a
                        href="https://wa.me/919884420725"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-3.5 font-bold uppercase tracking-[0.14em] text-[12px] hover:bg-[#20bd5a] transition-colors"
                    >
                        <Smartphone className="w-5 h-5" />
                        Order via WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
