"use client";

import { LeafIcon, AnchorIcon, SproutIcon, CheckIcon, ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PageHero } from '../../src/components/PageHero'

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-transparent text-slate-700">
      <main>
        <PageHero
          eyebrow="Our Operations & Initiatives"
          title="Connecting Sustainable Marine Resources with Global Markets"
          description="Developing a sustainable marine product supply chain by combining responsible sourcing, quality assurance, and international market standards."
          image="/sandfish.jpg"
        />
        
        {/* 1. Sustainable Sea Cucumber Farming Project */}
        <section className="bg-transparent relative overflow-hidden py-20 sm:py-32">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-peach/10 text-peach border border-peach/20">
                  <LeafIcon size={24} />
                </div>
                <h2 className="font-serif text-3xl text-brown-dark sm:text-4xl">1. Sea Cucumber Farming</h2>
              </div>
              <h3 className="text-xl text-green-dark uppercase tracking-widest font-bold text-[11px] mb-6">Building the Future of Responsible Marine Aquaculture</h3>
              <p className="max-w-3xl text-lg text-slate-600 font-light leading-relaxed mb-6">
                Our Sea Cucumber Farming Project is an active initiative designed to establish a sustainable aquaculture system for the production of high-value sea cucumber species. This represents our commitment to reducing pressure on natural marine resources while creating a reliable and environmentally responsible source of premium products.
              </p>
              <p className="max-w-3xl text-lg text-slate-600 font-light leading-relaxed mb-12">
                Through modern farming practices, scientific management, and sustainable production methods, we aim to contribute to the growth of the marine aquaculture industry while supporting coastal economic development.
              </p>

              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-2xl font-serif text-brown-dark mb-6">Why We Need Farming</h3>
                  <div className="space-y-6">
                    {[
                      { title: "Meeting Growing Global Demand", text: "Sustainable farming provides a reliable solution to meet increasing demand without damaging natural populations." },
                      { title: "Protecting Wild Resources", text: "Farming provides an alternative production method that reduces dependence on wild harvesting and supports marine conservation." },
                      { title: "Sustainable Economic Opportunities", text: "Creates new opportunities for coastal communities by generating employment, improving livelihoods, and new income sources." },
                      { title: "Long-Term Production Stability", text: "Aquaculture allows controlled production, ensuring consistent supply throughout the year while maintaining quality." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green/20 text-green-dark flex items-center justify-center mt-1">
                          <CheckIcon size={12} strokeWidth={3} />
                        </span>
                        <div>
                          <h4 className="font-bold text-brown-dark text-[15px]">{item.title}</h4>
                          <p className="text-sm text-slate-600 font-light mt-1">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-serif text-brown-dark mb-6">How We Develop It</h3>
                  <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-glass-border shadow-sm space-y-6">
                    {[
                      { num: "1", title: "Selecting Suitable Locations", text: "Identifying marine environments with appropriate water quality, depth, and ecology." },
                      { num: "2", title: "Establishing Farming Systems", text: "Using modern methods like sea pens and controlled farming areas." },
                      { num: "3", title: "Stocking Healthy Juveniles", text: "Introducing high-quality juveniles for better survival and sustainable production." },
                      { num: "4", title: "Monitoring & Management", text: "Regular monitoring of water quality and growth performance." },
                      { num: "5", title: "Sustainable Harvesting", text: "Responsible harvesting and preparation according to international standards." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <span className="text-green-dark font-serif text-2xl font-bold opacity-80">{item.num}</span>
                        <div>
                          <h4 className="font-bold text-brown-dark text-[15px]">{item.title}</h4>
                          <p className="text-sm text-slate-600 font-light">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. Sea Cucumber Hatchery Project */}
        <section className="bg-transparent border-t border-glass-border py-20 sm:py-32 relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green/5 to-transparent blur-3xl pointer-events-none" />
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green/10 text-green-dark border border-green/20">
                  <SproutIcon size={24} />
                </div>
                <h2 className="font-serif text-3xl text-brown-dark sm:text-4xl">2. Sea Cucumber Hatchery</h2>
              </div>
              <h3 className="text-xl text-brown-dark uppercase tracking-widest font-bold text-[11px] mb-6">Establishing a Foundation for Sustainable Aquaculture Growth</h3>
              <p className="max-w-3xl text-lg text-slate-600 font-light leading-relaxed mb-6">
                Our future Sea Cucumber Hatchery Project is planned as a key component of our long-term aquaculture development strategy. The hatchery will provide a controlled breeding and juvenile production facility to support our farming operations and contribute to the sustainable expansion of the sea cucumber industry.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-12 mb-16">
                <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-glass-border shadow-sm">
                  <h3 className="text-xl font-serif text-brown-dark mb-4">Why We Need a Hatchery</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-sm text-slate-600 font-light"><CheckIcon className="text-green-dark shrink-0" size={16} /> Reliable production of quality juveniles to reduce dependency on natural sources.</li>
                    <li className="flex gap-3 text-sm text-slate-600 font-light"><CheckIcon className="text-green-dark shrink-0" size={16} /> Supporting large-scale farming expansion with a stable supply chain base.</li>
                    <li className="flex gap-3 text-sm text-slate-600 font-light"><CheckIcon className="text-green-dark shrink-0" size={16} /> Conservation of natural populations by reducing wild juvenile collection.</li>
                    <li className="flex gap-3 text-sm text-slate-600 font-light"><CheckIcon className="text-green-dark shrink-0" size={16} /> Improving production quality through controlled genetics, health, and growth management.</li>
                  </ul>
                </div>
                <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-glass-border shadow-sm">
                  <h3 className="text-xl font-serif text-brown-dark mb-4">Hatchery Development Plan</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-sm text-slate-600 font-light"><span className="text-green-dark font-bold shrink-0">1.</span> Broodstock Management: Selecting healthy adult sea cucumbers as breeding stock.</li>
                    <li className="flex gap-3 text-sm text-slate-600 font-light"><span className="text-green-dark font-bold shrink-0">2.</span> Controlled Spawning & Breeding: Advanced techniques to produce larvae.</li>
                    <li className="flex gap-3 text-sm text-slate-600 font-light"><span className="text-green-dark font-bold shrink-0">3.</span> Larval Rearing System: Specialized tanks with managed water quality and nutrition.</li>
                    <li className="flex gap-3 text-sm text-slate-600 font-light"><span className="text-green-dark font-bold shrink-0">4.</span> Juvenile Growth: Nurturing young cucumbers until ready for transfer.</li>
                    <li className="flex gap-3 text-sm text-slate-600 font-light"><span className="text-green-dark font-bold shrink-0">5.</span> Farm Integration: Direct support for our farming and export supply chain.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. Marine Product Export Project */}
        <section className="bg-transparent border-t border-glass-border relative overflow-hidden py-20 sm:py-32">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green/10 to-transparent blur-3xl opacity-50 pointer-events-none" />
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green/10 text-green-dark border border-green/20">
                  <AnchorIcon size={24} />
                </div>
                <h2 className="font-serif text-3xl text-brown-dark sm:text-4xl">3. Sea Cucumber Export</h2>
              </div>
              <p className="max-w-3xl text-lg text-slate-600 font-light leading-relaxed mb-6">
                Our Marine Product Export Project represents our commitment to delivering high-quality, responsibly sourced marine products to international markets. Through strong supply chain management, quality control, and sustainable resource utilization, we aim to become a trusted supplier of premium marine products worldwide.
              </p>
              <p className="max-w-3xl text-lg text-slate-600 font-light leading-relaxed mb-12">
                Our export operations focus on valuable sea cucumber species and other marine products with strong international demand. We carefully select, process, and prepare our products according to global seafood quality requirements while maintaining environmental responsibility throughout the value chain.
              </p>
              
              <h3 className="text-xl font-serif text-brown-dark mb-6">Our Export Products</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  { title: "Sand Fish (Holothuria scabra)", text: "One of the most commercially valuable sea cucumber species in the global market. Highly recognized for its premium quality, nutritional benefits, and superior market demand." },
                  { title: "Disco / Brown Fish (Holothuria spinifera)", text: "An economically important species valued for its unique characteristics, excellent quality, and increasing demand among international seafood consumers." },
                  { title: "Baby Curry Fish (Stichopus naso)", text: "A valuable marine resource with significant potential in sustainable aquaculture and export markets due to stabilization quality." },
                  { title: "Flower Tiger (Bohadschia sp.)", text: "Recognized for their contribution to the industry. Their unique biological characteristics and market acceptance make them an important product." },
                  { title: "Top Shell Meat", text: "Processed with careful attention to hygiene, quality, and international food safety standards to meet the requirements of global seafood markets." }
                ].map((product, i) => (
                  <div key={i} className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-glass-border shadow-sm">
                    <h4 className="font-bold text-green-dark mb-2">{product.title}</h4>
                    <p className="text-sm text-slate-600 font-light">{product.text}</p>
                  </div>
                ))}
              </div>

              <div className="bg-green-dark text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                <h3 className="text-2xl font-serif mb-4 relative z-10">Our Export Commitment</h3>
                <p className="text-[15px] font-light leading-relaxed relative z-10">
                  We focus on developing a sustainable marine product supply chain by combining responsible sourcing, quality assurance, and international market standards. Our goal is to deliver reliable, premium marine products while protecting marine ecosystems for future generations.
                </p>
              </div>

              <div className="mt-20 text-center rounded-3xl border border-glass-border bg-white/60 p-12 backdrop-blur-md shadow-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green/10 via-transparent to-transparent opacity-60 pointer-events-none" />
                <h3 className="font-serif text-3xl sm:text-4xl text-brown-dark relative z-10 drop-shadow-sm">Our Long-Term Vision</h3>
                <p className="mt-6 max-w-3xl mx-auto text-[15px] leading-relaxed text-slate-600 font-light relative z-10">
                  Through the integration of Sustainable Sea Cucumber Farming, Advanced Hatchery Development, and Marine Product Export, we aim to establish a complete and sustainable marine aquaculture ecosystem.
                </p>
                <p className="mt-4 max-w-3xl mx-auto text-[15px] leading-relaxed text-slate-600 font-light relative z-10">
                  Our vision is to become a leading organization in sea cucumber production by combining innovation, environmental responsibility, and international market excellence while contributing to the future of sustainable seafood production.
                </p>
                <div className="mt-10 relative z-10">
                  <Link href="/contact" className="inline-flex items-center gap-3 bg-green-dark px-8 py-4 text-xs font-extrabold uppercase tracking-[0.15em] text-white transition-all hover:bg-green rounded-full shadow-[0_0_20px_rgba(44,110,67,0.3)] hover:scale-105">
                    Become a Partner <ArrowRightIcon size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  )
}
