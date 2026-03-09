export default function About() {
    return (
        <section className="py-24 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Baked with Love in Chennai</h2>

                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        <p>
                            Welcome to Sri Bakes, where every slice tells a story of passion, quality, and creativity.
                            As a dedicated home bakery in Chromepet, Chennai, we specialize in bringing your sweetest dreams to life.
                        </p>
                        <p>
                            We believe that a cake should not only look stunning but taste absolutely divine. That's why
                            all our cakes are 100% freshly baked to order using premium ingredients. From elegant wedding
                            cakes to cute custom designs for kids, we cater to every special occasion.
                        </p>
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-8 bg-white rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
                        <div className="text-4xl mb-6">🎂</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">100% Fresh</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">Baked completely from scratch upon receiving your order.</p>
                    </div>
                    <div className="p-8 bg-white rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
                        <div className="text-4xl mb-6">✨</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Custom Designs</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">Tailor-made to perfectly match your event's specific theme and vibe.</p>
                    </div>
                    <div className="p-8 bg-white rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center sm:col-span-2 lg:col-span-1">
                        <div className="text-4xl mb-6">🏡</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Home Baked</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">Made with strict hygiene, care, and love directly from our home kitchen.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
