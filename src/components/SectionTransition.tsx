import { motion } from "framer-motion";

interface SectionTransitionProps {
  variant?: 'gradient' | 'line' | 'dots' | 'circuit';
  className?: string;
}

export const SectionTransition = ({ variant = 'gradient', className = '' }: SectionTransitionProps) => {
  if (variant === 'gradient') {
    return (
      <div className={`relative h-16 md:h-20 overflow-hidden ${className}`}>
        {/* Gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        {/* Center line with glow */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        />
      </div>
    );
  }

  if (variant === 'line') {
    return (
      <div className={`relative h-12 md:h-16 flex items-center justify-center ${className}`}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "50%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
        />
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className={`relative h-10 md:h-12 flex items-center justify-center gap-3 ${className}`}>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
            className="w-1 h-1 rounded-full bg-primary/30"
          />
        ))}
      </div>
    );
  }

  if (variant === 'circuit') {
    return (
      <div className={`relative h-12 md:h-16 flex items-center justify-center ${className}`}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "40%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        />
      </div>
    );
  }

  return null;
};

// Flying drone particles for background
export const FlyingDroneParticles = () => {
  const drones = [...Array(6)].map((_, i) => ({
    id: i,
    size: 4 + Math.random() * 8,
    duration: 15 + Math.random() * 20,
    delay: i * 3,
    startY: 20 + Math.random() * 60,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {drones.map((drone) => (
        <motion.div
          key={drone.id}
          className="absolute"
          style={{ top: `${drone.startY}%` }}
          initial={{ x: "-10%", opacity: 0 }}
          animate={{ 
            x: "110%", 
            opacity: [0, 0.6, 0.6, 0],
            y: [0, -20, 20, -10, 0]
          }}
          transition={{
            duration: drone.duration,
            delay: drone.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Drone shape */}
          <svg 
            width={drone.size * 4} 
            height={drone.size * 2} 
            viewBox="0 0 40 20" 
            fill="none"
            className="text-primary"
          >
            {/* Body */}
            <ellipse cx="20" cy="10" rx="8" ry="4" fill="currentColor" opacity="0.6" />
            {/* Left wing */}
            <path d="M12 10 L4 8 L4 12 Z" fill="currentColor" opacity="0.4" />
            {/* Right wing */}
            <path d="M28 10 L36 8 L36 12 Z" fill="currentColor" opacity="0.4" />
            {/* Propellers */}
            <motion.ellipse 
              cx="6" cy="10" rx="4" ry="1" 
              fill="currentColor" 
              opacity="0.3"
              animate={{ scaleX: [1, 0.3, 1] }}
              transition={{ duration: 0.1, repeat: Infinity }}
            />
            <motion.ellipse 
              cx="34" cy="10" rx="4" ry="1" 
              fill="currentColor" 
              opacity="0.3"
              animate={{ scaleX: [1, 0.3, 1] }}
              transition={{ duration: 0.1, repeat: Infinity }}
            />
            {/* Light */}
            <motion.circle 
              cx="20" cy="10" r="2" 
              fill="currentColor"
              animate={{ opacity: [0.8, 0.3, 0.8] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </svg>
          
          {/* Trail */}
          <motion.div
            className="absolute right-full top-1/2 -translate-y-1/2 w-16 h-px"
            style={{
              background: 'linear-gradient(to left, hsl(var(--primary) / 0.4), transparent)',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};
