import React from 'react';

const PrivacyPolicy: React.FC = () => (
  <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
    <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow border border-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
      
      <div className="text-gray-700 space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p><strong>Effective Date:</strong> July 23, 2025</p>
          <p><strong>Company:</strong> TurboBytes</p>
          <p><strong>Website:</strong> <a href="https://turbobytes.in" className="text-blue-600 hover:text-blue-800">https://turbobytes.in</a></p>
          <p><strong>Contact:</strong> <a href="mailto:support@turbobytes.in" className="text-blue-600 hover:text-blue-800">support@turbobytes.in</a></p>
        </div>

        <p>
          TurboBytes ("us", "we", or "our") operates the <a href="https://turbobytes.in" className="text-blue-600 hover:text-blue-800">https://turbobytes.in</a> website (the "Service").
        </p>

        <p>
          This page informs you of our policies regarding the collection, use, and disclosure of Personal Information when you use our Service. By using our Service, you agree to the collection and use of information in accordance with this policy.
        </p>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">1. Information We Collect</h2>
          <p className="mb-3">While using our Service, we may ask you to provide us with personally identifiable information such as:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Billing address</li>
            <li>Business/Website details</li>
          </ul>
          <p className="mt-3">We collect this information to fulfill our services, respond to inquiries, provide support, and improve the user experience.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">2. Log Data</h2>
          <p className="mb-3">We may collect standard browser and device information such as:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages visited</li>
            <li>Time and date of your visit</li>
            <li>Time spent on pages</li>
          </ul>
          <p className="mt-3">This data helps us analyze usage patterns and enhance our site performance.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">3. Cookies</h2>
          <p className="mb-3">TurboBytes uses cookies to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Store user preferences</li>
            <li>Enable certain functionality</li>
            <li>Improve service experience</li>
          </ul>
          <p className="mt-3">You may refuse cookies via your browser settings. However, some features of our website may not function properly without them.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">4. Third‑Party Services</h2>
          <p className="mb-3">We may use third-party tools (such as Google Analytics or Razorpay) to improve our services. These tools may collect user behavior data. Each provider has its own privacy policy regarding use and handling of personal information.</p>
          <p>We do not control and are not responsible for the practices of third-party providers.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">5. Remarketing & Advertising</h2>
          <p>TurboBytes may use tools like Google Ads for remarketing purposes. This means you may see ads based on your previous interactions with our site. You can opt out of interest-based ads through the Google Ads Settings page or browser add-ons.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">6. Communications</h2>
          <p className="mb-3">We may contact you via:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Email newsletters</li>
            <li>Service updates</li>
            <li>Promotional content</li>
          </ul>
          <p className="mt-3">You can unsubscribe from marketing emails at any time by clicking the "unsubscribe" link in the email or contacting us directly.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">7. Data Sharing & Disclosure</h2>
          <p className="mb-3">We do not sell, trade, or rent your personal information. We may disclose your data only:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>To trusted third-party service providers for operational purposes</li>
            <li>If required by law or court order</li>
            <li>To protect our rights, property, or safety</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">8. Security</h2>
          <p>We take data protection seriously and use commercially reasonable methods to protect your information. However, no method of electronic transmission is 100% secure.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">9. International Users</h2>
          <p className="mb-3">If you are located outside India, please be aware that your information will be transferred to and processed in India.</p>
          <p>By using our Service, you consent to such data transfer.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">10. Children's Privacy</h2>
          <p>Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with information, please contact us.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">11. External Links</h2>
          <p>Our Service may contain links to other websites not operated by TurboBytes. We are not responsible for the content or privacy practices of these external sites.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">12. Changes to This Policy</h2>
          <p>We may update our Privacy Policy periodically. Any changes will be posted on this page. We encourage users to review this page regularly.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">13. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or how we handle your data, contact us at:</p>
          <p className="mt-2">📧 <a href="mailto:support@turbobytes.in" className="text-blue-600 hover:text-blue-800">support@turbobytes.in</a></p>
        </div>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy; 