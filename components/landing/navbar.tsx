"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#por-que-nosotros", label: "¿Por qué nosotros?" },
  { href: "#contacto", label: "Contacto" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#1a2e5a] shadow-lg shadow-[#1a2e5a]/20" 
          : "bg-[#1a2e5a]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-[#f47920] rounded-sm" />
              <div className="w-2 h-2 bg-[#00aeef] rounded-sm" />
            </div>
            <span className="font-[family-name:var(--font-montserrat)] font-bold text-white text-lg md:text-xl">
              VF Digital Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-[#f47920] transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-[#f47920] hover:bg-[#f47920]/90 text-white font-semibold rounded-lg px-6 transition-all duration-300 hover:scale-105"
            >
              <Link href="#contacto">Contáctanos</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#1a2e5a] border-t border-white/10 px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-white/90 hover:text-[#f47920] transition-colors duration-300 py-2 text-base font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="w-full bg-[#f47920] hover:bg-[#f47920]/90 text-white font-semibold rounded-lg py-3 mt-2"
          >
            <Link href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>
              Contáctanos
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
