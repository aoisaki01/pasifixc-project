'use client';

import { CheckCircle2, X } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetUrl, setTargetUrl] = useState('');

  const openModal = (url: string) => {
    setTargetUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAgree = () => {
    window.open(targetUrl, '_blank');
    closeModal();
  };

  return (
    <>
      <section 
        id="contact" 
        className="relative w-full snap-start flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-red-50/50 py-24 sm:py-32"
      >
        <div className="absolute top-1/2 -left-1/4 bg-red-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 -right-1/4 bg-red-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-2000"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="flex flex-col">
              <h2 className="font-heading py-6 text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-red-800 to-red-500 text-transparent bg-clip-text">
                  Why Choose Us?
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  We are not just a vendor, we are your partner. With a solid and experienced team across various platforms, we guarantee every project is not only completed, but also delivers satisfying results.
              </p>
              <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0" /><span className="text-gray-700"><strong>Fast & Transparent Process</strong> - Clear workflow.</span></div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0" /><span className="text-gray-700"><strong>Guaranteed Quality</strong> - Focus on detail for premium results.</span></div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0" /><span className="text-gray-700"><strong>Full Support</strong> - We are ready to discuss and realize your vision.</span></div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border border-white/50 text-center">
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-800">
                  Contact Us
              </h3>
              <div className="mt-4 inline-block px-4 py-1 bg-gradient-to-r from-red-100 to-red-100 rounded-full">
                  <p className="font-semibold text-red-800">Free Initial Consultation</p>
              </div>
              <p className="mt-6 text-gray-600">
                  Ready to start your project? Contact us through your preferred platform below.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <button 
                    onClick={() => openModal('https://discord.com/users/1142802821113200730')} 
                    className="group flex items-center justify-center gap-3 w-full px-6 py-3 border-2 border-red-700 text-red-700 font-semibold rounded-lg shadow-sm hover:bg-red-700 hover:text-white transition-all transform hover:scale-105"
                    >
                    Discord
                    </button>
                    <button 
                    onClick={() => openModal('https://wa.me/6281296305532')} 
                    className="flex items-center justify-center gap-3 w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:shadow-red-500/50 transition-all transform hover:scale-105"
                    >
                    WhatsApp
                    </button>
                    <button
                    onClick={() => openModal('mailto:pasifixcproject@gmail.com')}
                    className="flex items-center justify-center gap-3 w-full px-6 py-3 border-2 border-red-400 text-red-700 font-semibold rounded-lg shadow-sm hover:bg-red-400 hover:text-white transition-all transform hover:scale-105"
                    >
                    Email
                    </button>
              </div>
            </div>

        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="flex items-center justify-between p-6 border-b">
                <h3 className="text-xl font-bold text-gray-800">Terms & Conditions</h3>
                <button onClick={closeModal} className="text-gray-500 hover:text-gray-800">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="p-8 max-h-[60vh] overflow-y-auto text-gray-600 space-y-4">
                <p>
                  By continuing, you confirm that you have read and agree to our{' '}
                  <Link href="/terms" target="_blank" className="text-red-600 font-semibold underline hover:text-red-700">
                    Terms & Conditions
                  </Link>
                  .
                </p>
                
                <h4 className="font-bold text-gray-800 pt-2">Scope of Consultation</h4>
                <p>
                  The initial discussion via Discord or WhatsApp is consultative and non-binding. The purpose of this consultation is to understand your project needs and determine if our services are suitable for you.
                </p>

                <h4 className="font-bold text-gray-800 pt-2">Project Agreement</h4>
                <p>
                  Full details regarding the scope of work, timeline, number of revisions, and total cost will be outlined in a formal proposal or contract sent after the initial consultation session. The project will only begin after a written agreement from both parties.
                </p>

                <h4 className="font-bold text-gray-800 pt-2">Data Confidentiality</h4>
                <p>
                  All materials, data, and information you provide will be kept confidential and used only for the purposes of the ongoing project.
                </p>
              </div>

              <div className="flex justify-end gap-4 p-6 bg-gray-50 border-t">
                <button 
                  onClick={closeModal}
                  className="px-6 py-2 text-gray-700 bg-gray-200 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleAgree}
                  className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                  I Agree & Continue
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactSection;
