const Footer = () => {
  return (
    <footer className="w-screen text-black absolute left-0 p-4">
      <div>
        {/* India Section */}
        <div className="text-xl mt-2 mb-6 ml-4" style={{ fontSize: '1.55rem' }}>
          India
        </div>
        <hr className="w-full border-t border-gray-300 -mt-5" />

        {/* Footer Options */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center">
          {/* Left Side Options */}
          <div className="flex flex-row lg:flex-row gap-6 lg:gap-14 lg:mb-0 ml-0 lg:ml-4">
            <a href="#" className="hover:underline text-xs lg:text-xl">About</a>
            <a href="#" className="hover:underline text-xs lg:text-2xl">Advertising</a>
            <a href="#" className="hover:underline text-xs lg:text-2xl">Business</a>
            <a href="#" className="hover:underline text-xs lg:text-2xl">Investor</a>
            <a href="#" className="hover:underline text-xs lg:text-2xl">Join Our Team</a>
          </div>

          {/* Right Side Options */}
          <div className="flex flex-row lg:flex-row gap-6 lg:gap-8 mt-4 lg:mt-0 ml-0 lg:ml-0">
            <a href="#" className="hover:underline text-xs lg:text-xl">Privacy</a>
            <a href="#" className="hover:underline text-xs lg:text-xl">Terms</a>
            <a href="#" className="hover:underline text-xs lg:text-xl">Help</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
