import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-16 px-6">
      <h1 className="text-4xl font-bold mb-12">Contact Me</h1>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div className="bg-gray-100 p-8 rounded-lg shadow-sm text-center">
          <div className="mx-auto mb-4 w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center">
            <svg 
              className="w-7 h-7 text-[#5a08cc]" 
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
          <p className="text-sm text-gray-700">+880 1580 133 452</p>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-sm text-center">
          <div className="mx-auto mb-4 w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center">
            <svg 
              className="w-7 h-7 text-[#5a08cc]" 
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
          <p className="text-sm text-gray-700">mahdinabir0608@gmail.com</p>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-sm text-center md:col-span-2">
          <div className="mx-auto mb-4 w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center">
            <svg 
              className="w-7 h-7 text-[#5a08cc]" 
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
            181/A , Kafrul, Dhaka-1206 , Dhaka Cantonment
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

<div className="flex space-x-6 mt-8">
  <a
    href="https://www.linkedin.com/in/mahdinhossenabir/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md shadow-md transition"
  >
   
    <svg
      className="w-6 h-6 mr-2"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-1 0-1.8-.83-1.8-1.85s.81-1.85 1.8-1.85c1 0 1.8.83 1.8 1.85s-.81 1.85-1.8 1.85zm13.5 10.3h-3v-4.5c0-1.1-.4-1.8-1.4-1.8-.76 0-1.22.52-1.42 1.02-.07.17-.09.4-.09.62v4.66h-3v-9h3v1.22c.4-.63 1.12-1.53 2.72-1.53 1.98 0 3.47 1.3 3.47 4.08v5.23z" />
    </svg>
    LinkedIn
  </a>

  <a
    href="https://github.com/MahdinAbir"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center bg-gray-800 hover:bg-gray-900 text-white px-5 py-3 rounded-md shadow-md transition"
  >
    
    <svg
      className="w-6 h-6 mr-2"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.73.084-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.776.418-1.304.76-1.604-2.665-.305-5.467-1.334-5.467-5.933 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.65.244 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.922.43.37.82 1.1.82 2.22 0 1.604-.015 2.896-.015 3.293 0 .32.21.694.825.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
    GitHub
  </a>
</div>


    </div>
  );
};

export default ContactUs;
