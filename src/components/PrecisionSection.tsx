import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import precisionBg from "@/assets/precision-bg.png";

// Flying drone silhouettes
const FlyingDrones = () => {
  const drones = [
    { id: 1, startX: -15, endX: 115, y: 12, duration: 22, delay: 0, size: 40, opacity: 0.7 },
    { id: 2, startX: 115, endX: -15, y: 45, duration: 28, delay: 3, size: 32, opacity: 0.5 },
    { id: 3, startX: -15, endX: 115, y: 78, duration: 25, delay: 6, size: 36, opacity: 0.6 },
    { id: 4, startX: 115, endX: -15, y: 25, duration: 30, delay: 10, size: 28, opacity: 0.4 },
    { id: 5, startX: -15, endX: 115, y: 60, duration: 20, delay: 15, size: 44, opacity: 0.8 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {drones.map((drone) => (
        <motion.div
          key={drone.id}
          className="absolute"
          style={{ top: `${drone.y}%` }}
          initial={{ x: `${drone.startX}vw`, opacity: 0 }}
          animate={{ 
            x: `${drone.endX}vw`, 
            opacity: [0, drone.opacity, drone.opacity, 0],
            y: [0, -20, 10, -15, 5, 0]
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
            viewBox="0 0 48 48" 
            fill="none"
            style={{ transform: drone.startX > drone.endX ? 'scaleX(-1)' : 'none' }}
          >
            {/* Drone body */}
            <path 
              d="M24 14L34 24L24 32L14 24L24 14Z" 
              fill="hsl(var(--primary))" 
              fillOpacity="0.8"
            />
            {/* Arms */}
            <path 
              d="M8 20L14 24L8 28" 
              stroke="hsl(var(--primary))" 
              strokeWidth="2"
              strokeOpacity="0.7"
              strokeLinecap="round"
            />
            <path 
              d="M40 20L34 24L40 28" 
              stroke="hsl(var(--primary))" 
              strokeWidth="2"
              strokeOpacity="0.7"
              strokeLinecap="round"
            />
            <path 
              d="M20 8L24 14L28 8" 
              stroke="hsl(var(--primary))" 
              strokeWidth="2"
              strokeOpacity="0.7"
              strokeLinecap="round"
            />
            <path 
              d="M20 40L24 32L28 40" 
              stroke="hsl(var(--primary))" 
              strokeWidth="2"
              strokeOpacity="0.7"
              strokeLinecap="round"
            />
            {/* Propeller circles */}
            <motion.circle
              cx="8" cy="24" r="5"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              strokeOpacity="0.5"
              fill="none"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.15, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx="40" cy="24" r="5"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              strokeOpacity="0.5"
              fill="none"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.15, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx="24" cy="8" r="5"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              strokeOpacity="0.5"
              fill="none"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.15, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx="24" cy="40" r="5"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              strokeOpacity="0.5"
              fill="none"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.15, repeat: Infinity, ease: "linear" }}
            />
            {/* Center glow */}
            <motion.circle
              cx="24" cy="23" r="3"
              fill="hsl(var(--primary))"
              animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </svg>
          {/* Light trail */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 h-[2px]"
            style={{ 
              width: drone.size * 3,
              left: drone.startX < drone.endX ? -drone.size * 3 : drone.size,
              background: `linear-gradient(${drone.startX < drone.endX ? 'to right' : 'to left'}, transparent, hsl(var(--primary) / 0.4))`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Radar scanning effect
const RadarScan = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      animate={{ rotate: 360 }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    >
      <div className="w-[700px] h-[700px] relative">
        <div className="absolute inset-0 rounded-full border border-primary/20" />
        <div className="absolute inset-[15%] rounded-full border border-primary/15" />
        <div className="absolute inset-[30%] rounded-full border border-primary/10" />
        <div 
          className="absolute top-1/2 left-1/2 w-1/2 h-[3px] origin-left rounded-full"
          style={{
            background: 'linear-gradient(90deg, hsl(var(--primary) / 0.8) 0%, hsl(var(--primary) / 0.3) 50%, transparent 100%)',
            boxShadow: '0 0 20px hsl(var(--primary) / 0.5)',
          }}
        />
      </div>
    </motion.div>
  </div>
);

// HUD/Tech grid overlay
const TechGrid = () => (
  <div className="absolute inset-0 pointer-events-none z-5 opacity-[0.08]">
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }}
    />
  </div>
);

// Floating data points
const DataPoints = () => {
  const points = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: 10 + Math.random() * 80,
    y: 10 + Math.random() * 80,
    delay: Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {points.map((point) => (
        <motion.div
          key={point.id}
          className="absolute"
          style={{ left: `${point.x}%`, top: `${point.y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            delay: point.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          {/* Targeting reticle */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <motion.circle
              cx="20" cy="20" r="15"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              strokeOpacity="0.6"
              fill="none"
              strokeDasharray="4 4"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <line x1="20" y1="2" x2="20" y2="10" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="20" y1="30" x2="20" y2="38" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="2" y1="20" x2="10" y2="20" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="30" y1="20" x2="38" y2="20" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.5" />
            <motion.circle
              cx="20" cy="20" r="3"
              fill="hsl(var(--primary))"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

// Floating particles
const AerialParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/50"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: '0 0 6px hsl(var(--primary) / 0.5)',
          }}
          animate={{
            x: [0, 60, -40, 50, 0],
            y: [0, -50, 30, -60, 0],
            opacity: [0.2, 0.7, 0.3, 0.6, 0.2],
            scale: [1, 1.3, 0.8, 1.2, 1],
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

// Scanning lines
const ScanLines = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
    <motion.div
      className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent"
      initial={{ top: '-5%' }}
      animate={{ top: '105%' }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: 2,
      }}
      style={{ boxShadow: '0 0 20px 5px hsl(var(--primary) / 0.3)' }}
    />
    <motion.div
      className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary/40 to-transparent"
      initial={{ left: '-5%' }}
      animate={{ left: '105%' }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: 3,
        delay: 1,
      }}
      style={{ boxShadow: '0 0 15px 3px hsl(var(--primary) / 0.2)' }}
    />
  </div>
);

// Corner HUD elements
const HUDCorners = () => (
  <div className="absolute inset-8 pointer-events-none z-10">
    {/* Top-left corner */}
    <motion.div 
      className="absolute top-0 left-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M0 20V0H20" stroke="hsl(var(--primary))" strokeWidth="2" strokeOpacity="0.6" />
        <path d="M0 15V5H15" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.4" />
      </svg>
    </motion.div>
    {/* Top-right corner */}
    <motion.div 
      className="absolute top-0 right-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M60 20V0H40" stroke="hsl(var(--primary))" strokeWidth="2" strokeOpacity="0.6" />
        <path d="M60 15V5H45" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.4" />
      </svg>
    </motion.div>
    {/* Bottom-left corner */}
    <motion.div 
      className="absolute bottom-0 left-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M0 40V60H20" stroke="hsl(var(--primary))" strokeWidth="2" strokeOpacity="0.6" />
        <path d="M0 45V55H15" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.4" />
      </svg>
    </motion.div>
    {/* Bottom-right corner */}
    <motion.div 
      className="absolute bottom-0 right-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M60 40V60H40" stroke="hsl(var(--primary))" strokeWidth="2" strokeOpacity="0.6" />
        <path d="M60 45V55H45" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.4" />
      </svg>
    </motion.div>
  </div>
);

export const PrecisionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 0.95]);

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

      {/* Tech Grid */}
      <TechGrid />

      {/* Aerial Particles */}
      <AerialParticles />
      
      {/* Radar Scan */}
      <RadarScan />

      {/* Flying Drones */}
      <FlyingDrones />

      {/* Data Points / Targeting */}
      <DataPoints />

      {/* Scan Lines */}
      <ScanLines />

      {/* HUD Corners */}
      <HUDCorners />

      {/* Vignette effect for smooth blending */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/30 pointer-events-none z-20" />

      {/* Bottom gradient for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
      
      {/* Top gradient for smooth transition from hero */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent pointer-events-none z-20" />
    </section>
  );
};
