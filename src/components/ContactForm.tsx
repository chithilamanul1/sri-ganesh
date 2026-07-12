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
      <div className="flex min-h-[420px] flex-col items-center justify-center bg-glass border border-glass-border p-8 text-center rounded-3xl backdrop-blur-md">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green/10 text-green border border-green/20 shadow-[0_0_20px_rgba(8,247,190,0.2)]">
          <CheckIcon size={30} strokeWidth={2.5} aria-hidden="true" />
        </span>
        <h2 className="mt-6 font-serif text-3xl text-white">Enquiry received.</h2>
        <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-slate-300 font-light">
          Thank you for contacting Sri Ganesh Exports. Our team will be in touch shortly.
        </p>
        <button type="button" onClick={() => setSubmitted(false)} className="mt-8 border-b border-green pb-1 text-xs font-bold uppercase tracking-[0.15em] text-green hover:text-white transition-colors">
          Send another enquiry
        </button>
      </div>
    )
  }
  return (
    <form onSubmit={handleSubmit} className="bg-glass border border-glass-border p-8 shadow-2xl sm:p-10 lg:p-12 rounded-3xl backdrop-blur-md relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green/20 via-green to-green/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
      <h2 className="font-serif text-[32px] leading-tight text-white mb-2">Request product details</h2>
      <p className="text-[13px] leading-6 text-slate-400 font-light">Fields marked with * are required.</p>
      
      <div className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2">
        <Field label="Your name *"><input required name="name" autoComplete="name" className="form-control" placeholder="Full name" /></Field>
        <Field label="Company *"><input required name="company" autoComplete="organization" className="form-control" placeholder="Company name" /></Field>
        <Field label="Work email *"><input required type="email" name="email" autoComplete="email" className="form-control" placeholder="you@company.com" /></Field>
        
        <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-green">
          Product interest *
          <span className="relative mt-3 block">
            <select required name="product" defaultValue="" className="form-control appearance-none cursor-pointer">
              <option value="" disabled>Select a product</option>
              {products.map((product) => (<option key={product.name} className="bg-brown text-white">{product.name}</option>))}
              <option className="bg-brown text-white">Multiple products</option>
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-0 top-3 text-green" size={16} aria-hidden="true" />
          </span>
        </label>
      </div>
      
      <label className="mt-8 block text-[10px] font-bold uppercase leading-none tracking-[0.15em] text-green">
        Your requirements
        <textarea name="message" rows={3} className="form-control mt-3 resize-none" placeholder="Quantity, preferred grade, destination, or other details" />
      </label>
      
      <button type="submit" className="mt-10 inline-flex items-center gap-3 bg-green px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-brown-dark transition hover:bg-green-light rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(8,247,190,0.3)] shadow-lg w-full sm:w-auto justify-center">
        Send enquiry <SendIcon size={15} aria-hidden="true" className="-mt-0.5" />
      </button>
    </form>
  )
}
type FieldProps = { label: string; children: React.ReactNode }
function Field({ label, children }: FieldProps) {
  return (
    <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-green">
      {label}
      <span className="mt-3 block">{children}</span>
    </label>
  )
}
