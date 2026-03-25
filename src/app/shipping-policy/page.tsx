import PolicyPageShell from "@/components/PolicyPageShell";

export default function ShippingPolicyPage() {
  return (
    <PolicyPageShell title="📦 Shipping Policy – SRI BAKE'S">
      <p>
        At SRI BAKE'S, we ensure that every cake is freshly baked and delivered with utmost
        care to maintain quality and taste.
      </p>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-[#2c2420]">🚚 Delivery Locations</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>We provide delivery across Chennai.</li>
          <li>Delivery charges may vary based on location.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-[#2c2420]">🍰 Outstation Orders (Outside Chennai)</h2>
        <p className="mb-2">For deliveries outside Chennai, we only accept Chocolate Ganache Frosting Cakes.</p>
        <p className="mb-2">This is because:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Chocolate ganache cakes are more stable and travel-safe in Chennai&apos;s weather conditions.</li>
          <li>They maintain their shape, texture, and freshness during transit.</li>
          <li>They offer a rich and delicious taste even after delivery.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-[#2c2420]">⏱ Delivery Time</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Orders will be delivered within the scheduled time slot selected during booking.</li>
          <li>We request customers to be available at the delivery location to receive the cake.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-[#2c2420]">📅 Order Processing Time</h2>
        <p>All cakes are made-to-order.</p>
        <p>We recommend placing your order at least 1–3 days in advance depending on customization.</p>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-[#2c2420]">❗ Important Delivery Guidelines</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Once the cake is handed over, SRI BAKE'S is not responsible for any damage caused due to improper handling.</li>
          <li>Please keep the cake in a cool place or refrigerator until use.</li>
          <li>Avoid keeping the cake in direct sunlight or heat.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-[#2c2420]">📞 Contact for Orders</h2>
        <p>DM or WhatsApp: 9884420725</p>
      </div>
    </PolicyPageShell>
  );
}
