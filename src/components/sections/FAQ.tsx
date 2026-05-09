import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { useSettings, translations } from "@/src/context/useSettings";

const faqs_content = {
  fr: [
    {
      question: "Quels sont vos délais pour une création sur-mesure ?",
      answer: "Pour une tenue de cérémonie classique, comptez entre 2 et 4 semaines. Pour une robe de mariée, nous recommandons de nous contacter au moins 2 à 3 mois à l'avance pour garantir une perfection absolue dans chaque détail."
    },
    {
      question: "Où se situent vos ateliers à Yaoundé ?",
      answer: "Nous avons deux adresses prestigieuses : Bastos (à côté du Marché Casino) pour notre salon de réception, et Carrefour Nguessi (en face du Mat-Génie) pour notre atelier de confection historique."
    },
    {
      question: "Proposez-vous la livraison à Douala ou à l'international ?",
      answer: "Oui, nous livrons régulièrement à Douala via nos partenaires logistiques. Pour l'international, nous expédions via DHL avec une prise de mesures guidée à distance pour le sur-mesure."
    },
    {
      question: "Comment se déroule la prise de rendez-vous ?",
      answer: "Vous pouvez réserver via le formulaire 'Rendez-vous' sur ce site, ou nous contacter directement sur WhatsApp. Vous recevrez une confirmation dans l'heure."
    }
  ],
  en: [
    {
      question: "What are your lead times for a custom creation?",
      answer: "For a classic ceremony outfit, allow between 2 and 4 weeks. For a wedding dress, we recommend contacting us at least 2 to 3 months in advance to ensure absolute perfection in every detail."
    },
    {
      question: "Where are your workshops located in Yaoundé?",
      answer: "We have two prestigious addresses: Bastos (next to the Casino Market) for our reception hall, and Carrefour Nguessi (opposite Mat-Génie) for our historical tailoring workshop."
    },
    {
      question: "Do you offer delivery to Douala or internationally?",
      answer: "Yes, we regularly deliver to Douala via our logistics partners. For international orders, we ship via DHL with remote guided measurement for custom-made items."
    },
    {
      question: "How does the appointment process work?",
      answer: "You can book via the 'Appointment' form on this site, or contact us directly on WhatsApp. You will receive a confirmation within the hour."
    }
  ]
};

export default function FAQ() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const { language } = useSettings();
  const t = translations[language].sections;
  const content = faqs_content[language];

  return (
    <section className="py-32 bg-bg-main/50 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-luxury-gold text-xs uppercase tracking-[0.4em] font-bold block mb-4">Support client</span>
          <h2 className="text-4xl md:text-5xl font-serif italic text-text-main">{t.faq}</h2>
        </div>

        <div className="space-y-4">
          {content.map((faq, i) => (
            <div key={i} className="border-b border-border-main pb-4">
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className={cn(
                  "text-xl font-serif transition-colors",
                  activeIndex === i ? "text-luxury-gold" : "text-text-main/80 group-hover:text-text-main"
                )}>
                  {faq.question}
                </span>
                <div className={cn(
                  "w-8 h-8 rounded-full border border-border-main flex items-center justify-center shrink-0 transition-transform",
                  activeIndex === i ? "rotate-180 border-luxury-gold text-luxury-gold" : "text-text-main/30"
                )}>
                  {activeIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-text-main/50 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
