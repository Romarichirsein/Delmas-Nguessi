import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Filter, X, ChevronDown, Check, Search as SearchIcon } from "lucide-react";
import { useProducts } from "@/src/context/useProducts";
import ProductCard from "@/src/components/ui/ProductCard";
import { cn } from "@/src/lib/utils";

const categories = ["Tout", "Robe de Soirée", "Robe de Gala", "Tenue Business", "Ensembles", "Mariage", "Accessoires"];
const styles = ["Tout", "Élégant", "Magnifié", "Afro-Chic", "Business", "Audacieux"];

import HeroSection from "@/src/components/ui/HeroSection";
import { useSettings } from "@/src/context/useSettings";
import QuickViewModal from "@/src/components/ui/QuickViewModal";

export default function Catalog() {
  const { language, theme } = useSettings();
  const [selectedCategory, setSelectedCategory] = React.useState("Tout");
  const [selectedStyle, setSelectedStyle] = React.useState("Tout");
  const [quickViewProduct, setQuickViewProduct] = React.useState<any>(null);

  const categories = language === 'fr' 
    ? ["Tout", "Robe de Soirée", "Robe de Gala", "Tenue Business", "Ensembles", "Mariage", "Accessoires"]
    : ["All", "Evening Gown", "Gala Dress", "Business Wear", "Sets", "Wedding", "Accessories"];
  
  const styles = language === 'fr'
    ? ["Tout", "Élégant", "Magnifié", "Afro-Chic", "Business", "Audacieux"]
    : ["All", "Elegant", "Magnified", "Afro-Chic", "Business", "Bold"];

  const t = {
    fr: {
      subtitle: "Collections d'Excellence",
      title: "Prêt-à-Porter de Luxe",
      description: "Une sélection exclusive de nos plus belles pièces, prêtes à être portées. L'élégance Delmas Nguessi accessible immédiatement pour vos moments d'exception.",
      searchPlaceholder: "Rechercher un modèle...",
      filters: "Filtres",
      onlyNew: "Nouveautés uniquement",
      found: "Modèles trouvés",
      categories: "Catégories",
      styles: "Styles",
      noResults: "Aucun modèle ne correspond à votre recherche",
      noResultsDesc: "Essayez de modifier vos filtres ou de réinitialiser la recherche.",
      reset: "Réinitialiser tout",
    },
    en: {
      subtitle: "Excellence Collections",
      title: "Luxury Ready-to-Wear",
      description: "An exclusive selection of our finest pieces, ready to wear. Delmas Nguessi elegance immediately accessible for your exceptional moments.",
      searchPlaceholder: "Search for a model...",
      filters: "Filters",
      onlyNew: "New arrivals only",
      found: "Models found",
      categories: "Categories",
      styles: "Styles",
      noResults: "No models match your search",
      noResultsDesc: "Try changing your filters or resetting the search.",
      reset: "Reset all",
    }
  }[language];
  const [showFilters, setShowFilters] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [onlyNew, setOnlyNew] = React.useState(false);
  
  const { products, loading } = useProducts();

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "Tout" || product.category === selectedCategory;
    const matchesStyle = selectedStyle === "Tout" || product.style === selectedStyle;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesNew = !onlyNew || product.isNew;
    return matchesCategory && matchesStyle && matchesSearch && matchesNew;
  });

  return (
    <div className="min-h-screen bg-bg-main transition-colors duration-500">
      <HeroSection 
        subtitle={t.subtitle}
        title={t.title}
        description={t.description}
        image="https://images.unsplash.com/photo-1445205170230-053b830c6046?auto=format&fit=crop&q=80&w=2000"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 sticky top-24 z-30 bg-bg-main/20 backdrop-blur-2xl p-6 border border-white/10 rounded-2xl shadow-2xl transition-all">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:w-64">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-text-main/30" size={18} />
              <input 
                type="text" 
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-bg-main/5 border border-border-main rounded-full py-2 pl-10 pr-4 text-sm focus:border-luxury-gold outline-none transition-all text-text-main"
              />
            </div>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full border text-sm uppercase tracking-widest transition-all",
                showFilters ? "bg-luxury-gold text-bg-main border-luxury-gold" : "bg-transparent border-border-main text-text-main hover:border-luxury-gold"
              )}
            >
              <Filter size={16} />
              <span className="hidden sm:inline">{t.filters}</span>
            </button>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <button 
              onClick={() => setOnlyNew(!onlyNew)}
              className={cn(
                "text-[10px] uppercase tracking-widest px-4 py-1 rounded-full border transition-all",
                onlyNew ? "border-luxury-gold text-luxury-gold font-bold" : "border-border-main text-text-main/40"
              )}
            >
              {t.onlyNew}
            </button>
            <p className="text-xs text-text-main/40 uppercase tracking-widest">
              {filteredProducts.length} {t.found}
            </p>
          </div>
        </div>

        {/* Dynamic Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8 border border-white/10 bg-bg-main/5 backdrop-blur-3xl rounded-2xl shadow-2xl">
                <div>
                  <h4 className="text-luxury-gold text-[10px] uppercase tracking-widest font-bold mb-6">{t.categories}</h4>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat === "All" || cat === "Tout" ? "Tout" : cat)}
                        className={cn(
                          "px-4 py-2 rounded-full text-xs uppercase tracking-widest transition-all",
                          (selectedCategory === cat || (selectedCategory === "Tout" && (cat === "Tout" || cat === "All"))) ? "bg-luxury-gold text-bg-main" : "bg-bg-main/5 hover:bg-bg-main/10 text-text-main/60"
                        )}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-luxury-gold text-[10px] uppercase tracking-widest font-bold mb-6">{t.styles}</h4>
                  <div className="flex flex-wrap gap-2">
                    {styles.map((style) => (
                      <button
                        key={style}
                        onClick={() => setSelectedStyle(style === "All" || style === "Tout" ? "Tout" : style)}
                        className={cn(
                          "px-4 py-2 rounded-full text-xs uppercase tracking-widest transition-all",
                          (selectedStyle === style || (selectedStyle === "Tout" && (style === "Tout" || style === "All"))) ? "bg-luxury-gold text-bg-main" : "bg-bg-main/5 hover:bg-bg-main/10 text-text-main/60"
                        )}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div className="py-40 text-center border border-border-main bg-bg-main/1 backdrop-blur-sm rounded-3xl">
            <div className="mb-6 text-text-main/20">
              <SearchIcon size={64} className="mx-auto" />
            </div>
            <h3 className="text-2xl font-serif mb-2 text-text-main">{t.noResults}</h3>
            <p className="text-text-main/40 text-sm">{t.noResultsDesc}</p>
            <button 
              onClick={() => {
                setSelectedCategory("Tout");
                setSelectedStyle("Tout");
                setSearchQuery("");
                setOnlyNew(false);
              }}
              className="mt-8 text-luxury-gold uppercase text-[10px] tracking-widest border-b border-luxury-gold/50"
            >
              {t.reset}
            </button>
          </div>
        )}

        <QuickViewModal 
          product={quickViewProduct} 
          isOpen={!!quickViewProduct} 
          onClose={() => setQuickViewProduct(null)} 
        />
      </div>
    </div>
  );
}
