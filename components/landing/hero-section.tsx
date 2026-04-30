import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code, Database, Globe, Smartphone, Zap, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20 bg-gradient-to-br from-[#f8f9fa] to-white"
    >
      {/* Decorative pixels/squares */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Orange pixels */}
        <div className="absolute top-20 left-[10%] w-3 h-3 bg-[#f47920] rounded-sm animate-float opacity-60" />
        <div className="absolute top-40 left-[5%] w-2 h-2 bg-[#f47920] rounded-sm animate-float-delayed opacity-40" />
        <div className="absolute top-[60%] left-[15%] w-4 h-4 bg-[#f47920] rounded-sm animate-float opacity-50" />
        <div className="absolute bottom-32 left-[8%] w-2 h-2 bg-[#f47920] rounded-sm animate-pulse-glow" />
        
        {/* Light blue pixels */}
        <div className="absolute top-32 right-[20%] w-2 h-2 bg-[#00aeef] rounded-sm animate-float-delayed opacity-60" />
        <div className="absolute top-[45%] right-[10%] w-3 h-3 bg-[#00aeef] rounded-sm animate-float opacity-50" />
        <div className="absolute bottom-40 right-[25%] w-2 h-2 bg-[#00aeef] rounded-sm animate-pulse-glow opacity-40" />
        <div className="absolute top-[70%] right-[5%] w-4 h-4 bg-[#00aeef] rounded-sm animate-float-delayed opacity-30" />
        
        {/* Subtle background shapes */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#00aeef]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#f47920]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="font-[family-name:var(--font-montserrat)] font-bold text-[#1a2e5a] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-balance">
              Soluciones digitales que{" "}
              <span className="text-[#f47920]">hacen crecer</span> tu negocio
            </h1>
            
            <p className="mt-6 md:mt-8 text-[#1a2e5a]/70 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 text-pretty">
              Atención directa, soluciones reales. Tecnología a medida para empresas chilenas.
            </p>

            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-[#f47920] hover:bg-[#f47920]/90 text-white font-semibold rounded-xl px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#f47920]/30"
              >
                <Link href="#servicios">Ver servicios</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[#1a2e5a] text-[#1a2e5a] bg-transparent hover:bg-[#1a2e5a] hover:text-white font-semibold rounded-xl px-8 py-6 text-lg transition-all duration-300"
              >
                <Link href="#contacto">Contáctanos</Link>
              </Button>
            </div>
          </div>

          {/* Right decorative elements - Tech icons */}
          <div className="hidden lg:block relative">
            <div className="relative w-full h-[500px]">
              {/* Central glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00aeef]/10 rounded-full blur-3xl" />
              
              {/* Floating tech icons */}
              <div className="absolute top-[15%] left-[20%] p-4 bg-white shadow-lg shadow-[#1a2e5a]/10 rounded-2xl border border-[#e2e8f0] animate-float">
                <Code className="w-8 h-8 text-[#f47920]" />
              </div>
              
              <div className="absolute top-[10%] right-[25%] p-4 bg-white shadow-lg shadow-[#1a2e5a]/10 rounded-2xl border border-[#e2e8f0] animate-float-delayed">
                <Globe className="w-8 h-8 text-[#00aeef]" />
              </div>
              
              <div className="absolute top-[40%] left-[10%] p-4 bg-white shadow-lg shadow-[#1a2e5a]/10 rounded-2xl border border-[#e2e8f0] animate-float-delayed">
                <Database className="w-8 h-8 text-[#00aeef]" />
              </div>
              
              <div className="absolute top-[45%] right-[15%] p-5 bg-white shadow-lg shadow-[#1a2e5a]/10 rounded-2xl border border-[#e2e8f0] animate-float">
                <Smartphone className="w-10 h-10 text-[#f47920]" />
              </div>
              
              <div className="absolute bottom-[25%] left-[25%] p-4 bg-white shadow-lg shadow-[#1a2e5a]/10 rounded-2xl border border-[#e2e8f0] animate-float">
                <Zap className="w-8 h-8 text-[#f47920]" />
              </div>
              
              <div className="absolute bottom-[20%] right-[30%] p-4 bg-white shadow-lg shadow-[#1a2e5a]/10 rounded-2xl border border-[#e2e8f0] animate-float-delayed">
                <Shield className="w-8 h-8 text-[#00aeef]" />
              </div>

              {/* Connection lines (decorative) */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f47920" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#00aeef" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                <path
                  d="M100,100 Q200,150 300,80"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse-glow"
                />
                <path
                  d="M80,200 Q150,250 320,220"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse-glow"
                />
                <path
                  d="M120,350 Q250,300 300,380"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse-glow"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  )
}
