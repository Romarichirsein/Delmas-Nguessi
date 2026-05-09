import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function WhatsAppButton() {
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "+237694246514";
  const defaultMessage = "Bonjour Delmas Nguessi, je souhaiterais en savoir plus sur vos créations.";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(defaultMessage)}`, "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={openWhatsApp}
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba59] transition-colors group"
      id="whatsapp-trigger"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white text-black text-xs font-semibold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">
        Parlez-nous sur WhatsApp
      </span>
    </motion.button>
  );
}
