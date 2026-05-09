import React from "react";
import { motion } from "motion/react";
import { Award, Scissors, Users, GraduationCap, ArrowRight, MessageSquare, MapPin } from "lucide-react";
import Button from "@/src/components/ui/Button";
import { Link, useNavigate } from "react-router-dom";

import QuoteForm from "@/src/components/forms/QuoteForm";

import { useSettings } from "@/src/context/useSettings";
import HeroSection from "@/src/components/ui/HeroSection";
import FAQ from "@/src/components/sections/FAQ";

export default function Services() {
  const navigate = useNavigate();
  const { language } = useSettings();

  const services = [
    {
      id: "sur-mesure",
      title: language === 'fr' ? "Couture Sur-Mesure" : "Bespoke Couture",
      icon: <Scissors size={32} />,
      description: language === 'fr' 
        ? "Une expérience unique où chaque vêtement est conçu exclusivement pour vous. De la prise de mesures aux croquis personnalisés, nous créons des pièces qui épousent parfaitement votre morphologie et votre personnalité."
        : "A unique experience where each garment is exclusively designed for you. From taking measurements to personalized sketches, we create pieces that perfectly fit your body and personality.",
      steps: language === 'fr'
        ? ["Consultation initiale & Style", "Choix des tissus & Croquis", "Prise de mesures précises", "Premier essayage (Bâti)", "Finitions main & Livraison"]
        : ["Initial Consultation & Style", "Fabric Selection & Sketches", "Precise Measurements", "First Fitting (Baste)", "Hand Finishing & Delivery"]
    },
    {
      id: "pret-a-porter",
      title: language === 'fr' ? "Prêt-à-Porter de Luxe" : "Luxury Ready-to-Wear",
      icon: <Award size={32} />,
      description: language === 'fr'
        ? "Nos collections saisonnières disponibles immédiatement dans nos ateliers de Bastos et Carrefour Nguessi. Des pièces haut de gamme prêtes à sublimer votre quotidien."
        : "Our seasonal collections available immediately in our ateliers in Bastos and Nguessi Junction. Premium pieces ready to enhance your daily life.",
      steps: language === 'fr'
        ? ["Collections limitées", "Qualité artisanale", "Retouches offertes", "Accompagnement stylistique"]
        : ["Limited collections", "Artisanal quality", "Free alterations", "Style accompaniment"]
    },
    {
      id: "tailleur",
      title: language === 'fr' ? "Maître Tailleur" : "Master Tailor",
      icon: <Scissors size={32} />,
      description: language === 'fr'
        ? "L'excellence technique au service de votre vestiaire. Nous maîtrisons l'art de la coupe et de l'assemblage pour des pièces d'une précision irréprochable."
        : "Technical excellence at the service of your wardrobe. We master the art of cutting and assembly for pieces of irreproachable precision.",
      steps: language === 'fr'
        ? ["Coupe traditionnelle", "Finitions artisanales", "Ajustements précis", "Entretien du luxe"]
        : ["Traditional cut", "Artisanal finishes", "Precise adjustments", "Luxury maintenance"]
    },
    {
      id: "coach",
      title: language === 'fr' ? "Fashion Coach & Personal Shopper" : "Fashion Coach & Personal Shopper",
      icon: <Users size={32} />,
      description: language === 'fr'
        ? "Un accompagnement privé pour définir votre identité visuelle. Diagnostic de garde-robe, shopping personnalisé et conseils en image stratégiques."
        : "Private accompaniment to define your visual identity. Wardrobe diagnosis, personalized shopping, and strategic image advice.",
      steps: language === 'fr'
        ? ["Diagnostic identitaire", "Shopping guidé", "Optimisation de style", "Coaching privé"]
        : ["Identity diagnosis", "Guided shopping", "Style optimization", "Private coaching"]
    }
  ];

  const t = {
    fr: {
      subtitle: "Savoir-faire d'Exception",
      title: "Nos Services de Prestige",
      description: "Delmas Nguessi marie avec finesse la couture traditionnelle et les inspirations contemporaines. Découvrez nos prestations sur-mesure.",
      process: "Processus & Invariants",
      learnMore: "En savoir plus",
      ctaTitle: "Besoin de conseils en image ?",
      ctaBastos: "Atelier Casino Bastos",
      ctaNguessi: "Boutiques Carrefour du Parc",
    },
    en: {
      subtitle: "Exceptional Savoir-faire",
      title: "Our Prestige Services",
      description: "Delmas Nguessi elegantly marries traditional couture with contemporary inspirations. Discover our bespoke services.",
      process: "Process & Invariants",
      learnMore: "Learn more",
      ctaTitle: "Need image consulting?",
      ctaBastos: "Casino Bastos Workshop",
      ctaNguessi: "Carrefour du Parc Shops",
    }
  }[language];

  return (
    <div className="min-h-screen bg-bg-main pb-20 transition-colors duration-500">
      <HeroSection 
        subtitle={t.subtitle}
        title={t.title}
        description={t.description}
        image="/images/474843510_588544520605261_223940177265882897_n.jpg"
      />

      <div className="max-w-7xl mx-auto px-4">

        <div className="space-y-40 mb-40">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-20 items-center",
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              )}
            >
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="aspect-[4/3] bg-bg-main/5 backdrop-blur-xl border border-border-main relative overflow-hidden group shadow-2xl rounded-3xl">
                  <img 
                    src={i === 0 ? '/images/474811985_588546250605088_7047240369248446979_n.jpg' : i === 1 ? '/images/474878205_588541880605525_5744955745811776735_n.jpg' : i === 2 ? '/images/475133649_588542380605475_1079549339794125740_n.jpg' : '/images/651754294_900705899389120_1130377440611785196_n.jpg'}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-main to-transparent" />
                  <div className="absolute bottom-10 left-10 text-luxury-gold">
                    {service.icon}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-4xl font-serif group-hover:text-luxury-gold text-text-main">{service.title}</h2>
                <p className="text-text-main/60 leading-relaxed font-light text-lg">
                  {service.description}
                </p>
                <div className="space-y-4">
                  <h4 className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold">{t.process}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.steps.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-text-main/50">
                        <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full" />
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-6">
                  <Link to="/contact">
                    <Button variant="luxury" className="gap-3">
                      {t.learnMore} <ArrowRight size={18} />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Form Section */}
        <QuoteForm />

        {/* FAQ Section */}
        <div className="mt-40">
           <FAQ />
        </div>

        {/* Global CTA */}
        <section className="mt-40 text-center py-20 border-y border-border-main">
          <h2 className="text-3xl font-serif mb-8 italic text-text-main">{t.ctaTitle}</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/appointment">
              <Button variant="secondary" size="lg" className="bg-bg-main text-text-main hover:bg-luxury-gold hover:text-bg-main border-border-main">{t.ctaBastos}</Button>
            </Link>
            <Link to="/appointment">
              <Button variant="outline" size="lg" className="border-border-main text-text-main hover:bg-text-main hover:text-bg-main">{t.ctaNguessi}</Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

const cn = (...classes: any[]) => classes.filter(Boolean).join(" ");
