"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function EnquiryForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        eventDate: "",
        category: "",
        flavour: "",
        weight: "",
        message: ""
    });

    const categories = [
        "Baby & Kids Cake",
        "Love & Couple Cake",
        "Mini & Cute Cake",
        "Signature Brownies",
        "Standard Cake",
        "Tier Cake",
        "Wedding Cake",
        "Other Custom Design"
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Format message for WhatsApp
        const message = `*New Cake Enquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Event Date:* ${formData.eventDate}%0A*Category:* ${formData.category}%0A*Preferred Flavour:* ${formData.flavour}%0A*Weight Required:* ${formData.weight}%0A*Additional Details:* ${formData.message}`;

        // Redirect to WhatsApp
        window.open(`https://wa.me/919884420725?text=${message}`, "_blank");
    };

    return (
        <section className="py-24 bg-[#fcfcfc] border-t border-gray-100">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Custom Cake Enquiry</h2>
                    <p className="text-gray-600">
                        Fill out the details below and we'll get back to you with a personalized quote via WhatsApp.
                    </p>
                </div>

                <div className="bg-white border border-gray-200 p-8 md:p-10 shadow-sm rounded-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#e76f51] focus:border-[#e76f51] outline-none text-black bg-white transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#e76f51] focus:border-[#e76f51] outline-none text-black bg-white transition-colors"
                                    placeholder="+91 XXXXX XXXXX"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-700 mb-1">Event Date *</label>
                                <input
                                    type="date"
                                    id="eventDate"
                                    name="eventDate"
                                    required
                                    value={formData.eventDate}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#e76f51] focus:border-[#e76f51] outline-none text-black bg-white transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-1">Cake Category *</label>
                                <select
                                    id="category"
                                    name="category"
                                    required
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#e76f51] focus:border-[#e76f51] outline-none text-black bg-white transition-colors"
                                >
                                    <option value="" disabled>Select a category</option>
                                    {categories.map((cat, idx) => (
                                        <option key={idx} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="flavour" className="block text-sm font-semibold text-gray-700 mb-1">Preferred Flavour</label>
                                <input
                                    type="text"
                                    id="flavour"
                                    name="flavour"
                                    value={formData.flavour}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#e76f51] focus:border-[#e76f51] outline-none text-black bg-white transition-colors"
                                    placeholder="e.g., Chocolate Truffle"
                                />
                            </div>
                            <div>
                                <label htmlFor="weight" className="block text-sm font-semibold text-gray-700 mb-1">Weight Required</label>
                                <input
                                    type="text"
                                    id="weight"
                                    name="weight"
                                    value={formData.weight}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#e76f51] focus:border-[#e76f51] outline-none text-black bg-white transition-colors"
                                    placeholder="e.g., 1.5 Kg"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Design Details / Special Instructions</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#e76f51] focus:border-[#e76f51] outline-none text-black bg-white transition-colors resize-vertical"
                                placeholder="Describe your dream cake design or any specific requirements..."
                            ></textarea>
                        </div>

                        <div className="pt-6">
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#25D366] text-white rounded-sm font-bold tracking-wide hover:bg-[#20bd5a] transition-colors"
                            >
                                Send via WhatsApp
                                <Send className="w-5 h-5" />
                            </button>
                            <p className="mt-3 text-center text-xs text-gray-500">
                                You will be redirected to WhatsApp with your pre-filled details.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
