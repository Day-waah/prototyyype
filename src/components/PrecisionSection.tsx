import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import precisionBg from "@/assets/precision-bg.png";

// Text animation variants - letter by letter with 3D effect
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

const AnimatedText = ({ text, className, highlightWords = [] }: { text: string; className?: string; highlightWords?: string[] }) => {
  const words = text.split(" ");
  
  return (
    <motion.span className={className}>
      {words.map((word, wordIndex) => {
        const isHighlight = highlightWords.includes(word);
        return (
          <span key={wordIndex} className="inline-block mr-[0.25em]">
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                custom={wordIndex * 5 + charIndex}
                variants={letterVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`inline-block ${isHighlight ? 'text-primary' : ''}`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        );
      })}
    </motion.span>
  );
};

// Floating aerial particles
const AerialParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
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
            x: [0, 50, -30, 20, 0],
            y: [0, -40, 20, -60, 0],
            opacity: [0.2, 0.6, 0.3, 0.5, 0.2],
            scale: [1, 1.2, 0.8, 1.1, 1],
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

// Slow moving swirl overlay effect
const SwirlOverlay = () => (
  <motion.div
    className="absolute inset-0 pointer-events-none"
    animate={{
      rotate: [0, 360],
    }}
    transition={{
      duration: 120,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%]">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-3xl" />
    </div>
  </motion.div>
);

// Flying drone silhouettes
const FlyingDrones = () => {
  const drones = [
    { id: 1, startX: -10, endX: 110, y: 20, duration: 25, delay: 0, size: 30 },
    { id: 2, startX: 110, endX: -10, y: 60, duration: 30, delay: 5, size: 20 },
    { id: 3, startX: -10, endX: 110, y: 80, duration: 35, delay: 10, size: 25 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {drones.map((drone) => (
        <motion.div
          key={drone.id}
          className="absolute"
          style={{ top: `${drone.y}%` }}
          initial={{ x: `${drone.startX}vw`, opacity: 0 }}
          animate={{ 
            x: `${drone.endX}vw`, 
            opacity: [0, 0.4, 0.4, 0],
            y: [0, -10, 5, -5, 0]
          }}
          transition={{
            duration: drone.duration,
            delay: drone.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg 
            width={drone.size} 
            height={drone.size} 
            viewBox="0 0 32 32" 
            fill="none"
            style={{ transform: drone.startX > drone.endX ? 'scaleX(-1)' : 'none' }}
          >
            <path 
              d="M16 8L24 16L16 20L8 16L16 8Z" 
              fill="hsl(var(--primary))" 
              fillOpacity="0.5"
            />
            <path 
              d="M4 14L8 16L4 18M28 14L24 16L28 18" 
              stroke="hsl(var(--primary))" 
              strokeWidth="1.5"
              strokeOpacity="0.5"
            />
          </svg>
        </motion.div>
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

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1.1, 1, 1, 0.95]);

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
          alt="" 
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/20" />
      </motion.div>

      {/* Aerial Particles */}
      <AerialParticles />
      
      {/* Swirl Overlay */}
      <SwirlOverlay />
      
      {/* Flying Drones */}
      <FlyingDrones />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30 pointer-events-none" />

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8"
        >
          <AnimatedText 
            text="Precision in Every Motion" 
            highlightWords={["Motion"]}
          />
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Advancing India's defence and aerospace future
          <br />
          with indigenous UAVs and robotics systems.
        </motion.p>

        {/* CTA Buttons with staggered animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a 
            href="#product"
            className="btn-tactical-filled px-8 py-3 rounded-full font-tech inline-block"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--primary) / 0.5)" }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Products
          </motion.a>
          <motion.a 
            href="#training"
            className="btn-tactical px-8 py-3 rounded-full font-tech inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Join Training
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Bottom gradient for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
    </section>
  );
};
