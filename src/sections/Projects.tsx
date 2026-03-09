import { MapPin, TrendingUp, Home, Trees, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Projects() {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',
      category: 'Residencial',
      title: 'Villas Montaña Alta',
      location: 'Jarabacoa, La Vega',
      description: 'Exclusivas villas con vistas panorámicas a la Cordillera Central. Diseño moderno integrado con la naturaleza.',
      features: ['3-4 Habitaciones', 'Vista Panorámica', 'Áreas Verdes'],
      status: 'En Preventa'
    },
    {
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
      category: 'Turístico',
      title: 'Eco-Resort Valle Verde',
      location: 'Jarabacoa, R.D.',
      description: 'Complejo turístico sostenible con cabañas ecológicas, spa natural y actividades al aire libre.',
      features: ['Cabañas Ecológicas', 'Spa Natural', 'Tours Guiados'],
      status: 'Próximamente'
    },
    {
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
      category: 'Residencial',
      title: 'Condominio Bosque Real',
      location: 'Jarabacoa, La Vega',
      description: 'Condominio cerrado con amenidades de lujo, seguridad 24/7 y acceso a ríos naturales.',
      features: ['Seguridad 24/7', 'Piscina Natural', 'Club House'],
      status: 'En Desarrollo'
    }
  ];

  const investmentTypes = [
    {
      icon: Home,
      title: 'Inmuebles Residenciales',
      description: 'Casas, villas y apartamentos en zonas de alta plusvalía'
    },
    {
      icon: Trees,
      title: 'Proyectos Turísticos',
      description: 'Eco-resorts, cabañas y desarrollos turísticos sostenibles'
    },
    {
      icon: TrendingUp,
      title: 'Terrenos de Inversión',
      description: 'Lotes estratégicamente ubicados con alto potencial de apreciación'
    }
  ];

  return (
    <section id="proyectos" className="py-20 sm:py-28 bg-[#f8f6f0]">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#c9a227] text-sm font-semibold uppercase tracking-widest mb-3">
            Oportunidades
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a3c27] mb-6">
            Proyectos de <span className="text-[#c9a227]">Inversión</span>
          </h2>
          <div className="w-24 h-1 bg-[#c9a227] mx-auto mb-6" />
          <p className="text-lg text-[#1a3c27]/70 max-w-2xl mx-auto">
            Descubre las oportunidades inmobiliarias y turísticas cuidadosamente seleccionadas por el Ingeniero Galán para maximizar tu inversión.
          </p>
        </div>

        {/* Investment Types */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {investmentTypes.map((type, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#1a3c27]/5 text-center"
            >
              <div className="w-14 h-14 bg-[#1a3c27] rounded-full flex items-center justify-center mx-auto mb-4">
                <type.icon className="h-7 w-7 text-[#c9a227]" />
              </div>
              <h3 className="text-lg font-bold text-[#1a3c27] mb-2">{type.title}</h3>
              <p className="text-sm text-[#1a3c27]/70">{type.description}</p>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#1a3c27]/5"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c27]/60 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-[#1a3c27] text-white text-xs">
                    {project.category}
                  </Badge>
                  <Badge className="bg-[#c9a227] text-[#1a3c27] text-xs">
                    {project.status}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-[#1a3c27]/60 text-sm mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {project.location}
                </div>
                
                <h3 className="text-xl font-bold text-[#1a3c27] mb-3 group-hover:text-[#c9a227] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-[#1a3c27]/70 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, fIndex) => (
                    <span 
                      key={fIndex}
                      className="text-xs bg-[#f8f6f0] text-[#1a3c27]/70 px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  className="text-[#c9a227] hover:text-[#1a3c27] hover:bg-[#c9a227]/10 p-0 h-auto font-semibold"
                >
                  Ver Detalles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-[#1a3c27]/70 mb-4">
            ¿Te interesa recibir información sobre nuevos proyectos?
          </p>
          <Button 
            className="bg-[#1a3c27] hover:bg-[#2d5a3d] text-white font-semibold px-8 py-5 rounded-full transition-all duration-300"
          >
            <TrendingUp className="mr-2 h-5 w-5" />
            Solicitar Información
          </Button>
        </div>
      </div>
    </section>
  );
}
