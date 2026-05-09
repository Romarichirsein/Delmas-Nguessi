import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search as SearchIcon, Filter, SlidersHorizontal, ArrowRight, Grid, LayoutList } from "lucide-react";
import { mockProducts } from "@/src/lib/sanity";
import ProductCard from "@/src/components/ui/ProductCard";
import { cn, formatPrice } from "@/src/lib/utils";
import Button from "@/src/components/ui/Button";
import QuickViewModal from "@/src/components/ui/QuickViewModal";

const occasions = ["Mariage", "Soirée de Gala", "Business Meeting", "Cocktail", "Quotidien", "Cérémonie Religieuse"];
const cuts = ["Près du corps", "Fluide", "Évasée", "Architecturale", "Minimaliste"];
const lengths = ["Long", "Midi", "Court"];

import HeroSection from "@/src/components/ui/HeroSection";

export default function AdvancedSearch() {
  const [query, setQuery] = React.useState("");
  const [selectedOccasion, setSelectedOccasion] = React.useState("");
  const [selectedCut, setSelectedCut] = React.useState("");
  const [selectedLength, setSelectedLength] = React.useState("");
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid");
  const [quickViewProduct, setQuickViewProduct] = React.useState<any>(null);

  const results = mockProducts.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase());
    const matchesOccasion = !selectedOccasion || p.description.includes(selectedOccasion);
    return matchesSearch && matchesOccasion;
  });

  return (
    <div className="min-h-screen bg-luxury-black pb-20">
      <HeroSection 
        subtitle="Conciergerie Digitale"
        title="Trouvez votre Look"
        description="Utilisez nos filtres avancés pour dénicher la pièce parfaite adaptée à votre morphologie, à l'occasion ou à votre style de prédilection."
        image="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000"
      />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-12 h-fit sticky top-32">
            <div>
              <h2 className="text-3xl font-serif mb-8 text-luxury-gold">Recherche Avancée</h2>
              <div className="relative mb-8">
                <SearchIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                <input 
                  type="text" 
                  placeholder="Inspiration, matière..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm focus:border-luxury-gold outline-none transition-all"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-6 flex items-center gap-2">
                  <SlidersHorizontal size={14} className="text-luxury-gold" /> Occasion
                </h4>
                <div className="space-y-3">
                  {occasions.map(occ => (
                    <label key={occ} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="occasion" 
                        className="hidden" 
                        onChange={() => setSelectedOccasion(selectedOccasion === occ ? "" : occ)}
                        checked={selectedOccasion === occ}
                      />
                      <div className={cn(
                        "w-4 h-4 rounded-full border transition-all flex items-center justify-center",
                        selectedOccasion === occ ? "border-luxury-gold bg-luxury-gold" : "border-white/20 group-hover:border-white/50"
                      )} />
                      <span className={cn("text-xs transition-colors", selectedOccasion === occ ? "text-white" : "text-white/40 group-hover:text-white/60")}>
                        {occ}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-6">Coupe</h4>
                <div className="flex flex-wrap gap-2">
                   {cuts.map(cut => (
                     <button
                      key={cut}
                      onClick={() => setSelectedCut(selectedCut === cut ? "" : cut)}
                      className={cn(
                        "px-3 py-1.5 rounded-md text-[10px] uppercase tracking-widest border transition-all",
                        selectedCut === cut ? "border-luxury-gold text-luxury-gold bg-luxury-gold/10" : "border-white/5 text-white/40 hover:border-white/10"
                      )}
                     >
                       {cut}
                     </button>
                   ))}
                </div>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-6">Longueur</h4>
                <div className="grid grid-cols-3 gap-2">
                   {lengths.map(len => (
                     <button
                      key={len}
                      onClick={() => setSelectedLength(selectedLength === len ? "" : len)}
                      className={cn(
                        "py-2 rounded-md text-[10px] uppercase tracking-widest border transition-all",
                        selectedLength === len ? "border-white text-white font-bold" : "border-white/5 text-white/40"
                      )}
                     >
                       {len}
                     </button>
                   ))}
                </div>
              </div>

              <Button 
                variant="outline" 
                size="sm" 
                className="w-full text-white/40"
                onClick={() => {
                  setSelectedOccasion("");
                  setSelectedCut("");
                  setSelectedLength("");
                  setQuery("");
                }}
              >
                Réinitialiser les filtres
              </Button>
            </div>
          </div>

          {/* Results Area */}
          <div className="lg:col-span-3">
             <div className="flex justify-between items-center mb-12 border-b border-white/5 pb-6">
                <p className="text-white/40 text-xs uppercase tracking-widest">{results.length} Résultats trouvés</p>
                <div className="flex items-center gap-2 bg-white/5 p-1 rounded-lg">
                  <button 
                    onClick={() => setViewMode("grid")}
                    className={cn("p-2 transition-all rounded", viewMode === "grid" ? "bg-luxury-gold text-black" : "text-white/40 hover:text-white")}
                  >
                    <Grid size={18} />
                  </button>
                  <button 
                    onClick={() => setViewMode("list")}
                    className={cn("p-2 transition-all rounded", viewMode === "list" ? "bg-luxury-gold text-black" : "text-white/40 hover:text-white")}
                  >
                    <LayoutList size={18} />
                  </button>
                </div>
             </div>

             {results.length > 0 ? (
               <div className={cn(
                 "transition-all duration-500",
                 viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-10" : "flex flex-col gap-8"
               )}>
                 {results.map(product => (
                   <div key={product.id} className={cn(viewMode === "list" ? "flex flex-col sm:flex-row gap-8 bg-neutral-900/40 p-4 rounded-2xl border border-white/5 group" : "")}>
                     {viewMode === "list" ? (
                       <>
                        <div className="w-full sm:w-48 aspect-[3/4] overflow-hidden rounded-xl shrink-0">
                          <img src={product.mainImage} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="flex flex-col justify-center py-4 pr-4">
                          <span className="text-[10px] text-luxury-gold uppercase tracking-widest font-bold mb-2">{product.category}</span>
                          <h3 className="text-3xl font-serif mb-3 italic">{product.title}</h3>
                          <p className="text-sm text-white/50 mb-6 font-light line-clamp-2">{product.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xl">{formatPrice(product.price)}</span>
                            <div className="flex gap-4">
                               <Button variant="outline" size="sm">Détails</Button>
                               <Button variant="primary" size="sm">Panier</Button>
                            </div>
                          </div>
                        </div>
                       </>
                     ) : (
                       <ProductCard 
                         product={product} 
                         onQuickView={(p) => setQuickViewProduct(p)} 
                       />
                     )}
                   </div>
                 ))}
               </div>
             ) : (
               <div className="py-40 text-center bg-white/5 rounded-3xl border border-white/10">
                 <h3 className="text-2xl font-serif mb-4 italic text-white/50">Aucun modèle trouvé pour vos critères</h3>
                 <p className="text-white/30 text-sm max-w-xs mx-auto">La maison Delmas Nguessi crée également sur-mesure. Contactez-nous pour une création unique.</p>
                 <Button variant="luxury" className="mt-10">Parler à un styliste</Button>
               </div>
             )}
          </div>
        </div>
      </div>
       <QuickViewModal 
         product={quickViewProduct} 
         isOpen={!!quickViewProduct} 
         onClose={() => setQuickViewProduct(null)} 
       />
    </div>
  );
}
