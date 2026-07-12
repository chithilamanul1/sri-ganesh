"use client";
import { useState, useEffect } from 'react'
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isScrolledOrMenu = scrolled || menuOpen || !overlay
  
  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolledOrMenu ? 'bg-brown/80 backdrop-blur-md border-b border-glass-border shadow-2xl py-2' : 'bg-transparent border-transparent py-4'}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" aria-label="Sri Ganesh Exports home" className="group flex items-center gap-4 text-white z-50">
          <img src="/logo.png" alt="Sri Ganesh Exports Logo" className="h-10 w-auto object-contain brightness-0 invert opacity-90 transition-transform group-hover:scale-105 duration-300" />
          <span className="leading-tight hidden sm:block">
            <span className="block font-serif text-[19px] tracking-wide group-hover:text-green-light transition-colors">Sri Ganesh</span>
            <span className="block text-[8px] font-bold uppercase tracking-[0.25em] text-green/80">
              Exports · Sri Lanka
            </span>
          </span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }: { isActive: boolean }) =>
                `relative text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${isActive ? 'text-green' : 'text-slate-300 hover:text-white'}`
              }
            >
              {({ isActive }: { isActive: boolean }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-green shadow-[0_0_10px_rgba(8,247,190,0.5)]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <Link href="/contact" className="ml-4 inline-flex items-center justify-center gap-2 rounded-full border border-green/50 bg-green/10 px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-green transition-all hover:bg-green hover:text-brown hover:shadow-[0_0_15px_rgba(8,247,190,0.3)] hover:scale-105">
            Get a quote <ArrowUpRightIcon size={14} className="opacity-80" />
          </Link>
        </nav>
        
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-glass-border text-white lg:hidden z-50 transition-colors hover:bg-white/10 hover:text-green"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <XIcon size={18} /> : <MenuIcon size={18} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-brown-dark z-40 lg:hidden transition-transform duration-500 ease-in-out flex flex-col pt-24 px-6 pb-8 ${menuOpen ? 'translate-x-0' : 'translate-x-[100%]'}`}>
        <nav className="flex flex-col gap-6 flex-grow">
          {navigation.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }: { isActive: boolean }) =>
                `text-2xl font-serif border-b border-glass-border pb-4 transition-colors ${isActive ? 'text-green' : 'text-white hover:text-green-light'}`
              }
            >
              <div 
                style={{ transform: menuOpen ? 'translateY(0)' : 'translateY(20px)', opacity: menuOpen ? 1 : 0, transitionDelay: `${i * 0.1}s`, transitionDuration: '0.4s' }}
              >
                {item.label}
              </div>
            </NavLink>
          ))}
        </nav>
        <Link 
          href="/contact" 
          onClick={() => setMenuOpen(false)} 
          className="mt-8 flex w-full h-14 items-center justify-center gap-3 rounded-full bg-green text-xs font-bold uppercase tracking-[0.15em] text-brown-dark"
          style={{ transform: menuOpen ? 'translateY(0)' : 'translateY(20px)', opacity: menuOpen ? 1 : 0, transitionDelay: `0.5s`, transitionDuration: '0.4s' }}
        >
          Get a quote <ArrowUpRightIcon size={16} />
        </Link>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-brown-dark border-t border-glass-border text-slate-300 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-green/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10 relative z-10">
        <div>
          <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity w-fit mb-6">
            <img src="/logo.png" alt="Sri Ganesh Exports Logo" className="h-12 w-auto object-contain brightness-0 invert opacity-90" />
            <span className="font-serif text-2xl text-white">Sri Ganesh Exports</span>
          </Link>
          <p className="max-w-md text-sm leading-relaxed text-slate-400 font-light">
            Premium Sri Lankan marine products for international wholesale markets. Operating with integrity and transparency since inception.
          </p>
        </div>
        
        <div className="flex flex-col gap-8 lg:items-end w-full lg:w-auto mt-6 lg:mt-0">
          <div className="flex gap-4">
            {[
              { icon: FacebookIcon, label: 'Facebook' },
              { icon: InstagramIcon, label: 'Instagram' }
            ].map((social) => (
              <a key={social.label} href="#" aria-label={social.label} className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-glass-border bg-glass transition-all hover:border-green/50 hover:bg-green/10 hover:-translate-y-1">
                <social.icon size={16} className="text-slate-300 transition-colors group-hover:text-green" />
              </a>
            ))}
          </div>
          
          <div className="flex flex-col lg:text-right gap-2 border-t border-glass-border pt-6 lg:border-t-0 lg:pt-0 w-full lg:w-auto">
            <p className="text-xs font-medium text-slate-400">
              © {new Date().getFullYear()} Sri Ganesh Exports. Sri Lanka.
            </p>
            <p className="text-[10px] uppercase tracking-widest text-slate-600">
              made by seranex.lk love with chithila manul (0728382638)
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
