import {
  Mail,
  Phone,
  MapPin,


} from "lucide-react";
import { colors } from "../theme";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0a0f1a",
        borderTop: `1px solid ${colors.primaryOpacity20}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div
                className="w-10 h-10 rounded flex items-center justify-center font-bold"
                style={{
                  backgroundColor: colors.text,
                  color: "#0a0f1a",
                }}
              >
                P
              </div>

              <span
                className="font-bold text-lg"
                style={{ color: colors.text }}
              >
                PROGRAMS!
              </span>
            </div>

            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,.7)" }}
            >
              Programs House delivers innovative software solutions, scalable
              digital products, and cutting-edge technologies that empower
              businesses to achieve sustainable growth.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[
           
             
             
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    border: "1px solid rgba(255,255,255,.4)",
                    color: colors.text,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.primary;
                    e.currentTarget.style.color = colors.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,.4)";
                    e.currentTarget.style.color = colors.text;
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3
              className="text-lg font-bold mb-8"
              style={{ color: colors.primary }}
            >
              Useful Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-[#77A6D0] transition"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-[#77A6D0] transition"
                >
                  Our Services
                </a>
              </li>

              <li>
                <a
                  href="#portfolio"
                  className="text-gray-300 hover:text-[#77A6D0] transition"
                >
                  Our Portfolio
                </a>
              </li>

              <li>
                <a
                  href="#blogs"
                  className="text-gray-300 hover:text-[#77A6D0] transition"
                >
                  Our Blogs
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#77A6D0] transition"
                >
                  Testimonials
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#77A6D0] transition"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-lg font-bold mb-8"
              style={{ color: colors.primary }}
            >
              Contact Us
            </h3>

            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: colors.primary }}
                />

                <span className="text-gray-300">
                  Egypt, Tanta, El-Geash Street
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={20} style={{ color: colors.primary }} />

                <a
                  href="mailto:contact@programshouse.com"
                  className="text-gray-300 hover:text-[#77A6D0] transition"
                >
                  contact@programshouse.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={20} style={{ color: colors.primary }} />

                <a
                  href="tel:+201070101091"
                  className="text-gray-300 hover:text-[#77A6D0] transition"
                >
                  (+20) 10 7010 1091
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 text-center text-sm"
          style={{
            borderTop: "1px solid rgba(119,166,208,.2)",
            color: "rgba(255,255,255,.5)",
          }}
        >
          © 2024 Programs House. All rights reserved.
        </div>
      </div>
    </footer>
  );
}