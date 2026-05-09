import React from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/src/lib/utils";
import Button from "@/src/components/ui/Button";

import { useSettings } from "@/src/context/useSettings";

export default function WorkshopRegistrationForm({ workshopTitle }: { workshopTitle: string }) {
  const [submitted, setSubmitted] = React.useState(false);
  const { language } = useSettings();
  
  const t = {
    fr: {
      success: "Inscription Reçue",
      successDesc: `Merci pour votre intérêt pour l'atelier <strong>${workshopTitle}</strong>. Un conseiller pédagogique vous contactera sous 48h pour valider votre dossier.`,
      title: "S'inscrire à l'atelier",
      nameLabel: "Nom Complet",
      namePlaceholder: "Votre nom...",
      phoneLabel: "Téléphone / WhatsApp",
      phonePlaceholder: "+237 ...",
      levelLabel: "Niveau Actuel",
      levels: ["Débutant (Curiosité)", "Intermédiaire (Pratique occasionnelle)", "Avancé (Projet professionnel)"],
      motivationLabel: "Motivation",
      motivationPlaceholder: "Dites-nous en plus sur vos attentes...",
      submit: "Envoyer ma candidature",
    },
    en: {
      success: "Registration Received",
      successDesc: `Thank you for your interest in the <strong>${workshopTitle}</strong> workshop. A pedagogical advisor will contact you within 48h to validate your application.`,
      title: "Register for Workshop",
      nameLabel: "Full Name",
      namePlaceholder: "Your name...",
      phoneLabel: "Phone / WhatsApp",
      phonePlaceholder: "+237 ...",
      levelLabel: "Current Level",
      levels: ["Beginner (Curiosity)", "Intermediate (Occasional practice)", "Advanced (Professional project)"],
      motivationLabel: "Motivation",
      motivationPlaceholder: "Tell us more about your expectations...",
      submit: "Send my application",
    }
  }[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-bg-main/5 border border-luxury-gold/30 p-12 rounded-3xl text-center"
      >
        <CheckCircle2 size={48} className="text-luxury-gold mx-auto mb-6" />
        <h3 className="text-2xl font-serif mb-4 text-text-main">{t.success}</h3>
        <p className="text-text-main/50 font-light" dangerouslySetInnerHTML={{ __html: t.successDesc }} />
      </motion.div>
    );
  }

  const inputStyles = "w-full bg-bg-main/5 border border-border-main rounded-xl px-5 py-4 text-sm focus:border-luxury-gold outline-none transition-all placeholder:text-text-main/20 text-text-main";

  return (
    <div className="bg-bg-main/5 p-8 sm:p-12 border border-border-main rounded-3xl shadow-2xl relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 rounded-bl-full pointer-events-none" />
      
      <h3 className="text-2xl font-serif mb-8 text-luxury-gold">{t.title}</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-text-main/30 font-bold ml-2">{t.nameLabel}</label>
            <input 
              type="text" 
              required
              className={inputStyles}
              placeholder={t.namePlaceholder}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-text-main/30 font-bold ml-2">{t.phoneLabel}</label>
            <input 
              type="tel" 
              required
              className={inputStyles}
              placeholder={t.phonePlaceholder}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-text-main/30 font-bold ml-2">{t.levelLabel}</label>
          <select className={cn(inputStyles, "text-text-main/60")}>
            {t.levels.map(lvl => (
               <option key={lvl} value={lvl} className="bg-bg-main text-text-main">{lvl}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-text-main/30 font-bold ml-2">{t.motivationLabel}</label>
          <textarea 
            className={cn(inputStyles, "h-32 resize-none")}
            placeholder={t.motivationPlaceholder}
          />
        </div>

        <Button type="submit" variant="luxury" className="w-full h-14 group border-border-main">
          {t.submit} <Send size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Button>
      </form>
    </div>
  );
}
