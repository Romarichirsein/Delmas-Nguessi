import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ShoppingCart, Eye, MessageSquare, Search as SearchIcon } from "lucide-react";
import { formatPrice } from "@/src/lib/utils";
import { useCart } from "@/src/context/useCart";
import Button from "./Button";

import { useSettings } from "@/src/context/useSettings";

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    slug: string;
    price: number;
    mainImage: string;
    description: string;
    colors?: string[];
    [key: string]: any;
  };
  onQuickView?: (product: any) => void;
  key?: React.Key;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { addItem } = useCart();
  const { language } = useSettings();
  const [isHovered, setIsHovered] = React.useState(false);

  const t = {
    fr: {
      view: "Voir le modèle",
      quick: "Aperçu rapide",
      cart: "Au panier",
      whatsapp: "Sur WhatsApp",
    },
    en: {
      view: "View model",
      quick: "Quick view",
      cart: "Add to cart",
      whatsapp: "Contact WhatsApp",
    }
  }[language];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.mainImage,
      quantity: 1
    });
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "+237694246514";
    const msg = `Bonjour Delmas Nguessi, je suis intéressé par le modèle: ${product.title} (${window.location.origin}/produit/${product.slug})`;
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col h-full bg-bg-main/5 backdrop-blur-2xl border border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-500 hover:border-luxury-gold/30 hover:bg-bg-main/[0.08] shadow-2xl hover:shadow-luxury-gold/5"
    >
      {/* Image Container with Animated Border */}
      <div className={`relative aspect-[3/4] overflow-hidden ${isHovered ? 'p-[1px]' : ''}`}>
        <div className="relative w-full h-full bg-bg-main/20 overflow-hidden z-10">
          <motion.img
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            src={product.mainImage}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay Actions */}
          <div className={`absolute inset-0 bg-bg-main/40 backdrop-blur-sm flex flex-col items-center justify-center gap-3 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <Link to={`/produit/${product.slug}`}>
              <Button variant="outline" size="sm" className="w-40 gap-2 backdrop-blur-md bg-bg-main/5 border-border-main text-text-main hover:border-luxury-gold">
                <Eye size={16} /> {t.view}
              </Button>
            </Link>
            {onQuickView && (
              <Button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onQuickView(product);
                }} 
                variant="outline" 
                size="sm" 
                className="w-40 gap-2 backdrop-blur-md bg-bg-main/5 border-border-main text-text-main hover:border-luxury-gold"
              >
                <SearchIcon size={16} /> {t.quick}
              </Button>
            )}
            <Button onClick={handleAddToCart} variant="secondary" size="sm" className="w-40 gap-2">
              <ShoppingCart size={16} /> {t.cart}
            </Button>
            <Button onClick={handleWhatsApp} variant="luxury" size="sm" className="w-40 gap-2">
              <MessageSquare size={16} /> {t.whatsapp}
            </Button>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl group-hover:text-luxury-gold transition-colors text-text-main">{product.title}</h3>
          <p className="font-mono text-sm text-luxury-gold">{formatPrice(product.price)}</p>
        </div>
        <p className="text-xs text-text-main/50 line-clamp-2 mb-4 italic">{product.description}</p>
        
        {/* Colors */}
        {product.colors && (
          <div className="flex gap-2 mt-auto">
            {product.colors.map(color => (
              <div 
                key={color} 
                style={{ backgroundColor: color }} 
                className="w-3 h-3 rounded-full border border-border-main shadow-sm"
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
