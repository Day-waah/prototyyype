import { motion } from "framer-motion";

interface BubbleProps {
  size: number;
  x: string;
  y: string;
  delay: number;
  duration: number;
  opacity: number;
}

const Bubble = ({ size, x, y, delay, duration, opacity }: BubbleProps) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      background: `radial-gradient(circle at 30% 30%, hsl(var(--primary) / ${opacity * 1.5}) 0%, hsl(var(--primary) / ${opacity * 0.5}) 40%, transparent 70%)`,
      filter: "blur(40px)",
    }}
    animate={{
      x: [0, 30, -20, 40, 0],
      y: [0, -40, 20, -30, 0],
      scale: [1, 1.1, 0.95, 1.05, 1],
      opacity: [opacity, opacity * 1.3, opacity * 0.8, opacity * 1.2, opacity],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

export const AnimatedBubbles = () => {
  const bubbles: BubbleProps[] = [
    { size: 400, x: "-10%", y: "20%", delay: 0, duration: 15, opacity: 0.15 },
    { size: 300, x: "70%", y: "60%", delay: 2, duration: 18, opacity: 0.12 },
    { size: 500, x: "20%", y: "70%", delay: 1, duration: 20, opacity: 0.1 },
    { size: 250, x: "80%", y: "10%", delay: 3, duration: 16, opacity: 0.08 },
    { size: 350, x: "50%", y: "40%", delay: 0.5, duration: 22, opacity: 0.06 },
    { size: 200, x: "30%", y: "5%", delay: 4, duration: 14, opacity: 0.1 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {bubbles.map((bubble, index) => (
        <Bubble key={index} {...bubble} />
      ))}
    </div>
  );
};

export const SwirlingGlow = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Large swirling glow - left */}
    <motion.div
      className="absolute rounded-full"
      style={{
        width: 600,
        height: 600,
        left: "-15%",
        top: "30%",
        background: "radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, hsl(var(--primary) / 0.05) 50%, transparent 70%)",
        filter: "blur(60px)",
      }}
      animate={{
        x: [0, 80, 20, 60, 0],
        y: [0, -60, 40, -20, 0],
        scale: [1, 1.2, 0.9, 1.1, 1],
        rotate: [0, 45, -30, 60, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    
    {/* Large swirling glow - right */}
    <motion.div
      className="absolute rounded-full"
      style={{
        width: 500,
        height: 500,
        right: "-10%",
        bottom: "20%",
        background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, hsl(var(--primary) / 0.03) 50%, transparent 70%)",
        filter: "blur(50px)",
      }}
      animate={{
        x: [0, -60, 30, -40, 0],
        y: [0, 50, -30, 40, 0],
        scale: [1, 0.9, 1.15, 0.95, 1],
        rotate: [0, -60, 30, -45, 0],
      }}
      transition={{
        duration: 20,
        delay: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Center accent glow */}
    <motion.div
      className="absolute rounded-full"
      style={{
        width: 400,
        height: 400,
        left: "40%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        background: "radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 60%)",
        filter: "blur(80px)",
      }}
      animate={{
        scale: [1, 1.3, 0.8, 1.2, 1],
        opacity: [0.5, 0.8, 0.4, 0.7, 0.5],
      }}
      transition={{
        duration: 18,
        delay: 1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </div>
);
