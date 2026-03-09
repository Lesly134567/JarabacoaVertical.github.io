import { Eye, Compass, Scale, Handshake, Leaf, Sparkles } from 'lucide-react';

export default function MissionVision() {
  const values = [
    {
      icon: Scale,
      title: 'Transparencia',
      description: 'Cada proyecto es presentado con información clara, honesta y completa. Sin sorpresas, sin ocultamientos.'
    },
    {
      icon: Handshake,
      title: 'Integridad',
      description: 'Actuamos con los más altos estándares éticos, priorizando siempre el bienestar de nuestros inversionistas.'
    },
    {
      icon: Leaf,
      title: 'Sostenibilidad',
      description: 'Respetamos y preservamos la belleza natural de Jarabacoa en cada proyecto que promovemos.'
    },
    {
      icon: Sparkles,
      title: 'Excelencia',
      description: 'Buscamos la perfección en cada detalle, desde la selección de proyectos hasta el servicio al cliente.'
    }
  ];

  return (
    <section id="mision-vision" className="py-20 sm:py-28 bg-white">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#c9a227] text-sm font-semibold uppercase tracking-widest mb-3">
            Nuestra Esencia
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a3c27] mb-6">
            Misión, Visión y <span className="text-[#c9a227]">Valores</span>
          </h2>
          <div className="w-24 h-1 bg-[#c9a227] mx-auto" />
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="relative bg-[#1a3c27] rounded-2xl p-8 sm:p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a227]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-[#c9a227]/20 rounded-xl flex items-center justify-center mb-6">
                <Compass className="h-7 w-7 text-[#c9a227]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Nuestra Misión</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                Conectar oportunidades inmobiliarias y turísticas de alto valor en Jarabacoa con inversionistas visionarios, proporcionando una plataforma transparente, confiable y personalizada que facilite decisiones de inversión inteligentes y sostenibles.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="relative bg-[#f8f6f0] rounded-2xl p-8 sm:p-10 overflow-hidden border-2 border-[#1a3c27]/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1a3c27]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-[#1a3c27]/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-[#1a3c27]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1a3c27] mb-4">Nuestra Visión</h3>
              <p className="text-[#1a3c27]/80 leading-relaxed text-lg">
                Ser la plataforma líder de inversión inmobiliaria en Jarabacoa y la región, reconocida por nuestra transparencia, excelencia y compromiso con el crecimiento sostenible, conectando a cientos de inversionistas con proyectos que transforman el paisaje y generan valor real.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1a3c27] text-center mb-10">
            Nuestros <span className="text-[#c9a227]">Valores</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-[#f8f6f0] rounded-xl p-6 hover:bg-[#1a3c27] transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 bg-[#1a3c27] group-hover:bg-[#c9a227]/20 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                  <value.icon className="h-6 w-6 text-[#c9a227] group-hover:text-[#c9a227]" />
                </div>
                <h4 className="text-lg font-bold text-[#1a3c27] group-hover:text-white mb-2 transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-sm text-[#1a3c27]/70 group-hover:text-white/80 leading-relaxed transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
