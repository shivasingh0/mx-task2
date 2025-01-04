import { FaInstagram } from 'react-icons/fa';
import { FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';

export default function Footer() {
  const footerLinks = {
    'Useful links': ['About us', 'Events', 'Blogs', 'FAQ'],
    'Main Menu': ['Home', 'Offers', 'Menus', 'Reservation'],
    'Contact Us': ['example@email.com', '+44 865 268 366', 'Social media'],
  };

  return (
    <footer className="bg-[#f9fafb] py-12">
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Footer Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="px-2 py-1 rounded">
                <div className="font-bold flex justify-center items-center gap-[1px]">
                  <span className="bg-[#39db4a] text-white px-[6px] rounded-md text-2xl font-bold">F</span>
                  <img src="/assets/logo.png" className="h-5" alt="logo" />
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-md font-semibold mb-4">
              Savor the artistry where every dish is a culinary masterpiece
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 font-semibold text-md"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-600 hover:text-white hover:bg-[#39db4a] p-2 rounded-full"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-white hover:bg-[#39db4a] p-2 rounded-full"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-white hover:bg-[#39db4a] p-2 rounded-full"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-white hover:bg-[#39db4a] p-2 rounded-full"
              >
                <FiYoutube className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright Text */}
            <p className="text-md text-gray-600 font-semibold text-center">
              Copyright © 2023 Foodi | All rights reserved
            </p>
            <p className="text-md text-[#F9FAFB] hidden lg:block text-center">
              Copyright © 2023 Foodi | All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
