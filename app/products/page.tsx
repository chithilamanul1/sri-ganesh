"use client";

import { ArrowRightIcon, ArrowUpRightIcon, PackageCheckIcon } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PageHero } from '../../src/components/PageHero'
import { products } from '../../src/data/products'

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-brown text-slate-200">
      
      <main>
        <PageHero
          eyebrow="Export catalogue"
          title="Marine products of distinction."
          description="A selected range of dried marine products for specialist wholesale buyers. Speak with us about current availability, grades, and packing formats."
          image="/IMG_2291.jpeg"
        />
        <section className="bg-brown relative overflow-hidden py-16 sm:py-20 lg:py-24">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green/5 to-transparent blur-3xl pointer-events-none" />
          
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 flex items-start gap-5 rounded-2xl border border-glass-border bg-glass p-6 backdrop-blur-md hover:bg-white/5 transition-colors max-w-3xl">
              <PackageCheckIcon className="shrink-0 text-green w-6 h-6" />
              <p className="max-w-2xl text-[15px] leading-relaxed text-slate-300 font-light">
                All products are supplied subject to availability and export requirements. Enquire with your preferred specifications, destination, and expected volume.
              </p>
            </motion.div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <motion.article 
                  key={product.name} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, margin: "-50px" }} 
                  transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                  className={`group flex h-full flex-col overflow-hidden rounded-2xl bg-brown-dark border border-glass-border relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(8,247,190,0.15)] hover:border-green/30 ${index === 0 ? 'lg:col-span-2 md:col-span-2 lg:flex-row' : ''}`}
                >
                  <div className={`overflow-hidden relative ${index === 0 ? 'lg:w-1/2 min-h-[300px]' : 'h-72'}`}>
                    <div className="absolute inset-0 bg-brown-dark/40 group-hover:bg-transparent transition-colors z-10 duration-500" />
                    <img src={product.image} alt={product.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0" />
                    <div className="absolute top-4 right-4 z-20 rounded-full border border-glass-border bg-glass backdrop-blur-md px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-green shadow-2xl">
                      {product.tag}
                    </div>
                  </div>
                  <div className={`flex flex-col flex-1 p-8 relative z-20 bg-gradient-to-t from-brown-dark via-brown-dark/95 to-transparent ${index === 0 ? 'lg:w-1/2 lg:bg-brown' : ''}`}>
                    <div className="flex justify-between gap-3 mb-2">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{product.species}</p>
                      <ArrowUpRightIcon size={18} className="text-green opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                    </div>
                    <h2 className="font-serif text-3xl text-white group-hover:text-green-light transition-colors">{product.name}</h2>
                    <p className="mt-5 text-[15px] leading-relaxed text-slate-400 font-light max-w-xl">{product.description}</p>
                    <div className="mt-auto pt-6 border-t border-glass-border">
                      <p className="text-xs font-medium text-slate-300 mb-6">{product.specification}</p>
                      <Link href="/contact" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-green hover:text-white transition-colors w-fit group/btn">
                        Enquire about this product
                        <span className="block h-[1px] w-4 bg-green transition-all group-hover/btn:w-8" />
                        <ArrowRightIcon size={14} className="-ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
        
        <section className="bg-brown py-24 text-center relative overflow-hidden border-t border-glass-border">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green/10 via-brown to-brown blur-2xl pointer-events-none" />
          
          <div className="mx-auto max-w-2xl px-5 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green">Need a quote?</p>
              <h2 className="mt-6 font-serif text-4xl text-white mb-10">Let’s talk through your requirements.</h2>
              <Link href="/contact" className="group inline-flex items-center justify-center gap-3 rounded-full bg-green px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-brown-dark transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(8,247,190,0.4)]">
                Send an enquiry <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
    </div>
  )
}
