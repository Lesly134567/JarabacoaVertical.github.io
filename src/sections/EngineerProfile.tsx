import { CheckCircle, GraduationCap, Briefcase, Award, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function EngineerProfile() {
  const credentials = [
    'Ingeniero Civil graduado con honores',
    'Especialista en gestión de proyectos inmobiliarios',
    'Experiencia en desarrollo turístico sostenible',
    'Conocimiento profundo del mercado de Jarabacoa',
    'Compromiso total con la transparencia en cada operación'
  ];

  return (
    <section id="ingeniero" className="py-20 sm:py-28 bg-[#1a3c27] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border border-white rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full" />
      </div>

      <div className="section-padding max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#c9a227] text-sm font-semibold uppercase tracking-widest mb-3">
            Liderazgo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Conoce al <span className="text-[#c9a227]">Ingeniero Galán</span>
          </h2>
          <div className="w-24 h-1 bg-[#c9a227] mx-auto" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Profile Image */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#c9a227]/50 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#c9a227]/30 rounded-2xl" />
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#2d5a3d]">
                <img 
                  src="daniel-galan.jpg" 
                  alt="Ingeniero Galán"
                  className="w-full h-[450px] sm:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c27]/80 via-transparent to-transparent" />
                
                {/* Name Badge */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <h3 className="text-xl font-bold text-white">Ing. Daniel Galán</h3>
                    <p className="text-[#c9a227] text-sm">Fundador & Director General</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Intro */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Transparencia y Profesionalismo en Cada Proyecto
              </h3>
              <p className="text-white/80 leading-relaxed text-lg">
                El Ingeniero Daniel Galán funda JarabacoaVertical con una visión clara: transformar la manera en que las personas invierten en Jarabacoa. Con su formación técnica sólida y su profundo conocimiento de la región, ha creado una plataforma donde la <span className="text-[#c9a227] font-semibold">transparencia</span> es el pilar fundamental de cada operación.
              </p>
            </div>

            {/* Credentials */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-[#c9a227] mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Credenciales & Experiencia
              </h4>
              <ul className="space-y-3">
                {credentials.map((credential, index) => (
                  <li key={index} className="flex items-start text-white/80">
                    <CheckCircle className="h-5 w-5 text-[#c9a227] mr-3 mt-0.5 flex-shrink-0" />
                    <span>{credential}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                <GraduationCap className="h-8 w-8 text-[#c9a227] mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">+5</div>
                <div className="text-xs text-white/60">Años de Experiencia</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                <Briefcase className="h-8 w-8 text-[#c9a227] mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-white/60">Compromiso</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                <Award className="h-8 w-8 text-[#c9a227] mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">2025</div>
                <div className="text-xs text-white/60">Inicio JV</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-[#c9a227] hover:bg-[#d4b84a] text-[#1a3c27] font-semibold px-6 py-5 rounded-full transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contactar al Ingeniero
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-5 rounded-full transition-all duration-300"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Ver LinkedIn
              </Button>
            </div>

            {/* Quote */}
            <div className="border-l-4 border-[#c9a227] pl-6 py-2">
              <p className="text-white/90 italic text-lg">
                "Mi compromiso es simple: cada inversionista que confía en JarabacoaVertical recibirá la misma honestidad y dedicación que yo pondría en mis propias inversiones. La transparencia no es una opción, es nuestra base."
              </p>
              <p className="text-[#c9a227] font-semibold mt-2">— Ing. Daniel Galán</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
