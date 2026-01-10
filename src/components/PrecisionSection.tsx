import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FlyingDroneParticles } from "./SectionTransition";

// Text animation variants
const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");
  
  return (
    <motion.span className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              custom={wordIndex * 5 + charIndex}
              variants={letterVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};

// Grid pattern background
const TechGridBackground = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="techGrid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#techGrid)" />
    </svg>
    
    {/* Animated scan lines */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent h-20"
      animate={{ y: ["-100%", "600%"] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

export const PrecisionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-tactical-darker"
    >
      {/* Tech Grid Background */}
      <TechGridBackground />
      
      {/* Flying Drone Particles */}
      <FlyingDroneParticles />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />

      {/* Content */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl text-gradient mb-8"
        >
          <AnimatedText text="Precision in Every Motion" />
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-body text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Pioneering India's defence and enterprise drone frontier 
          with flight-grade UAVs, AI VTOL platforms, and modular systems.
        </motion.p>

        {/* CTA Buttons with staggered animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.button 
            className="btn-tactical-filled px-8 py-3 rounded-full font-tech"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--primary) / 0.5)" }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Products
          </motion.button>
          <motion.button 
            className="btn-tactical px-8 py-3 rounded-full font-tech"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Join Us in Training
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};
