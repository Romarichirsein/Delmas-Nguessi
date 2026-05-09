import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Star, Quote, Award, MapPin, ShoppingBag as ShoppingBagIcon } from "lucide-react";
import { useProducts } from "@/src/context/useProducts";
import ProductCard from "@/src/components/ui/ProductCard";
import Button from "@/src/components/ui/Button";
import { useSettings, translations } from "@/src/context/useSettings";
import { Link, useNavigate } from "react-router-dom";
import FAQ from "@/src/components/sections/FAQ";
import Testimonials from "@/src/components/sections/Testimonials";
import QuickViewModal from "@/src/components/ui/QuickViewModal";

export default function Home() {
  const { language } = useSettings();
  const navigate = useNavigate();
  const { products } = useProducts();
  const [quickViewProduct, setQuickViewProduct] = React.useState<any>(null);
  const tForHero = translations[language].hero;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const tSections = translations[language].sections;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image / Video Placeholder */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src="/images/592414871_820411847418526_8779992772699709020_n.jpg" 
            alt="Haute Couture Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-main via-bg-main/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="inline-block text-luxury-gold text-xs uppercase tracking-[0.5em] mb-4 font-semibold italic">
              Maison de Couture Yaoundé
            </span>
            <h1 className="text-4xl md:text-8xl font-serif text-text-main leading-tight mb-8">
              {tForHero.title.split(' ').map((word, i) => (
                <span key={i} className="block overflow-hidden h-[1.1em]">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>
            <p className="text-lg text-text-main/70 mb-10 leading-relaxed font-light">
              {tForHero.subtitle}
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/appointment">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="gap-2 group h-16 px-10"
                >
                  {tForHero.cta_appointment} <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Link to="/catalogue">
                <Button variant="outline" size="lg" className="h-16 px-10">
                  {tForHero.cta_catalog}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Atelier Badge */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-12 right-12 hidden lg:flex items-center gap-4 bg-white/5 backdrop-blur-xl p-6 border border-white/10 rounded-2xl"
        >
          <div className="bg-luxury-gold p-3 text-bg-main rounded-lg">
            <Award size={24} />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold">Expert Styliste</p>
            <p className="text-sm font-serif">Delmas Nguessi</p>
          </div>
        </motion.div>
      </section>

      {/* Signature Collections Section */}
      <section className="py-32 bg-bg-main border-y border-border-main overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-20 lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="lg:col-span-2 space-y-8"
            >
              <motion.span variants={itemVariants} className="text-luxury-gold text-xs uppercase tracking-[0.4em] font-bold block">Signature 2026</motion.span>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-serif italic text-text-main">L'Art de l'Indomptable</motion.h2>
              <motion.p variants={itemVariants} className="text-text-main/40 font-light leading-relaxed">
                Notre nouvelle collection célèbre la femme moderne : forte, élégante et profondément connectée à ses racines. Des tissus structurés aux détails de dentelle délicats.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Button variant="luxury" onClick={() => navigate('/modeles')}>
                  Voir le lookbook
                </Button>
              </motion.div>
            </motion.div>
            <div className="lg:col-span-3 grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="aspect-[3/4] bg-white/[0.03] backdrop-blur-xl border border-white/10 overflow-hidden relative group rounded-3xl shadow-2xl"
              >
                <img src="/images/494204651_653399494119763_3283082856637455345_n.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="aspect-[3/4] bg-white/[0.03] backdrop-blur-xl border border-white/10 overflow-hidden relative group mt-12 rounded-3xl shadow-2xl"
              >
                <img src="/images/554096409_765712162888495_3636194478930008749_n.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 bg-bg-main relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-md">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-luxury-gold text-xs uppercase tracking-widest block mb-4"
              >
                Sélection Prestige
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-serif text-text-main"
              >
                {tSections.featured}
              </motion.h2>
            </div>
            <Link to="/catalogue" className="text-sm uppercase tracking-widest text-luxury-gold hover:text-text-main transition-colors flex items-center gap-2 pb-2 border-b border-luxury-gold/50 h-fit">
              Voir tout le catalogue <ArrowRight size={14} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.filter(p => p.isFeatured).map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard 
                  product={product} 
                  onQuickView={(p) => setQuickViewProduct(p)}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <QuickViewModal 
          product={quickViewProduct} 
          isOpen={!!quickViewProduct} 
          onClose={() => setQuickViewProduct(null)} 
        />
      </section>

      {/* Univers Section with Reveal Animation */}
      <section className="py-32 bg-bg-main relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
              className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="/images/486248762_626382453488134_3237831973051617764_n.jpg" 
                alt="Tailoring" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-10 -right-10 w-64 h-64 border border-luxury-gold/30 p-8 bg-white/[0.05] backdrop-blur-2xl z-10 hidden md:block rounded-2xl shadow-2xl"
          >
              <Quote className="text-luxury-gold mb-6" size={32} />
              <p className="text-sm font-serif italic text-white/80 leading-relaxed">
                "La couture n'est pas seulement un vêtement, c'est une armure d'assurance et un poème d'élégance."
              </p>
              <p className="text-[10px] uppercase tracking-widest mt-6 text-luxury-gold font-bold">— Delmas Nguessi</p>
            </motion.div>
          </div>
          
          <div className="space-y-10">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-luxury-gold text-xs uppercase tracking-widest block font-bold">L'Univers Delmas</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-serif leading-tight italic">{language === 'fr' ? 'Savoir-faire & Authenticité' : 'Craftsmanship & Authenticity'}</motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-text-main/60 leading-relaxed text-lg font-light">
              {language === 'fr' 
                ? "Située au cœur de Yaoundé (Bastos & Carrefour Nguessi), la maison Delmas Nguessi incarne le renouveau de la haute couture camerounaise. Nous marions les étoffes les plus nobles à des coupes architecturales qui magnifient chaque morphologie."
                : "Located in the heart of Yaoundé (Bastos & Nguessi Junction), the House of Delmas Nguessi embodies the revival of Cameroonian haute couture. We blend the finest fabrics with architectural cuts that enhance every silhouette."}
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex gap-4 items-start">
                <MapPin className="text-luxury-gold shrink-0" size={24} />
                <div>
                  <h4 className="font-serif text-text-main text-lg mb-2">Bastos Prestige</h4>
                  <p className="text-sm text-text-main/50 leading-relaxed">Destination de prestige à côté de Casino.</p>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex gap-4 items-start">
                <MapPin className="text-luxury-gold shrink-0" size={24} />
                <div>
                  <h4 className="font-serif text-text-main text-lg mb-2">Nguessi Carrefour</h4>
                  <p className="text-sm text-text-main/50 leading-relaxed">Un atelier créatif historique en face du Mat-Génie.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Hover Cards */}
      <section className="py-32 bg-bg-main">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-luxury-gold text-xs uppercase tracking-widest block mb-4 font-bold">{language === 'fr' ? "Nos Prestations d'Excellence" : "Our Excellence Services"}</span>
            <h2 className="text-3xl md:text-5xl font-serif italic text-text-main">{language === 'fr' ? "L'Art du Sur-Mesure" : "The Art of Bespoke"}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(language === 'fr' ? [
              { title: "Mode Sur-Mesure", desc: "Des silhouettes uniques ajustées à votre vision et morphologie.", icon: <Award /> },
              { title: "Prêt-à-Porter", desc: "Des collections raffinées disponibles immédiatement en boutique.", icon: <ShoppingBagIcon /> },
              { title: "Conseil en Image", desc: "Sublimer votre allure et votre confiance personnelle.", icon: <Star /> },
              { title: "Ateliers", desc: "Transmettre l'art précieux de la couture camerounaise.", icon: <Quote /> }
            ] : [
              { title: "Bespoke Fashion", desc: "Unique silhouettes tailored to your vision and body shape.", icon: <Award /> },
              { title: "Ready-to-Wear", desc: "Refined collections available immediately in-store.", icon: <ShoppingBagIcon /> },
              { title: "Image Consulting", desc: "Enhancing your appearance and personal confidence.", icon: <Star /> },
              { title: "Workshops", desc: "Sharing the precious art of Cameroonian tailoring.", icon: <Quote /> }
            ]).map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-luxury-gold/50 hover:bg-white/[0.05] transition-all duration-500 group overflow-hidden relative rounded-[2rem] shadow-2xl"
              >
                <div className="absolute inset-0 bg-luxury-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-16 h-16 rounded-full border border-luxury-gold/20 flex items-center justify-center mx-auto mb-8 group-hover:bg-luxury-gold group-hover:text-bg-main transition-all group-hover:scale-110 duration-500 relative z-10">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-xl font-serif mb-4 relative z-10 group-hover:text-luxury-gold transition-colors text-text-main">{service.title}</h3>
                <p className="text-sm text-text-main/50 leading-relaxed relative z-10 font-light">{service.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-2 mt-8 text-[11px] uppercase tracking-widest text-luxury-gold border-b border-luxury-gold/30 pb-1 relative z-10 hover:text-text-main hover:border-text-main transition-all group-hover:border-luxury-gold">
                  Explorer <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Final */}
      <section className="py-40 bg-luxury-red relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img src="/images/524702755_717584267701285_4222307855655821772_n.jpg" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-8xl font-serif mb-12 leading-tight italic text-white">
              {language === 'fr' ? 'Sublimez votre élégance' : 'Elevate your elegance'}
            </h2>
            <p className="text-white/80 mb-12 text-lg font-light max-w-xl mx-auto leading-relaxed">
              {language === 'fr' 
                ? 'Planifiez votre visite exclusive pour une expérience de couture hors du commun à Yaoundé.'
                : 'Plan your exclusive visit for an extraordinary tailoring experience in Yaoundé.'}
            </p>
            <Link to="/appointment">
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full sm:w-auto shadow-3xl h-20 px-16 group text-lg tracking-widest bg-bg-main text-text-main hover:bg-luxury-gold hover:text-bg-main border-none"
              >
                {language === 'fr' ? 'Rendez-vous Privé' : 'Private Appointment'} <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
