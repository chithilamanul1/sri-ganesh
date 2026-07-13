"use client";

import { ArrowRightIcon, CheckIcon, Globe2Icon, ShieldCheckIcon } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { products } from '../src/data/products'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-transparent text-slate-700 font-sans selection:bg-green selection:text-white">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-32 md:pb-40">
          <video autoPlay loop muted playsInline src="/IMG_2293.MOV" poster="/sandfish.jpg" className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/70 to-transparent" aria-hidden="true" />
          
          <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 flex flex-col items-center w-full my-auto text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-green" /> 
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] text-green">
                  Premium Marine Products
                </p>
                <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-green" />
              </div>
              <h1 className="font-serif text-5xl leading-[1.1] text-brown-dark mb-6 sm:text-7xl lg:text-8xl drop-shadow-sm">
                Sri Lanka's Finest <br />
                <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-green to-green-dark">Ocean Harvest</span>
              </h1>
              <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-lg font-light mb-12">
                Combining Sri Lanka’s natural marine resources with responsible aquaculture innovation to create a sustainable future for global seafood markets.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/products" className="group relative overflow-hidden rounded-full bg-green-dark px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(44,110,67,0.3)] w-full sm:w-auto shadow-md">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Explore Catalogue <ArrowRightIcon size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                </Link>
                <Link href="/about" className="group flex items-center justify-center gap-3 rounded-full border border-glass-border bg-white/40 px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-brown-dark backdrop-blur-md transition-all hover:bg-white/60 hover:border-brown/20 w-full sm:w-auto shadow-sm">
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
            <div className="grid grid-cols-4 bg-white/60 backdrop-blur-xl border-t border-x border-glass-border rounded-t-2xl divide-x divide-glass-border shadow-2xl">
              {[['01', 'Export Trade'], ['02', 'Sea Cucumber Farm'], ['03', 'Hatchery Core'], ['B2B', 'Global Supply']].map(([value, label]) => (
                <div key={label} className="px-6 py-8 text-center group cursor-default transition-colors hover:bg-white/80">
                  <p className="font-serif text-4xl text-green-dark transition-transform duration-500 group-hover:scale-110">{value}</p>
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-brown-dark transition-colors">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Quality Section - Split Layout */}
        <section className="py-24 sm:py-32 bg-transparent relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green/10 to-transparent blur-3xl opacity-50 pointer-events-none" />
          
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:px-10 relative z-10">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-green to-peach/50 rounded-2xl opacity-30 blur-xl transition-all duration-700 group-hover:opacity-50" />
              <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/5] sm:aspect-square md:aspect-[4/5]">
                <img src="/sandfish.jpg" alt="Premium Sand Fish" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0" />
                <div className="absolute inset-0 bg-peach-light/20 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0" />
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-green-dark/30 bg-white/60 backdrop-blur-md mb-8 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-green-dark animate-pulse" />
                <p className="text-[10px] font-extrabold uppercase leading-none tracking-[0.25em] text-green-dark">The Sri Ganesh Standard</p>
              </div>
              <h2 className="font-serif text-4xl leading-[1.15] text-brown-dark sm:text-5xl lg:text-6xl">
                Sourced with care.<br />
                <span className="text-slate-500">Prepared for the world.</span>
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-slate-600 font-light">
                Operating with decades of collective expertise, we are a Sri Lankan marine products export company built around unwavering quality, transparency, and durable trade partnerships.
              </p>
              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {['Reliable supplier relationships', 'Specification-led grading', 'Export-ready documentation', 'Flexible order discussions'].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i, duration: 0.5 }}
                    key={item} className="flex gap-4 text-sm font-medium text-slate-700 items-start group"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green/10 text-green-dark mt-0.5 border border-green/30 transition-transform group-hover:scale-110 group-hover:bg-green-dark group-hover:text-white">
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
        <section className="bg-transparent py-24 sm:py-32 relative">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-glass-border to-transparent" />
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col text-center lg:text-left lg:flex-row justify-between gap-6 pb-12 items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-green-dark">Our Collection</p>
                <h2 className="mt-4 font-serif text-4xl text-brown-dark sm:text-5xl">Marine products of distinction.</h2>
              </div>
              <Link href="/products" className="group inline-flex items-center justify-center gap-3 rounded-full border border-green-dark/30 bg-white/60 backdrop-blur-md px-6 py-3 text-xs font-bold uppercase tracking-[0.1em] text-brown-dark hover:text-green-dark hover:bg-white transition-all shadow-sm">
                View full catalogue <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-1" />
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
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white/60 backdrop-blur-md border border-glass-border relative transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-green/30"
                >
                  <div className="overflow-hidden relative h-72">
                    <div className="absolute inset-0 bg-transparent group-hover:bg-white/10 transition-colors z-10 duration-500" />
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute top-4 right-4 z-20 rounded-full border border-glass-border bg-white/80 backdrop-blur-md px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-green-dark shadow-sm">
                      {product.tag}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow relative z-20 bg-gradient-to-t from-white via-white to-white/95">
                    <h3 className="font-serif text-2xl text-brown-dark group-hover:text-green-dark transition-colors">{product.name}</h3>
                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hidden">{product.species}</p>
                    <p className="mt-5 text-sm leading-relaxed text-slate-600 mb-8 flex-grow line-clamp-3 font-light">{product.description}</p>
                    <Link href="/contact" className="mt-auto inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-green border-b border-transparent hover:border-green-dark hover:text-green-dark transition-all w-fit group/btn pb-0.5">
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
        <section className="bg-transparent py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/80 via-transparent to-transparent blur-2xl" />
          
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                className="flex flex-col gap-6 items-start rounded-3xl border border-glass-border bg-white/60 backdrop-blur-xl p-10 hover:bg-white/80 transition-colors shadow-sm"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green/10 border border-green/30 text-green-dark shadow-sm">
                  <Globe2Icon size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-3xl text-brown-dark mb-4">International Outlook</h3>
                  <p className="text-[15px] leading-relaxed text-slate-600 font-light">
                    Supplying export buyers with a direct Sri Lankan source. Navigate international trade seamlessly with our globally compliant documentation and packaging standards.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }} 
                className="flex flex-col gap-6 items-start rounded-3xl border border-glass-border bg-white/60 backdrop-blur-xl p-10 hover:bg-white/80 transition-colors shadow-sm"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-peach/10 border border-peach/30 text-peach shadow-sm">
                  <ShieldCheckIcon size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-3xl text-brown-dark mb-4">Partnership Mindset</h3>
                  <p className="text-[15px] leading-relaxed text-slate-600 font-light">
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
