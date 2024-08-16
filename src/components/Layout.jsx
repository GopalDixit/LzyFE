import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo.jpg';
import Footer from './Footer';
import SignUp from './SignUp'; 

const Layout = () => {
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSignUp = () => {
    setSignUpOpen(!isSignUpOpen);
  };

  return (
    <div className="flex flex-col md:flex-row p-4 space-x-12">
      {/* Left Section (Logo & Search Bar) */}
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <div className="w-full md:w-3/4 max-w-lg mb-4 relative">
          {/* Logo */}
          <div className="mb-4">
            <img
              src={Logo}
              alt="Logo"
              className="w-35 h-32 mx-auto"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Coming Soon..."
              className="w-full p-2 border border-gray-400 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black-500 pl-4 pr-10"
            />
            {/* Microphone Icon */}
            <button className="absolute top-1/2 right-14 transform -translate-y-1/2 p-2">
              <svg className="w-6 h-6 text-gray-100" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MicIcon">
                <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3m5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72z"></path>
              </svg>
            </button>
            {/* Search Icon */}
            <button className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2">
              <svg className="w-6 h-6 text-gray-100" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Video */}
        <div className="w-full max-w-4xl mb-4">
          <video controls className="w-full rounded-3xl">
            <source src="https://res.cloudinary.com/dfv1qnzoz/video/upload/v1719039250/gh211amrhepwgubdirem.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Right Section (Login) */}
      <div className="w-full md:w-1/2 flex flex-col items-center mt-8 md:mt-40">
        <div className="w-full max-w-sm bg-white p-6 border border-gray-300 rounded-lg shadow-md">
          <form>
            <label className="block mb-4">
              <input
                type="text"
                placeholder="Email address or phone number"
                className="mt-1 block w-full h-14 p-2 border border-gray-300 rounded-md shadow-sm font-thin"
              />
            </label>
            <label className="block mb-4">
              <input
                type="password"
                placeholder="Password"
                className="mt-1 block w-full h-14 p-2 border border-gray-300 rounded-md shadow-sm"
              />
            </label>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>
          <div className="text-center">
            <button
              onClick={() => alert('Forgot Password functionality is not implemented')}
              className="text-blue-700 hover:underline mt-1"
            >
              Forgotten Password?
            </button>
            <hr className="border-t border-gray-300 mb-8 mt-8" />
            <div className="mt-4">
              <button
                onClick={toggleSignUp} 
                className="h-14 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md px-4 py-2 p-5 transition duration-300 ease-in-out"
              >
                Create New Account
              </button>
            </div>
          </div>
        </div>

        {isSignUpOpen && <SignUp toggleSignUp={toggleSignUp} />}
        
      </div>
    </div>
    
  );
};

export default Layout;