import { Instagram, MessageCircle, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Inicio', href: '#' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Misión y Visión', href: '#mision-vision' },
    { label: 'Ingeniero Galán', href: '#ingeniero' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contacto', href: '#contacto' }
  ];

  const services = [
    'Proyectos Inmobiliarios',
    'Inversiones Turísticas',
    'Terrenos de Inversión',
    'Asesoría Personalizada',
    'Evaluación de Proyectos'
  ];

  return (
    <footer className="bg-[#0d1f14] text-white">
      {/* Main Footer */}
      <div className="section-padding py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#c9a227] rounded-lg flex items-center justify-center overflow-hidden">
              <img src="/img/logo.jpg" alt="JarabacoaVertical" className="h-full w-full object-cover" />
                 </div>
                <div>
                  <h3 className="text-lg font-bold">JarabacoaVertical</h3>
                  <p className="text-xs text-[#c9a227]">Inversión en Altura</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Plataforma de promoción de proyectos inmobiliarios y turísticos en Jarabacoa, R.D. Conectamos oportunidades con visión.
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://instagram.com/jarabacoaavertical" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#c9a227] hover:text-[#1a3c27] transition-all duration-300"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a 
                  href="https://wa.me/18296196203" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#c9a227] hover:text-[#1a3c27] transition-all duration-300"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-[#c9a227]">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-[#c9a227] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-[#c9a227]">Servicios</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-white/70 text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-[#c9a227]">Contacto</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#c9a227] flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">
                    Jarabacoa, La Vega<br />República Dominicana
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#c9a227] flex-shrink-0" />
                  <a 
                    href="mailto:info@jarabacoav.com"
                    className="text-white/70 hover:text-[#c9a227] text-sm transition-colors"
                  >
                    danielgalan541@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#c9a227] flex-shrink-0" />
                  <a 
                    href="tel:+18296196203"
                    className="text-white/70 hover:text-[#c9a227] text-sm transition-colors"
                  >
                    +1 (829) 619-6203
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-padding py-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center sm:text-left">
              © 2025 JarabacoaVertical. Todos los derechos reservados.
            </p>
            <p className="text-white/50 text-sm">
              Fundado por el <span className="text-[#c9a227]">Ing. Daniel Galán</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#c9a227] text-[#1a3c27] rounded-full shadow-lg flex items-center justify-center hover:bg-[#d4b84a] transition-all duration-300 z-50"
        aria-label="Volver arriba"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
