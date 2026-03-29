import PolicyPageShell from "@/components/PolicyPageShell";
import {
  FileText,
  CalendarDays,
  CreditCard,
  Cake,
  Sparkles,
  Gift,
  AlertTriangle,
} from "lucide-react";

export default function TermsAndConditionsPage() {
  return (
    <PolicyPageShell title="Terms & Conditions – SRI BAKE'S">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 text-[#3a2f2a]">

        {/* Intro */}
        <div className="flex items-start gap-3 bg-[#fdf3ef] border border-[#f1e5df] rounded-xl p-4 sm:p-5">
          <FileText className="w-6 h-6 text-[#c65f47] mt-1" />
          <p className="text-sm sm:text-base leading-relaxed">
            By placing an order with <span className="font-semibold text-[#2c2420]">SRI BAKE'S</span>, you agree to the following terms and conditions.
          </p>
        </div>

        {/* Order Confirmation */}
        <div className="bg-white border border-[#f1e5df] rounded-2xl shadow-sm p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <CalendarDays className="w-5 h-5 text-[#c65f47]" />
            <h2 className="text-lg sm:text-xl font-semibold text-[#2c2420]">
              Order Confirmation
            </h2>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#4a3f3a]">
            <li>Standard cake orders must be confirmed at least 3 days in advance.</li>
            <li>Customized cakes require a minimum of 7 days advance confirmation.</li>
          </ul>
        </div>

        {/* Payment Policy */}
        <div className="bg-[#fff7f5] border border-[#f1e5df] rounded-2xl p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <CreditCard className="w-5 h-5 text-[#c65f47]" />
            <h2 className="text-lg sm:text-xl font-semibold text-[#2c2420]">
              Payment Policy
            </h2>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#4a3f3a]">
            <li>A minimum of 50% advance payment is required to confirm your order.</li>
            <li>Orders are processed only after advance payment is received.</li>
            <li>The remaining balance must be paid before or at delivery.</li>
          </ul>
        </div>

        {/* Customization */}
        <div className="bg-white border border-[#f1e5df] rounded-2xl shadow-sm p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Cake className="w-5 h-5 text-[#c65f47]" />
            <h2 className="text-lg sm:text-xl font-semibold text-[#2c2420]">
              Customization Policy
            </h2>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#4a3f3a]">
            <li>All customized cakes are handmade; slight design variations may occur.</li>
            <li>If specific decoration items are unavailable, similar alternatives will be used.</li>
            <li>All such changes will be communicated and approved before execution.</li>
          </ul>
        </div>

        {/* Cake Topper */}
        <div className="bg-white border border-[#f1e5df] rounded-2xl shadow-sm p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#c65f47]" />
            <h2 className="text-lg sm:text-xl font-semibold text-[#2c2420]">
              Cake Topper Policy
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#4a3f3a]">
            Customized name toppers are charged separately based on design and requirements.
          </p>
        </div>

        {/* What We Provide */}
        <div className="bg-white border border-[#f1e5df] rounded-2xl shadow-sm p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Gift className="w-5 h-5 text-[#c65f47]" />
            <h2 className="text-lg sm:text-xl font-semibold text-[#2c2420]">
              What We Provide
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#4a3f3a]">
            With every cake order, we provide:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#4a3f3a]">
            <li>1 Cake Knife</li>
            <li>Candles</li>
            <li>1 “Happy Birthday” Topper</li>
            <li>Paper plates for orders 5kg and above</li>
          </ul>
        </div>

        {/* Important Notes */}
        <div className="bg-[#fff7f5] border border-[#f1e5df] rounded-2xl p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-[#c65f47]" />
            <h2 className="text-lg sm:text-xl font-semibold text-[#2c2420]">
              Important Notes
            </h2>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#4a3f3a]">
            <li>Once delivered, SRI BAKE'S is not responsible for damage due to mishandling.</li>
            <li>Customers must store cakes in a cool place or refrigerator.</li>
          </ul>
        </div>

      </div>
    </PolicyPageShell>
  );
}