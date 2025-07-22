import React from 'react';

const RefundCancellationPolicy: React.FC = () => (
  <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
    <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow border border-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">Refund & Cancellation Policy</h1>
      <p className="text-gray-700 mb-4">We value your satisfaction and aim to provide a fair and transparent refund and cancellation policy:</p>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>Requests for refunds or cancellations must be made within 7 days of purchase.</li>
        <li>Refunds will be processed to the original payment method within 7-10 business days.</li>
        <li>Some products or services may be non-refundable as specified at the time of purchase.</li>
        <li>To request a refund or cancellation, please contact our support team with your order details.</li>
      </ul>
      <p className="text-gray-600 mt-8 text-sm">If you have any questions about our Refund & Cancellation Policy, please contact us.</p>
    </div>
  </div>
);

export default RefundCancellationPolicy; 