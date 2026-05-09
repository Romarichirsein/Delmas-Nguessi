import React from "react";
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "luxury" | "ghost";
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
    primary: "bg-luxury-gold text-luxury-black hover:bg-white hover:text-luxury-black shadow-luxury-gold/20",
    secondary: "bg-bg-main text-text-main border border-border-main hover:bg-luxury-gold hover:text-luxury-black shadow-lg",
    outline: "border border-border-main text-text-main hover:bg-text-main hover:text-bg-main",
    luxury: "bg-luxury-black text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black border border-luxury-gold/30",
    ghost: "text-text-main/60 hover:text-luxury-gold hover:bg-bg-main/5",
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
