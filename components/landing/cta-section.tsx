import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section
      id="contacto"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a2e5a 0%, #f47920 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        
        {/* Floating pixels */}
        <div className="absolute top-[20%] left-[10%] w-3 h-3 bg-white/20 rounded-sm animate-float" />
        <div className="absolute top-[60%] left-[20%] w-2 h-2 bg-white/30 rounded-sm animate-float-delayed" />
        <div className="absolute top-[30%] right-[15%] w-4 h-4 bg-white/20 rounded-sm animate-float-delayed" />
        <div className="absolute bottom-[30%] right-[25%] w-2 h-2 bg-white/25 rounded-sm animate-float" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-balance">
          ¿Listo para digitalizar tu negocio?
        </h2>
        
        <p className="mt-6 text-white/90 text-lg md:text-xl max-w-2xl mx-auto text-pretty">
          Hablemos hoy. Sin compromiso.
        </p>
        
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="bg-white text-[#1a2e5a] hover:bg-white/90 font-bold rounded-xl px-10 py-7 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/20 group"
          >
            <Link href="mailto:gerencia@vfdigital.cl" className="flex items-center gap-2">
              Agenda una consulta gratuita
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        
        <p className="mt-6 text-white/70 text-sm">
          Respuesta en menos de 24 horas
        </p>
      </div>
    </section>
  )
}
