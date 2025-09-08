import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-4">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-gray-500">
          © 2025 Admin Site. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Privacy</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Terms</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;