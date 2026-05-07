import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Misión', href: '#mision-vision' },
    { label: 'Ingeniero', href: '#ingeniero' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contacto', href: '#contacto' }
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="section-padding max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); scrollToSection('#'); }}
              className="flex items-center gap-2"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                isScrolled ? 'bg-[#1a3c27]' : 'bg-white/20 backdrop-blur-sm border border-white/30'
              }`}>
               <img src="/img/logo.jpg" alt="JarabacoaVertical" className="h-8 w-auto" />
              </div>
              <div className={`hidden sm:block transition-colors ${isScrolled ? 'text-[#1a3c27]' : 'text-white'}`}>
                <span className="font-bold text-sm">JarabacoaVertical</span>
                <span className={`block text-[10px] uppercase tracking-wider ${isScrolled ? 'text-[#c9a227]' : 'text-white/80'}`}>
                  Inversión en Altura
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isScrolled 
                      ? 'text-[#1a3c27] hover:text-[#c9a227] hover:bg-[#1a3c27]/5' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button 
                onClick={() => scrollToSection('#contacto')}
                className={`rounded-full px-6 transition-all duration-300 ${
                  isScrolled
                    ? 'bg-[#c9a227] hover:bg-[#d4b84a] text-[#1a3c27]'
                    : 'bg-white/20 backdrop-blur-sm border border-white/50 text-white hover:bg-white/30'
                }`}
              >
                Invertir Ahora
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                isScrolled 
                  ? 'text-[#1a3c27] hover:bg-[#1a3c27]/5' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-[#0d1f14]/95 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl p-6 transition-all duration-300 ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
        }`}>
          <div className="space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="block px-4 py-3 text-[#1a3c27] font-medium rounded-lg hover:bg-[#f8f6f0] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t border-[#1a3c27]/10">
            <Button 
              onClick={() => scrollToSection('#contacto')}
              className="w-full bg-[#c9a227] hover:bg-[#d4b84a] text-[#1a3c27] font-semibold py-5 rounded-xl"
            >
              Invertir Ahora
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
