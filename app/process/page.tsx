
import { ShieldCheckIcon } from 'lucide-react'
import Link from 'next/link'
import { PageHero } from '../../src/components/PageHero'
const stages = [
  ['01', 'Source & receive', 'We work with trusted local supply channels and inspect product on receipt.'],
  ['02', 'Process & grade', 'Products are cleaned, dried, sorted, and graded to the agreed specification.'],
  ['03', 'Pack & document', 'Packing formats and export documentation are prepared for your destination.'],
  ['04', 'Ship & support', 'We coordinate the final handover and remain available throughout the order.'],
]
export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-peach text-brown">
      
      <main>
        <PageHero
          eyebrow="Our export process"
          title="A clear path from catch to cargo."
          description="We combine local product knowledge with operational care, so buyers have a clear view of how their order moves through supply."
          image="/IMG_1025.JPG"
        />
        <section className="bg-brown py-16 text-white sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-10">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-green-light">Built for confident trade</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Direct, considered, and responsive.</h2>
              <div className="mt-8 flex gap-4 border-l border-green pl-5">
                <ShieldCheckIcon className="shrink-0 text-green-light" />
                <p className="text-sm leading-6 text-white/75">
                  Every enquiry is assessed against buyer requirements before supply and shipment details are confirmed.
                </p>
              </div>
            </div>
            <ol className="border-t border-white/20">
              {stages.map(([number, title, text]) => (
                <li key={number} className="grid grid-cols-[62px_1fr] gap-4 border-b border-white/20 py-7 sm:grid-cols-[78px_1fr]">
                  <span className="font-serif text-3xl text-green-light">{number}</span>
                  <div>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="mt-2 max-w-lg text-sm leading-6 text-white/70">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                ['Product specification', 'We discuss product type, grade, size, moisture level, and quantity before confirming an order.'],
                ['Packing & destination', 'Packing formats are considered alongside the destination market and shipping requirements.'],
                ['Order communication', 'Our team remains available for clear, practical updates through the supply process.'],
              ].map(([title, text]) => (
                <div key={title} className="border-t-2 border-green pt-5">
                  <h2 className="font-serif text-2xl text-brown">{title}</h2>
                  <p className="mt-3 text-sm leading-6 text-brown/80">{text}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="mt-12 inline-flex bg-green px-6 py-4 text-xs font-extrabold uppercase tracking-[0.13em] text-white transition hover:bg-green-dark">
              Discuss your requirements
            </Link>
          </div>
        </section>
      </main>
      
    </div>
  )
}
