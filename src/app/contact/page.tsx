import EnquiryForm from "@/components/EnquiryForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Sri Bakes",
    description: "Get in touch with us to order customized homemade cakes in Chennai. Easy WhatsApp booking available.",
};

export default function ContactPage() {
    const steps = [
        { num: 1, title: "Choose Design", desc: "Pick from gallery or share your own idea" },
        { num: 2, title: "Contact Us", desc: "Via WhatsApp or our enquiry form below" },
        { num: 3, title: "Confirm Details", desc: "Finalize flavour, weight & total pricing" },
        { num: 4, title: "Pay Advance", desc: "Secure your order with an advance payment" },
        { num: 5, title: "Fresh Prep", desc: "We bake your cake fresh before delivery" },
        { num: 6, title: "Pickup/Delivery", desc: "Collect it or opt for secure delivery" },
    ];

    return (
        <div className="min-h-screen bg-light-cream pt-10 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-dark-brown mb-4">Order & Contact</h1>
                    <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-dark-brown/70 max-w-2xl mx-auto">
                        We'd love to bake for you! Here's how our ordering process works.
                    </p>
                </div>

                {/* Order Process Section */}
                <div className="mb-20">
                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 or gap-6">
                        {steps.map((step) => (
                            <div key={step.num} className="bg-white p-6 rounded-2xl shadow-sm border border-pastel-pink/20 text-center hover:shadow-md transition-shadow relative">
                                <div className="w-10 h-10 bg-primary-light text-primary font-bold rounded-full flex items-center justify-center absolute -top-4 left-1/2 transform -translate-x-1/2 border-4 border-light-cream">
                                    {step.num}
                                </div>
                                <h3 className="mt-4 font-bold text-dark-brown mb-2">{step.title}</h3>
                                <p className="text-sm text-dark-brown/70">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Business Details */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-pastel-pink/20">
                            <h2 className="text-2xl font-bold text-dark-brown mb-6">Business Details</h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <span className="text-2xl mr-4">📍</span>
                                    <div>
                                        <h3 className="font-semibold text-dark-brown text-lg">Address</h3>
                                        <p className="text-dark-brown/70 mt-1">
                                            3, 3rd St, Om Shakthi Nagar,<br />
                                            Iswarya Nagar, Nemilichery,<br />
                                            Chromepet, Chennai,<br />
                                            Tamil Nadu 600044
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <span className="text-2xl mr-4">📞</span>
                                    <div>
                                        <h3 className="font-semibold text-dark-brown text-lg">Phone & WhatsApp</h3>
                                        <a href="https://wa.me/919884420725" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent mt-1 inline-block transition-colors">
                                            +91 98844 20725
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <span className="text-2xl mr-4">📱</span>
                                    <div>
                                        <h3 className="font-semibold text-dark-brown text-lg">Instagram</h3>
                                        <a href="https://www.instagram.com/sri_bakes_at_chennai" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent mt-1 inline-block transition-colors break-all">
                                            @sri_bakes_at_chennai
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <span className="text-2xl mr-4">🕒</span>
                                    <div>
                                        <h3 className="font-semibold text-dark-brown text-lg">Business Hours</h3>
                                        <p className="text-dark-brown/70 mt-1">
                                            Monday - Sunday<br />
                                            9:00 AM - 9:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-2 rounded-3xl shadow-sm border border-pastel-pink/20 h-[300px] overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15553.3361845455!2d80.12879595!3d12.94361595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525facf798e4f5%3A0xa1ea142345fbac!2sNemilichery%2C%20Chromepet%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '1.25rem' }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Enquiry Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl shadow-sm border border-pastel-pink/20 overflow-hidden h-full">
                            {/* Resetting some padding defaults since EnquiryForm component handles its own layout, we just render it here */}
                            <EnquiryForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
