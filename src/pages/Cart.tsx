import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, CreditCard, ShieldCheck } from "lucide-react";
import { useCart } from "@/src/context/useCart";
import { formatPrice } from "@/src/lib/utils";
import Button from "@/src/components/ui/Button";

export default function Cart() {
  const { items, updateQuantity, removeItem, getTotalPrice, getTotalItems } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-main pt-20">
        <div className="text-center max-w-md px-4">
          <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10">
            <ShoppingBag size={40} className="text-luxury-gold opacity-30" />
          </div>
          <h2 className="text-4xl font-serif mb-4">Votre panier est vide</h2>
          <p className="text-white/40 text-sm mb-10 leading-relaxed font-light">
            Découvrez nos dernières collections de haute couture et trouvez la pièce qui sublimera votre allure.
          </p>
          <Link to="/catalogue">
            <Button variant="primary" size="lg" className="w-full">
              Explorer le catalogue
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-main pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-12">
          <h1 className="text-5xl font-serif mb-2">Votre Sélection</h1>
          <p className="text-xs uppercase tracking-[0.3em] text-luxury-gold">{getTotalItems()} articles</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-8">
            <AnimatePresence mode="popLayout">
              {items.map((item) => (
                <motion.div
                  key={`${item.id}-${JSON.stringify(item.variant)}`}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="group relative flex gap-6 sm:gap-10 p-6 bg-bg-main/5 border border-border-main rounded-2xl"
                >
                  <div className="relative w-24 h-32 sm:w-32 sm:h-40 bg-neutral-900 rounded-lg overflow-hidden shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl sm:text-2xl font-serif group-hover:text-luxury-gold transition-colors">
                        {item.title}
                      </h3>
                      <button 
                        onClick={() => removeItem(item.id, JSON.stringify(item.variant))}
                        className="p-2 text-white/30 hover:text-luxury-red transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className="space-y-1 mb-4">
                      {item.variant?.size && (
                        <p className="text-[10px] uppercase tracking-widest text-white/40">Taille: <span className="text-white">{item.variant.size}</span></p>
                      )}
                      {item.variant?.color && (
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase tracking-widest text-white/40">Couleur:</span>
                          <div style={{ backgroundColor: item.variant.color }} className="w-2 h-2 rounded-full border border-white/20" />
                        </div>
                      )}
                    </div>

                    <div className="mt-auto flex justify-between items-end">
                      <div className="flex items-center border border-white/10 rounded-lg">
                        <button 
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1), JSON.stringify(item.variant))}
                          className="p-2 hover:text-luxury-gold"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-4 font-mono text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1, JSON.stringify(item.variant))}
                          className="p-2 hover:text-luxury-gold"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="font-mono text-luxury-gold text-lg">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 p-10 bg-bg-main/5 border border-border-main rounded-3xl space-y-8 shadow-2xl">
              <h2 className="text-2xl font-serif border-b border-border-main pb-6 text-text-main">Résumé du Panier</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm uppercase tracking-widest text-white/40">
                  <span>Sous-total</span>
                  <span className="text-text-main">{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="flex justify-between text-sm uppercase tracking-widest text-white/40">
                  <span>Livraison (Yaoundé)</span>
                  <span className="text-luxury-gold font-medium">Gratuit</span>
                </div>
                <div className="pt-6 border-t border-white/5 flex justify-between">
                  <span className="text-xl font-serif">Total</span>
                  <span className="text-xl font-mono text-luxury-gold">{formatPrice(getTotalPrice())}</span>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <Link to="/commande">
                   <Button variant="primary" className="w-full h-14 text-sm gap-2">
                     Commander <ArrowRight size={18} />
                   </Button>
                </Link>
                <div className="flex flex-col gap-3 text-center">
                  <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-text-main/30">
                    <ShieldCheck size={14} className="text-luxury-gold" />
                    Paiement sécurisé à la livraison
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-text-main/30">
                    <CreditCard size={14} className="text-luxury-gold" />
                    Espèces / Mobile Money acceptés
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                <h4 className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold mb-2">Note Importante</h4>
                <p className="text-[11px] text-text-main/50 leading-relaxed font-light italic">
                  La finalisation se fera via WhatsApp pour confirmer les détails de livraison et vos éventuelles mesures spécifiques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
