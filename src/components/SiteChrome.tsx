"use client";
import { useState } from 'react'
import {
  ArrowUpRightIcon,
  FacebookIcon,
  InstagramIcon,
  MenuIcon,
  XIcon,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavLink({ to, children, end, onClick, className }: any) {
  const pathname = usePathname()
  const isActive = end ? pathname === to : pathname.startsWith(to)
  return (
    <Link href={to} onClick={onClick} className={className({ isActive })}>
      {children}
    </Link>
  )
}

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Our Process', to: '/process' },
  { label: 'Contact', to: '/contact' },
]
type SiteHeaderProps = { overlay?: boolean }
export function SiteHeader({ overlay = false }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const textClass = overlay ? 'text-white' : 'text-brown'
  const borderClass = overlay ? 'border-white/20' : 'border-brown/15'
  return (
    <header className={`relative z-30 ${overlay ? 'absolute inset-x-0 top-0' : 'bg-peach'}`}>
      <div className={`border-b ${borderClass}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Link href="/" aria-label="Sri Ganesh Exports home" className={`group flex items-center gap-3 ${textClass}`}>
            <img src="/logo.png" alt="Sri Ganesh Exports Logo" className="h-12 w-auto object-contain" />
            <span className="leading-[1.05]">
              <span className="block font-serif text-[21px] tracking-wide">Sri Ganesh</span>
              <span className="mt-1 block text-[9px] font-bold uppercase leading-none tracking-[0.22em] text-green-dark">
                Exports · Sri Lanka
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }: { isActive: boolean }) =>
                  `border-b pb-1 text-[11px] font-extrabold uppercase leading-none tracking-[0.14em] transition ${isActive ? 'border-green-dark text-green-dark' : `border-transparent ${textClass} hover:border-green-dark hover:text-green-dark`}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link href="/contact" className="inline-flex items-center gap-2 bg-green px-5 py-3 text-[11px] font-extrabold uppercase leading-none tracking-[0.12em] text-white transition hover:bg-green-dark">
              Get a quote <ArrowUpRightIcon size={14} aria-hidden="true" />
            </Link>
          </nav>
          <button
            type="button"
            className={`flex h-10 w-10 items-center justify-center border ${overlay ? 'border-white/35 text-white' : 'border-brown/25 text-brown'} lg:hidden`}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="border-b border-brown/15 bg-peach px-5 py-4 shadow-xl lg:hidden">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }: { isActive: boolean }) =>
                `block border-b border-brown/10 py-4 text-sm font-bold uppercase tracking-[0.12em] ${isActive ? 'text-green' : 'text-brown'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="mt-5 inline-flex bg-green px-5 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-white">
            Get a quote
          </Link>
        </nav>
      )}
    </header>
  )
}
export function SiteFooter() {
  return (
    <footer className="bg-brown-dark text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-9 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Sri Ganesh Exports Logo" className="h-10 w-auto object-contain brightness-0 invert opacity-90" />
            <span className="font-serif text-xl">Sri Ganesh Exports</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/60">
            Premium Sri Lankan marine products for international wholesale markets.
          </p>
        </div>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
          <div className="flex gap-3">
            <a href="#" className="flex h-9 w-9 items-center justify-center border border-white/20 transition hover:border-green hover:text-green-light">
              <FacebookIcon size={16} />
            </a>
            <a href="#" className="flex h-9 w-9 items-center justify-center border border-white/20 transition hover:border-green hover:text-green-light">
              <InstagramIcon size={16} />
            </a>
          </div>
          <div className="flex flex-col md:text-right gap-1">
            <p className="text-xs font-semibold text-white/50">
              © {new Date().getFullYear()} Sri Ganesh Exports. Sri Lanka.
            </p>
            <p className="text-[10px] text-white/40">
              made by seranex.lk love with chithila manul (0728382638)
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
