import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Ambient Background Glow */}
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, transparent 60%)",
          filter: "blur(100px)",
          top: "20%",
          left: "50%",
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-tactical-dark via-background to-tactical-darker" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20">
        {/* Drone Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.svg 
            width="160" 
            height="80" 
            viewBox="0 0 160 80" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="opacity-90"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Main Body */}
            <ellipse cx="80" cy="40" rx="20" ry="8" fill="hsl(var(--foreground))" fillOpacity="0.95"/>
            {/* Left Wing */}
            <path d="M15 38L60 40L15 42" fill="hsl(var(--foreground))" fillOpacity="0.9"/>
            <path d="M5 37L55 40L5 43" stroke="hsl(var(--foreground))" strokeWidth="0.5" fill="none" strokeOpacity="0.5"/>
            {/* Right Wing */}
            <path d="M145 38L100 40L145 42" fill="hsl(var(--foreground))" fillOpacity="0.9"/>
            <path d="M155 37L105 40L155 43" stroke="hsl(var(--foreground))" strokeWidth="0.5" fill="none" strokeOpacity="0.5"/>
            {/* Tail */}
            <path d="M75 46L80 65L85 46" fill="hsl(var(--foreground))" fillOpacity="0.8"/>
            <path d="M72 48L80 70L88 48" stroke="hsl(var(--foreground))" strokeWidth="0.5" fill="none" strokeOpacity="0.4"/>
            {/* Cockpit */}
            <ellipse cx="80" cy="38" rx="6" ry="3" fill="hsl(var(--primary))" fillOpacity="0.6"/>
            {/* Wing Tips */}
            <circle cx="10" cy="40" r="2" fill="hsl(var(--primary))" fillOpacity="0.8"/>
            <circle cx="150" cy="40" r="2" fill="hsl(var(--primary))" fillOpacity="0.8"/>
          </motion.svg>
        </motion.div>

        {/* Company Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl tracking-[0.25em] text-foreground mb-6"
        >
          DHANUSH R. A. S.
        </motion.h1>

        {/* Animated Glowing Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
          className="relative w-80 h-1 mb-8"
        >
          {/* Base line */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
          {/* Glow effect */}
          <motion.div 
            className="absolute -inset-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full blur-md"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Strong center glow */}
          <motion.div 
            className="absolute -inset-2 bg-gradient-to-r from-transparent via-primary/40 to-transparent rounded-full blur-lg"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-muted-foreground text-sm tracking-widest uppercase"
        >
          Robotics & Autonomous Systems
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-muted-foreground text-xs tracking-wider">SCROLL</span>
          <svg width="20" height="30" viewBox="0 0 20 30" fill="none" className="text-primary">
            <rect x="1" y="1" width="18" height="28" rx="9" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5"/>
            <motion.circle
              cx="10"
              cy="10"
              r="3"
              fill="currentColor"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};
