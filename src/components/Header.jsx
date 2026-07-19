import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Button } from "./ui/button";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", to: "/", type: "page" },
    { label: "About Us", to: "/#about", type: "section" },
    { label: "Services", to: "/services", type: "page" },
    { label: "Portfolio", to: "/portfolio", type: "page" },
    { label: "Blogs", to: "/#blogs", type: "section" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#111521]">
      <div className="mx-auto flex h-[68px] w-[95%] max-w-[1500px] items-center justify-between">
        {/* Logo */}
<Link
  to="/"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="flex shrink-0 items-center"
>
  <img
    src="/Logo.svg"
    alt="Programs House"
    className="h-[28px] w-auto object-contain"
  />
</Link>

        {/* Desktop Navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">
          {links.map((link) =>
            link.type === "page" ? (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative text-[18px] font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ) : (
              <HashLink
                key={link.label}
                smooth
                to={link.to}
                className="text-[18px] font-semibold text-white transition-all duration-300 hover:text-primary"
              >
                {link.label}
              </HashLink>
            )
          )}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
<Button
  size="sm"
  asChild
  className="transition-all duration-300 hover:scale-110 active:scale-95"
>
  <HashLink smooth to="/#contact">
    Contact Us
  </HashLink>
</Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-md p-1 text-white transition hover:bg-white/10 lg:hidden"
            aria-label="Toggle Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-[#111521] transition-all duration-300 lg:hidden ${
          open ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-5">
          {links.map((link) =>
            link.type === "page" ? (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `border-b border-white/5 py-4 text-base font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ) : (
              <HashLink
                key={link.label}
                smooth
                to={link.to}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-4 text-base font-medium text-white transition-colors hover:text-primary"
              >
                {link.label}
              </HashLink>
            )
          )}

<Button size="sm" className="mt-6 w-full" asChild>
  <HashLink
    smooth
     to="/#contact"
    onClick={() => setOpen(false)}
  >
    Contact Us
  </HashLink>
</Button>
        </div>
      </div>
    </header>
  );
}
