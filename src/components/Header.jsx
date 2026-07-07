import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", to: "/", type: "page" },
    { label: "About Us", to: "#about", type: "section" },
    { label: "Services", to: "/services", type: "page" },
    { label: "Portfolio", to: "#portfolio", type: "section" },
    { label: "Blogs", to: "#blogs", type: "section" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#111521] lg:border-b lg:border-white/10">
      <div className="mx-auto flex h-[68px] w-[95%] max-w-[1500px] items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center">
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
                  `text-[18px] font-semibold transition-colors duration-300 ${
                    isActive
                      ? "text-[#77A6D0]"
                      : "text-white hover:text-[#77A6D0]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ) : (
              <a
                key={link.label}
                href={link.to}
                className="text-[18px] font-semibold text-white transition-colors duration-300 hover:text-[#77A6D0]"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <Button size="sm">Contact Us</Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="text-white lg:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden bg-[#111521] transition-all duration-300 lg:hidden ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4">
          {links.map((link) =>
            link.type === "page" ? (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-base font-medium transition-colors ${
                    isActive
                      ? "text-[#77A6D0]"
                      : "text-white hover:text-[#77A6D0]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ) : (
              <a
                key={link.label}
                href={link.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-white transition-colors hover:text-[#77A6D0]"
              >
                {link.label}
              </a>
            )
          )}

          <Button
            size="sm"
            className="mt-5 w-full"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
}