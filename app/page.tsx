"use client";

import { ArrowRightIcon, CheckIcon, Globe2Icon, ShieldCheckIcon } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { products } from '../src/data/products'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-brown text-slate-200 font-sans selection:bg-green selection:text-brown-dark">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-32 md:pb-40">
          <video autoPlay loop muted playsInline src="/IMG_2292.MOV" className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-screen grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-brown-dark/90 via-brown/60 to-brown" aria-hidden="true" />
          
          <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 flex flex-col items-center w-full my-auto text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-green" /> 
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] text-green">
                  Premium Marine Products
                </p>
                <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-green" />
              </div>
              <h1 className="font-serif text-5xl leading-[1.1] text-white mb-6 sm:text-7xl lg:text-8xl drop-shadow-2xl">
                Sri Lanka's Finest <br />
                <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-green-light to-green">Ocean Harvest</span>
              </h1>
              <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-slate-300 sm:text-lg font-light mb-12">
                Ethically sourced and meticulously processed for the world's most discerning wholesale markets.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/products" className="group relative overflow-hidden rounded-full bg-green px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-brown-dark transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(8,247,190,0.4)] w-full sm:w-auto">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Explore Catalogue <ArrowRightIcon size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                </Link>
                <Link href="/about" className="group flex items-center justify-center gap-3 rounded-full border border-glass-border bg-glass px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/30 w-full sm:w-auto">
                  Our Heritage
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Bottom Stats/Info Bar overlay on hero */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }} 
            className="absolute bottom-0 inset-x-0 mx-auto max-w-7xl px-5 sm:px-8 hidden md:block"
          >
            <div className="grid grid-cols-4 bg-glass backdrop-blur-xl border-t border-x border-glass-border rounded-t-2xl divide-x divide-glass-border shadow-2xl">
              {[['05', 'Specialist Products'], ['01', 'Island Source'], ['B2B', 'Export Focused'], ['Global', 'Market Ready']].map(([value, label]) => (
                <div key={label} className="px-6 py-8 text-center group cursor-default transition-colors hover:bg-white/5">
                  <p className="font-serif text-4xl text-green-light transition-transform duration-500 group-hover:scale-110">{value}</p>
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-200 transition-colors">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Quality Section - Split Layout */}
        <section className="py-24 sm:py-32 bg-brown relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green/5 to-transparent blur-3xl opacity-50 pointer-events-none" />
          
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:px-10 relative z-10">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-green to-peach/30 rounded-2xl opacity-20 blur-xl transition-all duration-700 group-hover:opacity-40" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/5] sm:aspect-square md:aspect-[4/5]">
                <img src="/image3.JPG" alt="Boat travelling across Sri Lankan brown waters" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0" />
                <div className="absolute inset-0 bg-brown-dark/20 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0" />
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-green/30 bg-green/5 mb-8">
                <span className="h-2 w-2 rounded-full bg-green animate-pulse" />
                <p className="text-[10px] font-extrabold uppercase leading-none tracking-[0.25em] text-green">The Sri Ganesh Standard</p>
              </div>
              <h2 className="font-serif text-4xl leading-[1.15] text-white sm:text-5xl lg:text-6xl">
                Sourced with care.<br />
                <span className="text-slate-400">Prepared for the world.</span>
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-slate-300 font-light">
                Operating with decades of collective expertise, we are a Sri Lankan marine products export company built around unwavering quality, transparency, and durable trade partnerships.
              </p>
              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {['Reliable supplier relationships', 'Specification-led grading', 'Export-ready documentation', 'Flexible order discussions'].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i, duration: 0.5 }}
                    key={item} className="flex gap-4 text-sm font-medium text-slate-200 items-start group"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green/10 text-green mt-0.5 border border-green/20 transition-transform group-hover:scale-110 group-hover:bg-green group-hover:text-brown-dark">
                      <CheckIcon size={14} />
                    </span> 
                    <span className="leading-tight pt-1">{item}</span>
                  </motion.div>
                ))}
              </div>
              <Link href="/about" className="group mt-14 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-green hover:text-green-light transition-colors relative">
                Discover our story 
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-green/10 transition-transform group-hover:translate-x-2">
                  <ArrowRightIcon size={14} />
                </span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Featured Products Collection */}
        <section className="bg-brown-dark py-24 sm:py-32 relative">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-glass-border to-transparent" />
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col text-center lg:text-left lg:flex-row justify-between gap-6 pb-12 items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-green">Our Collection</p>
                <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl">Marine products of distinction.</h2>
              </div>
              <Link href="/products" className="group inline-flex items-center justify-center gap-3 rounded-full border border-glass-border px-6 py-3 text-xs font-bold uppercase tracking-[0.1em] text-slate-300 hover:text-white hover:bg-glass transition-all">
                View full catalogue <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-1 text-green" />
              </Link>
            </div>
            
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {products.slice(0, 3).map((product, i) => (
                <motion.article 
                  key={product.name} 
                  initial={{ opacity: 0, y: 40 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, margin: "-50px" }} 
                  transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-brown border border-glass-border relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(8,247,190,0.2)] hover:border-green/30"
                >
                  <div className="overflow-hidden relative h-72">
                    <div className="absolute inset-0 bg-brown-dark/40 group-hover:bg-transparent transition-colors z-10 duration-500" />
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute top-4 right-4 z-20 rounded-full border border-glass-border bg-glass backdrop-blur-md px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-green shadow-2xl">
                      {product.tag}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow relative z-20 bg-gradient-to-t from-brown via-brown to-brown/95">
                    <h3 className="font-serif text-2xl text-white group-hover:text-green-light transition-colors">{product.name}</h3>
                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hidden">{product.species}</p>
                    <p className="mt-5 text-sm leading-relaxed text-slate-400 mb-8 flex-grow line-clamp-3 font-light">{product.description}</p>
                    <Link href="/contact" className="mt-auto inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-green hover:text-white transition-colors w-fit group/btn">
                      Request details 
                      <span className="block h-[1px] w-4 bg-green transition-all group-hover/btn:w-8" />
                      <ArrowRightIcon size={14} className="-ml-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Global Trade & Philosophy Section */}
        <section className="bg-brown py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green/5 via-brown to-brown blur-2xl" />
          
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                className="flex flex-col gap-6 items-start rounded-3xl border border-glass-border bg-glass backdrop-blur-xl p-10 hover:bg-white/5 transition-colors"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green/10 border border-green/20 text-green shadow-[0_0_20px_rgba(8,247,190,0.15)]">
                  <Globe2Icon size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-3xl text-white mb-4">International Outlook</h3>
                  <p className="text-[15px] leading-relaxed text-slate-400 font-light">
                    Supplying export buyers with a direct Sri Lankan source. Navigate international trade seamlessly with our globally compliant documentation and packaging standards.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }} 
                className="flex flex-col gap-6 items-start rounded-3xl border border-glass-border bg-glass backdrop-blur-xl p-10 hover:bg-white/5 transition-colors"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-peach/10 border border-peach/20 text-peach shadow-[0_0_20px_rgba(255,111,97,0.15)]">
                  <ShieldCheckIcon size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-3xl text-white mb-4">Partnership Mindset</h3>
                  <p className="text-[15px] leading-relaxed text-slate-400 font-light">
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
