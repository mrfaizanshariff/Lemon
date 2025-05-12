'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Share, Star } from 'lucide-react';
import Link from 'next/link';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Salih Hyder",
      role: "Regular Customer",
      comment: "I had a wonderful experience at this restaurant! The food was absolutely delicious, with every dish cooked to perfection and full of flavor. What stood out even more was the incredibly fast service—our meals were delivered promptly, making it a perfect stop for travelers who are short on time but still want quality food.",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a-/ALV-UjWP-aGCHK2RDgQMammcJSycHLWm-DQ6dTI68j-Em_HsN2_vJvW_=w90-h90-p-rp-mo-br100",
      url:"https://maps.app.goo.gl/7nXAp8jU2rpntvNw9"
    },
    {
      name: "Mohammed Fazeel rahman",
      role: "Regular Customer",
      comment: "We ate pasta, pizza, biryani and chicken rara, it  was mouthwatering. There is also a neat play area, icing on the cake. Perfect stop to end your trip.",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a-/ALV-UjXm_q1JdOzHXNaqRhW-QTQANbze4UO72YsvN-sxAZ4hAOdd8S2z=w90-h90-p-rp-mo-br100",
      url:"https://maps.app.goo.gl/98ZuwgDB57YiDy9x6"
    },
    {
      name: "Saleem",
      role: "Regular Customer",
      comment: "Food and the ambiance was fabulous, manger Nadeem khan and his teams hospitality was also good , didn’t felt like I visited 1st time. And last not the least CURD RICE was awesome must try it you gone love it for sure.",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a-/ALV-UjUkOLTGxkLPm8cR27SFQ2Lln3vcBEyGvqZ7TgHX1Gag7a4kJQfe=w90-h90-p-rp-mo-br100",
      url:"https://maps.app.goo.gl/TPk7ZLgtJC5vD8D87"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm text-[#4CAF50] uppercase tracking-wider mb-2">Testimonials</h2>
          <h3 className="text-4xl font-bold text-black">
            What Our <span className="text-[#F9D923]">Guests</span> Say
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Discover why our guests return time and again to experience the LEMON difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Link href={testimonial.url} target='_blank'>
            
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-sm relative"
            >
              {/* Quote Mark */}
              <div className="absolute top-4 right-4 text-6xl text-[#F9D923]/20 font-serif">
                "
              </div>
              
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < testimonial.rating ? "#F9D923" : "none"}
                    color={i < testimonial.rating ? "#F9D923" : "#D1D5DB"}
                  />
                ))}
              </div>
              
              {/* Comment */}
              <p className="text-gray-700 mb-6 relative z-10">
                "{testimonial.comment}"
              </p>
              
              {/* Customer */}
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden relative mr-4">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-black">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
                <div className='ml-5'>
                  <Share></Share>
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;