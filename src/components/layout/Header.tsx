import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Search, Menu, X, Globe, Moon, Sun } from "lucide-react";
import { useCart } from "@/src/context/useCart";
import { useSettings, translations } from "@/src/context/useSettings";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { language, setLanguage, theme, setTheme } = useSettings();
  const { getTotalItems } = useCart();
  const location = useLocation();
  const t = translations[language].nav;

  const navLinks = [
    { href: "/", label: t.home },
    { href: "/catalogue", label: t.catalog },
    { href: "/modeles", label: t.models },
    { href: "/services", label: t.services },
    { href: "/ateliers", label: t.workshops },
    { href: "/a-propos", label: t.about },
    { href: "/recherche-avancee", label: t.search },
    { href: "/contact", label: t.contact },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-bg-main/80 backdrop-blur-md border-b border-border-main">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <span className="text-2xl font-serif tracking-widest text-luxury-gold leading-none">DELMAS</span>
          <span className={cn("text-[10px] tracking-[0.3em] opacity-70", theme === 'dark' ? 'text-text-main/40' : 'text-luxury-black')}>NGUESSI</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
              "text-sm uppercase tracking-widest transition-colors hover:text-luxury-gold",
              location.pathname === link.href ? "text-luxury-gold" : "text-text-main"
            )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 hover:text-luxury-gold transition-colors"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
            className="flex items-center gap-1 text-sm font-medium hover:text-luxury-gold transition-colors"
          >
            <Globe size={18} />
            <span className="uppercase text-text-main">{language}</span>
          </button>
          
          <Link to="/panier" className="p-2 relative hover:text-luxury-gold transition-colors">
            <ShoppingBag size={20} />
            {getTotalItems() > 0 && (
              <span className="absolute -top-1 -right-1 bg-luxury-red text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {getTotalItems()}
              </span>
            )}
          </Link>

          <button 
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-bg-main border-b border-border-main lg:hidden"
          >
            <nav className="flex flex-col p-8 gap-6 bg-bg-main border-b border-border-main">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-xl font-serif tracking-widest",
                    location.pathname === link.href ? "text-luxury-gold" : "text-text-main"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
