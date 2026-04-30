import { Search, FileText, Rocket, HeartHandshake } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico",
    description: "Analizamos tu situación actual y entendemos tus objetivos de negocio.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Propuesta",
    description: "Diseñamos una solución personalizada con presupuesto claro y sin sorpresas.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Implementación",
    description: "Desarrollamos tu proyecto con entregas incrementales y comunicación constante.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Soporte continuo",
    description: "Te acompañamos después del lanzamiento con mantenimiento y mejoras.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-[#1a2e5a] text-3xl sm:text-4xl md:text-5xl">
            ¿Cómo <span className="text-[#f47920]">trabajamos</span>?
          </h2>
          <p className="mt-6 text-[#1a2e5a]/70 text-lg max-w-2xl mx-auto text-pretty">
            Un proceso simple y transparente para convertir tus ideas en realidad
          </p>
        </div>

        {/* Process timeline */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-1 bg-[#00aeef]/30 rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00aeef] via-[#00aeef]/50 to-[#00aeef] rounded-full animate-pulse-glow" />
          </div>

          {/* Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Mobile connection line */}
                {index < steps.length - 1 && (
                  <div className="sm:hidden absolute top-full left-1/2 w-0.5 h-8 bg-[#00aeef]/30 -translate-x-1/2" />
                )}
                
                <div className="text-center group">
                  {/* Number badge */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-white border-4 border-[#00aeef] flex items-center justify-center relative z-10 group-hover:border-[#f47920] transition-colors duration-300 shadow-lg">
                      <span className="font-[family-name:var(--font-montserrat)] font-bold text-[#f47920] text-2xl">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 mx-auto rounded-xl bg-[#1a2e5a]/5 flex items-center justify-center mb-4 group-hover:bg-[#f47920]/10 transition-colors duration-300">
                    <step.icon className="w-6 h-6 text-[#1a2e5a]" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-[#1a2e5a] text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#1a2e5a]/70 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
