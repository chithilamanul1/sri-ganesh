"use client";
import React, { useState } from 'react'
import { CheckIcon, ChevronDownIcon, SendIcon } from 'lucide-react'
import { products } from '../data/products'
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    event.currentTarget.reset()
    setSubmitted(true)
  }
  if (submitted) {
    return (
      <div className="flex min-h-[390px] flex-col items-center justify-center bg-white p-8 text-center shadow-[0_18px_45px_rgba(130,77,67,0.1)]">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-peach-dark text-green">
          <CheckIcon size={27} strokeWidth={2.5} aria-hidden="true" />
        </span>
        <h2 className="mt-6 font-serif text-3xl text-brown">Enquiry received.</h2>
        <p className="mt-3 max-w-sm text-sm leading-6 text-brown/80">
          Thank you for contacting Sri Ganesh Exports. Our team will be in touch shortly.
        </p>
        <button type="button" onClick={() => setSubmitted(false)} className="mt-7 border-b-2 border-green pb-2 text-xs font-extrabold uppercase tracking-[0.12em] text-brown">
          Send another enquiry
        </button>
      </div>
    )
  }
  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-[0_18px_45px_rgba(130,77,67,0.1)] sm:p-8 lg:p-9 rounded-md">
      <h2 className="font-serif text-[29px] leading-tight text-brown">Request product details</h2>
      <p className="mt-2 text-sm leading-6 text-brown/70">Fields marked with * are required.</p>
      <div className="mt-6 grid gap-x-6 gap-y-6 sm:grid-cols-2">
        <Field label="Your name *"><input required name="name" autoComplete="name" className="form-control" placeholder="Full name" /></Field>
        <Field label="Company *"><input required name="company" autoComplete="organization" className="form-control" placeholder="Company name" /></Field>
        <Field label="Work email *"><input required type="email" name="email" autoComplete="email" className="form-control" placeholder="you@company.com" /></Field>
        <label className="block text-xs font-extrabold uppercase tracking-[0.1em] text-brown">
          Product interest *
          <span className="relative mt-2 block">
            <select required name="product" defaultValue="" className="form-control appearance-none">
              <option value="" disabled>Select a product</option>
              {products.map((product) => (<option key={product.name}>{product.name}</option>))}
              <option>Multiple products</option>
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-0 top-3 text-green" size={16} aria-hidden="true" />
          </span>
        </label>
      </div>
      <label className="mt-6 block text-xs font-extrabold uppercase leading-none tracking-[0.1em] text-brown">
        Your requirements
        <textarea name="message" rows={3} className="form-control mt-2 resize-none" placeholder="Quantity, preferred grade, destination, or other details" />
      </label>
      <button type="submit" className="mt-7 inline-flex items-center gap-2 bg-brown px-6 py-3.5 text-xs font-extrabold uppercase leading-none tracking-[0.13em] text-white transition hover:bg-brown-dark">
        Send enquiry <SendIcon size={15} aria-hidden="true" />
      </button>
    </form>
  )
}
type FieldProps = { label: string; children: React.ReactNode }
function Field({ label, children }: FieldProps) {
  return (
    <label className="block text-xs font-extrabold uppercase leading-none tracking-[0.1em] text-brown">
      {label}
      <span className="mt-2.5 block">{children}</span>
    </label>
  )
}
