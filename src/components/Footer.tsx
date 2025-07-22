import React, { useState } from 'react';
import { Mail, MessageCircle, Send, Instagram, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.h3
              whileHover={{ scale: 1.02 }}
              className="text-3xl font-bold text-orange-500 mb-4 cursor-pointer"
            >
              TURBOBYTES
            </motion.h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light max-w-md">
              Pioneering the future of web development with AI-powered solutions 
              that transform businesses and drive unprecedented growth.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-8">
              <h4 className="text-lg font-medium text-white mb-4">Stay Ahead of the Curve</h4>
              <form onSubmit={handleNewsletterSubmit} className="relative">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-all duration-300 font-light"
                    placeholder="Enter your email"
                  />
                  <motion.label
                    initial={false}
                    animate={{
                      top: email ? -8 : 12,
                      fontSize: email ? '12px' : '16px',
                      color: email ? '#FF6A00' : '#9CA3AF'
                    }}
                    className="absolute left-4 pointer-events-none transition-all duration-300 bg-gray-900 px-2 font-light"
                  >
                    {email ? 'Email Address' : ''}
                  </motion.label>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="absolute right-1 top-1 bg-orange-500 text-white p-2 hover:bg-white hover:text-orange-500 transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
              
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-orange-500 text-sm mt-2 font-light"
                >
                  ✓ Successfully subscribed!
                </motion.p>
              )}
            </div>
          </motion.div>
          
          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-medium text-white mb-6">Navigation</h4>
            <nav className="space-y-3">
              {['Home', 'Services', 'Portfolio', 'Pricing'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  whileHover={{ x: 4, color: '#FF6A00' }}
                  className="block text-gray-300 hover:text-orange-500 transition-all duration-300 text-left font-light"
                >
                  {item}
                </motion.button>
              ))}
              <Link
                to="/contact"
                className="block text-gray-300 hover:text-orange-500 transition-all duration-300 text-left font-light"
              >
                Contact
              </Link>
            </nav>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-lg font-medium text-white mb-6">Connect</h4>
            <div className="space-y-4 mb-8">
              <motion.a
                href="mailto:leads@turbobytes.in"
                whileHover={{ x: 4, color: '#FF6A00' }}
                className="flex items-center gap-3 text-gray-300 hover:text-orange-500 transition-all duration-300 font-light"
              >
                <Mail className="w-4 h-4" />
                leads@turbobytes.in
              </motion.a>
              <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4, color: '#FF6A00' }}
                className="flex items-center gap-3 text-gray-300 hover:text-orange-500 transition-all duration-300 font-light"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Chat
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: '#FF6A00'
                    }}
                    animate={{ 
                      boxShadow: [
                        '0 0 0 rgba(255, 106, 0, 0)',
                        '0 0 10px rgba(255, 106, 0, 0.3)',
                        '0 0 0 rgba(255, 106, 0, 0)'
                      ]
                    }}
                    transition={{ 
                      boxShadow: { duration: 2, repeat: Infinity }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm font-light">
              © 2025 TurboBytes. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 mt-8">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-orange-500 transition-all duration-300">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-orange-500 transition-all duration-300">Terms of Service</Link>
              <Link to="/disclaimer" className="text-gray-400 hover:text-orange-500 transition-all duration-300">Disclaimer</Link>
              <Link to="/shipping-policy" className="text-gray-400 hover:text-orange-500 transition-all duration-300">Shipping Policy</Link>
              <Link to="/refund-cancellation-policy" className="text-gray-400 hover:text-orange-500 transition-all duration-300">Refund & Cancellation Policy</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;