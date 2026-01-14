import { motion } from "framer-motion";

// Minimalist floating particles - used across all sections
export const MinimalParticles = ({ count = 12, opacity = 0.4 }: { count?: number; opacity?: number }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: opacity * 0.5,
          }}
          animate={{
            x: [0, 30, -20, 25, 0],
            y: [0, -25, 15, -30, 0],
            opacity: [opacity * 0.3, opacity, opacity * 0.5, opacity * 0.8, opacity * 0.3],
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

// Subtle tech grid for sections
export const SubtleGrid = ({ opacity = 0.03 }: { opacity?: number }) => (
  <div 
    className="absolute inset-0 pointer-events-none"
    style={{
      opacity,
      backgroundImage: `
        linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
        linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px',
    }}
  />
);

// Minimal HUD corners
export const MinimalHUDCorners = ({ size = 40 }: { size?: number }) => (
  <div className="absolute inset-4 pointer-events-none">
    {/* Top-left */}
    <motion.div 
      className="absolute top-0 left-0"
      animate={{ opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <path d="M0 15V0H15" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.5" />
      </svg>
    </motion.div>
    {/* Top-right */}
    <motion.div 
      className="absolute top-0 right-0"
      animate={{ opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 3, repeat: Infinity, delay: 0.75 }}
    >
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <path d="M40 15V0H25" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.5" />
      </svg>
    </motion.div>
    {/* Bottom-left */}
    <motion.div 
      className="absolute bottom-0 left-0"
      animate={{ opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
    >
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <path d="M0 25V40H15" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.5" />
      </svg>
    </motion.div>
    {/* Bottom-right */}
    <motion.div 
      className="absolute bottom-0 right-0"
      animate={{ opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 3, repeat: Infinity, delay: 2.25 }}
    >
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <path d="M40 25V40H25" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.5" />
      </svg>
    </motion.div>
  </div>
);

// Minimal scan line
export const MinimalScanLine = ({ vertical = false, interval = 8 }: { vertical?: boolean; interval?: number }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className={vertical 
        ? "absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" 
        : "absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      }
      initial={vertical ? { left: '-5%' } : { top: '-5%' }}
      animate={vertical ? { left: '105%' } : { top: '105%' }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: interval,
      }}
    />
  </div>
);

// Subtle radar pulse
export const SubtleRadarPulse = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
    <motion.div
      className="w-[500px] h-[500px] rounded-full border border-primary/10"
      animate={{ 
        scale: [0.5, 1.5],
        opacity: [0.3, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
    <motion.div
      className="absolute w-[500px] h-[500px] rounded-full border border-primary/10"
      animate={{ 
        scale: [0.5, 1.5],
        opacity: [0.3, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeOut",
        delay: 2,
      }}
    />
  </div>
);

// Small drone silhouettes floating
export const FloatingDrones = ({ count = 3 }: { count?: number }) => {
  const drones = Array.from({ length: count }, (_, i) => ({
    id: i,
    startX: i % 2 === 0 ? -10 : 110,
    endX: i % 2 === 0 ? 110 : -10,
    y: 15 + i * 30,
    duration: 25 + i * 5,
    delay: i * 8,
    size: 20 + Math.random() * 10,
  }));

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
            y: [0, -10, 5, -8, 0]
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
            {/* Simple drone silhouette */}
            <path 
              d="M16 10L22 16L16 22L10 16L16 10Z" 
              fill="hsl(var(--primary))" 
              fillOpacity="0.6"
            />
            <path d="M6 14L10 16L6 18" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.4" />
            <path d="M26 14L22 16L26 18" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.4" />
            <motion.circle
              cx="16" cy="16" r="2"
              fill="hsl(var(--primary))"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </svg>
          {/* Light trail */}
          <div
            className="absolute top-1/2 -translate-y-1/2 h-px w-8"
            style={{ 
              left: drone.startX < drone.endX ? -32 : drone.size,
              background: `linear-gradient(${drone.startX < drone.endX ? 'to right' : 'to left'}, transparent, hsl(var(--primary) / 0.3))`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Targeting reticle animation
export const TargetingReticle = ({ x = 50, y = 50 }: { x?: number; y?: number }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0, 0.6, 0.6, 0], scale: [0.5, 1, 1, 0.8] }}
    transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
  >
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
      <motion.circle
        cx="25" cy="25" r="18"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        strokeOpacity="0.4"
        fill="none"
        strokeDasharray="4 4"
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <line x1="25" y1="5" x2="25" y2="12" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="25" y1="38" x2="25" y2="45" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="5" y1="25" x2="12" y2="25" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="38" y1="25" x2="45" y2="25" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.4" />
    </svg>
  </motion.div>
);

// Data streams effect
export const DataStreams = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-full w-px bg-gradient-to-b from-transparent via-primary to-transparent"
        style={{ left: `${15 + i * 20}%` }}
        animate={{ 
          opacity: [0, 0.5, 0],
          scaleY: [0.3, 1, 0.3]
        }}
        transition={{
          duration: 3,
          delay: i * 0.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
);
