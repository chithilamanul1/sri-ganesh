"use client";

import { CheckIcon, WavesIcon, ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PageHero } from '../src/components/PageHero'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-peach text-brown">
      <main>
        <PageHero
          eyebrow="About SRI GANESH EXPORT"
          title="A Legacy Built on Trust Since 1972"
          description="SRI GANESH EXPORT is a Sri Lankan seafood export company with a proud family heritage spanning more than five decades."
          image="/IMG_1026.JPG"
        />
        
        {/* Animated Overlapping Section */}
        <section className="py-20 sm:py-28 lg:py-32 overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
            
            {/* Left side: Images and Animations */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-full max-w-lg mx-auto lg:max-w-none"
            >
              {/* Main Image */}
              <img 
                src="/about-legacy.jpg" 
                alt="Sea cucumber harvest" 
                className="w-[85%] rounded-3xl shadow-xl object-cover aspect-square" 
              />
              
              {/* Offset Image */}
              <motion.img 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                src="/sand-fish.jpg" 
                alt="Premium sea cucumber" 
                className="absolute -bottom-16 -right-4 w-[55%] rounded-3xl border-[10px] border-peach object-cover aspect-square shadow-2xl" 
              />

              {/* Vertical Badge */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -right-2 top-16 bg-[#4b7a95] text-white rounded-lg px-2 py-10 flex flex-col items-center justify-center shadow-lg transform translate-x-1/2"
                style={{ backgroundColor: "#3A8E58" }} // Using our brand Green
              >
                <div className="flex flex-col items-center transform rotate-180" style={{ writingMode: 'vertical-rl' }}>
                  <span className="text-2xl font-bold font-serif mb-2 whitespace-nowrap">50+</span>
                  <span className="text-xs uppercase tracking-widest whitespace-nowrap opacity-90">Years in Export</span>
                </div>
              </motion.div>

              {/* Rotating Contact Badge */}
              <motion.div 
                className="absolute -bottom-8 -left-8 w-36 h-36 bg-[#4b7a95] rounded-full flex items-center justify-center text-white shadow-xl p-2 z-10"
                style={{ backgroundColor: "#3A8E58" }} // Brand Green
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
              >
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                  className="w-full h-full relative flex items-center justify-center"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible absolute inset-0">
                    <path id="curve" d="M 50 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                    <text className="text-[12px] font-bold uppercase tracking-[0.25em]" fill="currentColor">
                      <textPath href="#curve" startOffset="0%">
                        • Contact us • Contact us •
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
                {/* Inner icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <WavesIcon size={28} className="text-white opacity-90" />
                </div>
              </motion.div>
            </motion.div>

            {/* Right side: Text and Stats */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="mt-12 lg:mt-0"
            >
              <p className="text-[11px] font-extrabold uppercase leading-none tracking-[0.22em] text-green-dark">Our History</p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.1] tracking-[-0.01em] text-brown sm:text-5xl lg:text-5xl">
                Sri Lanka's Leader in Dried Seafood Exports Since 1972
              </h2>
              <p className="mt-6 text-base leading-8 text-brown/80">
                The foundation of our business was established in 1972 by our founder’s father through Vinayaga Stores, a trusted name built on commitment, quality, and strong relationships with customers and suppliers.
              </p>
              <p className="mt-4 text-base leading-8 text-brown/80">
                Continuing this legacy, SRI GANESH EXPORT was officially established in 2004 with a vision to bring Sri Lanka’s premium marine resources to international markets. Over the years, we have developed strong expertise in sourcing, processing, and exporting high-quality seafood products, especially dried sea cucumber.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
                {[
                  'Premium Product Quality', 
                  'Sustainable Harvesting Practices', 
                  'Reliable Sourcing Networks', 
                  '50+ Years Export Experience'
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-sm font-semibold text-brown items-center">
                    <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center bg-green rounded-full text-peach-light">
                      <CheckIcon size={14} strokeWidth={3} />
                    </span> 
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-white rounded-2xl shadow-[0_18px_45px_rgba(130,77,67,0.08)] p-8 grid grid-cols-3 divide-x divide-brown/10 text-center">
                <div>
                  <p className="text-3xl font-bold text-brown">50+</p>
                  <p className="text-xs text-brown/60 mt-1 font-semibold">Years of<br/>Excellence</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-brown">500+</p>
                  <p className="text-xs text-brown/60 mt-1 font-semibold">Expert<br/>Divers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-brown">15+</p>
                  <p className="text-xs text-brown/60 mt-1 font-semibold">Export<br/>Countries</p>
                </div>
              </div>

              <div className="mt-10">
                <Link href="/products" className="inline-flex items-center gap-3 bg-green px-7 py-4 text-xs font-extrabold uppercase tracking-[0.15em] text-peach-light rounded-full transition hover:bg-green-dark shadow-lg shadow-green/20">
                  Our Products <ArrowRightIcon size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="bg-peach-dark py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-10 md:grid-cols-2">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-10 rounded-3xl shadow-[0_18px_45px_rgba(130,77,67,0.05)]"
              >
                <h3 className="font-serif text-3xl text-brown border-l-4 border-green pl-4">Our Mission</h3>
                <p className="mt-6 text-brown/80 leading-8">To become a trusted global seafood supplier by combining traditional business values with modern export practices while delivering high-quality marine products to international markets.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-10 rounded-3xl shadow-[0_18px_45px_rgba(130,77,67,0.05)]"
              >
                <h3 className="font-serif text-3xl text-brown border-l-4 border-green pl-4">Our Vision</h3>
                <p className="mt-6 text-brown/80 leading-8">To expand Sri Lankan seafood exports worldwide and become a recognised name in the global dried seafood industry.</p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-20 text-center bg-brown text-peach-light rounded-3xl p-12 shadow-xl"
            >
              <h3 className="font-serif text-3xl sm:text-4xl text-green-light">Trust – Quality – Reliability – Commitment</h3>
              <p className="mt-6 max-w-2xl mx-auto text-peach-light/80 leading-7">
                Our deep industry knowledge allows us to select and supply quality marine products that meet the expectations of international customers.
              </p>
              <Link href="/contact" className="mt-10 inline-flex items-center gap-2 bg-green px-8 py-4 text-xs font-extrabold uppercase tracking-[0.15em] text-white transition hover:bg-green-dark rounded-full shadow-lg">
                Talk to our export team
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
