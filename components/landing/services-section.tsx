import { 
  Globe, 
  Megaphone, 
  Share2, 
  Headphones, 
  Lightbulb, 
  Cog 
} from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description: "Sitios web modernos, rápidos y optimizados. Desde landing pages hasta plataformas complejas con las últimas tecnologías.",
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    description: "Estrategias de marketing efectivas para aumentar tu presencia online y atraer más clientes a tu negocio.",
  },
  {
    icon: Share2,
    title: "Gestión de Redes Sociales",
    description: "Administración profesional de tus redes sociales. Contenido atractivo que conecta con tu audiencia.",
  },
  {
    icon: Headphones,
    title: "Soporte Tecnológico",
    description: "Asistencia técnica continua para mantener tu infraestructura digital funcionando sin interrupciones.",
  },
  {
    icon: Lightbulb,
    title: "Consultoría Digital",
    description: "Asesoría experta para digitalizar tu negocio. Te guiamos en cada paso de tu transformación digital.",
  },
  {
    icon: Cog,
    title: "Automatización de Procesos",
    description: "Optimiza operaciones y reduce costos con soluciones de automatización a medida para tu empresa.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-[#1a2e5a] text-3xl sm:text-4xl md:text-5xl">
            Nuestros Servicios
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-20 h-1 bg-[#f47920] rounded-full" />
          </div>
          <p className="mt-6 text-[#1a2e5a]/70 text-lg max-w-2xl mx-auto text-pretty">
            Soluciones integrales para impulsar tu presencia digital y hacer crecer tu negocio
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 md:p-8 border-t-[3px] border-t-[#f47920] shadow-sm hover:shadow-xl hover:shadow-[#1a2e5a]/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-[#00aeef]/10 flex items-center justify-center mb-6 group-hover:bg-[#00aeef]/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-[#00aeef]" />
              </div>
              
              <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-[#1a2e5a] text-xl mb-3">
                {service.title}
              </h3>
              
              <p className="text-[#1a2e5a]/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
