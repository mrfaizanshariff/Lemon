'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Img1 from '../public/assets/img1.jpeg'
import Img2 from '../public/assets/img2.jpeg'
import Img3 from '../public/assets/img3.jpeg'
import Img4 from '../public/assets/img4.jpeg'

const GallerySection = () => {
  const galleryImages = [
    {
      src: Img1.src,
      alt: "Elegant Restaurant Interior"
    },
    {
      src: Img2.src,
      alt: "Signature Dish Presentation"
    },
    {
      src: Img3,
      alt: "Chef Preparing Food"
    },
    {
      src: Img4,
      alt: "Fine Dining Table Setting"
    },
    {
      src: Img1.src,
      alt: "Exquisite Dessert"
    },
    {
      src: Img3.src,
      alt: "Exterior"
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm text-[#4CAF50] uppercase tracking-wider mb-2">Gallery</h2>
          <h3 className="text-4xl font-bold">
            Experience <span className="text-[#F9D923]">LEMON</span>
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400">
            Take a glimpse into our elegant ambiance, exquisite cuisine, and unforgettable dining experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative h-80 overflow-hidden group rounded-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;