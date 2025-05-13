'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type Cuisine = 'Indian' | 'Chinese' | 'Continental' | 'Tandoor';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  popular?: boolean;
  veg?: boolean;
}

interface MenuItems {
  [key: string]: MenuItem[];
}

const MenuSection = () => {
  const [activeCuisine, setActiveCuisine] = useState<Cuisine>('Indian');

  const menuItems: MenuItems = {
    Indian: [
      {
        name: 'Chicken Mughlai',
        description: 'A royal North Indian dish with rich, creamy gravy and tender chicken pieces.',
        price: '280₹',
        popular: true,
      },
      {
        name: 'Zeera Rice',
        description: 'Fragrant basmati rice tempered with cumin seeds for a simple yet flavorful side.',
        price: '280₹',
        veg: true,
      },
      {
        name: 'Paneer Lababdar',
        description: 'Succulent paneer in a luxurious tomato-based gravy with aromatic spices.',
        price: '240₹',
        veg: true,
      },
      {
        name: 'Mutton Dum Biryani ',
        description: 'Fragrant basmati rice cooked with tender lamb and aromatic spices',
        price: '360₹',
      },
    ],
    Chinese: [
      {
        name: 'Butter Garlic Fried Rice/Noodles',
        description: 'A fusion of noodles tossed with butter, garlic, and fragrant stir-fry flavors.',
        price: '260₹',
        popular: true,
      },
      {
        name: 'Korean Fish',
        description: 'Crispy fish fillets glazed in sweet, spicy Korean-style sauce.',
        price: '180₹',
        veg: true,
      },
      {
        name: 'Chilly Chicken',
        description: 'Indo-Chinese favorite with crispy chicken chunks tossed in spicy chili sauce.',
        price: '260₹',
      },
      {
        name: 'Paneer Chilly',
        description: 'Cottage cheese stir-fried with peppers and onions in a tangy, spicy sauce.',
        price: '180₹',
        veg: true,
      },
    ],
    Continental: [
      {
        name: 'Crispy Cheese Burger',
        description: 'A crunchy, golden patty stacked in a bun with fresh toppings and sauces.',
        price: '150₹',
        popular: true,
      },
      {
        name: 'Pizza Margherita',
        description: 'Classic pizza topped with tomato sauce, mozzarella, and fresh basil.',
        price: '340₹',
        veg: true,
      },
      {
        name: 'Alfredo Pasta',
        description: 'Creamy Italian pasta in a rich Alfredo sauce with cheese and herbs.',
        price: '300₹',
      },
    ],
    Tandoor: [
      {
        name: 'Tandoori Chicken Platter',
        description: ' A hearty assortment of flavorful chicken prepared in various mouthwatering styles.',
        price: '280₹ - Half',
        popular: true,
      },
      {
        name: 'Chicken Chatpatta',
        description: 'Spicy and tangy chicken cooked with bold Indian masalas for a zesty kick.',
        price: '280₹',
        veg: true,
      },
      {
        name: 'Kalmi Kebab',
        description: 'Juicy chicken drumsticks marinated in creamy spices and slow-cooked till tender.',
        price: '380₹',
      },
      {
        name: 'Tandoori Paneer Tikka',
        description: 'Marinated paneer cubes grilled to perfection with smoky spices and veggies.',
        price: '280₹',
        veg: true,
      },
    ],
  };

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm text-[#4CAF50] uppercase tracking-wider mb-2">Our Specialties</h2>
          <h3 className="text-4xl font-bold text-black">
            Explore Our <span className="text-[#F9D923]">Menu</span>
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Discover our diverse culinary offerings featuring the finest ingredients and authentic recipes from around the world.
          </p>
        </div>

        {/* Cuisine Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {(['Indian', 'Chinese', 'Continental', 'Tandoor'] as Cuisine[]).map((cuisine) => (
            <button
              key={cuisine}
              onClick={() => setActiveCuisine(cuisine)}
              className={cn(
                'px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-all duration-300',
                activeCuisine === cuisine
                  ? 'bg-[#F9D923] text-black shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              )}
            >
              {cuisine}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems[activeCuisine].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-sm shadow-md flex justify-between"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xl font-bold text-black">{item.name}</h4>
                  {item.popular && (
                    <span className="bg-[#F9D923] text-black text-xs px-2 py-1 rounded-sm">
                      Popular
                    </span>
                  )}
                  {item.veg && (
                    <span className="bg-[#4CAF50] text-white text-xs px-2 py-1 rounded-sm">
                      Veg
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
              <div className="text-xl font-bold text-black">{item.price}</div>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-[#F9D923] text-black rounded-sm uppercase text-sm tracking-wider hover:bg-[#F9D923] transition-colors">
            <Link href="https://drive.google.com/uc?export=download&id=1Qf7hyoGlFY3IHnEXG5hDmDSQJtylQPuT"
              download
              target='_blank'
              rel="noopener noreferrer"
            >
            Download Full Menu
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;