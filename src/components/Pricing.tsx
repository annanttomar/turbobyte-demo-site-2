import React, { useState, useEffect } from 'react';
import { Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingProps {
  onRequestQuote: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onRequestQuote }) => {
  const plans = [
    {
      name: 'Starter',
      price: '₹15,000',
      description: 'Perfect for small businesses and startups',
      features: [
        '5-page responsive website',
        'Basic SEO optimization',
        'Mobile-first design',
        'Contact form integration',
        '1 month support'
      ],
      popular: false
    },
    {
      name: 'Standard',
      price: '₹35,000',
      description: 'Ideal for growing businesses',
      features: [
        '10-page dynamic website',
        'Advanced SEO & Analytics',
        'CRM integration',
        'Performance optimization',
        'E-commerce ready',
        '3 months support'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '₹75,000',
      description: 'For large-scale operations',
      features: [
        'Unlimited pages & features',
        'Custom AI integrations',
        'Advanced analytics dashboard',
        'Priority support',
        'White-label solutions',
        '6 months support'
      ],
      popular: false
    }
  ];

  // Animated dots for the message
  const [dots, setDots] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Pricing
            <br />
            <span className="text-orange-500">That Scales</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Transparent, competitive pricing for every business size
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="col-span-3 flex justify-center items-center min-h-[200px]">
            <motion.span
              className="text-2xl font-semibold text-gray-500 font-mono bg-white/80 px-6 py-4 rounded-lg shadow-md border border-orange-100"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Updating Soon{dots}
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;