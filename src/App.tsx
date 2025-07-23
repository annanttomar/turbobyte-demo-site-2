import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import ContactModal from './components/ContactModal';
import StickyContact from './components/StickyContact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Disclaimer from './components/Disclaimer';
import ShippingPolicy from './components/ShippingPolicy';
import RefundCancellationPolicy from './components/RefundCancellationPolicy';
import ContactPage from './components/ContactPage';

function MainSite(props: any) {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smooth scroll setup
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Loading animation
    setTimeout(() => setIsLoading(false), 1500);
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Modal handlers
  const handleGetAudit = () => setActiveModal('audit');
  const handleRequestQuote = () => setActiveModal('quote');
  const handleTalkToExpert = () => setActiveModal('expert');
  const handleCloseModal = () => setActiveModal(null);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewDemos = () => scrollToSection('portfolio');

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-white flex items-center justify-center z-50"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1
            animate={{ 
              color: ['#1F2937', '#FF6A00', '#1F2937']
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-3xl font-bold tracking-tight"
          >
            TURBOBYTES
          </motion.h1>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-6 h-6 border-2 border-orange-500 border-t-transparent mx-auto mt-4"
          />
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white overflow-x-hidden"
    >
      {/* Navigation */}
      <Navbar onContactClick={handleTalkToExpert} />

      {/* Hero Section */}
      <section id="home">
        <Hero onGetAudit={handleGetAudit} onViewDemos={handleViewDemos} />
      </section>

      {/* Services Section */}
      <Services />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Pricing Section */}
      <Pricing onRequestQuote={handleRequestQuote} />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer */}
      <section id="contact">
        <Footer />
      </section>

      {/* Sticky Contact Button */}
      <StickyContact onClick={handleTalkToExpert} />

      {/* Contact Modals */}
      <ContactModal
        isOpen={activeModal === 'audit'}
        onClose={handleCloseModal}
        title="Get a Free Audit"
        type="audit"
      />
      
      <ContactModal
        isOpen={activeModal === 'quote'}
        onClose={handleCloseModal}
        title="Request a Quote"
        type="quote"
      />
      
      <ContactModal
        isOpen={activeModal === 'expert'}
        onClose={handleCloseModal}
        title="Talk to an Expert"
        type="audit"
      />

      {/* Cookie Banner */}
      <CookieBanner />
    </motion.div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainSite />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/shipping-policy" element={<ShippingPolicy />} />
      <Route path="/refund-cancellation-policy" element={<RefundCancellationPolicy />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;