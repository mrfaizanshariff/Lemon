import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <Link href="/" className="text-2xl font-semibold inline-block mb-4">
              <span className="text-[#F9D923]">LEMON</span>
              <span className="text-[#4CAF50] text-sm ml-1 italic">Fine Dine Restaurant</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Experience the finest culinary journey through authentic flavors from around the world in an elegant setting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#F9D923] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#F9D923] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#F9D923] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 relative inline-block">
              Contact Info
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#F9D923]"></span>
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>#464/2, Mysore-Ooty  highway, Next to M.I.T College Thandavpura, </li>
              <li> Mysore District - 571302</li>
              <li>+91 78999 99682</li>
              <li>0821-2001887</li>
              <li>Lemonfinedine@gmail.com</li>
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4 relative inline-block">
              Opening Hours
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#F9D923]"></span>
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <span className="text-white">All Days:</span><br />
                11:00 AM - 11:00 PM
              </li>
             
             
            </ul>
          </div>
          
          {/* Newsletter */}
          {/* <div>
            <h4 className="text-lg font-bold mb-4 relative inline-block">
              Newsletter
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#F9D923]"></span>
            </h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for special offers, new dishes, and events.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-sm flex-grow focus:outline-none focus:ring-1 focus:ring-[#F9D923]"
              />
              <button
                type="submit"
                className="bg-[#F9D923] text-black px-4 py-2 rounded-r-sm hover:bg-[#F9D923]/90 transition-colors"
              >
                Send
              </button>
            </form>
          </div> */}
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <div className="mb-4">
            <Link href="#" className="mx-2 hover:text-[#F9D923] transition-colors">Home</Link>
            <Link href="#" className="mx-2 hover:text-[#F9D923] transition-colors">About</Link>
            <Link href="#" className="mx-2 hover:text-[#F9D923] transition-colors">Menu</Link>
            <Link href="#" className="mx-2 hover:text-[#F9D923] transition-colors">Reservations</Link>
            <Link href="#" className="mx-2 hover:text-[#F9D923] transition-colors">Contact</Link>
            <Link href="#" className="mx-2 hover:text-[#F9D923] transition-colors">Privacy Policy</Link>
          </div>
          <p>© {new Date().getFullYear()} LEMON Fine Dine Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;