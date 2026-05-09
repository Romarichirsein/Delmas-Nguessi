import React from "react";

export default function CGV() {
  return (
    <div className="min-h-screen bg-bg-main pt-40 pb-20 px-4 transition-colors duration-500">
      <div className="max-w-4xl mx-auto prose prose-invert opacity-70">
        <h1 className="text-4xl font-serif text-luxury-gold mb-12">Conditions Générales de Vente (CGV)</h1>
        
        <section className="mb-12 text-text-main/70">
          <h2 className="text-xl font-serif text-text-main mb-4 uppercase tracking-widest">1. Objet</h2>
          <p>Les présentes CGV régissent les ventes de créations de mode (prêt-à-porter et sur-mesure) effectuées par la Maison Delmas Nguessi via son site web et directement en atelier.</p>
        </section>

        <section className="mb-12 text-text-main/70">
          <h2 className="text-xl font-serif text-text-main mb-4 uppercase tracking-widest">2. Prix</h2>
          <p>Les prix indiqués sont en Francs CFA (XAF). Les prix des créations sur-mesure sont indicatifs et peuvent varier selon le choix final des tissus et la complexité de la pièce.</p>
        </section>

        <section className="mb-12 text-text-main/70">
          <h2 className="text-xl font-serif text-text-main mb-4 uppercase tracking-widest">3. Commande via WhatsApp</h2>
          <p>Le processus de commande sur le site se finalise sur WhatsApp. La vente n'est considérée comme ferme qu'après confirmation par l'un de nos conseillers et, dans certains cas, le versement d'un acompte.</p>
        </section>

        <section className="mb-12 text-text-main/70">
          <h2 className="text-xl font-serif text-text-main mb-4 uppercase tracking-widest">4. Livraison & Retraits</h2>
          <p>La livraison est disponible sur Yaoundé et Douala. Le retrait en atelier (Bastos ou Nguessi Junction) est possible sur rendez-vous.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-serif text-white mb-4 uppercase tracking-widest">5. Retours et Ajustements</h2>
          <p>Compte tenu de la nature artisanale et souvent personnalisée de nos créations, les retours ne sont acceptés que sous conditions strictes. Les ajustements morphologiques sont offerts pour toute création sur-mesure lors du premier essayage.</p>
        </section>
      </div>
    </div>
  );
}
