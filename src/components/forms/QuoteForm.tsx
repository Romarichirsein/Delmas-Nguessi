import React from "react";
import { Send, FileText, Ruler, Scissors } from "lucide-react";
import Button from "@/src/components/ui/Button";
import { cn } from "@/src/lib/utils";

import { useSettings } from "@/src/context/useSettings";

export default function QuoteForm() {
  const { language } = useSettings();
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    service: language === 'fr' ? "Sur-Mesure" : "Bespoke",
    budget: "",
    deadline: "",
    description: ""
  });

  const t = {
    fr: {
      tag: "Estimation gratuite",
      title: "Demander un Devis Personnalisé",
      desc: "Décrivez-nous votre projet de couture. Notre équipe étudiera votre demande pour vous proposer une estimation ajustée à vos attentes.",
      namePlaceholder: "Nom complet",
      phonePlaceholder: "Téléphone",
      serviceOptions: ["Couture Sur-Mesure", "Tenue de Mariage", "Robe de Soirée / Gala", "Ensemble Business", "Uniforme Corporate"],
      budgetPlaceholder: "Budget approx. (XAF)",
      deadlinePlaceholder: "Échéance (Date)",
      projectPlaceholder: "Description de votre projet (Matières souhaitées, style, détails particuliers...)",
      submit: "Envoyer ma demande",
      note: "Une réponse vous sera envoyée via WhatsApp sous 24h à 48h.",
    },
    en: {
      tag: "Free Estimation",
      title: "Request a Custom Quote",
      desc: "Describe your sewing project to us. Our team will study your request to propose an estimate adjusted to your expectations.",
      namePlaceholder: "Full Name",
      phonePlaceholder: "Phone",
      serviceOptions: ["Bespoke Couture", "Wedding Outfit", "Evening / Gala Gown", "Business Set", "Corporate Uniform"],
      budgetPlaceholder: "Approx. Budget (XAF)",
      deadlinePlaceholder: "Deadline (Date)",
      projectPlaceholder: "Description of your project (Desired materials, style, specific details...)",
      submit: "Send my request",
      note: "A response will be sent via WhatsApp within 24h to 48h.",
    }
  }[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "+237694246514";
    const header = language === 'fr' ? 'DEMANDE DE DEVIS' : 'QUOTE REQUEST';
    const message = `*${header} - DELMAS NGUESSI*\n------------------\n*Nom:* ${formData.name}\n*Tel:* ${formData.phone}\n*Service:* ${formData.service}\n*Budget:* ${formData.budget}\n*Délai:* ${formData.deadline}\n*Description:* ${formData.description}`;
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const inputStyles = "w-full bg-bg-main/5 border border-border-main rounded-xl px-4 py-3 text-sm focus:border-luxury-gold outline-none transition-all placeholder:text-text-main/20 text-text-main";

  return (
    <div className="bg-bg-main/5 backdrop-blur-2xl border border-border-main rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
        <Ruler size={120} className="text-luxury-gold" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center mb-12">
        <span className="text-luxury-gold text-[10px] uppercase tracking-widest font-bold mb-4 block">{t.tag}</span>
        <h2 className="text-4xl md:text-5xl font-serif mb-6 text-text-main">{t.title}</h2>
        <p className="text-text-main/40 font-light max-w-xl mx-auto">
          {t.desc}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <input 
            required 
            type="text" 
            placeholder={t.namePlaceholder} 
            className={inputStyles}
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input 
            required 
            type="tel" 
            placeholder={t.phonePlaceholder} 
            className={inputStyles}
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          <select 
            className={inputStyles}
            value={formData.service}
            onChange={(e) => setFormData({...formData, service: e.target.value})}
          >
            {t.serviceOptions.map(opt => (
              <option key={opt} value={opt} className="bg-bg-main text-text-main">{opt}</option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
             <input 
              type="text" 
              placeholder={t.budgetPlaceholder} 
              className={inputStyles}
              value={formData.budget}
              onChange={(e) => setFormData({...formData, budget: e.target.value})}
            />
             <input 
              type="text" 
              placeholder={t.deadlinePlaceholder} 
              className={inputStyles}
              value={formData.deadline}
              onChange={(e) => setFormData({...formData, deadline: e.target.value})}
            />
          </div>
          <textarea 
            required
            placeholder={t.projectPlaceholder} 
            className={cn(inputStyles, "h-32 resize-none")}
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          />
        </div>

        <div className="md:col-span-2 pt-6">
          <Button type="submit" variant="primary" size="lg" className="w-full h-16 gap-3 bg-luxury-gold text-luxury-black hover:bg-luxury-gold/90 border-none font-bold">
            {t.submit} <Send size={18} />
          </Button>
          <p className="text-[10px] uppercase tracking-widest text-center mt-6 text-text-main/30">
            {t.note}
          </p>
        </div>
      </form>
    </div>
  );
}
