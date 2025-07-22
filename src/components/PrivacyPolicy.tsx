import React from 'react';

const PrivacyPolicy: React.FC = () => (
  <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
    <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow border border-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">Privacy Policy</h1>
      <p className="text-gray-700 mb-4">Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Information We Collect</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>Personal information you provide (such as name, email, etc.)</li>
        <li>Usage data and cookies for analytics and site improvement</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">How We Use Information</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>To provide and maintain our services</li>
        <li>To communicate with you</li>
        <li>To improve our website and user experience</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Your Rights</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>You may request access, correction, or deletion of your personal data</li>
        <li>You may opt out of certain data collection by adjusting your browser settings</li>
      </ul>
      <p className="text-gray-600 mt-8 text-sm">If you have any questions about this Privacy Policy, please contact us.</p>
    </div>
  </div>
);

export default PrivacyPolicy; 