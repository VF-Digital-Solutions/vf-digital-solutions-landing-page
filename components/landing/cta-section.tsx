import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section
      id="contacto"
      className="py-20 md:py-28 relative overflow-hidden bg-white"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#00aeef]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#f47920]/5 rounded-full blur-3xl" />
        
        {/* Floating pixels */}
        <div className="absolute top-[20%] left-[10%] w-3 h-3 bg-[#f47920]/30 rounded-sm animate-float" />
        <div className="absolute top-[60%] left-[20%] w-2 h-2 bg-[#00aeef]/40 rounded-sm animate-float-delayed" />
        <div className="absolute top-[30%] right-[15%] w-4 h-4 bg-[#f47920]/20 rounded-sm animate-float-delayed" />
        <div className="absolute bottom-[30%] right-[25%] w-2 h-2 bg-[#00aeef]/30 rounded-sm animate-float" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Card container */}
        <div className="bg-gradient-to-br from-[#1a2e5a] to-[#1a2333] rounded-3xl p-10 md:p-16 shadow-2xl shadow-[#1a2e5a]/20">
          <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-white text-3xl sm:text-4xl md:text-5xl text-balance">
            ¿Listo para digitalizar tu negocio?
          </h2>
          
          <p className="mt-6 text-white/80 text-lg md:text-xl max-w-2xl mx-auto text-pretty">
            Hablemos hoy. Sin compromiso.
          </p>
          
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-[#f47920] text-white hover:bg-[#f47920]/90 font-bold rounded-xl px-10 py-7 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#f47920]/30 group"
            >
              <Link href="mailto:gerencia@vfdigital.cl" className="flex items-center gap-2">
                Agenda una consulta gratuita
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          
          <p className="mt-6 text-white/60 text-sm">
            Respuesta en menos de 24 horas
          </p>
        </div>
      </div>
    </section>
  )
}
