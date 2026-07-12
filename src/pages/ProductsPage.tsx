import React from 'react'
import { ArrowRightIcon, ArrowUpRightIcon, PackageCheckIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PageHero } from '../components/PageHero'
import { SiteFooter, SiteHeader } from '../components/SiteChrome'
import { products } from '../data/products'
export function ProductsPage() {
  return (
    <div className="min-h-screen bg-peach text-brown">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Export catalogue"
          title="Marine products of distinction."
          description="A selected range of dried marine products for specialist wholesale buyers. Speak with us about current availability, grades, and packing formats."
          image="/products-hero.jpg"
        />
        <section className="bg-peach-dark py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mb-8 flex items-start gap-4 border-l-2 border-green pl-5">
              <PackageCheckIcon className="mt-1 text-green" />
              <p className="max-w-2xl text-sm leading-7 text-brown/80">
                All products are supplied subject to availability and export requirements. Enquire with your preferred specifications, destination, and expected volume.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <motion.article key={product.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className={`flex h-full flex-col overflow-hidden bg-peach-light rounded-md shadow-sm ${index === 0 ? 'lg:col-span-2' : ''}`}>
                  <img src={product.image} alt={product.name} className="h-60 w-full object-cover sm:h-64" />
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex justify-between gap-3">
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-green">{product.tag}</p>
                      <ArrowUpRightIcon size={18} className="text-green" />
                    </div>
                    <h2 className="mt-4 font-serif text-3xl text-brown">{product.name}</h2>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.11em] text-brown/60">{product.species}</p>
                    <p className="mt-5 text-sm leading-6 text-brown/80">{product.description}</p>
                    <p className="mt-5 border-t border-brown/10 pt-4 text-xs font-semibold leading-5 text-brown">{product.specification}</p>
                    <Link to="/contact" className="mt-6 inline-flex items-center gap-2 self-start text-xs font-extrabold uppercase leading-none tracking-[0.11em] text-brown hover:text-green">
                      Enquire about this product <ArrowRightIcon size={15} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-brown py-16 text-center text-white">
          <div className="mx-auto max-w-2xl px-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-green-light">Need a quote?</p>
            <h2 className="mt-4 font-serif text-4xl">Let’s talk through your requirements.</h2>
            <Link to="/contact" className="mt-7 inline-flex bg-green px-6 py-4 text-xs font-extrabold uppercase tracking-[0.13em] text-white transition hover:bg-green-dark">
              Send an enquiry
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
