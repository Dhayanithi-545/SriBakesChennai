import PolicyPageShell from "@/components/PolicyPageShell";

export default function TermsAndConditionsPage() {
  return (
    <PolicyPageShell title="📜 Terms & Conditions – SRI BAKE'S">
      <p>By placing an order with SRI BAKE'S, you agree to the following terms and conditions:</p>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-[#2c2420]">📅 Order Confirmation</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>All standard cake orders must be confirmed at least 3 days in advance.</li>
          <li>Customized cakes must be confirmed at least 7 days (1 week) in advance.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-[#2c2420]">💳 Payment Policy</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>A minimum of 50% advance payment is required to confirm your order.</li>
          <li>Orders will be processed only after the advance payment is received.</li>
          <li>The remaining balance must be paid before or at the time of delivery.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-[#2c2420]">🎂 Customization Policy</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>All customized cakes are handmade, so minor variations in design may occur.</li>
          <li>If certain decoration items are not available in the market, similar alternatives will be used.</li>
          <li>Any such changes will be informed and confirmed with the customer before placing on the cake.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-[#2c2420]">✨ Cake Topper Policy</h2>
        <p>Customized name toppers will be charged separately, depending on the design and requirement.</p>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-[#2c2420]">🎉 What We Provide</h2>
        <p className="mb-2">With every cake order, we provide:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>1 Cake Knife</li>
          <li>Candles</li>
          <li>1 “Happy Birthday” Topper</li>
          <li>For orders 5kg and above, we also provide paper plates.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-[#2c2420]">⚠ Important Notes</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Once the cake is delivered, SRI BAKE'S is not responsible for any damage due to mishandling.</li>
          <li>Customers are advised to store the cake properly in a cool place or refrigerator.</li>
        </ul>
      </div>
    </PolicyPageShell>
  );
}
