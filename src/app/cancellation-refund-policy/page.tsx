import PolicyPageShell from "@/components/PolicyPageShell";

export default function CancellationRefundPolicyPage() {
  return (
    <PolicyPageShell title="❌ Cancellation & Refund Policy – SRI BAKE'S">
      <p>
        At SRI BAKE'S, all cakes are freshly made-to-order.
      </p>
      <p>Hence, we follow the below cancellation and refund policy:</p>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-[#2c2420]">📅 Order Cancellation</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Orders can be cancelled only if requested at least 48 hours before the delivery date.</li>
          <li>Cancellation requests made within 24 hours of delivery will not be accepted.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-[#2c2420]">💳 Refund Policy</h2>
        <p className="mb-2">If cancellation is made on time (before 48 hours), the advance payment will be partially refunded.</p>
        <p className="mb-2">A cancellation charge may be applied based on preparation work already done.</p>
        <p className="mb-2">No refund will be provided:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>For cancellations made within 24 hours of delivery</li>
          <li>For same-day or last-minute orders</li>
          <li>Once the cake has been prepared or dispatched</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-[#2c2420]">⚠ Order Changes / Modifications</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Any changes in design, flavour, or delivery details must be informed at least 48 hours in advance.</li>
          <li>Last-minute changes may not be accepted.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-[#2c2420]">🚚 Delivery Issues</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>If the customer is not available at the time of delivery, re-delivery charges may apply.</li>
          <li>SRI BAKE'S is not responsible for delays caused due to incorrect address or unavailability of the customer.</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-[#2c2420]">🎂 Product Disclaimer</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>All cakes are handmade; slight variations in design may occur.</li>
          <li>No refund/replacement will be provided based on minor design or color differences.</li>
        </ul>
      </div>
    </PolicyPageShell>
  );
}
