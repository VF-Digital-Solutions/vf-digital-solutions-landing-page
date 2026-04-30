import Link from "next/link"
import { Mail, Phone, Globe, Instagram, Linkedin, Facebook } from "lucide-react"

const quickLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#por-que-nosotros", label: "¿Por qué nosotros?" },
  { href: "#contacto", label: "Contacto" },
]

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/vfdigital.cl", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/vfdigital", label: "LinkedIn" },
  { icon: Facebook, href: "https://facebook.com/vfdigital.cl", label: "Facebook" },
]

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 pb-12 border-b border-[#e2e8f0]">
          {/* Logo & Tagline */}
          <div>
            <Link href="#inicio" className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-[#f47920] rounded-sm" />
                <div className="w-2 h-2 bg-[#00aeef] rounded-sm" />
              </div>
              <span className="font-[family-name:var(--font-montserrat)] font-bold text-[#1a2e5a] text-xl">
                VF Digital Solutions
              </span>
            </Link>
            <p className="text-[#1a2e5a]/70 text-sm leading-relaxed max-w-xs">
              Atención directa, soluciones reales. Tecnología a medida para empresas chilenas.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[#1a2e5a]/5 flex items-center justify-center hover:bg-[#f47920] transition-colors duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-[#f47920] group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-[family-name:var(--font-montserrat)] font-semibold text-[#1a2e5a] text-lg mb-6">
              Enlaces rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[#1a2e5a]/70 hover:text-[#f47920] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-[family-name:var(--font-montserrat)] font-semibold text-[#1a2e5a] text-lg mb-6">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:gerencia@vfdigital.cl"
                  className="flex items-center gap-3 text-[#1a2e5a]/70 hover:text-[#f47920] transition-colors duration-300 text-sm"
                >
                  <Mail className="w-5 h-5 text-[#00aeef]" />
                  gerencia@vfdigital.cl
                </a>
              </li>
              <li>
                <a
                  href="tel:+56998259829"
                  className="flex items-center gap-3 text-[#1a2e5a]/70 hover:text-[#f47920] transition-colors duration-300 text-sm"
                >
                  <Phone className="w-5 h-5 text-[#00aeef]" />
                  +56 9 9825 9829
                </a>
              </li>
              <li>
                <a
                  href="https://vfdigital.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#1a2e5a]/70 hover:text-[#f47920] transition-colors duration-300 text-sm"
                >
                  <Globe className="w-5 h-5 text-[#00aeef]" />
                  www.vfdigital.cl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-[#1a2e5a]/50 text-sm">
            © {new Date().getFullYear()} VF Digital Solutions. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
