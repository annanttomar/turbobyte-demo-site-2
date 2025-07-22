import React from 'react';

const ContactPage: React.FC = () => (
  <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
    <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow border border-gray-200 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Contact Us</h1>
      <p className="text-gray-700 mb-6 text-center">Please fill out the form below. Your responses will be securely submitted via Google Forms.</p>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSc_axfB084gZhn71i93_yblpMjr_52Pip90Knc9hJSfcDFNhg/viewform?embedded=true"
        width="100%"
        height="800"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Contact Form"
        className="w-full rounded-lg border border-gray-200"
        allowFullScreen
      >
        Loading…
      </iframe>
    </div>
  </div>
);

export default ContactPage; 