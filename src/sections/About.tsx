import { Target, Lightbulb, Heart, Award } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Proyectos Seleccionados',
      description: 'Cada oportunidad es cuidadosamente evaluada para garantizar el máximo potencial de crecimiento.'
    },
    {
      icon: Lightbulb,
      title: 'Inversión Inteligente',
      description: 'Identificamos zonas de alta plusvalía con proyección de crecimiento sostenible.'
    },
    {
      icon: Heart,
      title: 'Acompañamiento Real',
      description: 'Estamos contigo en cada decisión, brindando asesoría personalizada y transparente.'
    },
    {
      icon: Award,
      title: 'Valor Sostenible',
      description: 'Transformamos la naturaleza en valor sostenible, respetando el entorno de Jarabacoa.'
    }
  ];

  return (
    <section id="nosotros" className="py-20 sm:py-28 bg-[#f8f6f0]">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#c9a227] text-sm font-semibold uppercase tracking-widest mb-3">
            Quiénes Somos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a3c27] mb-6">
            Conectando Oportunidades con <span className="text-[#c9a227]">Visión</span>
          </h2>
          <div className="w-24 h-1 bg-[#c9a227] mx-auto mb-8" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-[#1a3c27]/80 leading-relaxed">
              <span className="font-semibold text-[#1a3c27]">JarabacoaVertical</span> nace como una plataforma creada para conectar oportunidades inmobiliarias y turísticas con personas que saben invertir con visión.
            </p>
            <p className="text-lg text-[#1a3c27]/80 leading-relaxed">
              En Jarabacoa, uno de los destinos con mayor potencial de crecimiento en la República Dominicana, identificamos, promovemos y canalizamos proyectos de alto valor para inversionistas que buscan más que rendimientos: buscan <span className="font-semibold text-[#c9a227]">crecer en altura</span>.
            </p>
            <p className="text-lg text-[#1a3c27]/80 leading-relaxed">
              Creemos en invertir con criterio, en transformar la naturaleza en valor sostenible, y en que Jarabacoa no es solo un destino, es una <span className="font-semibold text-[#1a3c27]">oportunidad</span>.
            </p>
            <div className="pt-4">
              <p className="text-[#c9a227] font-semibold italic text-lg">
                "Esto apenas comienza."
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80" 
                alt="Jarabacoa paisaje"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c27]/60 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#1a3c27] text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold text-[#c9a227]">2025</div>
              <div className="text-sm text-white/80">Año de Fundación</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#1a3c27]/5"
            >
              <div className="w-12 h-12 bg-[#1a3c27] rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-[#c9a227]" />
              </div>
              <h3 className="text-lg font-bold text-[#1a3c27] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#1a3c27]/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
