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
        
        {/* 1. Marine Product Export Project */}
        <section className="bg-transparent border-t border-glass-border relative overflow-hidden py-20 sm:py-32">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green/10 to-transparent blur-3xl opacity-50 pointer-events-none" />
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green/10 text-green-dark border border-green/20">
                  <AnchorIcon size={24} />
                </div>
                <h2 className="font-serif text-3xl text-brown-dark sm:text-4xl">1. Marine Product Export Project</h2>
              </div>
              <h3 className="text-xl text-green-dark uppercase tracking-widest font-bold text-[11px] mb-6">Connecting Sustainable Marine Resources with Global Markets</h3>
              <p className="max-w-3xl text-lg text-slate-600 font-light leading-relaxed mb-6">
                Our Marine Product Export Project represents our commitment to delivering high-quality, responsibly sourced marine products to international markets. Through strong supply chain management, quality control, and sustainable resource utilization, we aim to become a trusted supplier of premium marine products worldwide.
              </p>
              <p className="max-w-3xl text-lg text-slate-600 font-light leading-relaxed mb-12">
                Our export operations focus on valuable sea cucumber species and other marine products with strong international demand. We carefully select, process, and prepare our products according to global seafood quality requirements while maintaining environmental responsibility throughout the value chain.
              </p>
              
              <h3 className="text-xl font-serif text-brown-dark mb-6">Our Export Products</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  { title: "Sand Fish (Holothuria scabra)", text: "Sand Fish is one of the most commercially valuable sea cucumber species in the global market. Highly recognized for its premium quality, nutritional benefits, and superior market demand, it plays an important role in the international seafood industry." },
                  { title: "Disco / Brown Fish (Holothuria spinifera)", text: "Holothuria spinifera is an economically important sea cucumber species valued for its unique characteristics, excellent quality, and increasing demand among international seafood consumers." },
                  { title: "Baby Curry Fish (Stichopus naso)", text: "Stichopus naso is a valuable marine resource with significant potential in sustainable aquaculture and export markets due to its commercial importance and distinctive quality." },
                  { title: "Flower Tiger (Bohadschia sp.)", text: "Bohadschia species are recognized for their contribution to the sea cucumber industry. Their unique biological characteristics and market acceptance make them an important product within our marine export portfolio." },
                  { title: "Top Shell Meat", text: "Our top shell meat products are processed with careful attention to hygiene, quality, and international food safety standards to meet the requirements of global seafood markets." }
                ].map((product, i) => (
                  <div key={i} className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-glass-border shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-green-dark mb-2">{product.title}</h4>
                    <p className="text-sm text-slate-600 font-light">{product.text}</p>
                  </div>
                ))}
              </div>

              <div className="bg-green-dark text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden mb-16">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                <h3 className="text-2xl font-serif mb-4 relative z-10">Our Export Commitment</h3>
                <p className="text-[15px] font-light leading-relaxed relative z-10">
                  We focus on developing a sustainable marine product supply chain by combining responsible sourcing, quality assurance, and international market standards. Our goal is to deliver reliable, premium marine products while protecting marine ecosystems for future generations.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. Sustainable Sea Cucumber Farming Project */}
        <section className="bg-transparent border-t border-glass-border relative overflow-hidden py-20 sm:py-32">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-peach/10 text-peach border border-peach/20">
                  <LeafIcon size={24} />
                </div>
                <h2 className="font-serif text-3xl text-brown-dark sm:text-4xl">2. Sustainable Sea Cucumber Farming Project</h2>
              </div>
              <h3 className="text-xl text-green-dark uppercase tracking-widest font-bold text-[11px] mb-6">Building the Future of Responsible Marine Aquaculture</h3>
              <p className="max-w-3xl text-lg text-slate-600 font-light leading-relaxed mb-6">
                Our Sea Cucumber Farming Project is an active initiative designed to establish a sustainable aquaculture system for the production of high-value sea cucumber species. This project represents our commitment to reducing pressure on natural marine resources while creating a reliable and environmentally responsible source of premium sea cucumber products.
              </p>
              <p className="max-w-3xl text-lg text-slate-600 font-light leading-relaxed mb-12">
                Through modern farming practices, scientific management, and sustainable production methods, we aim to contribute to the growth of the marine aquaculture industry while supporting coastal economic development.
              </p>

              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-2xl font-serif text-brown-dark mb-6">Why We Need Sea Cucumber Farming</h3>
                  <div className="space-y-6">
                    {[
                      { title: "1. Meeting Growing Global Demand", text: "Sea cucumber is considered a premium seafood product with increasing demand in international markets, particularly in Asia. Sustainable farming provides a reliable solution to meet this growing demand without damaging natural populations." },
                      { title: "2. Protecting Wild Sea Cucumber Resources", text: "Overexploitation has affected natural sea cucumber populations in many regions. Farming provides an alternative production method that reduces dependence on wild harvesting and supports marine conservation." },
                      { title: "3. Creating Sustainable Economic Opportunities", text: "Sea cucumber farming creates new opportunities for coastal communities by generating employment, improving livelihoods, and developing new income sources within the marine economy." },
                      { title: "4. Ensuring Long-Term Production Stability", text: "Aquaculture allows controlled production, ensuring a consistent supply of high-quality sea cucumbers throughout the year while maintaining product quality and availability." }
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

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-serif text-brown-dark mb-6">Benefits of Farming</h3>
                    <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-glass-border shadow-sm space-y-6">
                      
                      <div>
                        <h4 className="font-bold text-green-dark mb-2 text-sm uppercase tracking-wider">Environmental Benefits</h4>
                        <ul className="space-y-2">
                          <li className="flex gap-3 text-sm text-slate-600 font-light">• Supports restoration of natural sea cucumber populations.</li>
                          <li className="flex gap-3 text-sm text-slate-600 font-light">• Reduces pressure on wild marine resources.</li>
                          <li className="flex gap-3 text-sm text-slate-600 font-light">• Improves marine ecosystem health through seabed cleaning and nutrient recycling.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-green-dark mb-2 text-sm uppercase tracking-wider">Economic Benefits</h4>
                        <ul className="space-y-2">
                          <li className="flex gap-3 text-sm text-slate-600 font-light">• Generates employment opportunities in coastal areas.</li>
                          <li className="flex gap-3 text-sm text-slate-600 font-light">• Creates export opportunities and foreign income generation.</li>
                          <li className="flex gap-3 text-sm text-slate-600 font-light">• Develops a sustainable marine farming industry.</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-green-dark mb-2 text-sm uppercase tracking-wider">Business Benefits</h4>
                        <ul className="space-y-2">
                          <li className="flex gap-3 text-sm text-slate-600 font-light">• Ensures a continuous supply of premium sea cucumber products.</li>
                          <li className="flex gap-3 text-sm text-slate-600 font-light">• Provides better control over product quality and production.</li>
                          <li className="flex gap-3 text-sm text-slate-600 font-light">• Creates a foundation for future expansion into large-scale aquaculture.</li>
                        </ul>
                      </div>

                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-serif text-brown-dark mb-6">How We Develop Sea Cucumber Farming</h3>
                    <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-glass-border shadow-sm space-y-6">
                      {[
                        { num: "1", title: "Selecting Suitable Farming Locations", text: "We identify suitable marine environments with appropriate water quality, salinity, depth, and ecological conditions required for healthy sea cucumber growth." },
                        { num: "2", title: "Establishing Farming Systems", text: "Modern farming methods such as sea pens, marine enclosures, and controlled farming areas are developed to provide safe and suitable growth environments." },
                        { num: "3", title: "Stocking Healthy Juveniles", text: "High-quality juvenile sea cucumbers are introduced into farming areas to ensure better survival rates and sustainable production." },
                        { num: "4", title: "Monitoring and Farm Management", text: "Regular monitoring of water quality, growth performance, and environmental conditions ensures healthy development and efficient farm operation." },
                        { num: "5", title: "Sustainable Harvesting and Processing", text: "Mature sea cucumbers are harvested responsibly and prepared according to international processing and export standards." },
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
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. Sea Cucumber Hatchery Project (Future Development) */}
        <section className="bg-transparent border-t border-glass-border py-20 sm:py-32 relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green/5 to-transparent blur-3xl pointer-events-none" />
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green/10 text-green-dark border border-green/20">
                  <SproutIcon size={24} />
                </div>
                <h2 className="font-serif text-3xl text-brown-dark sm:text-4xl">3. Sea Cucumber Hatchery Project <span className="opacity-60 text-xl font-sans font-light italic">(Future Development)</span></h2>
              </div>
              <h3 className="text-xl text-brown-dark uppercase tracking-widest font-bold text-[11px] mb-6">Establishing a Foundation for Sustainable Aquaculture Growth</h3>
              <p className="max-w-3xl text-lg text-slate-600 font-light leading-relaxed mb-6">
                Our future Sea Cucumber Hatchery Project is planned as a key component of our long-term aquaculture development strategy. The hatchery will provide a controlled breeding and juvenile production facility to support our farming operations and contribute to the sustainable expansion of the sea cucumber industry.
              </p>
              <p className="max-w-3xl text-lg text-slate-600 font-light leading-relaxed mb-6">
                By developing advanced hatchery capabilities, we aim to create a complete production cycle — from breeding and juvenile production to farming and international export.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-12 mb-16">
                <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-glass-border shadow-sm">
                  <h3 className="text-xl font-serif text-brown-dark mb-6">Why We Need a Sea Cucumber Hatchery</h3>
                  <div className="space-y-6">
                    {[
                      { title: "1. Reliable Production of Quality Juveniles", text: "A dedicated hatchery ensures a continuous supply of healthy juvenile sea cucumbers, reducing dependency on unpredictable natural sources." },
                      { title: "2. Supporting Large-Scale Farming Expansion", text: "As our farming operations grow, a hatchery will provide the necessary foundation to increase production capacity and maintain a stable supply chain." },
                      { title: "3. Conservation of Natural Populations", text: "Hatchery-based production reduces the need for collecting wild juveniles, helping protect natural sea cucumber ecosystems." },
                      { title: "4. Improving Production Quality", text: "Controlled breeding environments allow better management of genetics, health, and growth performance, resulting in stronger and higher-quality stocks." }
                    ].map((item, i) => (
                      <div key={i}>
                        <h4 className="font-bold text-brown-dark text-[14px]">{item.title}</h4>
                        <p className="text-sm text-slate-600 font-light mt-1">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-glass-border shadow-sm">
                    <h3 className="text-xl font-serif text-brown-dark mb-4">Benefits of Hatchery Development</h3>
                    <ul className="space-y-3">
                      <li className="flex gap-3 text-sm text-slate-600 font-light"><CheckIcon className="text-green-dark shrink-0" size={16} /> Ensures a sustainable supply of farming materials.</li>
                      <li className="flex gap-3 text-sm text-slate-600 font-light"><CheckIcon className="text-green-dark shrink-0" size={16} /> Enables year-round juvenile production.</li>
                      <li className="flex gap-3 text-sm text-slate-600 font-light"><CheckIcon className="text-green-dark shrink-0" size={16} /> Supports expansion of commercial sea cucumber farming.</li>
                      <li className="flex gap-3 text-sm text-slate-600 font-light"><CheckIcon className="text-green-dark shrink-0" size={16} /> Reduces environmental impact from wild collection.</li>
                      <li className="flex gap-3 text-sm text-slate-600 font-light"><CheckIcon className="text-green-dark shrink-0" size={16} /> Creates opportunities for marine research and innovation.</li>
                      <li className="flex gap-3 text-sm text-slate-600 font-light"><CheckIcon className="text-green-dark shrink-0" size={16} /> Strengthens our position in the global sea cucumber industry.</li>
                    </ul>
                  </div>

                  <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-glass-border shadow-sm">
                    <h3 className="text-xl font-serif text-brown-dark mb-4">How We Will Develop the Hatchery</h3>
                    <ul className="space-y-4">
                      <li>
                        <span className="text-green-dark font-bold text-sm block mb-1">1. Broodstock Management</span>
                        <span className="text-sm text-slate-600 font-light block">Healthy adult sea cucumbers will be carefully selected and maintained as breeding stock to produce high-quality offspring.</span>
                      </li>
                      <li>
                        <span className="text-green-dark font-bold text-sm block mb-1">2. Controlled Spawning and Breeding</span>
                        <span className="text-sm text-slate-600 font-light block">Advanced hatchery techniques will be used to encourage breeding and produce sea cucumber larvae under controlled conditions.</span>
                      </li>
                      <li>
                        <span className="text-green-dark font-bold text-sm block mb-1">3. Larval Rearing System</span>
                        <span className="text-sm text-slate-600 font-light block">Larvae will be raised in specialized tanks with carefully managed water quality, nutrition, and environmental conditions.</span>
                      </li>
                      <li>
                        <span className="text-green-dark font-bold text-sm block mb-1">4. Juvenile Growth and Conditioning</span>
                        <span className="text-sm text-slate-600 font-light block">Young sea cucumbers will be nurtured until they reach suitable sizes and strength for transfer to farming systems.</span>
                      </li>
                      <li>
                        <span className="text-green-dark font-bold text-sm block mb-1">5. Integration with Farming and Export Operations</span>
                        <span className="text-sm text-slate-600 font-light block">The hatchery will support our farming projects by providing reliable juvenile supplies and strengthening our complete marine aquaculture value chain.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-20 text-center rounded-3xl border border-glass-border bg-white/60 p-12 backdrop-blur-md shadow-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green/10 via-transparent to-transparent opacity-60 pointer-events-none" />
                <h3 className="font-serif text-3xl sm:text-4xl text-brown-dark relative z-10 drop-shadow-sm">Our Long-Term Vision</h3>
                <p className="mt-6 max-w-3xl mx-auto text-[15px] leading-relaxed text-slate-600 font-light relative z-10">
                  Through the integration of Marine Product Export, Sustainable Sea Cucumber Farming, and Advanced Hatchery Development, we aim to establish a complete and sustainable marine aquaculture ecosystem.
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
