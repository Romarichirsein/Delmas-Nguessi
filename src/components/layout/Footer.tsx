import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, MessageSquare, Send } from "lucide-react";
import { useSettings, translations } from "@/src/context/useSettings";

// Mock TikTok icon since it might not be in the current Lucide version
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  const { language } = useSettings();
  const t = translations[language].nav;

  return (
    <footer className="bg-bg-main border-t border-border-main py-24 px-4 overflow-hidden relative transition-colors duration-500">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Branding */}
        <div className="space-y-8">
          <Link to="/" className="flex flex-col group">
            <span className="text-4xl font-serif tracking-widest text-luxury-gold transition-colors group-hover:text-text-main">DELMAS</span>
            <span className="text-sm tracking-[0.4em] text-text-main/40 uppercase">NGUESSI</span>
          </Link>
          <p className="text-base text-text-main/50 leading-relaxed font-light">
            L'élégance à fleur de peau. Haute couture camerounaise, sur-mesure et prêt-à-porter de luxe. L'excellence au service de votre distinction.
          </p>
          <div className="flex gap-5">
            {[
              { icon: <Instagram size={18} />, href: "https://instagram.com/delmasnguessi", label: "Instagram" },
              { icon: <Facebook size={18} />, href: "https://www.facebook.com/delmas.nguessi", label: "Facebook" },
              { icon: <TikTokIcon size={18} />, href: "https://tiktok.com/@delmasnguessi", label: "TikTok" },
              { icon: <Send size={18} />, href: "#", label: "Telegram" }
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.href} 
                target="_blank"
                rel="no-referrer"
                className="w-10 h-10 bg-bg-main/5 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-bg-main transition-all duration-300 border border-border-main"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-10 text-luxury-gold">La Maison</h4>
          <ul className="space-y-5">
            {[
              { to: "/catalogue", label: t.catalog },
              { to: "/services", label: t.services },
              { to: "/a-propos", label: t.about },
              { to: "/contact", label: t.contact },
              { to: "/ateliers", label: t.workshops }
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-text-main/40 hover:text-luxury-gold transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-4 h-px bg-luxury-gold mr-0 group-hover:mr-3 transition-all" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Ateliers */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-10 text-luxury-gold">Découvrir nos Ateliers</h4>
          <div className="space-y-8">
            <div className="group cursor-default">
              <p className="font-serif text-text-main text-lg mb-2 group-hover:text-luxury-gold transition-colors">Bastos Prestige</p>
              <p className="text-sm text-text-main/40 font-light leading-relaxed">À côté du Marché Casino, Yaoundé. Salon de réception et haute couture.</p>
            </div>
            <div className="group cursor-default">
              <p className="font-serif text-text-main text-lg mb-2 group-hover:text-luxury-gold transition-colors">Carrefour du Parc</p>
              <p className="text-sm text-text-main/40 font-light leading-relaxed">Vers Meec, Boutique N° 7, 8 et 9. Yaoundé. Notre atelier de confection historique.</p>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-10 text-luxury-gold">Contact Exclusif</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4 group cursor-pointer">
              <div className="w-10 h-10 bg-bg-main/5 rounded-full flex items-center justify-center shrink-0 group-hover:bg-luxury-gold group-hover:text-bg-main transition-all border border-border-main">
                <Phone size={16} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-text-main/30 mb-1">Téléphone</p>
                <p className="text-sm text-text-main/70 tracking-wider">+237 694 246 514 / 673 762 321</p>
              </div>
            </li>
            <li className="flex items-start gap-4 group cursor-pointer">
              <div className="w-10 h-10 bg-bg-main/5 rounded-full flex items-center justify-center shrink-0 group-hover:bg-luxury-gold group-hover:text-bg-main transition-all border border-border-main">
                <MessageSquare size={16} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-text-main/30 mb-1">WhatsApp</p>
                <p className="text-sm text-text-main/70 tracking-wider">Demande de devis instantanée</p>
              </div>
            </li>
          </ul>

          <div className="mt-12">
            <p className="text-[10px] uppercase tracking-widest text-luxury-gold mb-4 font-bold">Inspiration Newsletter</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Votre e-mail" 
                className="flex-grow bg-bg-main/5 border border-border-main rounded-lg px-4 py-2 text-xs focus:border-luxury-gold outline-none text-text-main"
              />
              <button className="bg-luxury-gold text-bg-main p-2 rounded-lg hover:bg-white transition-colors">
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-24 mt-20 border-t border-border-main flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] uppercase tracking-[0.3em] text-text-main/20 font-bold">
        <p className="text-center md:text-left">© 2026 DELMAS NGUESSI. L'ART DE L'INDOMPTABLE.</p>
        <div className="flex gap-10">
          <Link to="/mentions-legales" className="hover:text-luxury-gold transition-colors">Mentions Légales</Link>
          <Link to="/cgv" className="hover:text-luxury-gold transition-colors">Conditions Générales</Link>
        </div>
      </div>
    </footer>
  );
}
