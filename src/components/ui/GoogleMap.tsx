import React from "react";
import { MapPin } from "lucide-react";

interface GoogleMapProps {
  location: "bastos" | "meec";
  className?: string;
}

export default function GoogleMap({ location, className }: GoogleMapProps) {
  // Mocking coordinate search for Yaoundé
  const urls = {
    bastos: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.709337583626!2d11.5126839!3d3.8722234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf431a83e0a1%3A0xe5f99201e5a59334!2sBastos%2C%20Yaound%C3%A9!5e0!3m2!1sfr!2scm!4v1700000000000!5m2!1sfr!2scm",
    meec: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.730!2d11.516!3d3.840!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bd0000000000!2sMarch%C3%A9%20M%C3%A9ec!5e0!3m2!1sfr!2scm!4v1700000000000!5m2!1sfr!2scm"
  };

  return (
    <div className={`relative overflow-hidden rounded-[2rem] bg-neutral-900 border border-white/5 ${className}`}>
      <iframe
        src={urls[location]}
        width="100%"
        height="100%"
        style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(150%)" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="opacity-70 grayscale hover:grayscale-0 transition-all duration-700"
      ></iframe>
      <div className="absolute top-6 left-6 bg-luxury-black/80 backdrop-blur-md px-4 py-2 border border-white/10 rounded-full flex items-center gap-2 pointer-events-none">
        <MapPin size={14} className="text-luxury-gold" />
        <span className="text-[10px] uppercase tracking-widest font-bold">
          {location === "bastos" ? "Atelier Bastos Prestige" : "Atelier Carrefour MEEC"}
        </span>
      </div>
    </div>
  );
}
