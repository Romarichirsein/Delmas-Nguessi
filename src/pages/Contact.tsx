import React from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, Instagram, Facebook } from "lucide-react";
import Button from "@/src/components/ui/Button";
import AppointmentForm from "@/src/components/forms/AppointmentForm";
import GoogleMap from "@/src/components/ui/GoogleMap";
import { cn } from "@/src/lib/utils";

import HeroSection from "@/src/components/ui/HeroSection";

import { useSettings } from "@/src/context/useSettings";

export default function Contact() {
  const { language } = useSettings();
  const [formData, setFormData] = React.useState({ name: "", email: "", subject: "", message: "" });
  
  const t = {
    fr: {
      subtitle: "Disponibilité Premium",
      title: "Contactez la Maison",
      description: "Pour une prise de rendez-vous, une commande sur-mesure ou une simple demande d'information, nos conseillers sont à votre entière disposition.",
      detailsTitle: "Coordonnées",
      phone: "Téléphone",
      email: "E-mail",
      hours: "Horaires",
      hoursVal: "Lun - Sam : 09h00 - 19h00",
      follow: "Suivez-nous",
      nameLabel: "Votre Nom",
      namePlaceholder: "Jean Dupont",
      emailLabel: "Votre E-mail",
      emailPlaceholder: "jean@exemple.com",
      subjectLabel: "Objet",
      subjectPlaceholder: "Prise de rendez-vous, Commande...",
      messageLabel: "Message",
      messagePlaceholder: "Comment pouvons-nous vous aider ?",
      submit: "Envoyer le message",
      success: "Merci pour votre message. Nous reviendrons vers vous très prochainement.",
      atelier1Title: "Atelier Bastos Prestige",
      atelier1Desc: "Notre showroom exclusif à Bastos, situé à côté du Marché Casino. Un espace dédié à l'élégance et à la réception de nos clients pour des essayages sur-mesure dans un cadre intime.",
      atelier2Title: "Boutiques Carrefour du Parc",
      atelier2Desc: "Situé au Carrefour du Parc en allant vers Meec (Boutiques N° 7, 8 et 9). L'essence de la marque là où l'art de la couture se concrétise.",
    },
    en: {
      subtitle: "Premium Availability",
      title: "Contact the House",
      description: "For an appointment, a custom order, or a simple request for information, our advisors are at your full disposal.",
      detailsTitle: "Contact Details",
      phone: "Phone",
      email: "E-mail",
      hours: "Hours",
      hoursVal: "Mon - Sat: 9:00 AM - 7:00 PM",
      follow: "Follow us",
      nameLabel: "Your Name",
      namePlaceholder: "John Doe",
      emailLabel: "Your Email",
      emailPlaceholder: "john@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "Appointment booking, Order...",
      messageLabel: "Message",
      messagePlaceholder: "How can we help you?",
      submit: "Send Message",
      success: "Thank you for your message. We will get back to you shortly.",
      atelier1Title: "Bastos Prestige Workshop",
      atelier1Desc: "Our exclusive showroom in Bastos, located next to the Casino Market. A space dedicated to elegance and welcoming our clients for custom fittings in an intimate setting.",
      atelier2Title: "Carrefour du Parc Boutiques",
      atelier2Desc: "Located at Carrefour du Parc towards Meec (Shops No. 7, 8 and 9). The essence of the brand where the art of sewing takes shape.",
    }
  }[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t.success);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const inputStyles = "w-full bg-bg-main/5 border border-border-main rounded-xl px-6 py-4 text-sm focus:border-luxury-gold outline-none transition-all placeholder:text-text-main/20 text-text-main";

  return (
    <div className="min-h-screen bg-bg-main pb-20 transition-colors duration-500">
      <HeroSection 
        subtitle={t.subtitle}
        title={t.title}
        description={t.description}
        image="/images/653703565_900705679389142_1339018922596775200_n.jpg"
      />

      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 mb-40">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-serif text-luxury-gold border-b border-border-main pb-4">{t.detailsTitle}</h3>
              
              <div className="flex gap-6 items-start text-text-main">
                <div className="p-3 bg-bg-main/5 text-luxury-gold rounded-full shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold mb-1 opacity-40">{t.phone}</h4>
                  <p className="text-sm tracking-wider">+237 694 246 514 / 673 762 321</p>
                </div>
              </div>

              <div className="flex gap-6 items-start text-text-main">
                <div className="p-3 bg-bg-main/5 text-luxury-gold rounded-full shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold mb-1 opacity-40">{t.email}</h4>
                  <p className="text-sm">contact@delmas-nguessi.com</p>
                </div>
              </div>

              <div className="flex gap-6 items-start text-text-main">
                <div className="p-3 bg-bg-main/5 text-luxury-gold rounded-full shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold mb-1 opacity-40">{t.hours}</h4>
                  <p className="text-sm">{t.hoursVal}</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
               <h3 className="text-2xl font-serif text-luxury-gold border-b border-border-main pb-4">{t.follow}</h3>
               <div className="flex gap-4">
                 <a href="#" className="p-4 bg-bg-main/5 text-luxury-gold rounded-full hover:bg-luxury-gold hover:text-bg-main transition-all border border-border-main">
                   <Instagram size={20} />
                 </a>
                 <a href="https://www.facebook.com/delmas.nguessi" target="_blank" rel="noopener noreferrer" className="p-4 bg-bg-main/5 text-luxury-gold rounded-full hover:bg-luxury-gold hover:text-bg-main transition-all border border-border-main">
                   <Facebook size={20} />
                 </a>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-bg-main/5 backdrop-blur-2xl p-8 sm:p-12 border border-border-main rounded-[3rem] shadow-2xl">
             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-text-main/40 ml-4 font-bold">{t.nameLabel}</label>
                    <input 
                      type="text" 
                      required
                      placeholder={t.namePlaceholder}
                      className={inputStyles}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-text-main/40 ml-4 font-bold">{t.emailLabel}</label>
                    <input 
                      type="email" 
                      required
                      placeholder={t.emailPlaceholder}
                      className={inputStyles}
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-text-main/40 ml-4 font-bold">{t.subjectLabel}</label>
                  <input 
                    type="text" 
                    required
                    placeholder={t.subjectPlaceholder}
                    className={inputStyles}
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-text-main/40 ml-4 font-bold">{t.messageLabel}</label>
                  <textarea 
                    required
                    placeholder={t.messagePlaceholder}
                    className={cn(inputStyles, "h-40 resize-none")}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full h-16 text-sm gap-3 bg-luxury-gold text-bg-main hover:bg-luxury-gold/90 border-none">
                  {t.submit} <Send size={18} />
                </Button>
             </form>
          </div>
        </div>

        {/* Appointment Form Section */}
        <section className="py-32 border-t border-border-main">
          <AppointmentForm />
        </section>

        {/* Map Section */}
        <section className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
               <div className="flex items-center gap-4 text-luxury-gold">
                 <MapPin size={32} />
                 <h3 className="text-3xl font-serif italic text-text-main">{t.atelier1Title}</h3>
               </div>
               <p className="text-text-main/50 leading-relaxed font-light">
                 {t.atelier1Desc}
               </p>
               <GoogleMap location="bastos" className="aspect-video" />
            </div>
            
            <div className="space-y-8">
               <div className="flex items-center gap-4 text-luxury-gold">
                 <MapPin size={32} />
                 <h3 className="text-3xl font-serif italic text-text-main">{t.atelier2Title}</h3>
               </div>
               <p className="text-text-main/50 leading-relaxed font-light">
                 {t.atelier2Desc}
               </p>
               <GoogleMap location="meec" className="aspect-video" />
            </div>
        </section>
      </div>
    </div>
  );
}
