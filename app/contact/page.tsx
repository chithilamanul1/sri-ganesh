"use client";

import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { ContactForm } from '../../src/components/ContactForm'
import { PageHero } from '../../src/components/PageHero'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-transparent text-slate-700">
      <main>
        <PageHero
          eyebrow="Wholesale enquiries"
          title="Let’s discuss your next shipment."
          description="Tell us what you are sourcing and our team will respond with availability and the details you need to move forward."
          image="/image4.JPG"
        />
        <section className="py-20 sm:py-28 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-white/80 via-transparent to-transparent blur-2xl pointer-events-none" />
          
          <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10 relative z-10">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut" }}>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-green-dark">Contact our export team</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-brown-dark drop-shadow-sm sm:text-5xl">Start with the details that matter.</h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-slate-600 font-light">
                Product, quantity, preferred grade, and destination are the most useful starting points for a prompt response.
              </p>
              
              <address className="mt-12 not-italic flex flex-col gap-6">
                {[
                  { icon: MailIcon, label: "Email us", value: "exports@sriganeshexports.lk", href: "mailto:exports@sriganeshexports.lk" },
                  { icon: PhoneIcon, label: "Call / WhatsApp", value: "+94 77 322 3057", href: "tel:+94773223057" },
                ].map((item, i) => (
                  <motion.a 
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i, duration: 0.5 }}
                    key={item.label} href={item.href} className="group flex items-start gap-5 p-4 rounded-2xl border border-transparent hover:border-glass-border hover:bg-white/40 transition-colors -ml-4"
                  >
                    <div className="mt-0.5 p-2.5 rounded-full bg-green/10 border border-green/30 text-green-dark group-hover:bg-green-dark group-hover:text-white transition-all shadow-sm">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{item.label}</span>
                      <span className="mt-2 block font-medium text-brown-dark text-[15px]">{item.value}</span>
                    </div>
                  </motion.a>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex items-start gap-5 p-4 rounded-2xl border border-transparent -ml-4"
                >
                  <div className="mt-0.5 p-2.5 rounded-full bg-green/10 border border-green/30 text-green-dark shadow-sm">
                    <MapPinIcon size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Based in</span>
                    <span className="mt-2 block font-medium text-brown-dark text-[15px]">Sri Lanka</span>
                  </div>
                </motion.div>
              </address>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
              <ContactForm />
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
