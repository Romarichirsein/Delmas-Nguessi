import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ShoppingBag, ChevronLeft, Send, MapPin, Phone, User, Mail, Info } from "lucide-react";
import { useCart } from "@/src/context/useCart";
import { formatPrice, cn } from "@/src/lib/utils";
import Button from "@/src/components/ui/Button";

interface OrderForm {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  notes: string;
}

export default function Checkout() {
  const { items, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState<OrderForm>({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "Yaoundé",
    notes: ""
  });

  if (items.length === 0) {
    navigate("/panier");
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate structured WhatsApp message
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "+237694246514";
    const itemsList = items.map(i => `- ${i.title} (${i.quantity}x) [Taille: ${i.variant?.size || 'N/A'}, Couleur: ${i.variant?.color || 'N/A'}]`).join('\n');
    
    const message = `*COMMANDE DELMAS NGUESSI MEEC*
---------------------------------------
*Client:* ${formData.name}
*Tel:* ${formData.phone}
*Email:* ${formData.email}
*Adresse:* ${formData.address}, ${formData.city}

*Articles:*
${itemsList}

*Total:* ${formatPrice(getTotalPrice())}

*Note:* ${formData.notes || 'Aucune'}

---------------------------------------
Merci de confirmer ma commande.`;

    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`, "_blank");
    
    // Future: handle order persistence if needed
    // clearCart();
  };

  const inputStyles = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-luxury-gold outline-none transition-all placeholder:text-white/20";

  return (
    <div className="min-h-screen bg-luxury-black pt-32 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={() => navigate("/panier")}
          className="flex items-center gap-2 text-white/50 hover:text-luxury-gold transition-colors mb-12 uppercase text-[10px] tracking-widest font-bold"
        >
          <ChevronLeft size={16} /> Retour au panier
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Order Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div>
              <h1 className="text-4xl font-serif mb-4">Informations de Livraison</h1>
              <p className="text-white/40 text-sm font-light">Veuillez remplir vos coordonnées pour que nous puissions organiser votre livraison ou essayage.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-gold" size={16} />
                  <input 
                    required
                    type="text" 
                    placeholder="Nom Complet"
                    className={cn(inputStyles, "pl-12")}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-gold" size={16} />
                  <input 
                    required
                    type="tel" 
                    placeholder="Numéro de Téléphone"
                    className={cn(inputStyles, "pl-12")}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-gold" size={16} />
                  <input 
                    required
                    type="email" 
                    placeholder="Adresse E-mail"
                    className={cn(inputStyles, "pl-12")}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-gold" size={16} />
                  <input 
                    required
                    type="text" 
                    placeholder="Adresse de livraison (Quartier, Précisions)"
                    className={cn(inputStyles, "pl-12")}
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>
                <div>
                   <select 
                    className={inputStyles}
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                   >
                     <option value="Yaoundé">Yaoundé</option>
                     <option value="Douala">Douala</option>
                     <option value="Bafoussam">Bafoussam</option>
                     <option value="Autre">Autre (Cameroun)</option>
                   </select>
                </div>
                <textarea 
                  placeholder="Notes de commande, mesures spécifiques..."
                  className={cn(inputStyles, "h-32 resize-none")}
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                />
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 flex gap-4 items-start">
                 <Info className="text-luxury-gold shrink-0 mt-1" size={20} />
                 <p className="text-[11px] text-white/50 leading-relaxed font-light italic">
                   En cliquant sur "Confirmer," vous serez redirigé vers WhatsApp avec votre commande pré-remplie. Notre conseiller finalisera les modalités avec vous.
                 </p>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full gap-2 py-5 text-sm h-auto">
                <Send size={18} /> Confirmer la commande sur WhatsApp
              </Button>
            </form>
          </motion.div>

          {/* Order Summary */}
          <div className="lg:border-l lg:border-white/5 lg:pl-16">
             <div className="sticky top-32 space-y-10">
                <h2 className="text-2xl font-serif">Récapitulatif Articles</h2>
                
                <div className="space-y-6 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                  {items.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-16 h-20 bg-neutral-900 rounded-lg overflow-hidden shrink-0">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow flex flex-col justify-center">
                        <h4 className="text-sm font-serif">{item.title}</h4>
                        <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Qté: {item.quantity} • {item.variant?.size}</p>
                        <p className="text-sm font-mono text-luxury-gold mt-2">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-10 border-t border-white/5 space-y-4">
                  <div className="flex justify-between text-sm uppercase tracking-widest text-white/40">
                    <span>Sous-total</span>
                    <span className="text-white">{formatPrice(getTotalPrice())}</span>
                  </div>
                  <div className="flex justify-between text-sm uppercase tracking-widest text-white/40">
                    <span>Livraison</span>
                    <span className="text-luxury-gold">Gratuit</span>
                  </div>
                  <div className="pt-6 border-t border-white/5 flex justify-between">
                    <span className="text-2xl font-serif">Total</span>
                    <span className="text-2xl font-mono text-luxury-gold">{formatPrice(getTotalPrice())}</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
