import PolicyPageShell from "@/components/PolicyPageShell";
import {
  CalendarDays,
  CreditCard,
  AlertTriangle,
  Truck,
  Cake,
} from "lucide-react";

export default function CancellationRefundPolicyPage() {
  return (
    <PolicyPageShell title="Cancellation & Refund Policy – SRI BAKE'S">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 text-[#3a2f2a]">

        {/* Intro */}
        <div className="text-center sm:text-left space-y-3">
          <p className="text-base sm:text-lg leading-relaxed">
            At <span className="font-semibold text-[#2c2420]">SRI BAKE'S</span>, all cakes are freshly made-to-order.
          </p>
          <p className="text-sm sm:text-base text-[#6b5b55]">
            Hence, we follow the below cancellation and refund policy:
          </p>
        </div>

        {/* Section Card */}
        <div className="bg-white border border-[#f1e5df] rounded-2xl shadow-sm p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#fdf3ef]">
              <CalendarDays className="w-5 h-5 text-[#c65f47]" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-[#2c2420]">
              Order Cancellation
            </h2>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#4a3f3a]">
            <li>Orders can be cancelled only if requested at least 48 hours before the delivery date.</li>
            <li>Cancellation requests made within 24 hours of delivery will not be accepted.</li>
          </ul>
        </div>

        {/* Section Card */}
        <div className="bg-white border border-[#f1e5df] rounded-2xl shadow-sm p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#fdf3ef]">
              <CreditCard className="w-5 h-5 text-[#c65f47]" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-[#2c2420]">
              Refund Policy
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#4a3f3a]">
            If cancellation is made on time (before 48 hours), the advance payment will be partially refunded.
          </p>

          <p className="text-sm sm:text-base text-[#4a3f3a]">
            A cancellation charge may be applied based on preparation work already done.
          </p>

          <p className="font-medium text-[#2c2420]">No refund will be provided:</p>

          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#4a3f3a]">
            <li>For cancellations made within 24 hours of delivery</li>
            <li>For same-day or last-minute orders</li>
            <li>Once the cake has been prepared or dispatched</li>
          </ul>
        </div>

        {/* Section Card */}
        <div className="bg-white border border-[#f1e5df] rounded-2xl shadow-sm p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#fdf3ef]">
              <AlertTriangle className="w-5 h-5 text-[#c65f47]" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-[#2c2420]">
              Order Changes / Modifications
            </h2>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#4a3f3a]">
            <li>Any changes in design, flavour, or delivery details must be informed at least 48 hours in advance.</li>
            <li>Last-minute changes may not be accepted.</li>
          </ul>
        </div>

        {/* Section Card */}
        <div className="bg-white border border-[#f1e5df] rounded-2xl shadow-sm p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#fdf3ef]">
              <Truck className="w-5 h-5 text-[#c65f47]" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-[#2c2420]">
              Delivery Issues
            </h2>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#4a3f3a]">
            <li>If the customer is not available at the time of delivery, re-delivery charges may apply.</li>
            <li>SRI BAKE'S is not responsible for delays caused due to incorrect address or unavailability of the customer.</li>
          </ul>
        </div>

        {/* Section Card */}
        <div className="bg-white border border-[#f1e5df] rounded-2xl shadow-sm p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#fdf3ef]">
              <Cake className="w-5 h-5 text-[#c65f47]" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-[#2c2420]">
              Product Disclaimer
            </h2>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#4a3f3a]">
            <li>All cakes are handmade; slight variations in design may occur.</li>
            <li>No refund/replacement will be provided based on minor design or color differences.</li>
          </ul>
        </div>

      </div>
    </PolicyPageShell>
  );
}