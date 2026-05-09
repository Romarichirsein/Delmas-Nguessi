import { create } from "zustand";
import { persist } from "zustand/middleware";

type Language = "fr" | "en";
type Theme = "dark" | "light";

interface SettingsStore {
  language: Language;
  theme: Theme;
  setLanguage: (lang: Language) => void;
  setTheme: (theme: Theme) => void;
}

export const useSettings = create<SettingsStore>()(
  persist(
    (set) => ({
      language: "fr",
      theme: "dark",
      setLanguage: (language) => set({ language }),
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "delmas-settings",
    }
  )
);

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      catalog: "Catalogue",
      models: "Modèles",
      services: "Services",
      workshops: "Ateliers",
      about: "À Propos",
      search: "Recherche",
      contact: "Contact",
    },
    hero: {
      title: "La Haute Couture Camerounaise",
      subtitle: "Élégance féminine, silhouettes magnifiées et savoir-faire ancestral au service de la modernité.",
      cta_appointment: "Prendre rendez-vous",
      cta_catalog: "Découvrir le prêt-à-porter",
    },
    sections: {
      faq: "Questions Fréquentes",
      testimonials: "Témoignages de Prestige",
      featured: "Modèles Phares",
      process: "Notre Processus",
      values: "Nos Valeurs"
    },
    footer: {
      address_bastos: "Bastos, à côté Marché Casino, Yaoundé",
      address_meec: "Carrefour Nguessi, face Mat Génie, Yaoundé",
      rights: "Tous droits réservés.",
      made_in: "Fait avec passion au Cameroun"
    },
    cart: {
      title: "Votre Panier",
      empty: "Votre panier est vide",
      checkout: "Finaliser la commande",
    }
  },
  en: {
    nav: {
      home: "Home",
      catalog: "Catalog",
      models: "Models",
      services: "Services",
      workshops: "Workshops",
      about: "About",
      search: "Search",
      contact: "Contact",
    },
    hero: {
      title: "Cameroonian Haute Couture",
      subtitle: "Feminine elegance, magnified silhouettes, and ancestral craftsmanship at the service of modernity.",
      cta_appointment: "Book an appointment",
      cta_catalog: "Explore Ready-to-Wear",
    },
    sections: {
      faq: "Frequently Asked Questions",
      testimonials: "Prestige Testimonials",
      featured: "Featured Models",
      process: "Our Process",
      values: "Our Values"
    },
    footer: {
      address_bastos: "Bastos, next to Casino Market, Yaoundé",
      address_meec: "Nguessi Junction, opposite Mat Genie, Yaoundé",
      rights: "All rights reserved.",
      made_in: "Made with passion in Cameroon"
    },
    cart: {
      title: "Your Cart",
      empty: "Your cart is empty",
      checkout: "Checkout",
    }
  }
};
