import { motion } from "framer-motion";

const timelineItems = [
  { title: "AI-Powered Autonomy" },
  { title: "Long Distance UAVs" },
  { title: "Civilian Expansion" },
  { title: "Global Operations" },
];

// Animated wavy lines for corners
const WavyLinesCorner = ({ position }: { position: 'left' | 'right' }) => (
  <svg 
    className={`absolute ${position === 'left' ? 'left-0 bottom-0' : 'right-0 top-0'} w-64 h-96 opacity-20 pointer-events-none`} 
    viewBox="0 0 200 400" 
    preserveAspectRatio="none"
  >
    {[...Array(15)].map((_, i) => (
      <motion.path
        key={i}
        d={position === 'left' 
          ? `M ${i * 15} 400 Q ${50 + i * 10} 200 ${i * 15} 0`
          : `M ${200 - i * 15} 0 Q ${150 - i * 10} 200 ${200 - i * 15} 400`
        }
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{ 
          duration: 4, 
          delay: i * 0.15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    ))}
  </svg>
);

const nodeVariants = {
  hidden: { opacity: 0, y: 30, scale: 0 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2 + 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const TimelineNode = ({ index, title }: { index: number; title: string }) => (
  <motion.div
    custom={index}
    variants={nodeVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="flex flex-col items-center group cursor-pointer"
  >
    {/* Node */}
    <motion.div 
      className="relative w-6 h-6 mb-4"
    >
      {/* Outer glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/30 blur-md"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
      />
      {/* Inner circle */}
      <div className="absolute inset-1 rounded-full bg-tactical-dark border-2 border-primary" />
      {/* Center dot */}
      <motion.div
        className="absolute inset-2 rounded-full bg-primary"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </motion.div>
    
    {/* Title */}
    <span className="font-tech text-primary text-sm text-center group-hover:text-emerald-bright transition-colors whitespace-nowrap">
      {title}
    </span>
  </motion.div>
);

export const FutureVisionSection = () => {
  return (
    <section id="vision" className="relative py-32 overflow-hidden bg-tactical-darker">
      {/* Wavy lines corners */}
      <WavyLinesCorner position="left" />
      <WavyLinesCorner position="right" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Faded IMPLEMENTATION text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-4"
        >
          <h2 className="font-display text-4xl md:text-6xl text-foreground/10 tracking-[0.3em] uppercase">
            IMPLEMENTATION
          </h2>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h3 className="font-display text-xl md:text-2xl text-foreground">
            <span className="text-primary">Empowering</span> the Next Generation of <span className="text-primary">UAV Operators</span>
          </h3>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Glowing line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-3 left-0 right-0 h-0.5 origin-left"
          >
            {/* Base line */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
            {/* Glow layers */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 blur-sm"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 blur-md"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            {/* Scanning light */}
            <motion.div
              className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-primary to-transparent"
              animate={{ x: ["-10%", "110%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
            />
          </motion.div>

          {/* Timeline items */}
          <div className="grid grid-cols-4 gap-4">
            {timelineItems.map((item, index) => (
              <TimelineNode key={index} index={index} title={item.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
