"use client";

import { ArrowRightIcon, CheckIcon, Globe2Icon, ShieldCheckIcon } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { products } from '../src/data/products'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-peach text-brown font-sans selection:bg-green selection:text-white">
      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-brown text-center pt-24 pb-32 md:pb-40">
          <video autoPlay loop muted playsInline src="/IMG_2292.MOV" className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-brown-dark/70 via-brown-dark/50 to-brown/90" aria-hidden="true" />
          
          <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 flex flex-col items-center w-full my-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <p className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-green-light mb-6">
                <span className="h-[2px] w-12 bg-green-light" /> Premium Marine Products <span className="h-[2px] w-12 bg-green-light" />
              </p>
              <h1 className="font-serif text-5xl leading-tight text-white mb-6 sm:text-6xl lg:text-7xl">
                Sri Lanka's Finest <br />
                <span className="italic text-peach-light">Ocean Harvest</span>
              </h1>
              <p className="mx-auto max-w-2xl text-[15px] leading-8 text-white/90 sm:text-lg font-medium">
                Ethically sourced and meticulously processed for the world's most discerning wholesale markets.
              </p>
              
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/products" className="group flex items-center justify-center gap-3 bg-green px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-green-light hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto">
                  Explore Catalogue <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/about" className="group flex items-center justify-center gap-3 border border-white/40 px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all hover:border-white hover:bg-white/10 w-full sm:w-auto">
                  Our Heritage
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Bottom Stats/Info Bar overlay on hero */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} 
            className="absolute bottom-0 inset-x-0 mx-auto max-w-7xl px-5 sm:px-8 hidden md:block"
          >
            <div className="grid grid-cols-4 bg-white/5 backdrop-blur-md border-t border-x border-white/10 rounded-t-xl divide-x divide-white/10">
              {[['05', 'Specialist Products'], ['01', 'Island Source'], ['B2B', 'Export Focused'], ['Global', 'Market Ready']].map(([value, label]) => (
                <div key={label} className="px-6 py-6 text-center">
                  <p className="font-serif text-3xl text-green-light">{value}</p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white/70">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Quality Section - Split Layout */}
        <section className="py-24 sm:py-32 bg-peach">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative group">
              <div className="absolute -inset-4 bg-brown/5 rounded-2xl transform rotate-2 transition-transform group-hover:rotate-1" />
              <img src="/image3.JPG" alt="Boat travelling across Sri Lankan ocean waters" className="relative h-[500px] w-full object-cover sm:h-[600px] rounded-xl shadow-2xl" />
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <p className="text-[11px] font-extrabold uppercase leading-none tracking-[0.25em] text-green">The Sri Ganesh Standard</p>
              <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-brown sm:text-5xl">
                Sourced with care.<br />Prepared for the world.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-brown/80">
                Operating with decades of collective expertise, we are a Sri Lankan marine products export company built around unwavering quality, transparency, and durable trade partnerships.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {['Reliable supplier relationships', 'Specification-led grading', 'Export-ready documentation', 'Flexible order discussions'].map((item) => (
                  <div key={item} className="flex gap-4 text-sm font-semibold text-brown-dark items-start">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-green/10 rounded-full text-green mt-0.5">
                      <CheckIcon size={14} />
                    </span> 
                    <span className="leading-tight">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="group mt-12 inline-flex items-center gap-3 border-b border-brown pb-2 text-xs font-bold uppercase tracking-[0.15em] text-brown hover:text-green hover:border-green transition-colors">
                Discover our story <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Featured Products Collection */}
        <section className="bg-peach-light py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col text-center lg:text-left lg:flex-row justify-between gap-6 border-b border-brown/20 pb-10 items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-green">Our Collection</p>
                <h2 className="mt-4 font-serif text-4xl text-brown sm:text-5xl">Marine products of distinction.</h2>
              </div>
              <Link href="/products" className="group inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-brown hover:text-green transition-colors">
                View full catalogue <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {products.slice(0, 3).map((product, i) => (
                <motion.article 
                  key={product.name} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="group flex flex-col overflow-hidden bg-white shadow-xl shadow-brown/5 rounded-xl transition-transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-brown/10"
                >
                  <div className="overflow-hidden relative h-64">
                    <div className="absolute inset-0 bg-brown/10 group-hover:bg-transparent transition-colors z-10 mix-blend-multiply" />
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow bg-white relative">
                    <div className="absolute top-0 right-8 -translate-y-1/2 bg-green text-white px-4 py-1 text-[9px] font-bold uppercase tracking-widest shadow-md">
                      {product.tag}
                    </div>
                    <h3 className="mt-2 font-serif text-2xl text-brown">{product.name}</h3>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-brown/60">{product.species}</p>
                    <p className="mt-6 text-sm leading-relaxed text-brown/80 mb-6 flex-grow line-clamp-3">{product.description}</p>
                    <Link href="/contact" className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-green hover:text-green-dark transition-colors">
                      Request details <ArrowRightIcon size={14} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Global Trade & Philosophy Section */}
        <section className="bg-brown py-24 text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white/10 text-green-light">
                  <Globe2Icon size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-white mb-4">International Outlook</h3>
                  <p className="text-base leading-relaxed text-white/80">
                    Supplying export buyers with a direct Sri Lankan source. Navigate international trade seamlessly with our globally compliant documentation and packaging standards.
                  </p>
                </div>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white/10 text-green-light">
                  <ShieldCheckIcon size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-white mb-4">Partnership Mindset</h3>
                  <p className="text-base leading-relaxed text-white/80">
                    Straightforward communication for repeatable, long-term trade. We prioritize transparency, rigorous grading, and maintaining trust over decades of operation.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

