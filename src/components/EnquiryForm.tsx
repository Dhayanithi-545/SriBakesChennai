"use client";

import { useState } from "react";
import { Send, MapPin, Loader2, Navigation } from "lucide-react";

type LocationState =
    | { type: "idle" }
    | { type: "loading" }
    | { type: "gps"; lat: number; lng: number; mapsUrl: string }
    | { type: "manual" };

export default function EnquiryForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        eventDate: "",
        category: "",
        flavour: "",
        weight: "",
        message: "",
        manualLocation: "",
    });

    const [locationState, setLocationState] = useState<LocationState>({ type: "idle" });
    const [gpsError, setGpsError] = useState("");

    const categories = [
        "Baby & Kids Cake",
        "Love & Couple Cake",
        "Mini & Cute Cake",
        "Signature Brownies",
        "Standard Cake",
        "Tier Cake",
        "Wedding Cake",
        "Other Custom Design",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // ── GPS Location ──────────────────────────────────────────────────
    const fetchGpsLocation = () => {
        if (!navigator.geolocation) {
            setGpsError("Geolocation is not supported by your browser.");
            return;
        }
        setGpsError("");
        setLocationState({ type: "loading" });

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude: lat, longitude: lng } = pos.coords;
                const mapsUrl = `https://maps.google.com/?q=${lat},${lng}`;
                setLocationState({ type: "gps", lat, lng, mapsUrl });
            },
            (err) => {
                setLocationState({ type: "manual" });
                if (err.code === err.PERMISSION_DENIED) {
                    setGpsError("Location permission denied. Please enter your address manually.");
                } else {
                    setGpsError("Could not fetch location. Please enter your address manually.");
                }
            },
            { timeout: 10000 }
        );
    };

    const clearLocation = () => {
        setLocationState({ type: "idle" });
        setGpsError("");
        setFormData(prev => ({ ...prev, manualLocation: "" }));
    };

    // ── WhatsApp submit ───────────────────────────────────────────────
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let locationLine = "";
        if (locationState.type === "gps") {
            locationLine = `%0A*Location (GPS):* ${encodeURIComponent(locationState.mapsUrl)}`;
        } else if (locationState.type === "manual" && formData.manualLocation.trim()) {
            locationLine = `%0A*Location (Address):* ${encodeURIComponent(formData.manualLocation.trim())}`;
        }

        const message =
            `*New Cake Enquiry from Website*%0A%0A` +
            `*Name:* ${encodeURIComponent(formData.name)}%0A` +
            `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
            `*Event Date:* ${encodeURIComponent(formData.eventDate)}%0A` +
            `*Category:* ${encodeURIComponent(formData.category)}%0A` +
            `*Preferred Flavour:* ${encodeURIComponent(formData.flavour)}%0A` +
            `*Weight Required:* ${encodeURIComponent(formData.weight)}` +
            locationLine +
            `%0A*Additional Details:* ${encodeURIComponent(formData.message)}`;

        window.open(`https://wa.me/919884420725?text=${message}`, "_blank");
    };

    const inputCls =
        "w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none text-gray-900 bg-white transition-all text-sm";
    const labelCls =
        "block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide";

    return (
        <>
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#2c2420] mb-1.5 tracking-tight">Custom Cake Enquiry</h2>
                <p className="text-gray-500 text-sm">
                    Fill out the details and we&apos;ll send you a personalized quote via WhatsApp.
                </p>
            </div>

            <div className="bg-white border border-gray-100 p-6 md:p-8 shadow-sm rounded-2xl">
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label htmlFor="name" className={labelCls}>Full Name *</label>
                            <input
                                type="text" id="name" name="name" required
                                value={formData.name} onChange={handleChange}
                                className={inputCls} placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className={labelCls}>Phone / WhatsApp *</label>
                            <input
                                type="tel" id="phone" name="phone" required
                                value={formData.phone} onChange={handleChange}
                                className={inputCls} placeholder="+91 XXXXX XXXXX"
                            />
                        </div>
                    </div>

                    {/* Date + Category */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label htmlFor="eventDate" className={labelCls}>Event Date *</label>
                            <input
                                type="date" id="eventDate" name="eventDate" required
                                value={formData.eventDate} onChange={handleChange}
                                className={inputCls}
                            />
                        </div>
                        <div>
                            <label htmlFor="category" className={labelCls}>Cake Category *</label>
                            <select
                                id="category" name="category" required
                                value={formData.category} onChange={handleChange}
                                className={inputCls}
                            >
                                <option value="" disabled>Select a category</option>
                                {categories.map((cat, idx) => (
                                    <option key={idx} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Flavour + Weight */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label htmlFor="flavour" className={labelCls}>Preferred Flavour</label>
                            <input
                                type="text" id="flavour" name="flavour"
                                value={formData.flavour} onChange={handleChange}
                                className={inputCls} placeholder="e.g. Chocolate Truffle"
                            />
                        </div>
                        <div>
                            <label htmlFor="weight" className={labelCls}>Weight Required</label>
                            <input
                                type="text" id="weight" name="weight"
                                value={formData.weight} onChange={handleChange}
                                className={inputCls} placeholder="e.g. 1.5 Kg"
                            />
                        </div>
                    </div>

                    {/* Design Details */}
                    <div>
                        <label htmlFor="message" className={labelCls}>Design Details / Special Instructions</label>
                        <textarea
                            id="message" name="message" rows={3}
                            value={formData.message} onChange={handleChange}
                            className={inputCls}
                            placeholder="Describe your dream cake or any requirements..."
                        />
                    </div>

                    {/* ── Location Section ── */}
                    <div className="space-y-3">
                        <label className={labelCls + " flex items-center gap-1.5"}>
                            <MapPin className="w-3.5 h-3.5" />
                            Delivery / Pickup Location
                        </label>

                        {/* Not yet chosen */}
                        {locationState.type === "idle" && (
                            <div className="flex flex-col sm:flex-row gap-3">
                                {/* GPS button */}
                                <button
                                    type="button"
                                    onClick={fetchGpsLocation}
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-primary/30 text-primary font-semibold text-sm hover:bg-primary/5 active:scale-95 transition-all"
                                >
                                    <Navigation className="w-4 h-4" />
                                    Use My Live Location
                                </button>

                                {/* Manual button */}
                                <button
                                    type="button"
                                    onClick={() => setLocationState({ type: "manual" })}
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 active:scale-95 transition-all"
                                >
                                    <MapPin className="w-4 h-4" />
                                    Enter Address Manually
                                </button>
                            </div>
                        )}

                        {/* Fetching GPS */}
                        {locationState.type === "loading" && (
                            <div className="flex items-center gap-3 px-4 py-3 bg-primary/5 rounded-xl border border-primary/20 text-primary text-sm font-medium">
                                <Loader2 className="w-4 h-4 animate-spin flex-shrink-0" />
                                Fetching your location…
                            </div>
                        )}

                        {/* GPS success */}
                        {locationState.type === "gps" && (
                            <div className="px-4 py-3 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                                <Navigation className="w-4 h-4 text-green-600 flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-green-700">Live location captured ✓</p>
                                    <a
                                        href={locationState.mapsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-green-600 underline truncate block"
                                    >
                                        {locationState.mapsUrl}
                                    </a>
                                </div>
                                <button
                                    type="button"
                                    onClick={clearLocation}
                                    className="text-xs text-gray-400 hover:text-gray-600 flex-shrink-0"
                                >
                                    Change
                                </button>
                            </div>
                        )}

                        {/* Manual address input */}
                        {locationState.type === "manual" && (
                            <div className="space-y-2">
                                <input
                                    type="text"
                                    name="manualLocation"
                                    value={formData.manualLocation}
                                    onChange={handleChange}
                                    className={inputCls}
                                    placeholder="e.g. 12, Anna Nagar, Chennai 600040"
                                    autoFocus
                                />
                                <div className="flex justify-between items-center">
                                    <button
                                        type="button"
                                        onClick={fetchGpsLocation}
                                        className="text-xs text-primary font-medium flex items-center gap-1 hover:underline"
                                    >
                                        <Navigation className="w-3 h-3" />
                                        Use live location instead
                                    </button>
                                    <button
                                        type="button"
                                        onClick={clearLocation}
                                        className="text-xs text-gray-400 hover:text-gray-600"
                                    >
                                        Clear
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* GPS error */}
                        {gpsError && (
                            <p className="text-xs text-red-500 flex items-center gap-1.5">
                                <span>⚠</span> {gpsError}
                            </p>
                        )}

                        <p className="text-xs text-gray-400">
                            Optional — helps us estimate delivery distance and charges.
                        </p>
                    </div>

                    {/* Submit */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-xl font-bold tracking-wide hover:bg-[#20bd5a] active:scale-95 transition-all text-base shadow-md"
                        >
                            Send via WhatsApp
                            <Send className="w-4 h-4" />
                        </button>
                        <p className="mt-3 text-center text-xs text-gray-400">
                            You&apos;ll be redirected to WhatsApp with your order details pre-filled.
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
}
