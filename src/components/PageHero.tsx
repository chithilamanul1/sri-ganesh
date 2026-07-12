import React from 'react'
type PageHeroProps = { eyebrow: string; title: string; description: string; image: string }
export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brown">
      <img src={image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45" />
      <div className="absolute inset-0 -z-10 bg-brown-dark/70" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="max-w-3xl">
          <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase leading-none tracking-[0.22em] text-green-light">
            <span className="h-px w-9 bg-green" /> {eyebrow}
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-[1.04] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/80 sm:text-base sm:leading-7">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
