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

// Floating aerial particles - more drone-oriented
const AerialParticles = () => {
  const particles = Array.from({ length: 25 }, (_, i) => ({
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
          className="absolute rounded-full bg-primary/40"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [0, 80, -40, 60, 0],
            y: [0, -60, 30, -80, 0],
            opacity: [0.1, 0.5, 0.2, 0.6, 0.1],
            scale: [1, 1.5, 0.8, 1.2, 1],
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
      duration: 180,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%]">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/8 to-transparent blur-3xl" />
    </div>
  </motion.div>
);

// Radar scanning effect
const RadarScan = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    >
      <div className="w-[600px] h-[600px] relative">
        <div className="absolute inset-0 rounded-full border border-primary/10" />
        <div 
          className="absolute top-1/2 left-1/2 w-1/2 h-[2px] origin-left"
          style={{
            background: 'linear-gradient(90deg, hsl(var(--primary) / 0.4) 0%, transparent 100%)',
          }}
        />
      </div>
    </motion.div>
  </div>
);

// Flying drone silhouettes with propeller animation
const FlyingDrones = () => {
  const drones = [
    { id: 1, startX: -15, endX: 115, y: 15, duration: 28, delay: 0, size: 35 },
    { id: 2, startX: 115, endX: -15, y: 50, duration: 32, delay: 4, size: 25 },
    { id: 3, startX: -15, endX: 115, y: 75, duration: 26, delay: 8, size: 30 },
    { id: 4, startX: 115, endX: -15, y: 30, duration: 35, delay: 12, size: 20 },
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
            opacity: [0, 0.5, 0.5, 0],
            y: [0, -15, 8, -12, 5, 0]
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
            viewBox="0 0 40 40" 
            fill="none"
            style={{ transform: drone.startX > drone.endX ? 'scaleX(-1)' : 'none' }}
          >
            {/* Drone body */}
            <path 
              d="M20 12L28 20L20 26L12 20L20 12Z" 
              fill="hsl(var(--primary))" 
              fillOpacity="0.6"
            />
            {/* Arms */}
            <path 
              d="M6 16L12 20L6 24M34 16L28 20L34 24" 
              stroke="hsl(var(--primary))" 
              strokeWidth="1.5"
              strokeOpacity="0.5"
            />
            <path 
              d="M16 6L20 12L24 6M16 34L20 26L24 34" 
              stroke="hsl(var(--primary))" 
              strokeWidth="1.5"
              strokeOpacity="0.5"
            />
            {/* Propellers - animated circles */}
            <motion.circle
              cx="6" cy="20" r="4"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              strokeOpacity="0.4"
              fill="none"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.2, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx="34" cy="20" r="4"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              strokeOpacity="0.4"
              fill="none"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.2, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx="20" cy="6" r="4"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              strokeOpacity="0.4"
              fill="none"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.2, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx="20" cy="34" r="4"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              strokeOpacity="0.4"
              fill="none"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.2, repeat: Infinity, ease: "linear" }}
            />
            {/* Center light */}
            <motion.circle
              cx="20" cy="19" r="2"
              fill="hsl(var(--primary))"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </svg>
          {/* Trail effect */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-l from-primary/30 to-transparent"
            style={{ 
              width: drone.size * 2,
              left: drone.startX < drone.endX ? -drone.size * 2 : drone.size,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Grid overlay for tech look
const GridOverlay = () => (
  <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    />
  </div>
);

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

      {/* Grid Overlay */}
      <GridOverlay />
      
      {/* Aerial Particles */}
      <AerialParticles />
      
      {/* Swirl Overlay */}
      <SwirlOverlay />
      
      {/* Radar Scan */}
      <RadarScan />
      
      {/* Flying Drones */}
      <FlyingDrones />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40 pointer-events-none" />

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
