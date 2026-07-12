
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react'
import { ContactForm } from '../../src/components/ContactForm'
import { PageHero } from '../../src/components/PageHero'
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-peach text-brown">
      
      <main>
        <PageHero
          eyebrow="Wholesale enquiries"
          title="Let’s discuss your next shipment."
          description="Tell us what you are sourcing and our team will respond with availability and the details you need to move forward."
          image="/image4.JPG"
        />
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-10">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-green">Contact our export team</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-brown sm:text-5xl">Start with the details that matter.</h2>
              <p className="mt-6 max-w-md text-base leading-8 text-brown/80">
                Product, quantity, preferred grade, and destination are the most useful starting points for a prompt response.
              </p>
              <address className="mt-9 not-italic">
                <a href="mailto:exports@sriganeshexports.lk" className="flex items-start gap-4 py-4 text-brown">
                  <MailIcon className="mt-0.5 text-green" size={20} />
                  <span>
                    <span className="block text-xs font-extrabold uppercase tracking-[0.11em] text-brown/60">Email us</span>
                    <span className="mt-1 block font-semibold">exports@sriganeshexports.lk</span>
                  </span>
                </a>
                <a href="tel:+94773223057" className="flex items-start gap-4 py-4 text-brown">
                  <PhoneIcon className="mt-0.5 text-green" size={20} />
                  <span>
                    <span className="block text-xs font-extrabold uppercase tracking-[0.11em] text-brown/60">Call / WhatsApp</span>
                    <span className="mt-1 block font-semibold">+94 77 322 3057</span>
                  </span>
                </a>
                <div className="flex items-start gap-4 py-4">
                  <MapPinIcon className="mt-0.5 text-green" size={20} />
                  <span>
                    <span className="block text-xs font-extrabold uppercase tracking-[0.11em] text-brown/60">Based in</span>
                    <span className="mt-1 block font-semibold">Sri Lanka</span>
                  </span>
                </div>
              </address>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      
    </div>
  )
}
