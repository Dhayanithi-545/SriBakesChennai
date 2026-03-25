import PolicyPageShell from "@/components/PolicyPageShell";

export default function PrivacyPolicyPage() {
  return (
    <PolicyPageShell title="🔐 Privacy Policy – SRI BAKE'S">
      <p>At SRI BAKE'S, we value your privacy and are committed to protecting your personal information.</p>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-[#2c2420]">📌 Information We Collect</h2>
        <p className="mb-2">When you place an order or contact us, we may collect:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Name</li>
          <li>Phone Number</li>
          <li>Delivery Address</li>
          <li>Order Details (cake type, design, message, etc.)</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-[#2c2420]">🎯 How We Use Your Information</h2>
        <p className="mb-2">Your information is used only for:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Processing and confirming your orders</li>
          <li>Delivery coordination</li>
          <li>Customer support and communication</li>
          <li>Improving our services</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-[#2c2420]">🔒 Data Protection</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>We ensure that your personal details are safe and secure.</li>
          <li>Your information will not be shared, sold, or rented to any third party.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-[#2c2420]">📲 Communication</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>We may contact you via call, WhatsApp, or message regarding your order updates.</li>
          <li>We will not send unnecessary spam messages.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-[#2c2420]">📸 Photos & Marketing</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>We may take photos/videos of cakes for promotional purposes (Instagram, website, etc.).</li>
          <li>No personal customer details will be shared without permission.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-[#2c2420]">🔄 Policy Updates</h2>
        <p>SRI BAKE'S may update this Privacy Policy at any time. Changes will be updated on this page.</p>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-[#2c2420]">📞 Contact Us</h2>
        <p>For any questions regarding privacy: 9884420725</p>
      </div>
    </PolicyPageShell>
  );
}
