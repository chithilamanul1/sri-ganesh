"use client";

import { ShieldCheckIcon, ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PageHero } from '../../src/components/PageHero'

const stages = [
  ['01', 'Source & receive', 'We work with trusted local supply channels and inspect product on receipt.'],
  ['02', 'Process & grade', 'Products are cleaned, dried, sorted, and graded to the agreed specification.'],
  ['03', 'Pack & document', 'Packing formats and export documentation are prepared for your destination.'],
  ['04', 'Ship & support', 'We coordinate the final handover and remain available throughout the order.'],
]

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-brown text-slate-200">
      
      <main>
        <PageHero
          eyebrow="Our export process"
          title="A clear path from catch to cargo."
          description="We combine local product knowledge with operational care, so buyers have a clear view of how their order moves through supply."
          image="/IMG_1025.JPG"
        />
        <section className="bg-brown relative overflow-hidden py-20 sm:py-32">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green/5 to-transparent blur-3xl opacity-50 pointer-events-none" />
          
          <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10 relative z-10">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-green">Built for confident trade</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">Direct, considered, and responsive.</h2>
              <div className="mt-10 flex gap-5 rounded-2xl border border-glass-border bg-glass p-6 backdrop-blur-md hover:bg-white/5 transition-colors">
                <ShieldCheckIcon className="shrink-0 text-green w-8 h-8" />
                <p className="text-[15px] leading-relaxed text-slate-300 font-light pt-1">
                  Every enquiry is assessed against buyer requirements before supply and shipment details are confirmed.
                </p>
              </div>
            </motion.div>
            
            <ol className="border-t border-glass-border">
              {stages.map(([number, title, text], i) => (
                <motion.li 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                  key={number} className="group grid grid-cols-[80px_1fr] gap-6 border-b border-glass-border py-10 transition-colors hover:bg-glass px-4 -mx-4 rounded-xl"
                >
                  <span className="font-serif text-4xl text-green/40 transition-colors group-hover:text-green pt-1">{number}</span>
                  <div>
                    <h3 className="text-xl font-serif text-white">{title}</h3>
                    <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-slate-400 font-light">{text}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>
        
        <section className="bg-brown-dark py-24 sm:py-32 relative">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-glass-border to-transparent" />
          
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-12 lg:gap-8 md:grid-cols-3">
              {[
                ['Product specification', 'We discuss product type, grade, size, moisture level, and quantity before confirming an order.'],
                ['Packing & destination', 'Packing formats are considered alongside the destination market and shipping requirements.'],
                ['Order communication', 'Our team remains available for clear, practical updates through the supply process.'],
              ].map(([title, text], i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7 }}
                  key={title} className="rounded-3xl border border-glass-border bg-glass p-8 backdrop-blur-md relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green/10 via-green to-green/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                  <h2 className="font-serif text-2xl text-white mb-4">{title}</h2>
                  <p className="text-[15px] leading-relaxed text-slate-400 font-light">{text}</p>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }} className="mt-16 text-center">
              <Link href="/contact" className="group inline-flex items-center justify-center gap-3 rounded-full bg-green px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-brown-dark transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(8,247,190,0.4)]">
                Discuss your requirements <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
    </div>
  )
}
