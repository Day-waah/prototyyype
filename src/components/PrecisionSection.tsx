import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import forestAerial from "@/assets/forest-aerial.jpg";

// Text animation variants
const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut",
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
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};

export const PrecisionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Forest Background */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY, scale: backgroundScale }}
      >
        <img 
          src={forestAerial} 
          alt="Aerial forest view"
          className="w-full h-[120%] object-cover"
        />
      </motion.div>

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      
      {/* Additional center darkening for text readability */}
      <div className="absolute inset-0 bg-background/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
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
          className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-12 leading-relaxed"
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
            className="btn-tactical-filled px-8 py-3 rounded-full"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--primary) / 0.5)" }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Products
          </motion.button>
          <motion.button 
            className="btn-tactical px-8 py-3 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Join Us in Training
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
