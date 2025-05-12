'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from '../public/assets/logo.jpeg'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-black/95 text-white py-3 shadow-lg' 
          : 'bg-transparent text-white py-6'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold">
          {/* <span className="text-[#F9D923]">LEMON</span> */}
        <Image
                        src={Logo.src}
                        alt="Lemon Logo"
                        fill
                        className="object-cover max-w-[32%] md:max-w-[15%] md:h-[70%] lg:max-w-[10%] lg:h-[90%]"
                      />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="relative text-sm uppercase tracking-wider hover:text-[#F9D923] transition-colors duration-300 after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-[#F9D923] after:transition-all hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden md:block">
          <Link 
            href="#reservation" 
            className="px-6 py-2 bg-[#F9D923] text-black rounded-sm uppercase text-sm tracking-wider hover:bg-[#F9D923]/90 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 text-white py-4 shadow-lg">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm uppercase tracking-wider py-2 hover:text-[#F9D923] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#reservation" 
              className="px-6 py-2 bg-[#F9D923] text-black rounded-sm uppercase text-sm tracking-wider hover:bg-[#F9D923]/90 transition-colors w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;