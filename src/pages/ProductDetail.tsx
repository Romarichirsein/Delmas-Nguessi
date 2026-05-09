import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ShoppingCart, MessageSquare, ChevronLeft, ShieldCheck, Truck, RefreshCw } from "lucide-react";
import { mockProducts } from "@/src/lib/sanity";
import { formatPrice, cn } from "@/src/lib/utils";
import { useCart } from "@/src/context/useCart";
import { useSettings } from "@/src/context/useSettings";
import { useProducts } from "@/src/context/useProducts";
import Button from "@/src/components/ui/Button";
import ProductCard from "@/src/components/ui/ProductCard";
import QuickViewModal from "@/src/components/ui/QuickViewModal";

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { language } = useSettings();
  const { products } = useProducts();
  
  const product = products.find(p => p.slug === slug);
  const [selectedSize, setSelectedSize] = React.useState("");
  const [selectedColor, setSelectedColor] = React.useState(product?.colors?.[0] || "");
  const [quantity, setQuantity] = React.useState(1);
  const [quickViewProduct, setQuickViewProduct] = React.useState<any>(null);
  const [showOrderForm, setShowOrderForm] = React.useState(false);
  const [formData, setFormData] = React.useState({ name: '', phone: '', address: '' });

  const t = {
    fr: {
      notFound: "Modèle introuvable",
      back: "Retour au catalogue",
      backBtn: "Retour",
      chooseSize: "Choisir la taille",
      sizeGuide: "Guide des tailles",
      color: "Couleur",
      addCart: "Ajouter au panier",
      buyWhatsApp: "Commander via WhatsApp",
      quality: "Haute Qualité Garantie",
      shipping: "Livraison Yaoundé",
      alterations: "Retouches Offertes",
      descTitle: "Description du Modèle",
      descNote: "Matières nobles sélectionnées avec soin : Lin précieux, soie de première qualité et finitions brodées à la main dans nos ateliers de Bastos et Nguessi Junction.",
      features: [
        "Coupe architecturale magnifiant la silhouette",
        "Ajustement morphologique sur-mesure possible",
        "Savoir-faire artisanal 100% Camerounais"
      ],
      similar: "Modèles Similaires",
      viewAll: "Tout voir",
      sizeError: "Veuillez sélectionner une taille",
      formTitle: "Informations de livraison",
      formName: "Votre nom complet",
      formPhone: "Numéro de téléphone",
      formAddress: "Adresse de livraison / Quartier",
      formSubmit: "Valider la commande",
      formCancel: "Annuler",
      formError: "Veuillez remplir tous les champs"
    },
    en: {
      notFound: "Model not found",
      back: "Back to catalog",
      backBtn: "Back",
      chooseSize: "Choose size",
      sizeGuide: "Size guide",
      color: "Color",
      addCart: "Add to cart",
      buyWhatsApp: "Order via WhatsApp",
      quality: "High Quality Guaranteed",
      shipping: "Shipping Yaoundé",
      alterations: "Free Alterations",
      descTitle: "Model Description",
      descNote: "Noble fabrics carefully selected: Precious linen, premium silk, and hand-embroidered finishes in our Bastos and Nguessi Junction ateliers.",
      features: [
        "Architectural cut magnifying the silhouette",
        "Custom morphological adjustement possible",
        "100% Cameroonian artisanal craftsmanship"
      ],
      similar: "Similar Models",
      viewAll: "View all",
      sizeError: "Please select a size",
      formTitle: "Delivery Information",
      formName: "Full Name",
      formPhone: "Phone Number",
      formAddress: "Delivery Address / Neighborhood",
      formSubmit: "Confirm Order",
      formCancel: "Cancel",
      formError: "Please fill in all fields"
    }
  }[language];

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center bg-bg-main">
        <div className="text-center">
          <h2 className="text-4xl font-serif mb-4 text-text-main">{t.notFound}</h2>
          <Button onClick={() => navigate("/catalogue")} variant="outline" className="border-border-main text-text-main">{t.back}</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert(t.sizeError);
      return;
    }
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.mainImage,
      quantity,
      variant: {
        size: selectedSize,
        color: selectedColor
      }
    });
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSize) {
      alert(t.sizeError);
      return;
    }
    if (!formData.name || !formData.phone || !formData.address) {
      alert(t.formError);
      return;
    }
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "+237694246514";
    const msg = language === 'fr' 
      ? `*NOUVELLE COMMANDE - DELMAS NGUESSI*\n\nBonjour, je souhaite valider ma commande:\n\n*Produit:* ${product.title}\n*Prix:* ${formatPrice(product.price)}\n*Taille:* ${selectedSize}\n*Couleur:* ${selectedColor || 'Standard'}\n*Quantité:* ${quantity}\n\n*--- Informations Client ---*\n*Nom:* ${formData.name}\n*Téléphone:* ${formData.phone}\n*Adresse:* ${formData.address}\n\nLien: ${window.location.origin}/produit/${product.slug}`
      : `*NEW ORDER - DELMAS NGUESSI*\n\nHello, I would like to confirm my order:\n\n*Product:* ${product.title}\n*Price:* ${formatPrice(product.price)}\n*Size:* ${selectedSize}\n*Color:* ${selectedColor || 'Standard'}\n*Quantity:* ${quantity}\n\n*--- Customer Info ---*\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Address:* ${formData.address}\n\nLink: ${window.location.origin}/produit/${product.slug}`;
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`, "_blank");
    setShowOrderForm(false);
  };

  const sizes = ["36 (S)", "38 (M)", "40 (L)", "42 (XL)", "44 (XXL)", "Sur-Mesure"];

  // Related products (different from current)
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-bg-main min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 py-32">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-text-main/50 hover:text-luxury-gold transition-colors mb-12 uppercase text-[10px] tracking-widest"
        >
          <ChevronLeft size={16} /> {t.backBtn}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Gallery */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-[4/5] bg-bg-main/5 backdrop-blur-xl border border-border-main overflow-hidden relative group rounded-2xl"
            >
              <img 
                src={product.mainImage} 
                alt={product.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
            </motion.div>
            
            <div className="grid grid-cols-4 gap-4">
               {product.gallery?.map((imgUrl, i) => (
                 <div key={i} className="aspect-square bg-bg-main/5 border border-border-main opacity-50 hover:opacity-100 cursor-pointer transition-opacity overflow-hidden rounded-lg">
                   <img src={imgUrl} alt={`${product.title} gallery ${i+1}`} className="w-full h-full object-cover" />
                 </div>
               ))}
            </div>
          </div>

          {/* Info Details */}
          <div className="flex flex-col">
            <div className="border-b border-border-main pb-8 mb-8">
              <span className="text-luxury-gold text-xs uppercase tracking-[0.4em] font-semibold mb-4 block">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-serif mb-4 leading-tight text-text-main">{product.title}</h1>
              <p className="text-2xl font-mono text-luxury-gold">{formatPrice(product.price)}</p>
            </div>

            <div className="space-y-10">
              {/* Size Selection */}
              <div>
                <div className="flex justify-between mb-4">
                  <h4 className="text-[10px] uppercase tracking-widest text-text-main/40 font-bold">{t.chooseSize}</h4>
                  <button className="text-[10px] uppercase tracking-widest text-luxury-gold underline underline-offset-4">{t.sizeGuide}</button>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "py-3 border text-xs uppercase tracking-widest transition-all rounded-lg",
                        selectedSize === size 
                          ? "border-luxury-gold bg-luxury-gold text-luxury-black font-bold" 
                          : "border-border-main hover:border-text-main/30 text-text-main/60"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              {product.colors && (
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-text-main/40 font-bold mb-4">{t.color}</h4>
                  <div className="flex gap-4">
                    {product.colors.map(color => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        style={{ backgroundColor: color }}
                        className={cn(
                          "w-10 h-10 rounded-full border-2 transition-all",
                          selectedColor === color ? "border-luxury-gold scale-110" : "border-border-main opacity-60"
                        )}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="space-y-4 pt-6">
                {showOrderForm ? (
                  <form onSubmit={handleWhatsApp} className="p-6 border border-luxury-gold/50 rounded-xl bg-bg-main/5 backdrop-blur-md space-y-4">
                    <h3 className="text-sm font-serif text-luxury-gold uppercase tracking-widest border-b border-border-main pb-2 mb-4">{t.formTitle}</h3>
                    <div>
                      <input type="text" required placeholder={t.formName} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-transparent border border-border-main rounded-md px-4 py-3 text-sm text-text-main focus:border-luxury-gold outline-none" />
                    </div>
                    <div>
                      <input type="tel" required placeholder={t.formPhone} value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-transparent border border-border-main rounded-md px-4 py-3 text-sm text-text-main focus:border-luxury-gold outline-none" />
                    </div>
                    <div>
                      <input type="text" required placeholder={t.formAddress} value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} className="w-full bg-transparent border border-border-main rounded-md px-4 py-3 text-sm text-text-main focus:border-luxury-gold outline-none" />
                    </div>
                    <div className="flex gap-4 pt-2">
                      <Button type="button" onClick={() => setShowOrderForm(false)} variant="outline" className="flex-1 border-border-main text-text-main">{t.formCancel}</Button>
                      <Button type="submit" variant="luxury" className="flex-1 gap-2"><MessageSquare size={16} /> {t.formSubmit}</Button>
                    </div>
                  </form>
                ) : (
                  <>
                    <div className="flex gap-4">
                      <div className="flex items-center border border-border-main px-4 rounded-lg bg-bg-main/5">
                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:text-luxury-gold text-text-main">-</button>
                        <span className="px-4 font-mono text-text-main">{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:text-luxury-gold text-text-main">+</button>
                      </div>
                      <Button onClick={handleAddToCart} variant="secondary" className="flex-grow gap-2 h-14 bg-bg-main text-text-main hover:bg-luxury-gold hover:text-luxury-black border-border-main">
                        <ShoppingCart size={20} /> {t.addCart}
                      </Button>
                    </div>
                    <Button onClick={() => setShowOrderForm(true)} variant="luxury" className="w-full gap-2 h-14 border-border-main">
                      <MessageSquare size={20} /> {t.buyWhatsApp}
                    </Button>
                  </>
                )}
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-border-main">
                <div className="flex flex-col items-center text-center gap-2">
                  <ShieldCheck size={20} className="text-luxury-gold" />
                  <span className="text-[9px] uppercase tracking-widest text-text-main/50">{t.quality}</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <Truck size={20} className="text-luxury-gold" />
                  <span className="text-[9px] uppercase tracking-widest text-text-main/50">{t.shipping}</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <RefreshCw size={20} className="text-luxury-gold" />
                  <span className="text-[9px] uppercase tracking-widest text-text-main/50">{t.alterations}</span>
                </div>
              </div>

              {/* Description */}
              <div className="pt-10 border-t border-border-main">
                <h4 className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold mb-4">{t.descTitle}</h4>
                <div className="text-text-main/60 text-sm leading-relaxed space-y-4 font-light">
                  <p>{product.description}</p>
                  <p>{t.descNote}</p>
                  <ul className="list-disc pl-5 space-y-2">
                    {t.features.map((feature, i) => (
                       <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-40">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-serif text-text-main">{t.similar}</h2>
            <Button variant="outline" size="sm" onClick={() => navigate("/catalogue")} className="border-border-main text-text-main">{t.viewAll}</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map(p => (
              <ProductCard 
                key={p.id} 
                product={p} 
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            ))}
          </div>
        </section>

        <QuickViewModal 
          product={quickViewProduct} 
          isOpen={!!quickViewProduct} 
          onClose={() => setQuickViewProduct(null)} 
        />
      </div>
    </div>
  );
}
