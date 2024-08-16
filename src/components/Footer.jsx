// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full text-black py-3 right-0">
      <div className="w-full container mx-auto px-4 right-0">
        {/* India Section */}
        <div className="text-xl flex mt-2 mb-8 absolute bottom-6 left-4" style={{ fontSize: '1.55rem' }}>
          India
        </div>
        <hr className="w-screen border-t border-gray-300 absolute right-0 bottom-12" />

        <div className="w-full flex flex-col lg:flex-row justify-between items-center max-w-screen-xl mx-auto px-4 absolute bottom-0 left-0">
          {/* Left Side Options */}
          <div className="flex flex-row space-x-6 lg:space-x-14 lg:mb-0">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="text-lg lg:text-2xl hover:text-green-500">Advertising</a>
            <a href="#" className="text-lg lg:text-2xl hover:text-green-500">Business</a>
            <a href="#" className="text-lg lg:text-2xl hover:text-green-500">Investor</a>
            <a href="#" className="text-lg lg:text-2xl hover:text-green-500">Join Our Team</a>
          </div>

          {/* Right Side Options */}
          <div className="flex flex-row space-x-4 relative left-64 -right-64">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Help</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
