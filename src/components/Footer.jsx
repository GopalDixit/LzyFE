// Footer.jsx

const Footer = () => {
  return (
    <footer className="w-screen text-black absolute left-0">
      <div className="">
        {/* India Section */}
        <div className="text-xl flex mt-2 mb-6 ml-4" style={{ fontSize: '1.55rem' }}>
          India
        </div>
        <hr className="w-screen border-t border-gray-300" />

        <div className="flex flex-col md: flex-row lg:flex-row justify-between items-center">
          {/* Left Side Options */}
          <div className="flex gap-6 lg:gap-14 lg:mb-0 ml-4">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="text-lg lg:text-2xl hover:text-green-500">Advertising</a>
            <a href="#" className="text-lg lg:text-2xl hover:text-green-500">Business</a>
            <a href="#" className="text-lg lg:text-2xl hover:text-green-500">Investor</a>
            <a href="#" className="text-lg lg:text-2xl hover:text-green-500">Join Our Team</a>
          </div>

          {/* Right Side Options */}
          <div className="flex gap-6 mr-3">
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