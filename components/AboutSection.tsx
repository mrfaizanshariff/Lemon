import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="h-[500px] relative rounded-sm overflow-hidden">
              <Image 
                src="https://images.pexels.com/photos/2403391/pexels-photo-2403391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="LEMON Restaurant Interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 right-0 bg-[#F9D923] p-6 rounded-sm shadow-lg">
              <div className="text-black text-center">
                <p className="text-lg font-bold">LEMON</p>
                <p className="text-sm uppercase tracking-wider">Fine Dine Restaurant</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="max-w-lg mx-auto lg:mx-0">
            <h2 className="text-sm text-[#4CAF50] uppercase tracking-wider mb-2">Our Story</h2>
            <h3 className="text-4xl font-bold mb-6 text-black">
              Experience the Finest Culinary Traditions at <span className="text-[#F9D923]">LEMON</span>
            </h3>
            
            <p className="text-gray-700 mb-8">
              A serene garden oasis awaits, where every dish tells a story. Savor the flavors of our diverse menu while surrounded by nature's beauty. 
              <span className="text-[#F9D923]">LEMON</span> combines culinary expertise with passionate service to create an unforgettable dining experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Farm-fresh ingredients", 
                "Children Play Area", 
                "Authentic recipes", 
                "Elegant ambiance"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <Check className="text-[#F9D923] mr-2" size={18} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="border-l-4 border-[#F9D923] pl-4 italic text-gray-600 mb-8">
              "At LEMON, we believe that dining is not just about food, but about creating moments that last a lifetime."
              <div className="mt-2 font-bold not-italic text-black">- Founder</div>
            </div>
            
            <div className="flex space-x-4">
              {["Indian", "Chinese", "Continental", "Tandoor"].map((cuisine, index) => (
                <div key={index} className="text-center">
                  <div className="h-1 w-full bg-[#F9D923] mb-2"></div>
                  <p className="text-sm text-gray-700">{cuisine}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;