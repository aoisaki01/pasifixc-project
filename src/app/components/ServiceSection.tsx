'use client';

import React from 'react';
import { 
  Palette, 
  Wand2, 
  Search, 
  Mic, 
  MessageSquare, 
  ClipboardCheck, 
  CreditCard, 
  Sparkles, 
  Scissors,
  RefreshCcw,   // Icon baru untuk Revision
  CheckCircle   // Icon baru untuk Final
} from 'lucide-react';
import { motion } from 'framer-motion';

const workflowSteps = [
  { 
    title: 'Contact & Initial Brief', 
    description: 'You reach out to our team with your project idea or requirements.', 
    icon: MessageSquare 
  },
  { 
    title: 'Discussion & Consultation', 
    description: 'We dive into your vision, provide input, and develop an execution strategy.', 
    icon: ClipboardCheck 
  },
  { 
    title: 'Payment Process', 
    description: 'Once the proposal is approved, administrative matters are settled to kick off the project.', 
    icon: CreditCard 
  },
  { 
    title: 'Execution & Review', 
    description: 'Our team gets to work. You receive updates and provide feedback until the draft is ready.', 
    icon: Sparkles 
  },
  { 
    title: 'Revision', 
    description: 'We implement your specific feedback and refine details to ensure the output meets your standards.', 
    icon: RefreshCcw 
  },
  { 
    title: 'Final', 
    description: 'Final quality check and delivery of high-quality master files ready for distribution.', 
    icon: CheckCircle 
  },
];

const otherServices = [
  { title: 'Audio Production', description: 'Professional jingles, BGM, scoring, and sound design.', icon: Mic },
  { title: 'Graphic Design', description: 'Visual identity, posters, thumbnails, and promotional assets.', icon: Palette },
  { title: 'Creative Research', description: 'Concept research, visual references, and story development.', icon: Search }
];

export default function ServicesPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-x-hidden bg-white text-slate-800">
      <div className="relative z-10 w-full">
        {/* SECTION 1: SERVICE INTRODUCTION */}
        <section id="services" className="w-full max-w-7xl mx-auto text-center pt-32 pb-20 px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter bg-gradient-to-r from-red-800 to-red-500 text-transparent bg-clip-text">
              Your Multimedia Production Partner
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
              We are a creative studio offering multimedia production services. We act as your partner and extension of your team, handling every technical and creative detail to ensure your goals are executed precisely for maximum results.
            </p>
          </motion.div>
        </section>

        {/* SECTION 2: POST-PRODUCTION BREAKDOWN */}
        <section className="w-full py-24 px-6">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold sticky top-24 bg-gradient-to-r from-red-800 to-red-500 text-transparent bg-clip-text">
                Post Production
              </h2>
              <p className="mt-4 text-gray-600">
                Our main services focus on video and film post-production. We manage every technical and creative aspect to ensure your vision comes to life with stunning results.
              </p>
            </div>
            <div className="lg:col-span-2 space-y-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-800 text-white rounded-lg flex items-center justify-center shadow-lg shadow-red-500/20">
                  <Scissors size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800">Video Editing</h3>
                  <p className="mt-2 text-gray-600">
                    From the first cut to the final polish, we craft your visual narrative. Our process includes: <strong className="text-red-800">assembly</strong>, <strong className="text-red-800">rough cut</strong>, <strong className="text-red-800">fine cut</strong>, and <strong className="text-red-800">final delivery</strong>.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-800 text-white rounded-lg flex items-center justify-center shadow-lg shadow-red-500/20">
                  <Palette size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800">Color Grading & Finishing</h3>
                  <p className="mt-2 text-gray-600">
                    We shape the mood and visual atmosphere of your film or video. This includes <strong className="text-red-800">primary & secondary color correction</strong>, <strong className="text-red-800">shot matching</strong>, and <strong className="text-red-800">look development</strong> for a cinematic aesthetic.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-800 text-white rounded-lg flex items-center justify-center shadow-lg shadow-red-500/20">
                  <Wand2 size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800">Visual Effects (VFX)</h3>
                  <p className="mt-2 text-gray-600">
                    Adding the impossible to elevate your production scale. Our services include <strong className="text-red-800">compositing</strong>, <strong className="text-red-800">motion tracking</strong>, <strong className="text-red-800">keying (green screen)</strong>, and digital asset integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WORKFLOW */}
        <section className="w-full py-24 px-6 border-t border-b border-slate-100">
          <div className="w-full max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-red-800 to-red-500 text-transparent bg-clip-text">
              Our Workflow
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Six transparent steps to bring your ideas from concept to reality.
            </p>
            {/* Changed grid-cols-4 to grid-cols-3 to accommodate 6 items neatly */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {workflowSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-red-100 shadow-sm hover:shadow-xl hover:shadow-red-200/50 hover:-translate-y-2 transition-all duration-300">
                    <div className="relative mb-4 bg-gradient-to-br from-red-500 to-red-800 text-white p-4 rounded-full">
                      <IconComponent size={32} />
                    </div>
                    <h3 className="mt-2 text-xl font-bold text-slate-800">{step.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 flex-grow">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* SECTION 4: OTHER SERVICES */}
        <section className="w-full py-24 px-6">
          <div className="w-full max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-red-800 to-red-500 text-transparent bg-clip-text">
              Other Creative Capabilities
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Beyond our main focus, our team’s expertise also covers a broader creative spectrum.
            </p>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="p-8 bg-white border border-slate-100 rounded-lg text-left shadow-sm hover:shadow-md hover:border-red-100 transition-all duration-300">
                    <IconComponent className="h-10 w-10 text-red-600 mb-4" />
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="mt-2 text-slate-500">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}