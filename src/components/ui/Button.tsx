import React from "react";
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "luxury";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  className?: string;
  onClick?: any;
  type?: "submit" | "reset" | "button";
}

export default function Button({ 
  className, 
  variant = "primary", 
  size = "md", 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all focus:outline-none disabled:opacity-50 uppercase tracking-[0.2em] text-xs";
  
  const variants = {
    primary: "bg-luxury-red text-white hover:bg-red-900 shadow-xl",
    secondary: "bg-white text-luxury-black hover:bg-neutral-200 shadow-lg",
    outline: "bg-transparent border border-white/20 text-white hover:bg-white hover:text-black",
    luxury: "bg-luxury-black border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black",
  };

  const sizes = {
    sm: "px-4 py-2 text-[10px]",
    md: "px-8 py-3",
    lg: "px-10 py-4 text-sm",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
