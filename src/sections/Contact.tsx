import { Mail, Phone, MapPin, Send, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('¡Gracias por contactarnos! El Ingeniero Galán se comunicará contigo pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'danielgalan541@gmail.com',
      href: 'danielgalan541@gmail.com'
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+1 (829) 619-6203',
      href: 'tel:+18296196203'
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Jarabacoa, La Vega, R.D.',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/jarabacoavertical/',
      color: 'hover:text-pink-500'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/18296196203',
      color: 'hover:text-green-500'
    }
  ];

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-white">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#c9a227] text-sm font-semibold uppercase tracking-widest mb-3">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a3c27] mb-6">
            Comienza tu <span className="text-[#c9a227]">Inversión</span>
          </h2>
          <div className="w-24 h-1 bg-[#c9a227] mx-auto mb-6" />
          <p className="text-lg text-[#1a3c27]/70 max-w-2xl mx-auto">
            El Ingeniero Galán está listo para asesorarte personalmente. Completa el formulario y te contactaremos a la brevedad.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-[#f8f6f0] rounded-2xl p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-[#1a3c27] mb-6">
                Envíanos un Mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#1a3c27] font-medium">
                      Nombre Completo
                    </Label>
                    <Input
                      id="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white border-[#1a3c27]/20 focus:border-[#c9a227] focus:ring-[#c9a227]"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#1a3c27] font-medium">
                      Correo Electrónico
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white border-[#1a3c27]/20 focus:border-[#c9a227] focus:ring-[#c9a227]"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#1a3c27] font-medium">
                    Teléfono
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (809) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white border-[#1a3c27]/20 focus:border-[#c9a227] focus:ring-[#c9a227]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#1a3c27] font-medium">
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos sobre tu interés de inversión..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white border-[#1a3c27]/20 focus:border-[#c9a227] focus:ring-[#c9a227] min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#1a3c27] hover:bg-[#2d5a3d] text-white font-semibold py-6 rounded-xl transition-all duration-300"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center p-5 bg-[#f8f6f0] rounded-xl hover:bg-[#1a3c27] group transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#1a3c27] group-hover:bg-[#c9a227]/20 rounded-lg flex items-center justify-center mr-4 transition-colors">
                    <info.icon className="h-5 w-5 text-[#c9a227]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#1a3c27]/60 group-hover:text-white/60 transition-colors">
                      {info.label}
                    </p>
                    <p className="font-semibold text-[#1a3c27] group-hover:text-white transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-[#1a3c27] rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-4">
                Síguenos en Redes
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white ${social.color} hover:bg-white/20 transition-all duration-300`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              <p className="text-white/60 text-sm mt-4">
                @jarabacoaavertical
              </p>
            </div>

            {/* Trust Badge */}
            <div className="border-2 border-[#c9a227]/30 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-[#c9a227]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#c9a227]">JV</span>
              </div>
              <h4 className="font-bold text-[#1a3c27] mb-2">
                Inversión con Confianza
              </h4>
              <p className="text-sm text-[#1a3c27]/70">
                Respaldado por el profesionalismo y transparencia del Ingeniero Galán
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
