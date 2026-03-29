import PolicyPageShell from "@/components/PolicyPageShell";
import {
  Truck,
  MapPin,
  Cake,
  Clock,
  CalendarDays,
  AlertTriangle,
  Phone,
} from "lucide-react";

export default function ShippingPolicyPage() {
  return (
    <PolicyPageShell title="Shipping Policy – SRI BAKE'S">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 text-[#3a2f2a]">

        {/* Intro */}
        <div className="flex items-start gap-3 bg-[#fdf3ef] border border-[#f1e5df] rounded-xl p-4 sm:p-5">
          <Truck className="w-6 h-6 text-[#c65f47] mt-1" />
          <p className="text-sm sm:text-base leading-relaxed">
            At <span className="font-semibold text-[#2c2420]">SRI BAKE'S</span>, every cake is freshly baked and delivered with utmost care to maintain quality and taste.
          </p>
        </div>

        {/* Delivery Locations */}
        <div className="bg-white border border-[#f1e5df] rounded-2xl shadow-sm p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#c65f47]" />
            <h2 className="text-lg sm:text-xl font-semibold text-[#2c2420]">
              Delivery Locations
            </h2>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#4a3f3a]">
            <li>We provide delivery across Chennai.</li>
            <li>Delivery charges may vary based on location.</li>
          </ul>
        </div>

        {/* Outstation Orders */}
        <div className="bg-white border border-[#f1e5df] rounded-2xl shadow-sm p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Cake className="w-5 h-5 text-[#c65f47]" />
            <h2 className="text-lg sm:text-xl font-semibold text-[#2c2420]">
              Outstation Orders (Outside Chennai)
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#4a3f3a]">
            For deliveries outside Chennai, we only accept Chocolate Ganache Frosting Cakes.
          </p>

          <p className="text-sm sm:text-base text-[#4a3f3a]">
            This ensures better stability and quality during transit:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#4a3f3a]">
            <li>More stable and travel-safe in Chennai's weather conditions</li>
            <li>Maintains shape, texture, and freshness</li>
            <li>Delivers consistent taste after transit</li>
          </ul>
        </div>

        {/* Delivery Time */}
        <div className="bg-white border border-[#f1e5df] rounded-2xl shadow-sm p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#c65f47]" />
            <h2 className="text-lg sm:text-xl font-semibold text-[#2c2420]">
              Delivery Time
            </h2>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#4a3f3a]">
            <li>Orders will be delivered within the selected time slot.</li>
            <li>Please ensure availability at the delivery location.</li>
          </ul>
        </div>

        {/* Processing Time */}
        <div className="bg-white border border-[#f1e5df] rounded-2xl shadow-sm p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <CalendarDays className="w-5 h-5 text-[#c65f47]" />
            <h2 className="text-lg sm:text-xl font-semibold text-[#2c2420]">
              Order Processing Time
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#4a3f3a]">
            All cakes are made-to-order.
          </p>

          <p className="text-sm sm:text-base text-[#4a3f3a]">
            We recommend placing your order at least <span className="font-medium text-[#2c2420]">1–3 days in advance</span> depending on customization requirements.
          </p>
        </div>

        {/* Important Guidelines */}
        <div className="bg-[#fff7f5] border border-[#f1e5df] rounded-2xl p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-[#c65f47]" />
            <h2 className="text-lg sm:text-xl font-semibold text-[#2c2420]">
              Important Delivery Guidelines
            </h2>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#4a3f3a]">
            <li>Once delivered, SRI BAKE'S is not responsible for damage due to improper handling.</li>
            <li>Store the cake in a cool place or refrigerator until use.</li>
            <li>Avoid direct sunlight or heat exposure.</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="bg-[#fdf3ef] border border-[#f1e5df] rounded-2xl p-5 sm:p-6 space-y-3">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-[#c65f47]" />
            <h2 className="text-lg sm:text-xl font-semibold text-[#2c2420]">
              Contact for Orders
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#4a3f3a]">
            For orders or queries, reach out via:
          </p>

          <p className="text-base sm:text-lg font-semibold text-[#2c2420]">
            DM or WhatsApp: 9884420725
          </p>
        </div>

      </div>
    </PolicyPageShell>
  );
}