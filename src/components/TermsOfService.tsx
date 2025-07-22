import React from 'react';

const TermsOfService: React.FC = () => (
  <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
    <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow border border-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">Terms of Service</h1>
      <p className="text-gray-700 mb-4">By using this website, you agree to the following terms and conditions. Please read them carefully.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Use of Site</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>You agree to use this site for lawful purposes only</li>
        <li>You will not misuse or attempt to disrupt the website</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Intellectual Property</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>All content is the property of the site owner unless otherwise stated</li>
        <li>You may not copy, reproduce, or distribute content without permission</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">Limitation of Liability</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>We are not liable for any damages resulting from use of this site</li>
        <li>This site is provided "as is" without warranties of any kind</li>
      </ul>
      <p className="text-gray-600 mt-8 text-sm">If you have any questions about these Terms of Service, please contact us.</p>
    </div>
  </div>
);

export default TermsOfService; 