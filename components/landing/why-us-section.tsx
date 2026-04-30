import { Users, Zap, Target, Award } from "lucide-react"

const reasons = [
  {
    icon: Users,
    title: "Atención Personalizada",
    description: "Trabajamos directamente contigo. Sin intermediarios, sin demoras.",
    stat: "100%",
    statLabel: "Dedicación",
  },
  {
    icon: Zap,
    title: "Respuesta Rápida",
    description: "Nos comunicamos de forma ágil. Tu tiempo es valioso.",
    stat: "24h",
    statLabel: "Respuesta",
  },
  {
    icon: Target,
    title: "Soluciones a Medida",
    description: "Cada proyecto es único. Creamos soluciones que se adaptan a ti.",
    stat: "100%",
    statLabel: "Personalizado",
  },
  {
    icon: Award,
    title: "Experiencia Comprobada",
    description: "Años de experiencia trabajando con empresas chilenas.",
    stat: "+50",
    statLabel: "Proyectos",
  },
]

export function WhyUsSection() {
  return (
    <section id="por-que-nosotros" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-[#1a2e5a] text-3xl sm:text-4xl md:text-5xl text-balance">
            ¿Por qué elegir <span className="text-[#f47920]">VF Digital</span>?
          </h2>
          <p className="mt-6 text-[#1a2e5a]/70 text-lg max-w-2xl mx-auto text-pretty">
            Nos diferenciamos por nuestra cercanía y compromiso con cada cliente
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group text-center p-6 md:p-8 rounded-xl bg-white shadow-lg shadow-[#1a2e5a]/5 border border-[#e2e8f0] hover:shadow-xl hover:shadow-[#1a2e5a]/10 hover:border-[#f47920]/30 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#f47920]/10 flex items-center justify-center mb-6 group-hover:bg-[#f47920]/20 transition-colors duration-300">
                <reason.icon className="w-8 h-8 text-[#f47920]" />
              </div>
              
              <div className="mb-4">
                <span className="font-[family-name:var(--font-montserrat)] font-bold text-[#00aeef] text-4xl">
                  {reason.stat}
                </span>
                <p className="text-[#1a2e5a]/50 text-sm mt-1">{reason.statLabel}</p>
              </div>
              
              <h3 className="font-[family-name:var(--font-montserrat)] font-semibold text-[#1a2e5a] text-xl mb-3">
                {reason.title}
              </h3>
              
              <p className="text-[#1a2e5a]/70 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
