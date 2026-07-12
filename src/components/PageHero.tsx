"use client";

import { motion } from 'framer-motion'

type PageHeroProps = { eyebrow: string; title: string; description: string; image: string }
export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative isolate flex flex-col justify-center min-h-[60vh] overflow-hidden bg-brown pt-24 pb-16">
      <img src={image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30 grayscale mix-blend-screen" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brown-dark/90 via-brown/80 to-brown" aria-hidden="true" />
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl border-l-[3px] border-green pl-6 sm:pl-10"
        >
          <p className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-green">
            {eyebrow}
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-[1.1] text-white sm:text-6xl drop-shadow-lg">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-slate-300 font-light">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
