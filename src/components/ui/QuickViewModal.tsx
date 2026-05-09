import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ShoppingCart, MessageSquare, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { formatPrice } from "@/src/lib/utils";
import { useCart } from "@/src/context/useCart";
import Button from "./Button";
import { useSettings } from "@/src/context/useSettings";

interface QuickViewModalProps {
  product: {
    id: string;
    title: string;
    slug: string;
    price: number;
    mainImage: string;
    description: string;
    category: string;
    colors?: string[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const { addItem } = useCart();
  const { language } = useSettings();

  if (!product) return null;

  const t = {
    fr: {
      addToCart: "Ajouter au panier",
      viewFull: "Détails complets",
      contact: "WhatsApp",
      colors: "Couleurs disponibles",
    },
    en: {
      addToCart: "Add to cart",
      viewFull: "Full details",
      contact: "WhatsApp",
      colors: "Available colors",
    }
  }[language];

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.mainImage,
      quantity: 1
    });
  };

  const handleWhatsApp = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "+237694246514";
    const msg = `Bonjour Delmas Nguessi, je suis intéressé par le modèle (Quick View): ${product.title}`;
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-bg-main/60 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-bg-main border border-border-main/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-bg-main/50 backdrop-blur-md border border-border-main/50 rounded-full text-text-main hover:bg-luxury-gold hover:text-luxury-black transition-all"
            >
              <X size={20} />
            </button>

            {/* Image Section */}
            <div className="md:w-1/2 aspect-[4/5] md:aspect-auto">
              <img 
                src={product.mainImage} 
                alt={product.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info Section */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-luxury-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">
                {product.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-text-main leading-tight">
                {product.title}
              </h2>
              <p className="text-xl font-mono text-luxury-gold mb-6">
                {formatPrice(product.price)}
              </p>
              
              <div className="mb-8">
                <p className="text-text-main/70 text-sm leading-relaxed font-light line-clamp-4">
                  {product.description}
                </p>
              </div>

              {product.colors && (
                <div className="mb-8">
                  <h4 className="text-[10px] uppercase tracking-widest text-text-main/30 font-bold mb-3">
                    {t.colors}
                  </h4>
                  <div className="flex gap-3">
                    {product.colors.map(color => (
                      <div 
                        key={color} 
                        style={{ backgroundColor: color }} 
                        className="w-4 h-4 rounded-full border border-border-main/50"
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 gap-4">
                <Button onClick={handleAddToCart} variant="secondary" className="w-full gap-3 h-14">
                  <ShoppingCart size={18} /> {t.addToCart}
                </Button>
                
                <div className="grid grid-cols-2 gap-4">
                  <Link to={`/produit/${product.slug}`} className="block">
                    <Button variant="outline" className="w-full gap-2 border-border-main/50 text-text-main hover:border-luxury-gold">
                      <ArrowRight size={16} /> {t.viewFull}
                    </Button>
                  </Link>
                  <Button onClick={handleWhatsApp} variant="luxury" className="w-full gap-2 border-border-main/50">
                    <MessageSquare size={16} /> {t.contact}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
