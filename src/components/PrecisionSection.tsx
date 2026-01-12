import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import precisionBg from "@/assets/precision-bg.png";

// Floating aerial particles
const AerialParticles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 8,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [0, 50, -30, 40, 0],
            y: [0, -40, 20, -50, 0],
            opacity: [0.1, 0.4, 0.2, 0.5, 0.1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export const PrecisionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 0.98]);

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
          src={precisionBg} 
          alt="Precision in Every Motion" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Subtle Aerial Particles */}
      <AerialParticles />

      {/* Vignette effect for smooth blending */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40 pointer-events-none" />

      {/* Bottom gradient for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
      
      {/* Top gradient for smooth transition from hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
    </section>
  );
};
