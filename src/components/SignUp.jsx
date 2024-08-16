import React, { useState } from 'react';

const SignUp = ({ toggleSignUp }) => {
  const [dob, setDob] = useState({ day: '', month: '', year: '' });

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <button
          onClick={toggleSignUp}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>
        <div className='mb-4'>
          <h2 className="text-2xl font-bold mb-1 text-left">Sign Up</h2>
          <p className="text-gray-600 text-left text-sm">It's quick and easy.</p>
        </div>
        <form>
          <div className="flex space-x-4 mb-4">
            <label className="flex-1">
              <input
                type="text"
                placeholder="First name"
                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm text-sm"
              />
            </label>
            <label className="flex-1">
              <input
                type="text"
                placeholder="Surname"
                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm text-sm"
              />
            </label>
          </div>
          <label className="block mb-4">
            <input
              type="text"
              placeholder="Mobile number or email address"
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm text-sm"
            />
          </label>
          <label className="block mb-4">
            <input
              type="password"
              placeholder="New password"
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm text-sm"
            />
          </label>
          <div className="mb-4">
            <p className="text-sm font-medium mb-2 text-left">Date of birth</p>
            <div className="flex space-x-4 mb-4">
              <div className="flex-1">
                <label className="block">
                  <select
                    value={dob.day}
                    onChange={(e) => setDob({ ...dob, day: e.target.value })}
                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm text-sm"
                  >
                    <option value="">Day</option>
                    {[...Array(31).keys()].map((d) => (
                      <option key={d + 1} value={d + 1}>{d + 1}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="flex-1">
                <label className="block">
                  <select
                    value={dob.month}
                    onChange={(e) => setDob({ ...dob, month: e.target.value })}
                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm text-sm"
                  >
                    <option value="">Month</option>
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month, index) => (
                      <option key={index + 1} value={index + 1}>{month}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="flex-1">
                <label className="block">
                  <select
                    value={dob.year}
                    onChange={(e) => setDob({ ...dob, year: e.target.value })}
                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm text-sm"
                  >
                    <option value="">Year</option>
                    {[...Array(100).keys()].reverse().map((y) => (
                      <option key={y + 1924} value={y + 1924}>{y + 1924}</option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-sm font-medium mb-2 text-left">Gender</p>
            <div className="flex space-x-4 mt-2">
              <label className="flex items-center">
                <input type="radio" name="gender" value="female" className="mr-2" />
                <span>Female</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" value="male" className="mr-2" />
                <span>Male</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" value="custom" className="mr-2" />
                <span>Custom</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-1/2 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
