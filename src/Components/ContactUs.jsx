import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-16 px-6">
      <h1 className="text-4xl font-bold mb-12">Contact Me</h1>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
          <div className="mx-auto mb-4 w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
            <svg 
              className="w-7 h-7 text-green-600" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              viewBox="0 0 24 24"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <h3 className="font-semibold mb-1">Call Me</h3>
          <p className="text-sm text-gray-700">+438 329 122</p>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
          <div className="mx-auto mb-4 w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
            <svg 
              className="w-7 h-7 text-green-600" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16v16H4z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <h3 className="font-semibold mb-1">Mail Me</h3>
          <p className="text-sm text-gray-700">joe@example.com</p>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center md:col-span-2">
          <div className="mx-auto mb-4 w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
            <svg 
              className="w-7 h-7 text-green-600" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              viewBox="0 0 24 24"
            >
              <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <h3 className="font-semibold mb-1">Find Me</h3>
          <p className="text-sm text-gray-700">
            445 Mount Eden Road, Mount Eden, Auckland.
          </p>
        </div>
      </div>

      <div className="max-w-xl text-center px-4">
        <h2 className="text-2xl font-semibold mb-4">Send me a Message</h2>
        <p className="text-gray-700 leading-relaxed">
          I’m always excited to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out. 
          Thank you for stopping by!
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
