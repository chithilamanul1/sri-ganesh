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
    <Link href={to} onClick={onClick} className={typeof className === 'function' ? className({ isActive }) : className}>
      {typeof children === 'function' ? children({ isActive }) : children}
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
  const pathname = usePathname()

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isScrolledOrMenu = scrolled || menuOpen || !overlay

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[9999] transition-all duration-300 ${isScrolledOrMenu ? 'bg-white/95 backdrop-blur-xl border-b border-brown/10 shadow-lg py-2' : 'bg-white/85 backdrop-blur-lg border-b border-brown/5 py-3'}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link href="/" aria-label="SRI GANESH EXPORT home" className="group flex items-center gap-3 text-brown-dark relative z-[10001]">
            <img src="/logo.png" alt="SRI GANESH EXPORT Logo" className="h-10 w-auto object-contain transition-transform group-hover:scale-105 duration-300 mix-blend-multiply" />
            <span className="leading-tight">
              <span className="block font-serif text-[15px] sm:text-[19px] tracking-wide group-hover:text-green-dark transition-colors text-brown-dark font-bold">Sri Ganesh Exports</span>
              <span className="block text-[7px] sm:text-[8px] font-bold uppercase tracking-[0.25em] text-green-dark/90">
                Sri Lanka
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
                  `relative text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${isActive ? 'text-green-dark' : 'text-slate-600 hover:text-brown-dark'}`
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
            <Link href="/contact" className="ml-4 inline-flex items-center justify-center gap-2 rounded-full border border-green-dark/30 bg-green-dark/10 px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-green-dark transition-all hover:bg-green-dark hover:text-white hover:shadow-[0_0_15px_rgba(44,110,67,0.2)] hover:scale-105">
              Get a quote <ArrowUpRightIcon size={14} className="opacity-80" />
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Toggle Menu"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white border-2 border-green/20 text-green-dark lg:hidden relative z-[10001] transition-all hover:bg-green/10 hover:border-green-dark shadow-md"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu - Full screen overlay */}
      <div
        className={`fixed inset-0 z-[9998] lg:hidden transition-all duration-500 ease-in-out ${menuOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'}`}
      >
        {/* Solid background */}
        <div className="absolute inset-0 bg-[#FAF5F0]" />

        <div className="relative z-10 flex flex-col h-full pt-24 px-8 pb-8 overflow-y-auto">
          <nav className="flex flex-col gap-1 flex-grow">
            {navigation.map((item, i) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }: { isActive: boolean }) =>
                  `text-2xl font-serif border-b border-brown/15 py-5 transition-all ${isActive ? 'text-green-dark' : 'text-brown hover:text-brown-dark'}`
                }
              >
                <div
                  style={{
                    transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                    opacity: menuOpen ? 1 : 0,
                    transitionProperty: 'transform, opacity',
                    transitionDelay: `${i * 0.08}s`,
                    transitionDuration: '0.4s'
                  }}
                >
                  {item.label}
                </div>
              </NavLink>
            ))}
          </nav>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-8 flex w-full h-14 items-center justify-center gap-3 bg-green text-sm font-bold uppercase tracking-[0.15em] text-white shadow-lg rounded-md"
            style={{
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: menuOpen ? 1 : 0,
              transitionProperty: 'transform, opacity',
              transitionDelay: `0.5s`,
              transitionDuration: '0.4s'
            }}
          >
            Get a quote <ArrowUpRightIcon size={16} />
          </Link>
        </div>
      </div>
    </>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-brown-dark text-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-green/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10 relative z-10">
        <div>
          <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity w-fit mb-6">
            <img src="/logo.png" alt="SRI GANESH EXPORT Logo" className="h-12 w-auto object-contain brightness-0 invert opacity-90" />
            <span className="font-serif text-xl sm:text-2xl text-white font-bold">Sri Ganesh Exports</span>
          </Link>
          <p className="max-w-md text-sm leading-relaxed text-white/60 mb-6">
            Premium Sri Lankan marine products for international wholesale markets. Operating with integrity and transparency since inception.
          </p>
          <div className="flex flex-col gap-2 text-xs text-white/70">
            <p><strong className="font-bold text-white/90">Email:</strong> <a href="mailto:sriganeshexport2004@gmail.com" className="hover:text-green-light transition-colors">sriganeshexport2004@gmail.com</a></p>
            <p><strong className="font-bold text-white/90">WhatsApp:</strong> <a href="https://wa.me/94773223057" className="hover:text-green-light transition-colors">+94 77 322 3057</a></p>
            <p><strong className="font-bold text-white/90">Address:</strong> Sri Ganesh Export<br />82/12 zoysa lane, aniyakanda road,<br />Welisara, ragama, Sri Lanka</p>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:items-end w-full lg:w-auto mt-6 lg:mt-0">
          <div className="flex gap-4">
            {[
              { icon: FacebookIcon, label: 'Facebook' },
              { icon: InstagramIcon, label: 'Instagram' }
            ].map((social) => (
              <a key={social.label} href="#" aria-label={social.label} className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/5 transition-all hover:border-green/30 hover:bg-green/10 hover:-translate-y-1">
                <social.icon size={16} className="text-white/70 transition-colors group-hover:text-green-light" />
              </a>
            ))}
          </div>

          <div className="flex flex-col lg:text-right gap-2 border-t border-white/15 pt-6 lg:border-t-0 lg:pt-0 w-full lg:w-auto">
            <p className="text-xs font-medium text-white/50">
              © {new Date().getFullYear()} Sri Ganesh Exports. Sri Lanka.
            </p>
            <p className="text-[10px] uppercase tracking-widest text-white/35">
              made by seranex.lk love with chithila manul (0728382638)
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
