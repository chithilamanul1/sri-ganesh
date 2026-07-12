import React from 'react'
import { CheckIcon, WavesIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { SiteFooter, SiteHeader } from '../components/SiteChrome'
export function AboutPage() {
  return (
    <div className="min-h-screen bg-peach text-brown">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="About SRI GANESH EXPORT"
          title="A Legacy Built on Trust Since 1972"
          description="SRI GANESH EXPORT is a Sri Lankan seafood export company with a proud family heritage spanning more than five decades."
          image="/about-hero.jpg"
        />
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-10">
            <div className="relative">
              <img src="/about-legacy.jpg" alt="Aerial view of a boat moving across the ocean" className="h-[440px] w-full object-cover rounded-lg shadow-xl" />
              <div className="absolute -bottom-5 -right-2 bg-brown p-6 text-white sm:-right-6 rounded-md shadow-lg">
                <WavesIcon className="text-green-light" />
                <p className="mt-3 max-w-[190px] font-serif text-xl">A legacy shaped by the sea.</p>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-extrabold uppercase leading-none tracking-[0.22em] text-green">Our History</p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.08] tracking-[-0.01em] text-brown sm:text-5xl">
                Continuing a legacy of trust and quality.
              </h2>
              <p className="mt-6 text-base leading-8 text-brown/80">
                The foundation of our business was established in 1972 by our founder’s father through Vinayaga Stores, a trusted name built on commitment, quality, and strong relationships with customers and suppliers.
              </p>
              <p className="mt-4 text-base leading-8 text-brown/80">
                Continuing this legacy, SRI GANESH EXPORT was officially established in 2004 with a vision to bring Sri Lanka’s premium marine resources to international markets. Over the years, the company has developed strong expertise in sourcing, processing, and exporting high-quality seafood products, especially dried sea cucumber (Beche-de-mer).
              </p>
            </div>
          </div>
        </section>
        <section className="bg-peach-dark py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-green">Our Experience & Expertise</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                ['Premium Quality', 'Premium product quality meeting international standards.'],
                ['Reliable Sourcing', 'Reliable sourcing networks and careful processing methods.'],
                ['Global Reach', 'Long-term relationships with global buyers.'],
              ].map(([title, text]) => (
                <article key={title} className="bg-peach-light p-7 rounded-md shadow-sm">
                  <span className="flex h-6 w-6 items-center justify-center bg-green rounded-full text-white">
                    <CheckIcon size={14} />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl text-brown">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-brown/80">{text}</p>
                </article>
              ))}
            </div>
            
            <div className="mt-16 grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="font-serif text-3xl text-brown">Our Mission</h3>
                <p className="mt-4 text-brown/80 leading-7">To become a trusted global seafood supplier by combining traditional business values with modern export practices while delivering high-quality marine products to international markets.</p>
              </div>
              <div>
                <h3 className="font-serif text-3xl text-brown">Our Vision</h3>
                <p className="mt-4 text-brown/80 leading-7">To expand Sri Lankan seafood exports worldwide and become a recognised name in the global dried seafood industry.</p>
              </div>
            </div>

            <div className="mt-16 text-center border-t border-brown/20 pt-16">
              <h3 className="font-serif text-3xl text-brown">Trust – Quality – Reliability – Commitment</h3>
              <p className="mt-4 text-brown/80">Our deep industry knowledge allows us to select and supply quality marine products that meet the expectations of international customers.</p>
              <Link to="/contact" className="mt-8 inline-flex bg-green px-6 py-4 text-xs font-extrabold uppercase tracking-[0.13em] text-white transition hover:bg-green-dark">
                Talk to our export team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
