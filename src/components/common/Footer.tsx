import { assets } from "../../assets";

const Footer = () => {
  // Define links data
  const links = [
    ["Features", "Pricing", "FAQs", "Testimonials"],
    ["Contact", "Affiliates", "Terms of Service", "Privacy"],
  ];

  return (
    <footer
      className="relative bg-cover bg-center text-white py-10 padding-x "
      style={{ backgroundImage: `url(${assets.footerBg})` }}
    >
      {/* Top Curved SVG */}
      <div className="w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 99.63"
          className="w-full absolute top-0 left-0 -mt-[2px] transform scale-x-[-1] scale-y-[-1]"
          preserveAspectRatio="none"
        >
          <path
            d="M1920,39.63c-35.57-6.81-86.28-15.62-147.56-23.11C1624.56-1.56,1508.42-.61,1411.56,.52c-50.53,.59-121.99,1.55-215.11,8.89-153.38,12.08-187.22,27.41-403.56,56.89-153.95,20.98-251.53,30.13-335.85,31.41-72.55,1.1-231.94-6.27-289.93-13.63C100.35,75.61,43.63,64.99,0,55.63v44H1920"
            fill="#fff"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="pt-[80px]  ">
        <div className="grid grid-cols-6 justify-center gap-x-16 ">
          {/* Logo and Branding */}
          <div className="col-span-2  ">
            <img
              src={assets.footerLogo}
              alt="Logo"
              className="h-[100px] w-auto"
            />
          </div>

          {/* Links */}
          {links.map((column, index) => (
            <div key={index} className="col-span-1  ">
              {column.map((link, idx) => (
                <div
                  key={idx}
                  className="mb-2 text-white text-[18px] font-[400] hover:underline cursor-pointer"
                >
                  {link}
                </div>
              ))}
            </div>
          ))}

          {/* Call to Action */}
          <div className=" col-span-2  ">
            <button className="bg-red-600 text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 transition">
              TRY FOR FREE →
            </button>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="text-center text-xs text-gray-400 mt-6 ">
          © 2024 Get Books Reviewed. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
