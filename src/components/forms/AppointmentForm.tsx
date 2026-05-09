import React from "react";
import { Calendar, Clock, MapPin, User, MessageSquare, CheckCircle2 } from "lucide-react";
import Button from "@/src/components/ui/Button";
import { cn } from "@/src/lib/utils";
import { useSettings } from "@/src/context/useSettings";

export default function AppointmentForm() {
  const { language } = useSettings();
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    ateliers: "Bastos",
    date: "",
    time: "",
    reason: language === 'fr' ? "Essayage Couture" : "Sewing Fitting"
  });

  const t = {
    fr: {
      privilege: "Privilège Client",
      title: "Réservez une Séance privée",
      desc: "Pour un essayage, une prise de mesures ou une consultation personnalisée avec le styliste Delmas Nguessi, réservez votre créneau en quelques clics.",
      benefit1Title: "Consultation Exclusive",
      benefit1Desc: "Échangez directement sur votre vision stylistique.",
      benefit2Title: "Ajustements Express",
      benefit2Desc: "Prise de mesures et retouches ultra-précises.",
      nameLabel: "Nom Complet",
      phoneLabel: "Téléphone",
      atelierLabel: "Choisir l'Atelier",
      atelier1: "Bastos Prestige",
      atelier2: "Nguessi Carrefour",
      dateLabel: "Date souhaitée",
      timeLabel: "Heure",
      reasonLabel: "Motif de la visite",
      reason1: "Premier essayage / Prise mesure",
      reason2: "Consultation avec le styliste",
      reason3: "Achat Prêt-à-porter",
      reason4: "Retouche simple",
      submit: "Confirmer la disponibilité",
      whatsappHeader: "*RENDEZ-VOUS - DELMAS NGUESSI*",
      client: "Client",
      location: "Lieu",
      reason_wa: "Motif",
    },
    en: {
      privilege: "Client Privilege",
      title: "Book a Private Session",
      desc: "For a fitting, measurement or personalized consultation with stylist Delmas Nguessi, book your slot in a few clicks.",
      benefit1Title: "Exclusive Consultation",
      benefit1Desc: "Discuss your stylistic vision directly.",
      benefit2Title: "Express Adjustments",
      benefit2Desc: "Ultra-precise measurements and alterations.",
      nameLabel: "Full Name",
      phoneLabel: "Phone",
      atelierLabel: "Choose Workshop",
      atelier1: "Bastos Prestige",
      atelier2: "Nguessi Carrefour",
      dateLabel: "Desired Date",
      timeLabel: "Time",
      reasonLabel: "Reason for visit",
      reason1: "First fitting / Measurement",
      reason2: "Consultation with stylist",
      reason3: "Ready-to-wear Purchase",
      reason4: "Simple alteration",
      submit: "Confirm Availability",
      whatsappHeader: "*APPOINTMENT - DELMAS NGUESSI*",
      client: "Client",
      location: "Location",
      reason_wa: "Reason",
    }
  }[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "+237694246514";
    const message = `${t.whatsappHeader}\n------------------\n*${t.client}:* ${formData.name}\n*Tel:* ${formData.phone}\n*${t.location}:* Atelier ${formData.ateliers}\n*Date:* ${formData.date}\n*Heure:* ${formData.time}\n*${t.reason_wa}:* ${formData.reason}`;
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const inputStyles = "w-full bg-bg-main/5 border border-border-main rounded-xl px-4 py-3 text-sm focus:border-luxury-gold outline-none transition-all placeholder:text-text-main/20 text-text-main";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
      {/* Left Info Column */}
      <div className="lg:col-span-2 space-y-10">
        <div className="space-y-6">
          <span className="text-luxury-gold text-[10px] uppercase tracking-widest font-bold">{t.privilege}</span>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight text-text-main">{t.title}</h2>
          <p className="text-text-main/40 font-light leading-relaxed">
            {t.desc}
          </p>
        </div>

        <ul className="space-y-6">
          <li className="flex gap-4">
             <div className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center shrink-0 text-luxury-gold">
               <CheckCircle2 size={18} />
             </div>
             <div>
               <h4 className="text-sm font-serif text-text-main">{t.benefit1Title}</h4>
               <p className="text-xs text-text-main/40 mt-1">{t.benefit1Desc}</p>
             </div>
          </li>
          <li className="flex gap-4">
             <div className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center shrink-0 text-luxury-gold">
               <CheckCircle2 size={18} />
             </div>
             <div>
               <h4 className="text-sm font-serif text-text-main">{t.benefit2Title}</h4>
               <p className="text-xs text-text-main/40 mt-1">{t.benefit2Desc}</p>
             </div>
          </li>
        </ul>
      </div>

      {/* Right Form Column */}
      <div className="lg:col-span-3 bg-bg-main/5 backdrop-blur-2xl border border-border-main p-8 md:p-12 rounded-[3rem] shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-text-main/40 ml-2">{t.nameLabel}</label>
              <div className="relative">
                <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-gold" />
                <input required type="text" className={cn(inputStyles, "pl-10")} value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-text-main/40 ml-2">{t.phoneLabel}</label>
               <input required type="tel" className={inputStyles} value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[9px] uppercase tracking-widest text-text-main/40 ml-2">{t.atelierLabel}</label>
            <div className="grid grid-cols-2 gap-3">
               <button 
                type="button" 
                onClick={() => setFormData({...formData, ateliers: "Bastos"})}
                className={cn("py-3 rounded-xl border text-[10px] uppercase tracking-widest transition-all", formData.ateliers === "Bastos" ? "border-luxury-gold bg-luxury-gold/10 text-luxury-gold" : "border-border-main text-text-main/40")}
               >
                 {t.atelier1}
               </button>
               <button 
                type="button" 
                onClick={() => setFormData({...formData, ateliers: "Nguessi Carrefour"})}
                className={cn("py-3 rounded-xl border text-[10px] uppercase tracking-widest transition-all", formData.ateliers === "Nguessi Carrefour" ? "border-luxury-gold bg-luxury-gold/10 text-luxury-gold" : "border-border-main text-text-main/40")}
               >
                 {t.atelier2}
               </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest text-text-main/40 ml-2">{t.dateLabel}</label>
                <div className="relative">
                  <Calendar size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-gold" />
                  <input required type="date" className={cn(inputStyles, "pl-10")} value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} />
                </div>
             </div>
             <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest text-text-main/40 ml-2">{t.timeLabel}</label>
                <div className="relative">
                  <Clock size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-gold" />
                  <input required type="time" className={cn(inputStyles, "pl-10")} value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} />
                </div>
             </div>
          </div>

          <div className="space-y-2">
            <label className="text-[9px] uppercase tracking-widest text-text-main/40 ml-2">{t.reasonLabel}</label>
            <select className={inputStyles} value={formData.reason} onChange={(e) => setFormData({...formData, reason: e.target.value})}>
               <option value={t.reason1}>{t.reason1}</option>
               <option value={t.reason2}>{t.reason2}</option>
               <option value={t.reason3}>{t.reason3}</option>
               <option value={t.reason4}>{t.reason4}</option>
            </select>
          </div>

          <Button type="submit" variant="luxury" className="w-full h-14 gap-2">
            <MessageSquare size={18} /> {t.submit}
          </Button>
        </form>
      </div>
    </div>
  );
}
