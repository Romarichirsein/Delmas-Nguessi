import React from "react";
import AppointmentForm from "@/src/components/forms/AppointmentForm";
import { motion } from "motion/react";
import { Clock, MapPin, Phone } from "lucide-react";

import { useSettings } from "@/src/context/useSettings";

export default function AppointmentSetPage() {
  const { language } = useSettings();
  
  const t = {
    fr: {
      title: "Rendez-vous Privé",
      subtitle: "L'excellence commence par un accueil sur-mesure. Choisissez votre atelier et planifiez votre visite dans l'un de nos deux sanctuaires de la mode à Yaoundé.",
      hours: "Horaires",
      hoursVal: "Lun - Sam | 09h - 19h",
      ateliers: "Ateliers",
      ateliersVal: "Bastos | Nguessi Carrefour",
      emergency: "Urgence Style",
    },
    en: {
      title: "Private Appointment",
      subtitle: "Excellence begins with a tailored welcome. Choose your workshop and plan your visit in one of our two fashion sanctuaries in Yaoundé.",
      hours: "Hours",
      hoursVal: "Mon - Sat | 9am - 7pm",
      ateliers: "Workshops",
      ateliersVal: "Bastos | Nguessi Junction",
      emergency: "Style Emergency",
    }
  }[language];

  return (
    <div className="min-h-screen bg-bg-main pt-32 pb-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-20 text-center">
            <h1 className="text-5xl md:text-7xl font-serif mb-6 italic text-text-main">{t.title}</h1>
            <p className="text-text-main/40 font-light max-w-2xl mx-auto">
              {t.subtitle}
            </p>
        </header>

        <AppointmentForm />

        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Clock />, label: t.hours, val: t.hoursVal },
              { icon: <MapPin />, label: t.ateliers, val: t.ateliersVal },
              { icon: <Phone />, label: t.emergency, val: "+237 694 246 514" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-bg-main/5 border border-border-main rounded-3xl">
                <div className="text-luxury-gold mb-4">{React.cloneElement(item.icon as React.ReactElement, { size: 32 })}</div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-text-main/30 mb-2">{item.label}</h4>
                <p className="text-lg font-serif text-text-main">{item.val}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
