'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Calendar, Users, MessageCircle, PhoneCall } from 'lucide-react';
import Link from 'next/link';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log('Reservation submitted:', JSON.stringify(formData));
    // alert('Thank you for your reservation request! We will contact you shortly to confirm.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-sm text-[#4CAF50] uppercase tracking-wider mb-2">Contact Us</h2>
            <h3 className="text-4xl font-bold mb-6 text-black">
              Get in <span className="text-[#F9D923]">Touch</span>
            </h3>
            
           
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-[#F9D923] p-3 rounded-sm mr-4">
                  <MapPin className="text-black" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-1">Location</h4>
                  <p className="text-gray-600">#464/2, Mysore-Ooty  highway, Next to M.I.T College Thandavpura, Mysore District - 571302</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#F9D923] p-3 rounded-sm mr-4">
                  <Phone className="text-black" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-1">Call Us</h4>
                  <Link href="tel:+917899999682">
                  <p className="text-gray-600">+91 78999 99682</p>
                  </Link>
                  <Link href="tel:08212001887">
                  <p className="text-gray-600">0821-2001887</p>
                  </Link>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#F9D923] p-3 rounded-sm mr-4">
                  <Mail className="text-black" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-1">Email</h4>
                  <Link href="mailto:lemonfinedine@gmail.com">
                  <p className="text-gray-600">Lemonfinedine@gmail.com</p>
                  </Link>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#F9D923] p-3 rounded-sm mr-4">
                  <Clock className="text-black" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-1">Hours</h4>
                  <p className="text-gray-600">
                    All Days: 11:00 AM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.054462670532!2d76.67077103253742!3d12.17669539143447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf694c875fdbe3%3A0x28fa2c035827bc00!2sLemon%20Fine%20Dine%20Restaurant!5e0!3m2!1sen!2sin!4v1747063197308!5m2!1sen!2sin"
             width="100%" 
             height="250" 
             style={{ border: 0 }} 
             allowFullScreen 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
             className="rounded-sm"
             ></iframe>
            </div>
          </div>
          
          {/* Reservation Form */}
          <div id="reservation">
          <p className="text-gray-700 mb-8">
              We would love to hear from you. Visit us for an unforgettable dining experience or make a reservation in advance to ensure your table.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-sm shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-black">Contact us</h3>
              
              <div className='flex flex-col gap-4'>
              <Link href={"tel:+917899999682"} target="_blank">
                <button
                 
                  className="w-full bg-[#F9D923] text-black py-3 px-6 rounded-sm uppercase text-sm tracking-wider hover:bg-[#F9D923]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F9D923] focus:ring-offset-2"
                >
                  <span className='flex justify-center items-center gap-2'>
                 Call 
                  <PhoneCall></PhoneCall>
                 

                  </span>
                </button>
              
              </Link>
              <Link href={`https://wa.me/917899999682?text=${encodeURIComponent("Hi I am interested to know more about your services")}`} target="_blank">
                <button
                 
                  className="w-full bg-[#F9D923] text-black py-3 px-6 rounded-sm uppercase text-sm tracking-wider hover:bg-[#F9D923]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F9D923] focus:ring-offset-2"
                >
                  <span className='flex justify-center items-center gap-2'>
                  WhatsApp 
                  <MessageCircle></MessageCircle>
                 

                  </span>
                </button>
              
              </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;