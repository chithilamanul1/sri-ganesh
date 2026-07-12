import React from 'react'
import { ArrowRightIcon, CheckIcon, Globe2Icon, ShieldCheckIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { products } from '../data/products'
import { SiteFooter, SiteHeader } from '../components/SiteChrome'
export function HomePage() {
  return (
    <div className="min-h-screen bg-peach text-brown">
      <SiteHeader overlay />
      <main>
        <section className="relative flex min-h-[680px] items-end overflow-hidden bg-brown pb-14 pt-28 sm:min-h-[720px] sm:pb-20">
          <img src="/hero-bg.jpg" alt="Deep blue Indian Ocean water along the Sri Lankan coast" className="absolute inset-0 h-full w-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-brown-dark/65" aria-hidden="true" />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="max-w-3xl">
              <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase leading-none tracking-[0.22em] text-green-light">
                <span className="h-px w-10 bg-green" /> Sri Lankan marine exports
              </p>
              <h1 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl">
                From the Indian Ocean, <span className="block text-green-light">to your market.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/85 sm:text-base">
                Sri Ganesh Exports supplies carefully selected, processed marine delicacies to wholesale buyers worldwide — with integrity from shoreline to shipment.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/products" className="inline-flex items-center gap-2 bg-green px-6 py-4 text-xs font-extrabold uppercase tracking-[0.13em] text-white transition hover:bg-green-dark">
                  Explore our products <ArrowRightIcon size={16} />
                </Link>
                <Link to="/about" className="inline-flex items-center gap-2 border border-white/40 px-6 py-4 text-xs font-extrabold uppercase tracking-[0.13em] text-white transition hover:border-green-light hover:text-green-light">
                  Our export promise
                </Link>
              </div>
            </motion.div>
            <div className="mt-16 grid max-w-4xl grid-cols-2 border-t border-white/20 sm:grid-cols-4">
              {[['05', 'Specialist products'], ['01', 'Island source'], ['B2B', 'Export focused'], ['Global', 'Market ready']].map(([value, label]) => (
                <div key={label} className="border-r border-white/20 px-3 py-5 first:pl-0 sm:px-6">
                  <p className="font-serif text-2xl text-green-light sm:text-3xl">{value}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.13em] text-white/70">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
            <img src="/about-bg.jpg" alt="Boat travelling across Sri Lankan ocean waters" className="h-[430px] w-full object-cover sm:h-[520px] rounded-lg shadow-xl" />
            <div className="max-w-xl">
              <p className="text-[11px] font-extrabold uppercase leading-none tracking-[0.22em] text-green">The Sri Ganesh standard</p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.08] tracking-[-0.01em] text-brown sm:text-5xl">
                Sourced with care.<span className="block">Prepared for the world.</span>
              </h2>
              <p className="mt-6 text-base leading-8 text-brown/80">
                We are a Sri Lankan marine products export company built around quality, transparency, and lasting trade partnerships.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {['Reliable supplier relationships', 'Specification-led grading', 'Export-ready documentation', 'Flexible order discussions'].map((item) => (
                  <div key={item} className="flex gap-3 text-sm font-semibold text-brown-dark">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-green rounded-full text-white"><CheckIcon size={13} /></span> {item}
                  </div>
                ))}
              </div>
              <Link to="/about" className="mt-9 inline-flex items-center gap-2 border-b-2 border-green pb-2 text-xs font-extrabold uppercase tracking-[0.12em] text-brown">
                Discover our story <ArrowRightIcon size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-peach-dark py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col justify-between gap-5 border-b border-brown/20 pb-8 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-green">Our range</p>
                <h2 className="mt-4 font-serif text-4xl text-brown sm:text-5xl">Marine products of distinction.</h2>
              </div>
              <Link to="/products" className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-brown">
                View full catalogue <ArrowRightIcon size={16} />
              </Link>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.slice(0, 3).map((product) => (
                <article key={product.name} className="overflow-hidden bg-peach-light rounded-md shadow-sm">
                  <img src={product.image} alt={product.name} className="h-52 w-full object-cover" />
                  <div className="p-6">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-green">{product.tag}</p>
                    <h3 className="mt-3 font-serif text-2xl text-brown">{product.name}</h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.1em] text-brown/60">{product.species}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brown py-16 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-2 lg:px-10">
            <div className="flex gap-4">
              <Globe2Icon className="shrink-0 text-green-light" />
              <p className="text-sm leading-6 text-white/75">
                <strong className="block text-white">International outlook</strong>
                Supplying export buyers with a Sri Lankan source they can engage directly.
              </p>
            </div>
            <div className="flex gap-4">
              <ShieldCheckIcon className="shrink-0 text-green-light" />
              <p className="text-sm leading-6 text-white/75">
                <strong className="block text-white">Partnership mindset</strong>
                Straightforward communication for repeatable, long-term trade.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
