import React from "react";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { useSettings, translations } from "@/src/context/useSettings";

const testimonials_content = {
  fr: [
    {
      name: "Mme. Diane B.",
      role: "Cliente Satisfaite (Mariage)",
      content: "Une robe qui a fait sensation. Delmas a su transformer mon rêve en une réalité textile époustouflante. Merci pour ce chef-d'œuvre !",
      rating: 5,
      avatar: "/images/592552627_820411817418529_4280650793380733567_n.jpg"
    },
    {
      name: "Mr. Jean-Paul K.",
      role: "Client Business (Haute Couture)",
      content: "Le sur-mesure de Delmas Nguessi est d'une précision chirurgicale. Les finitions main sont exceptionnelles. Un grand bravo pour le professionnalisme.",
      rating: 5,
      avatar: "/images/487211097_627899290003117_8024675177013790790_n.jpg"
    },
    {
      name: "Mme. Sandrine M.",
      role: "Partenaire Corporate",
      content: "J'apprécie énormément le conseil en image. Delmas ne se contente pas de coudre, il construit une identité visuelle forte pour ses clientes.",
      rating: 5,
      avatar: "/images/475440036_588546137271766_3165901632500312932_n.jpg"
    },
    {
      name: "Pascal T.",
      role: "Expert Mode (Yaoundé)",
      content: "Une maison d'exception qui allie tradition et modernité avec brio. La qualité des étoffes et le savoir-faire artisanal sont sans égal au Cameroun.",
      rating: 5,
      avatar: "/images/491351665_642674278525618_2080522259043292705_n.jpg"
    }
  ],
  en: [
    {
      name: "Mrs. Diane B.",
      role: "Satisfied Client (Wedding)",
      content: "A dress that made a sensation. Delmas knew how to transform my dream into a breathtaking textile reality. Thank you for this masterpiece!",
      rating: 5,
      avatar: "/images/491251210_642674308525615_2770263850208036562_n.jpg"
    },
    {
      name: "Mr. Jean-Paul K.",
      role: "Business Client (Haute Couture)",
      content: "Delmas Nguessi's custom-made service is of surgical precision. The hand finishes are exceptional. A big well done for the professionalism.",
      rating: 5,
      avatar: "/images/490551123_642674301858949_6885909393396440090_n.jpg"
    },
    {
      name: "Mrs. Sandrine M.",
      role: "Corporate Partner",
      content: "I really appreciate the image advice. Delmas doesn't just sew; he builds a strong visual identity for his clients.",
      rating: 5,
      avatar: "/images/653700669_900705936055783_7657916468470584551_n.jpg"
    },
    {
      name: "Pascal T.",
      role: "Fashion Expert (Yaoundé)",
      content: "An exceptional house that brilliantly combines tradition and modernity. The quality of the fabrics and the artisanal craftsmanship are second to none in Cameroon.",
      rating: 5,
      avatar: "/images/481285446_610443048415408_7386414886062726086_n.jpg"
    }
  ]
};

export default function Testimonials() {
  const { language } = useSettings();
  const t = translations[language].sections;
  const content = testimonials_content[language];

  return (
    <section className="py-32 bg-luxury-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-luxury-gold text-xs uppercase tracking-[0.4em] font-bold block mb-4">La Voix de nos Clients</span>
          <h2 className="text-4xl md:text-5xl font-serif italic">{t.testimonials}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] relative group hover:border-luxury-gold/30 hover:bg-white/[0.05] transition-all duration-500 shadow-2xl"
            >
              <Quote className="text-luxury-gold/10 absolute top-8 right-8" size={60} />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} size={14} fill="currentColor" className="text-luxury-gold" />
                ))}
              </div>
              <p className="text-white/70 italic font-light mb-8 relative z-10">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-serif text-white">{t.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
