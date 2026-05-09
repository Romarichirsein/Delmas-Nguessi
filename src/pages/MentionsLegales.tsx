import React from "react";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-bg-main pt-40 pb-20 px-4 transition-colors duration-500">
      <div className="max-w-4xl mx-auto prose prose-invert opacity-70">
        <h1 className="text-4xl font-serif text-luxury-gold mb-12">Mentions Légales</h1>
        
        <section className="mb-12">
          <h2 className="text-xl font-serif text-text-main mb-4 uppercase tracking-widest">Éditeur du site</h2>
          <p className="text-text-main/70">Le site Delmas Nguessi est édité par la Maison Delmas Nguessi, entreprise immatriculée au Cameroun.</p>
          <p className="text-text-main/70">Siège social : Yaoundé, Quartier Bastos (à côté de Marché Casino).</p>
          <p className="text-text-main/70">Directeur de la publication : Delmas Nguessi.</p>
          <p className="text-text-main/70">Contact : contact@delmas-nguessi.com | +237 694 246 514</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-serif text-text-main mb-4 uppercase tracking-widest">Hébergement</h2>
          <p className="text-text-main/70">Ce site est hébergé par Google Cloud Platform.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-serif text-text-main mb-4 uppercase tracking-widest">Propriété Intellectuelle</h2>
          <p className="text-text-main/70">L'ensemble des contenus (textes, images, vidéos, créations de mode) présentés sur ce site sont la propriété exclusive de la Maison Delmas Nguessi. Toute reproduction ou distribution sans autorisation préalable est strictement interdite.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-serif text-white mb-4 uppercase tracking-widest">Données Personnelles</h2>
          <p>Les informations recueillies via les formulaires de contact ou de commande sont destinées exclusivement à la gestion de la relation client et au traitement des commandes. Conformément à la législation en vigueur, vous disposez d'un droit d'accès et de rectification de vos données.</p>
        </section>
      </div>
    </div>
  );
}
