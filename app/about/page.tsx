"use client";

import { CheckIcon, WavesIcon, ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PageHero } from '../../src/components/PageHero'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent text-slate-700">
      <main>
        <PageHero
          eyebrow="About SRI GANESH EXPORT"
          title="A Legacy of Excellence in Sri Lankan Dried Seafood Exports Since 1972"
          description="With a proud heritage spanning over five decades, SRI GANESH EXPORT represents a legacy of trust, quality, and excellence in Sri Lanka’s seafood export industry."
          image="/IMG_1026.JPG"
        />

        {/* Animated Overlapping Section */}
        <section className="py-24 sm:py-32 overflow-hidden bg-transparent">
          <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">

            {/* Left side: Images and Animations */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-full max-w-lg mx-auto lg:max-w-none"
            >
              {/* Main Image - Proprietor Mr. Selvarajah Thuresh */}
              <img
                src="/owner.jpg"
                alt="Mr. Selvarajah Thuresh - Proprietor of SRI GANESH EXPORT"
                className="w-[85%] rounded-3xl shadow-2xl object-cover aspect-square transition-all duration-700"
              />

              {/* Offset Image */}
              <motion.img
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                src="/image2.JPG"
                alt="Premium sea cucumber"
                className="absolute -bottom-16 -right-4 w-[55%] rounded-3xl border-8 border-brown object-cover aspect-square shadow-2xl grayscale transition-all duration-700 hover:grayscale-0"
              />

              {/* Vertical Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -right-2 top-16 bg-gradient-to-t from-green to-green-light text-brown-dark rounded-lg px-2 py-10 flex flex-col items-center justify-center shadow-lg transform translate-x-1/2"
              >
                <div className="flex flex-col items-center transform rotate-180" style={{ writingMode: 'vertical-rl' }}>
                  <span className="text-2xl font-bold font-serif mb-2 whitespace-nowrap">50+</span>
                  <span className="text-xs uppercase tracking-widest whitespace-nowrap opacity-80 font-bold">Years in Export</span>
                </div>
              </motion.div>

              {/* Rotating Contact Badge */}
              <motion.div
                className="absolute -bottom-8 -left-8 w-36 h-36 bg-brown-dark border border-glass-border rounded-full flex items-center justify-center text-green shadow-[0_0_30px_rgba(8,247,190,0.2)] p-2 z-10"
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
                  <WavesIcon size={28} className="text-green opacity-90" />
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
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-green-dark/30 bg-green-dark/5 mb-8 shadow-sm">
                <p className="text-[10px] font-extrabold uppercase leading-none tracking-[0.25em] text-green-dark">Our History</p>
              </div>
              <h2 className="font-serif text-4xl leading-[1.15] text-brown-dark sm:text-5xl lg:text-5xl drop-shadow-sm">
                A Legacy of Trust <span className="text-green-dark font-serif">Since 1972</span>
              </h2>
              <p className="mt-8 text-[15px] leading-relaxed text-slate-600 font-light max-w-2xl">
                Our journey began in 1972, when our founder’s father, Mr. Veluppillai Selvarajah, established Vinayaga Stores with a commitment to providing quality seafood products while building strong and lasting relationships with customers, fishermen, and suppliers. Through dedication, integrity, and a deep understanding of the marine resources of Sri Lanka, the business earned a respected reputation within the local seafood industry.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-600 font-light max-w-2xl">
                Carrying forward this valuable legacy, SRI GANESH EXPORT was officially established in 2004 by Mr. Selvarajah Thuresh, Proprietor of the company, with a vision to introduce Sri Lanka’s finest marine resources to international markets.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-600 font-light max-w-2xl">
                Built on generations of experience and industry knowledge, we specialize in the sourcing, processing, and export of premium-quality dried seafood products, with a particular focus on dried sea cucumber (Beche-de-mer). Our expertise, combined with strict quality standards and careful processing methods, enables us to deliver products that meet the expectations of international customers.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-600 font-light max-w-2xl">
                Over the years, SRI GANESH EXPORT has developed strong business relationships with global markets, proudly supplying Sri Lankan seafood products to countries including Singapore, Malaysia, Hong Kong, and other international destinations. Our commitment to reliability, product quality, and customer satisfaction has helped us become a trusted partner for seafood buyers worldwide.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                {[
                  'Premium product quality',
                  'Reliable sourcing networks',
                  'Careful processing methods',
                  'International export standards',
                  'Long-term relationships with global buyers'
                ].map((item) => (
                  <div key={item} className="flex gap-4 text-sm font-medium text-slate-700 items-start group">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green/10 border border-green/30 text-green-dark transition-transform group-hover:scale-110 group-hover:bg-green-dark group-hover:text-white shadow-sm">
                      <CheckIcon size={14} strokeWidth={2.5} />
                    </span>
                    <span className="pt-1">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-white/60 border border-glass-border rounded-2xl shadow-xl p-6 sm:p-8 grid grid-cols-3 divide-x divide-glass-border text-center backdrop-blur-md">
                <div className="group">
                  <p className="text-4xl font-serif text-brown-dark group-hover:text-green-dark transition-colors">50<span className="text-2xl">+</span></p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-2 font-bold">Years of<br />Excellence</p>
                </div>
                <div className="group">
                  <p className="text-4xl font-serif text-brown-dark group-hover:text-green-dark transition-colors">500<span className="text-2xl">+</span></p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-2 font-bold">Expert<br />Divers</p>
                </div>
                <div className="group">
                  <p className="text-4xl font-serif text-brown-dark group-hover:text-green-dark transition-colors">15<span className="text-2xl">+</span></p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-2 font-bold">Export<br />Countries</p>
                </div>
              </div>

              <div className="mt-10">
                <Link href="/products" className="inline-flex items-center gap-3 bg-green-dark hover:bg-green px-7 py-4 text-xs font-extrabold uppercase tracking-[0.15em] text-white rounded-full transition shadow-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(44,110,67,0.3)]">
                  Our Products <ArrowRightIcon size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="bg-transparent py-24 sm:py-32 relative text-slate-700">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-glass-border to-transparent" />

          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-8 lg:gap-10 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/60 border border-glass-border p-10 sm:p-12 rounded-3xl shadow-xl backdrop-blur-md relative overflow-hidden group hover:bg-white/80 transition-colors"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-green" />
                <h3 className="font-serif text-3xl text-brown-dark">Our Mission</h3>
                <p className="mt-6 text-[15px] leading-relaxed text-slate-600 font-light max-w-md">To become a trusted global seafood supplier by combining traditional business values with modern export practices while delivering high-quality marine products to international markets.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/60 border border-glass-border p-10 sm:p-12 rounded-3xl shadow-xl backdrop-blur-md relative overflow-hidden group hover:bg-white/80 transition-colors"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-peach" />
                <h3 className="font-serif text-3xl text-brown-dark">Our Vision</h3>
                <p className="mt-6 text-[15px] leading-relaxed text-slate-600 font-light max-w-md">To expand Sri Lankan seafood exports worldwide and become a recognised name in the global dried seafood industry.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="bg-transparent py-24 sm:py-32 relative text-slate-700">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-glass-border to-transparent" />

          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-green-dark/30 bg-green-dark/5 mb-8 shadow-sm">
                <p className="text-[10px] font-extrabold uppercase leading-none tracking-[0.25em] text-green-dark">Our Values</p>
              </div>
              <h2 className="font-serif text-4xl text-brown-dark sm:text-5xl drop-shadow-sm">
                Our <span className="text-green-dark font-serif">Commitment</span>
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-600 font-light">
                At SRI GANESH EXPORT, we believe our success is built on three core values:
              </p>
            </div>

            <div className="grid gap-8 lg:gap-10 md:grid-cols-3">
              {[
                {
                  title: "Quality",
                  desc: "Selecting and processing premium seafood products while maintaining the highest standards.",
                  color: "bg-green"
                },
                {
                  title: "Trust",
                  desc: "Creating long-term partnerships with suppliers, customers, and international buyers through honesty and reliability.",
                  color: "bg-brown"
                },
                {
                  title: "Tradition & Innovation",
                  desc: "Combining decades of family experience with modern export practices to serve global markets effectively.",
                  color: "bg-peach"
                }
              ].map((val, idx) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white/60 border border-glass-border p-10 rounded-3xl shadow-xl backdrop-blur-md relative overflow-hidden group hover:bg-white/80 transition-colors"
                >
                  <div className={`absolute top-0 left-0 w-1 h-full ${val.color}`} />
                  <h3 className="font-serif text-2xl text-brown-dark">{val.title}</h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-slate-600 font-light">{val.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 sm:mt-24 text-center bg-white/60 border border-glass-border text-slate-700 rounded-3xl p-12 sm:p-16 shadow-xl relative overflow-hidden backdrop-blur-md"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green/10 via-transparent to-transparent opacity-60 pointer-events-none" />

              <h3 className="font-serif text-3xl sm:text-5xl text-brown-dark relative z-10 drop-shadow-sm">
                Trusted Since 1972
              </h3>
              <p className="mt-6 max-w-2xl mx-auto text-[15px] leading-relaxed text-slate-600 font-light relative z-10">
                Today, we continue to honor the vision of Mr. Veluppillai Selvarajah while expanding the global presence of Sri Lankan seafood under the leadership of Mr. Selvarajah Thuresh.
              </p>
              <p className="mt-4 max-w-2xl mx-auto text-[15px] leading-relaxed text-slate-600 font-light relative z-10">
                With a foundation built in 1972 and a future focused on global excellence, SRI GANESH EXPORT proudly connects Sri Lanka’s rich marine resources with the world.
              </p>
              <p className="mt-8 text-[11px] uppercase tracking-[0.2em] text-green-dark font-bold relative z-10">
                Exporting Sri Lanka’s Finest Seafood to the World
              </p>
              <div className="mt-10 relative z-10">
                <Link href="/contact" className="inline-flex items-center gap-3 bg-green-dark px-8 py-4 text-xs font-extrabold uppercase tracking-[0.15em] text-white transition-all hover:bg-green rounded-full shadow-[0_0_20px_rgba(44,110,67,0.3)] hover:scale-105">
                  Talk to our export team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
