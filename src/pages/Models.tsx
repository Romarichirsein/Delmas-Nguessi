import React from "react";
import { motion } from "motion/react";
import { ArrowRight, MessageSquare } from "lucide-react";
import Button from "@/src/components/ui/Button";
import { Link, useNavigate } from "react-router-dom";

import HeroSection from "@/src/components/ui/HeroSection";
import { useProducts } from "@/src/context/useProducts";

export default function Models() {
  const navigate = useNavigate();
  const { products } = useProducts();

  // We select a few featured products for the lookbook
  const lookbookImages = products
    .filter(p => p.isFeatured)
    .slice(0, 6)
    .map(p => ({
      id: p.id,
      url: p.mainImage,
      title: p.title,
      style: p.style,
      slug: p.slug
    }));

  return (
    <div className="min-h-screen bg-luxury-black pb-20">
      <HeroSection 
        subtitle="Lookbook Éditorial"
        title="Inspiration & Allure"
        description="Plongez dans l'univers créatif de la maison Delmas Nguessi. Chaque cliché capture l'essence d'une coupe, le mouvement d'un tissu et la puissance d'une silhouette magnifiée."
        image="https://images.unsplash.com/photo-1539109132304-351ed1bd993b?auto=format&fit=crop&q=80&w=2000"
      />

      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {lookbookImages.map((look, i) => (
            <motion.div
              key={look.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl">
                <img 
                  src={look.url} 
                  alt={look.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center">
                   <span className="text-[10px] uppercase tracking-widest text-luxury-gold mb-2">{look.style}</span>
                   <h3 className="text-2xl font-serif text-white mb-6 underline decoration-luxury-gold decoration-1 underline-offset-8">{look.title}</h3>
                   <div className="space-y-3">
                     <Link to={`/produit/${look.slug}`}>
                       <Button variant="outline" size="sm" className="w-full">
                         Détails du look
                       </Button>
                     </Link>
                     <Link to="/appointment">
                       <Button variant="luxury" size="sm" className="w-full gap-2">
                         <MessageSquare size={14} /> Demander sur-mesure
                       </Button>
                     </Link>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Bottom */}
        <div className="mt-32 p-16 bg-white/[0.02] backdrop-blur-2xl border border-white/10 text-center rounded-[3rem] relative overflow-hidden shadow-3xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-luxury-red/10 to-transparent pointer-events-none" />
          <h2 className="text-4xl font-serif mb-8 max-w-xl mx-auto">Votre vision mérite une réalisation d'exception.</h2>
          <Link to="/appointment">
            <Button variant="primary" size="lg" className="shadow-2xl">
              Prendre rendez-vous avec le styliste
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
