import React from 'react';

const ShippingPolicy: React.FC = () => (
  <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
    <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow border border-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">Shipping Policy</h1>
      <p className="text-gray-700 mb-4">We are committed to delivering your products in a timely and efficient manner. Please review our shipping policy below:</p>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>Orders are processed within 2-3 business days after payment confirmation.</li>
        <li>Shipping times may vary depending on your location and selected shipping method.</li>
        <li>We are not responsible for delays caused by external factors such as weather or carrier issues.</li>
        <li>Tracking information will be provided once your order has shipped.</li>
      </ul>
      <p className="text-gray-600 mt-8 text-sm">If you have any questions about our Shipping Policy, please contact us.</p>
    </div>
  </div>
);

export default ShippingPolicy; 