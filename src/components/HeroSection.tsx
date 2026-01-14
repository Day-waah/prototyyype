import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MinimalParticles, SubtleGrid, MinimalHUDCorners } from "./TechEffectsOverlay";

// Animated 3D Drone Component
const AnimatedDrone = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Main Drone Container */}
      <motion.div
        className="relative"
        animate={{ 
          y: [0, -15, 0],
          rotateX: [0, 5, 0],
          rotateZ: [0, 2, -2, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        style={{ 
          transformStyle: "preserve-3d",
          perspective: "1000px"
        }}
      >
        <svg 
          width="200" 
          height="100" 
          viewBox="0 0 200 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-2xl"
        >
          {/* Main Fuselage */}
          <motion.ellipse 
            cx="100" 
            cy="50" 
            rx="35" 
            ry="12" 
            fill="hsl(var(--foreground))" 
            fillOpacity="0.95"
          />
          <ellipse cx="100" cy="50" rx="30" ry="10" fill="hsl(var(--tactical-darker))" fillOpacity="0.3"/>
          
          {/* Left Wing */}
          <motion.path 
            d="M10 48L65 50L10 52" 
            fill="hsl(var(--foreground))" 
            fillOpacity="0.9"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
          />
          <path d="M0 46L60 50L0 54" stroke="hsl(var(--foreground))" strokeWidth="0.5" fill="none" strokeOpacity="0.4"/>
          
          {/* Right Wing */}
          <motion.path 
            d="M190 48L135 50L190 52" 
            fill="hsl(var(--foreground))" 
            fillOpacity="0.9"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, ease: "linear", delay: 0.1 }}
          />
          <path d="M200 46L140 50L200 54" stroke="hsl(var(--foreground))" strokeWidth="0.5" fill="none" strokeOpacity="0.4"/>
          
          {/* Tail Section */}
          <path d="M92 60L100 85L108 60" fill="hsl(var(--foreground))" fillOpacity="0.85"/>
          <path d="M88 62L100 90L112 62" stroke="hsl(var(--foreground))" strokeWidth="0.5" fill="none" strokeOpacity="0.3"/>
          
          {/* Cockpit Sensor */}
          <ellipse cx="100" cy="47" rx="10" ry="4" fill="hsl(var(--primary))" fillOpacity="0.7"/>
          <motion.ellipse 
            cx="100" 
            cy="47" 
            rx="6" 
            ry="2" 
            fill="hsl(var(--primary))"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Engine Pods - Left */}
          <circle cx="25" cy="50" r="4" fill="hsl(var(--foreground))" fillOpacity="0.9"/>
          <motion.circle 
            cx="25" 
            cy="50" 
            r="2" 
            fill="hsl(var(--primary))"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
          
          {/* Engine Pods - Right */}
          <circle cx="175" cy="50" r="4" fill="hsl(var(--foreground))" fillOpacity="0.9"/>
          <motion.circle 
            cx="175" 
            cy="50" 
            r="2" 
            fill="hsl(var(--primary))"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
          />

          {/* Propeller Blur - Left */}
          <motion.ellipse 
            cx="8" 
            cy="50" 
            rx="8" 
            ry="1" 
            fill="hsl(var(--foreground))"
            fillOpacity="0.4"
            animate={{ scaleX: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 0.15, repeat: Infinity }}
          />
          
          {/* Propeller Blur - Right */}
          <motion.ellipse 
            cx="192" 
            cy="50" 
            rx="8" 
            ry="1" 
            fill="hsl(var(--foreground))"
            fillOpacity="0.4"
            animate={{ scaleX: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 0.15, repeat: Infinity, delay: 0.05 }}
          />

          {/* Wing Tips */}
          <motion.circle 
            cx="5" 
            cy="50" 
            r="3" 
            fill="hsl(var(--primary))"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.circle 
            cx="195" 
            cy="50" 
            r="3" 
            fill="hsl(var(--primary))"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          />
        </svg>

        {/* Shadow */}
        <motion.div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-4 rounded-full bg-primary/10 blur-md"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </motion.div>

      {/* Trailing glow particles */}
      <div className="absolute -left-4 top-1/2 -translate-y-1/2">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary"
            style={{ left: -i * 8 }}
            animate={{ 
              opacity: [0, 0.6, 0],
              x: [-10, -30],
              scale: [1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

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
      {/* Tech effects layer */}
      <SubtleGrid opacity={0.02} />
      <MinimalParticles count={15} opacity={0.3} />
      <MinimalHUDCorners size={35} />

      {/* Ambient Background Glow */}
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full opacity-30 pointer-events-none z-0"
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
      <div className="absolute inset-0 bg-gradient-to-b from-tactical-dark via-background to-tactical-darker -z-10" />
      
      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20">
        {/* Animated 3D Drone */}
        <div className="mb-8">
          <AnimatedDrone />
        </div>

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
          {/* Scanning light */}
          <motion.div
            className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-primary/80 to-transparent rounded-full"
            animate={{ x: ["-100%", "400%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
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
