import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function PricingInfo() {
    return (
        <section className="py-24 bg-gray-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-sm shadow-sm border border-gray-100">
                    <div className="p-8 md:p-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Pricing Information</h2>

                        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Every cake is a unique piece of edible art! Because all our cakes are entirely custom-made,
                            we don't have a fixed price list.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left max-w-5xl mx-auto mb-16">
                            <div className="flex flex-col items-start p-6 bg-gray-50 border border-gray-100 rounded-sm">
                                <CheckCircle2 className="w-8 h-8 text-[#e76f51] mb-4" />
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Weight</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">Minimum cake orders generally start at around 1 Kg.</p>
                            </div>
                            <div className="flex flex-col items-start p-6 bg-gray-50 border border-gray-100 rounded-sm">
                                <CheckCircle2 className="w-8 h-8 text-[#e76f51] mb-4" />
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Flavour</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">Premium flavours cost slightly more than standard ones.</p>
                            </div>
                            <div className="flex flex-col items-start p-6 bg-gray-50 border border-gray-100 rounded-sm">
                                <CheckCircle2 className="w-8 h-8 text-[#e76f51] mb-4" />
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Complexity</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">Intricate details, custom fondant, and toppers alter pricing.</p>
                            </div>
                            <div className="flex flex-col items-start p-6 bg-gray-50 border border-gray-100 rounded-sm">
                                <CheckCircle2 className="w-8 h-8 text-[#e76f51] mb-4" />
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Delivery</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">Delivery charges apply based on your location in Chennai.</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <p className="text-gray-800 font-medium mb-6">
                                Contact us to receive an exact quote for your dream cake.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center bg-[#2c2420] hover:bg-black text-white px-8 py-3.5 rounded-sm text-sm font-semibold transition-colors shadow-sm"
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
