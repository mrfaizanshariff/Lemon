'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Share, Star } from 'lucide-react';
import Link from 'next/link';
import Review from '../public/assets/reviews.png'

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
         <div className='flex justify-center items-center my-4' >
         <span>
         <svg xmlns="http://www.w3.org/2000/svg"  width="80px" height="80px" viewBox="-0.5 0 48 48" version="1.1">
    
    <title>Google-color</title>
    <desc>Created with Sketch.</desc>
    <defs>

</defs>
    <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Color-" transform="translate(-401.000000, -860.000000)">
            <g id="Google" transform="translate(401.000000, 860.000000)">
                <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05">

</path>
                <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335">

</path>
                <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853">

</path>
                <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4">

</path>
            </g>
        </g>
    </g>
        </svg>
          </span>
          <Image alt='Review Picture' src={Review.src} width={300} height={200}>

          </Image>
         </div>
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