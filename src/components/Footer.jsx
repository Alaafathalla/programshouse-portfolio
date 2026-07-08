import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { colors } from "../theme";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/footer.png')",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* ================= Brand ================= */}
          <div>
            <img
          src="/Logo.svg"
         alt="Programs House"
          className="h-14 w-auto mb-6"
            />

            <p className="text-white/70 text-sm leading-7 max-w-sm">
              Programs House delivers innovative software solutions, scalable
              digital products, and cutting-edge technologies that empower
              businesses to achieve sustainable growth.
            </p>

            <div className="flex items-center gap-3 mt-8">
              {[
                {
                  icon: <FaFacebookF size={15} />,
                  href: "https://facebook.com",
                },
                {
                  icon: <FaInstagram size={16} />,
                  href: "https://instagram.com",
                },
                {
                  icon: <FaLinkedinIn size={15} />,
                  href: "https://linkedin.com",
                },
                {
                  icon: <FaXTwitter size={15} />,
                  href: "https://x.com",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-primary hover:border-primary"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ================= Links ================= */}
          <div>
            <h3
              className="text-xl font-semibold mb-6"
              style={{ color: colors.primary }}
            >
              Useful Links
            </h3>

            <ul className="space-y-4">
              {[
                ["About Us", "#about"],
                ["Our Services", "#services"],
                ["Our Portfolio", "#portfolio"],
                ["Our Blogs", "#blogs"],
                ["Testimonials", "#testimonials"],
                ["FAQ", "#faq"],
              ].map(([title, href]) => (
                <li key={title}>
                  <a
                    href={href}
                    className="text-white/70 hover:text-primary transition duration-300"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Contact ================= */}
          <div>
            <h3
              className="text-xl font-semibold mb-6"
              style={{ color: colors.primary }}
            >
              Contact Us
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(119,166,208,.12)" }}
                >
                  <MapPin size={18} color={colors.primary} />
                </div>

                <span className="text-white/70 leading-6">
                  Egypt, Tanta,
                  <br />
                  El-Geash Street
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(119,166,208,.12)" }}
                >
                  <Mail size={18} color={colors.primary} />
                </div>

                <a
                  href="mailto:contact@programshouse.com"
                  className="text-white/70 hover:text-primary transition"
                >
                  contact@programshouse.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(119,166,208,.12)" }}
                >
                  <Phone size={18} color={colors.primary} />
                </div>

                <a
                  href="tel:+201070101091"
                  className="text-white/70 hover:text-primary transition"
                >
                  (+20) 10 7010 1091
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Bottom ================= */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            © 2026 Programs House. All rights reserved.
          </p>

          <p className="text-sm text-white/50">
            Designed & Developed by{" "}
            <span style={{ color: colors.primary }}>Programs House</span>
          </p>
        </div>
      </div>
    </footer>
  );
}