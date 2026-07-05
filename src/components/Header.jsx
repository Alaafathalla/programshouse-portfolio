import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'

export default function Header() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Blogs', href: '#blogs' },
  ]

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#111521] font-sans lg:border-b lg:border-white/10">
      <div className="mx-auto flex h-[68px] w-[95%] max-w-[1500px] items-center justify-between">
        <a href="#" className="flex shrink-0 items-center">
          <img
            src="/Logo.svg"
            alt="Programs"
            className="h-[28px] w-auto object-contain"
          />
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[20px] font-bold leading-none no-underline transition-colors ${
                index === 0
                  ? 'text-[#77A6D0]'
                  : 'text-white hover:text-[#77A6D0]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="text-white lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className="hidden lg:block">
            <Button size="sm">Contact Us</Button>
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden bg-[#111521] transition-all duration-300 lg:hidden ${
          open ? 'max-h-[380px]' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-6 pb-7 pt-4">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`py-3 text-[15px] font-semibold no-underline ${
                index === 0 ? 'text-[#77A6D0]' : 'text-white'
              }`}
            >
              {link.label}
            </a>
          ))}

          <Button size="sm" className="mt-5 h-[38px] w-full px-8">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  )
}