/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import { AnimatePresence, motion } from "motion/react";
import { useSettings } from "./context/useSettings";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Lazy load pages
const Home = React.lazy(() => import("./pages/Home"));
const Catalog = React.lazy(() => import("./pages/Catalog"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Checkout = React.lazy(() => import("./pages/Checkout"));
const Models = React.lazy(() => import("./pages/Models"));
const Services = React.lazy(() => import("./pages/Services"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Workshops = React.lazy(() => import("./pages/Workshops"));
const AdvancedSearch = React.lazy(() => import("./pages/AdvancedSearch"));
const Appointment = React.lazy(() => import("./pages/Appointment"));
const MentionsLegales = React.lazy(() => import("./pages/MentionsLegales"));
const CGV = React.lazy(() => import("./pages/CGV"));

export default function App() {
  const { theme } = useSettings();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.style.backgroundColor = "#0A0A0A";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.backgroundColor = "#FFFFFF";
    }
  }, [theme]);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen transition-colors duration-500 bg-bg-main text-text-main">
        <Header />
        
        <main className="flex-grow pt-20 overflow-hidden">
          <AnimatePresence mode="wait">
            <Suspense fallback={
              <div className="h-screen w-full flex items-center justify-center bg-bg-main">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="w-12 h-12 border-2 border-luxury-gold border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-xs uppercase tracking-[0.3em] font-serif text-luxury-gold animate-pulse">Delmas Nguessi</span>
                </motion.div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogue" element={<Catalog />} />
                <Route path="/produit/:slug" element={<ProductDetail />} />
                <Route path="/panier" element={<Cart />} />
                <Route path="/commande" element={<Checkout />} />
                <Route path="/modeles" element={<Models />} />
                <Route path="/services" element={<Services />} />
                <Route path="/ateliers" element={<Workshops />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/recherche-avancee" element={<AdvancedSearch />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/mentions-legales" element={<MentionsLegales />} />
                <Route path="/cgv" element={<CGV />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
