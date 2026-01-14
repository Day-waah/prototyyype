import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import precisionVortex from "@/assets/precision-vortex.jpg";
import { 
  MinimalParticles, 
  SubtleGrid, 
  MinimalHUDCorners, 
  MinimalScanLine,
  SubtleRadarPulse,
  FloatingDrones,
  TargetingReticle,
  DataStreams
} from "./TechEffectsOverlay";

export const PrecisionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 0.95]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]);

  return (
    <section
      ref={sectionRef}
      id="precision"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: bgY, scale }}
      >
        <img 
          src={precisionVortex} 
          alt="Precision Background" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/40 z-[1]" />

      {/* Minimalist Tech Effects */}
      <div className="absolute inset-0 z-[2]">
        <SubtleGrid opacity={0.04} />
        <MinimalParticles count={20} opacity={0.5} />
        <SubtleRadarPulse />
        <FloatingDrones count={4} />
        <MinimalScanLine interval={6} />
        <MinimalScanLine vertical interval={8} />
        <DataStreams />
        <TargetingReticle x={25} y={30} />
        <TargetingReticle x={75} y={70} />
        <MinimalHUDCorners size={50} />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground mb-6 tracking-wider"
        >
          Precision in Every Motion
        </motion.h2>

        {/* Animated line separator */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="relative w-64 md:w-80 h-[2px] mx-auto mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <motion.div 
            className="absolute -inset-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-sm"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-body text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Advancing India's defence and aerospace future with indigenous UAVs and robotics systems
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#products"
            className="btn-tactical-filled px-8 py-3 rounded-full font-tech"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--primary) / 0.5)" }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Products
          </motion.a>
          <motion.a
            href="#training"
            className="btn-tactical px-8 py-3 rounded-full font-tech"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px hsl(var(--primary) / 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            Join Training
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Vignette effect for smooth blending */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60 pointer-events-none z-[3]" />

      {/* Bottom gradient for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none z-[4]" />
      
      {/* Top gradient for smooth transition from hero */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background to-transparent pointer-events-none z-[4]" />
    </section>
  );
};
