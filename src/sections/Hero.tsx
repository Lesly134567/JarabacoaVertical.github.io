import { ArrowDown, TrendingUp, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1f14]/80 via-[#1a3c27]/70 to-[#0d1f14]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-padding py-20">
        {/* Logo Area */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white/10 backdrop-blur-sm border-2 border-[#c9a227]/50 mb-6">
            <span className="text-4xl sm:text-5xl font-bold text-white">JV</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
          Jarabacoa<span className="text-[#c9a227]">Vertical</span>
        </h1>
        
        {/* Tagline */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 sm:w-20 bg-[#c9a227]/60" />
          <p className="text-lg sm:text-xl md:text-2xl text-[#c9a227] font-medium tracking-widest uppercase">
            Inversión en Altura
          </p>
          <div className="h-px w-12 sm:w-20 bg-[#c9a227]/60" />
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Plataforma de promoción de proyectos inmobiliarios y turísticos en Jarabacoa, R.D.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button 
            onClick={() => scrollToSection('proyectos')}
            className="bg-[#c9a227] hover:bg-[#d4b84a] text-[#1a3c27] font-semibold px-8 py-6 text-base rounded-full transition-all duration-300 hover:scale-105"
          >
            <TrendingUp className="mr-2 h-5 w-5" />
            Explorar Proyectos
          </Button>
          <Button 
            onClick={() => scrollToSection('contacto')}
            className="bg-white/10 backdrop-blur-sm border-2 border-[#c9a227] text-[#c9a227] hover:bg-[#c9a227] hover:text-[#1a3c27] font-semibold px-8 py-6 text-base rounded-full transition-all duration-300 hover:scale-105"
          >
            <Shield className="mr-2 h-5 w-5" />
            Contactar Ahora
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#c9a227] mb-1">100%</div>
            <div className="text-sm text-white/70 uppercase tracking-wider">Transparencia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#c9a227] mb-1">
              <Users className="inline h-8 w-8 mr-1" />
            </div>
            <div className="text-sm text-white/70 uppercase tracking-wider">Enfoque Personalizado</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#c9a227] mb-1">RD</div>
            <div className="text-sm text-white/70 uppercase tracking-wider">Jarabacoa</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button 
          onClick={() => scrollToSection('nosotros')}
          className="flex flex-col items-center text-white/60 hover:text-[#c9a227] transition-colors duration-300"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Descubre Más</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
