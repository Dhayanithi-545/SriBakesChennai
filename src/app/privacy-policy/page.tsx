import PolicyPageShell from "@/components/PolicyPageShell";
import {
  ShieldCheck,
  Database,
  Target,
  Lock,
  MessageCircle,
  Image as ImageIcon,
  RefreshCw,
  Phone,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <PolicyPageShell title="Privacy Policy – SRI BAKE'S">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 text-[#3a2f2a]">

        {/* Intro */}
        <div className="flex items-start gap-3 bg-[#fdf3ef] border border-[#f1e5df] rounded-xl p-4 sm:p-5">
          <ShieldCheck className="w-6 h-6 text-[#c65f47] mt-1" />
          <p className="text-sm sm:text-base leading-relaxed">
            At <span className="font-semibold text-[#2c2420]">SRI BAKE'S</span>, we value your privacy and are committed to protecting your personal information.
          </p>
        </div>

        {/* Section */}
        <div className="bg-white border border-[#f1e5df] rounded-2xl shadow-sm p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Database className="w-5 h-5 text-[#c65f47]" />
            <h2 className="text-lg sm:text-xl font-semibold text-[#2c2420]">
              Information We Collect
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#4a3f3a]">
            When you place an order or contact us, we may collect:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#4a3f3a]">
            <li>Name</li>
            <li>Phone Number</li>
            <li>Delivery Address</li>
            <li>Order Details (cake type, design, message, etc.)</li>
          </ul>
        </div>

        {/* Section */}
        <div className="bg-white border border-[#f1e5df] rounded-2xl shadow-sm p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Target className="w-5 h-5 text-[#c65f47]" />
            <h2 className="text-lg sm:text-xl font-semibold text-[#2c2420]">
              How We Use Your Information
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#4a3f3a]">
            Your information is used only for:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#4a3f3a]">
            <li>Processing and confirming your orders</li>
            <li>Delivery coordination</li>
            <li>Customer support and communication</li>
            <li>Improving our services</li>
          </ul>
        </div>

        {/* Section */}
        <div className="bg-white border border-[#f1e5df] rounded-2xl shadow-sm p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-[#c65f47]" />
            <h2 className="text-lg sm:text-xl font-semibold text-[#2c2420]">
              Data Protection
            </h2>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#4a3f3a]">
            <li>We ensure that your personal details are safe and secure.</li>
            <li>Your information will not be shared, sold, or rented to any third party.</li>
          </ul>
        </div>

        {/* Section */}
        <div className="bg-white border border-[#f1e5df] rounded-2xl shadow-sm p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <MessageCircle className="w-5 h-5 text-[#c65f47]" />
            <h2 className="text-lg sm:text-xl font-semibold text-[#2c2420]">
              Communication
            </h2>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#4a3f3a]">
            <li>We may contact you via call, WhatsApp, or message regarding your order updates.</li>
            <li>We will not send unnecessary spam messages.</li>
          </ul>
        </div>

        {/* Section */}
        <div className="bg-white border border-[#f1e5df] rounded-2xl shadow-sm p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <ImageIcon className="w-5 h-5 text-[#c65f47]" />
            <h2 className="text-lg sm:text-xl font-semibold text-[#2c2420]">
              Photos & Marketing
            </h2>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#4a3f3a]">
            <li>We may take photos/videos of cakes for promotional purposes (Instagram, website, etc.).</li>
            <li>No personal customer details will be shared without permission.</li>
          </ul>
        </div>

        {/* Section */}
        <div className="bg-white border border-[#f1e5df] rounded-2xl shadow-sm p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <RefreshCw className="w-5 h-5 text-[#c65f47]" />
            <h2 className="text-lg sm:text-xl font-semibold text-[#2c2420]">
              Policy Updates
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#4a3f3a]">
            SRI BAKE'S may update this Privacy Policy at any time. Changes will be reflected on this page.
          </p>
        </div>

        {/* Section */}
        <div className="bg-[#fdf3ef] border border-[#f1e5df] rounded-2xl p-5 sm:p-6 space-y-3">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-[#c65f47]" />
            <h2 className="text-lg sm:text-xl font-semibold text-[#2c2420]">
              Contact Us
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#4a3f3a]">
            For any questions regarding privacy, contact us at:
          </p>

          <p className="text-base sm:text-lg font-semibold text-[#2c2420]">
            9884420725
          </p>
        </div>

      </div>
    </PolicyPageShell>
  );
}