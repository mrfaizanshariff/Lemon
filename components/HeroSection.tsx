'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Img3 from '../public/assets/img3.jpeg'
const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen bg-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${Img3.src})`,
          filter: "brightness(0.4)"
        }}
      />

      {/* Content */}
      <div className="container relative mx-auto px-4 h-full flex flex-col justify-center items-center text-white z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-[#4CAF50] uppercase tracking-[0.25em] text-sm">Experience Fine Dining</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="text-[#F9D923]">LEMON</span>
            <span className="block text-2xl md:text-3xl mt-2 italic font-light">fine dine restaurant</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Experience a culinary journey through Indian, Chinese, Continental, and Tandoor cuisines
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Link 
              href="#menu" 
              className="px-8 py-3 bg-[#F9D923] text-black rounded-sm uppercase text-sm tracking-wider hover:bg-[#F9D923]/90 transition-colors"
            >
              View Menu
            </Link>
            <Link 
              href="#reservation" 
              className="px-8 py-3 bg-transparent border border-white text-white rounded-sm uppercase text-sm tracking-wider hover:bg-white/10 transition-colors"
            >
              Reserve a Table
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scrolldown Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <motion.div 
          className="w-[1px] h-16 bg-[#F9D923] mb-2"
          animate={{ 
            scaleY: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut"
          }}
        />
        <span className="text-white text-xs uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
};

export default HeroSection;