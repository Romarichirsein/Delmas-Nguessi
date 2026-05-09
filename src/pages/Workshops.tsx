import React from "react";
import { motion } from "motion/react";
import { GraduationCap, Clock, MapPin, CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";
import Button from "@/src/components/ui/Button";

const workshops = [
  {
    id: 1,
    title: "Initiation à la Coupe Architecturale",
    level: "Débutant",
    duration: "4 semaines",
    price: "75 000 XAF",
    desc: "Apprenez les bases de la couture et la compréhension des volumes pour créer vos premières silhouettes.",
    curriculum: ["Prise de mesures", "Utilisation machine industrielle", "Patronage de base", "Confection d'une jupe et d'un top"]
  },
  {
    id: 2,
    title: "Perfectionnement Haute Couture",
    level: "Intermédiaire",
    duration: "8 semaines",
    price: "150 000 XAF",
    desc: "Maîtrisez les finitions main, le travail des étoffes nobles (soie, dentelle) et le drapé sur mannequin.",
    curriculum: ["Finitions invisibles", "Travail de la dentelle", "Drapé et moulage", "Doublage de prestige"]
  },
  {
    id: 3,
    title: "Spécialisation Robes de Cérémonie",
    level: "Avancé",
    duration: "12 semaines",
    price: "250 000 XAF",
    desc: "Le summum du savoir-faire Delmas Nguessi. Apprenez à concevoir des robes de soirée et de mariée complexes.",
    curriculum: ["Corseterie moderne", "Structures de soutien", "Broderies perlées", "Gestion du volume type gala"]
  }
];

import HeroSection from "@/src/components/ui/HeroSection";
import WorkshopRegistrationForm from "@/src/components/forms/WorkshopRegistrationForm";

import { useSettings } from "@/src/context/useSettings";

export default function Workshops() {
  const [selectedWorkshop, setSelectedWorkshop] = React.useState<string | null>(null);
  const { language } = useSettings();

  const workshopsData = [
    {
      id: 1,
      title: language === 'fr' ? "Initiation à la Coupe Architecturale" : "Architectural Cutting Initiation",
      level: language === 'fr' ? "Débutant" : "Beginner",
      duration: language === 'fr' ? "4 semaines" : "4 weeks",
      price: "75 000 XAF",
      desc: language === 'fr' 
        ? "Apprenez les bases de la couture et la compréhension des volumes pour créer vos premières silhouettes."
        : "Learn the basics of sewing and understanding volumes to create your first silhouettes.",
      curriculum: language === 'fr'
        ? ["Prise de mesures", "Utilisation machine industrielle", "Patronage de base", "Confection d'une jupe et d'un top"]
        : ["Measurement taking", "Industrial machine use", "Basic patterning", "Making a skirt and top"]
    },
    {
      id: 2,
      title: language === 'fr' ? "Perfectionnement Haute Couture" : "Haute Couture Perfection",
      level: language === 'fr' ? "Intermédiaire" : "Intermediate",
      duration: language === 'fr' ? "8 semaines" : "8 weeks",
      price: "150 000 XAF",
      desc: language === 'fr'
        ? "Maîtrisez les finitions main, le travail des étoffes nobles (soie, dentelle) et le drapé sur mannequin."
        : "Master hand finishing, working with noble fabrics (silk, lace), and draping on a mannequin.",
      curriculum: language === 'fr'
        ? ["Finitions invisibles", "Travail de la dentelle", "Drapé et moulage", "Doublage de prestige"]
        : ["Invisible finishing", "Lace work", "Draping and molding", "Prestige lining"]
    },
    {
      id: 3,
      title: language === 'fr' ? "Spécialisation Robes de Cérémonie" : "Ceremonial Gown Specialization",
      level: language === 'fr' ? "Avancé" : "Advanced",
      duration: language === 'fr' ? "12 semaines" : "12 weeks",
      price: "250 000 XAF",
      desc: language === 'fr'
        ? "Le summum du savoir-faire Delmas Nguessi. Apprenez à concevoir des robes de soirée et de mariée complexes."
        : "The pinnacle of Delmas Nguessi's savoir-faire. Learn to design complex evening and bridal gowns.",
      curriculum: language === 'fr'
        ? ["Corseterie moderne", "Structures de soutien", "Broderies perlées", "Gestion du volume type gala"]
        : ["Modern corsetry", "Support structures", "Beaded embroidery", "Gala-type volume management"]
    }
  ];

  const t = {
    fr: {
      subtitle: "Transmission du Savoir",
      title: "Ateliers de Couture",
      description: "La maison Delmas Nguessi ouvre ses portes aux futurs talents de la mode. Apprenez l'art de l'élégance auprès de professionnels passionnés.",
      level: "Niveau",
      program: "Programme",
      apply: "S'inscrire maintenant",
      practicalTitle: "Informations Pratiques",
      practicalDesc: "Nos sessions de formation se déroulent à l'Atelier Nguessi Carrefour, dans un environnement professionnel équipé des dernières technologies de couture.",
      location: "Nguessi Carrefour, Yaoundé",
      admissionTitle: "Conditions d'admission",
      admissions: [
        "Entretien préalable avec Delmas Nguessi",
        "Dossier de motivation requis",
        "Nombre de places limité à 6 par session",
        "Matériel de base fourni par la maison"
      ]
    },
    en: {
      subtitle: "Transmission of Knowledge",
      title: "Sewing Workshops",
      description: "The House of Delmas Nguessi opens its doors to future fashion talents. Learn the art of elegance from passionate professionals.",
      level: "Level",
      program: "Curriculum",
      apply: "Register now",
      practicalTitle: "Practical Information",
      practicalDesc: "Our training sessions take place at the Nguessi Junction Workshop, in a professional environment equipped with the latest sewing technologies.",
      location: "Nguessi Junction, Yaoundé",
      admissionTitle: "Admission Conditions",
      admissions: [
        "Prior interview with Delmas Nguessi",
        "Motivation letter required",
        "Limited to 6 students per session",
        "Basic material provided by the house"
      ]
    }
  }[language];

  const inputStyles = "w-full bg-bg-main/5 border border-border-main rounded-xl px-5 py-4 text-sm focus:border-luxury-gold outline-none transition-all placeholder:text-text-main/20 text-text-main";

  return (
    <div className="min-h-screen bg-bg-main pb-20 transition-colors duration-500">
      <HeroSection 
        subtitle={t.subtitle}
        title={t.title}
        description={t.description}
        image="https://images.unsplash.com/photo-1549497538-301288c8541a?auto=format&fit=crop&q=80&w=2000"
      />

      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {workshopsData.map((ws, i) => (
            <motion.div
              key={ws.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-bg-main/5 backdrop-blur-xl border border-border-main p-10 rounded-[3rem] flex flex-col hover:border-luxury-gold/30 hover:bg-bg-main/10 transition-all duration-500 group shadow-2xl"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="p-4 bg-bg-main/5 rounded-full text-luxury-gold group-hover:bg-luxury-gold group-hover:text-bg-main transition-colors border border-border-main">
                  <GraduationCap size={28} />
                </div>
                <span className="text-[10px] uppercase tracking-widest bg-bg-main/10 px-4 py-1 rounded-full font-bold text-text-main/60">
                  {t.level} {ws.level}
                </span>
              </div>
              
              <h3 className="text-2xl font-serif mb-4 leading-tight text-text-main">{ws.title}</h3>
              <p className="text-sm text-text-main/40 mb-8 font-light leading-relaxed">{ws.desc}</p>
              
              <div className="space-y-4 mb-10 flex-grow">
                 <h4 className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold">{t.program}</h4>
                 <ul className="space-y-3">
                   {ws.curriculum.map((item, idx) => (
                     <li key={idx} className="flex gap-3 text-xs text-text-main/60">
                       <CheckCircle2 size={14} className="text-luxury-gold shrink-0" />
                       {item}
                     </li>
                   ))}
                 </ul>
              </div>

              <div className="pt-8 border-t border-border-main space-y-6">
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2 text-text-main/40">
                    <Clock size={16} /> {ws.duration}
                  </div>
                  <div className="font-mono text-luxury-gold">{ws.price}</div>
                </div>
                <Button 
                  variant="luxury" 
                  className="w-full gap-2 border-border-main"
                  onClick={() => setSelectedWorkshop(ws.title)}
                >
                  <MessageSquare size={16} /> {t.apply}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedWorkshop && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-20 max-w-2xl mx-auto"
          >
            <WorkshopRegistrationForm workshopTitle={selectedWorkshop} />
          </motion.div>
        )}

        {/* Practical Info */}
        <section className="mt-32 p-12 bg-bg-main/5 backdrop-blur-2xl border border-border-main rounded-[3rem] grid grid-cols-1 md:grid-cols-2 gap-16 items-center shadow-3xl">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif text-text-main">{t.practicalTitle}</h2>
            <p className="text-text-main/60 font-light leading-relaxed">
              {t.practicalDesc}
            </p>
            <div className="flex items-center gap-4 text-luxury-gold">
              <MapPin size={24} />
              <span className="text-sm uppercase tracking-widest font-bold">{t.location}</span>
            </div>
          </div>
          <div className="bg-bg-main/10 p-10 rounded-2xl border border-border-main">
            <h4 className="text-luxury-gold text-[10px] uppercase tracking-widest font-bold mb-6">{t.admissionTitle}</h4>
            <ul className="space-y-4 text-sm font-light text-text-main/70">
              {t.admissions.map((adm, i) => (
                <li key={i}>• {adm}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
