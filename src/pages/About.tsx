import React from "react";
import { motion } from "motion/react";
import { Quote, Award, Heart, Globe } from "lucide-react";
import Button from "@/src/components/ui/Button";
import { useNavigate } from "react-router-dom";

const values = [
  {
    icon: <Heart size={24} />,
    title: "Passion",
    desc: "L'amour du métier se ressent dans chaque point de couture."
  },
  {
    icon: <Award size={24} />,
    title: "Excellence",
    desc: "Une rigueur absolue pour des finitions dignes de la haute couture."
  },
  {
    icon: <Globe size={24} />,
    title: "Héritage",
    desc: "Valoriser le savoir-faire africain dans un écrin de modernité."
  }
];

import HeroSection from "@/src/components/ui/HeroSection";

import { useSettings } from "@/src/context/useSettings";

export default function About() {
  const navigate = useNavigate();
  const { language } = useSettings();

  const t = {
    fr: {
      subtitle: "Notre Histoire",
      title: "Héritage & Vision",
      description: "Née d'une passion dévorante pour le textile et d'une vision moderne de l'héritage africain, notre maison s'est imposée comme une référence de la haute couture.",
      spiritTag: "L'Esprit de la Maison",
      mainTitle: "Delmas Nguessi",
      spiritDesc1: "Delmas Nguessi marie avec finesse la couture traditionnelle et les inspirations contemporaines. Chaque création est pensée sur mesure, entre héritage et modernité.",
      spiritDesc2: "Sous la direction artistique de Delmas Nguessi, styliste modéliste mixte et maître tailleur, nous créons des silhouettes qui ne se contentent pas de vêtir, mais racontent une histoire d'élégance indomptable.",
      quote: "L'art de marier héritage et modernité.",
      founder: "Delmas Nguessi, Styliste Modéliste",
      artTag: "L'Art de Créer",
      processTitle: "Le Processus Delmas",
      processDesc: "De l'idée à la réalité, chaque création traverse des étapes sacrées pour garantir une perfection absolue.",
      steps: [
        { title: "Vision", desc: "Échange créatif et croquis personnalisés." },
        { title: "Matière", desc: "Sélection des tissus les plus nobles." },
        { title: "Structure", desc: "Le bâti et l'ajustement morphologique." },
        { title: "Quintessence", desc: "Les finitions main et la livraison." }
      ],
      values: [
        { title: "Excellence", desc: "Chaque point, chaque coupe est exécuté avec une précision chirurgicale." },
        { title: "Savoir-faire", desc: "Fiers de valoriser le savoir-faire artisanal local au service du luxe global." },
        { title: "Passion", desc: "Une dévotion totale à magnifier la silhouette de nos clientes." },
        { title: "Authenticité", desc: "Réinventer les traditions pour une allure moderne et assumée." }
      ],
      sanctuaryTitle: "Nos Sanctuaires de Création",
      city: "Yaoundé, Cameroun",
      atelier1: "Atelier Bastos",
      atelier1Desc: "Notre destination prestige, située à côté du Marché Casino. Un espace feutré dédié aux consultations privées et au prêt-à-porter de luxe.",
      atelier2: "Carrefour du Parc",
      atelier2Desc: "Situé au Carrefour du Parc en allant vers Meec (Boutiques N° 7, 8 et 9). L'âme de la maison où bat le cœur de notre production sur-mesure.",
      finalTitle: "Rejoignez l'univers Delmas Nguessi et redéfinissez votre style.",
      contactBtn: "Nous contacter",
    },
    en: {
      subtitle: "Our Story",
      title: "Heritage & Vision",
      description: "Born of a consuming passion for textiles and a modern vision of African heritage, our house has established itself as a reference in haute couture.",
      spiritTag: "The Spirit of the House",
      mainTitle: "Delmas Nguessi",
      spiritDesc1: "Delmas Nguessi elegantly marries traditional couture with contemporary inspirations. Each creation is bespoke, balanced between heritage and modernity.",
      spiritDesc2: "Under the artistic direction of Delmas Nguessi, mixed fashion designer and master tailor, we create silhouettes that do more than clothe—they tell a story of indomitable elegance.",
      quote: "The art of marrying heritage and modernity.",
      founder: "Delmas Nguessi, Fashion Designer",
      artTag: "The Art of Creating",
      processTitle: "The Delmas Process",
      processDesc: "From idea to reality, each creation goes through sacred steps to guarantee absolute perfection.",
      steps: [
        { title: "Vision", desc: "Creative exchange and personalized sketches." },
        { title: "Material", desc: "Selection of the finest fabrics." },
        { title: "Structure", desc: "Basting and morphological adjustment." },
        { title: "Quintessence", desc: "Hand finishing and delivery." }
      ],
      values: [
        { title: "Excellence", desc: "Every stitch, every cut is executed with surgical precision." },
        { title: "Savoir-faire", desc: "Proud to value local artisanal craftsmanship in the service of global luxury." },
        { title: "Passion", desc: "Total devotion to enhancing our clients' silhouette." },
        { title: "Authenticity", desc: "Reimagining traditions for a modern and assumed look." }
      ],
      sanctuaryTitle: "Our Creative Sanctuaries",
      city: "Yaoundé, Cameroon",
      atelier1: "Bastos Workshop",
      atelier1Desc: "Our prestige destination, located next to the Casino Market. A cozy space dedicated to private consultations and luxury ready-to-wear.",
      atelier2: "Carrefour du Parc",
      atelier2Desc: "Located at Carrefour du Parc towards Meec (Shops No. 7, 8 and 9). The soul of the house where the heart of our bespoke production beats.",
      finalTitle: "Join the Delmas Nguessi universe and redefine your style.",
      contactBtn: "Contact us",
    }
  }[language];

  return (
    <div className="min-h-screen bg-bg-main pb-32 transition-colors duration-500">
      <HeroSection 
        subtitle={t.subtitle}
        title={t.title}
        description={t.description}
        image="/images/653703364_902944365831940_4108709589071447332_n.jpg"
      />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32 pt-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <span className="text-luxury-gold text-xs uppercase tracking-[0.4em] mb-4 block font-bold">{t.spiritTag}</span>
            <h1 className="text-6xl md:text-7xl font-serif mb-6 leading-tight text-text-main">{t.mainTitle}</h1>
            <p className="text-text-main/60 leading-relaxed text-xl font-light">
              {t.spiritDesc1}
            </p>
            <p className="text-text-main/40 leading-relaxed font-light">
              {t.spiritDesc2}
            </p>
          </motion.div>

          <div className="relative aspect-[3/4] bg-bg-main/5 border border-border-main overflow-hidden group rounded-3xl">
            <img 
              src="/images/672096917_923607353765641_6568980255686116601_n.jpg" 
              alt="Delmas Nguessi Stylist" 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-10 left-10 border-l-2 border-luxury-gold pl-6">
               <p className="text-2xl font-serif italic text-text-main">"{t.quote}"</p>
               <p className="text-[10px] uppercase tracking-widest text-luxury-gold mt-2">— {t.founder}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Couture Process Section */}
      <section className="py-32 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <div className="max-w-xl">
             <span className="text-luxury-gold text-[10px] uppercase tracking-widest font-bold block mb-4">{t.artTag}</span>
             <h2 className="text-5xl font-serif text-text-main">{t.processTitle}</h2>
           </div>
           <p className="text-text-main/40 max-w-sm text-sm font-light leading-relaxed">
             {t.processDesc}
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.steps.map((item, i) => (
            <div key={i} className="p-12 bg-bg-main/5 backdrop-blur-xl border border-border-main relative group hover:border-luxury-gold/50 transition-all duration-500 shadow-xl rounded-2xl">
              <span className="absolute top-6 right-6 text-4xl font-serif text-text-main/5 group-hover:text-luxury-gold/20 transition-colors">0{i+1}</span>
              <h4 className="text-xl font-serif mb-4 text-luxury-gold">{item.title}</h4>
              <p className="text-xs text-text-main/40 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-bg-main/50 py-32 border-y border-border-main transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {t.values.map((val, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="text-luxury-gold flex justify-center mb-6">
                {React.cloneElement([<Award />, <Globe />, <Heart />, <Quote />][i] as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-xl font-serif text-text-main uppercase tracking-widest">{val.title}</h3>
              <p className="text-xs text-text-main/40 leading-relaxed font-light">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ateliers Presentation */}
      <section className="py-32 max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif mb-4 italic text-text-main">{t.sanctuaryTitle}</h2>
          <p className="text-text-main/40 text-sm max-w-xl mx-auto uppercase tracking-widest">{t.city}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           <div className="p-10 bg-bg-main/5 backdrop-blur-xl border border-border-main space-y-6 hover:border-luxury-gold/30 hover:bg-bg-main/10 transition-all duration-500 shadow-2xl rounded-3xl">
              <h3 className="text-3xl font-serif text-luxury-gold">{t.atelier1}</h3>
             <p className="text-sm font-light text-text-main/60">{t.atelier1Desc}</p>
             <div className="text-[10px] uppercase tracking-widest font-bold pt-4 border-t border-border-main text-text-main/30">
               📍 Quartier Bastos, Yaoundé
             </div>
           </div>
           
           <div className="p-10 bg-bg-main/5 backdrop-blur-xl border border-border-main space-y-6 hover:border-luxury-gold/30 hover:bg-bg-main/10 transition-all duration-500 shadow-2xl rounded-3xl">
              <h3 className="text-3xl font-serif text-luxury-gold">{t.atelier2}</h3>
             <p className="text-sm font-light text-text-main/60">{t.atelier2Desc}</p>
             <div className="text-[10px] uppercase tracking-widest font-bold pt-4 border-t border-border-main text-text-main/30">
               📍 Nguessi Junction, Yaoundé
             </div>
           </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="py-32 bg-luxury-red text-center">
         <h2 className="text-4xl font-serif mb-10 max-w-2xl mx-auto text-white">{t.finalTitle}</h2>
         <Button variant="secondary" size="lg" className="bg-white text-luxury-red hover:bg-white/90 border-none px-12 h-16" onClick={() => navigate('/contact')}>{t.contactBtn}</Button>
      </section>
    </div>
  );
}
