import { motion } from "framer-motion";
import { AnimatedBubbles, SwirlingGlow } from "./AnimatedBubbles";

const aboutCards = [
  {
    title: "Who we are?",
    description: "An Indian defence and aerospace company building flight-grade UAVs and robotics solutions.",
  },
  {
    title: "What we do?",
    description: "We design and deploy systems on ready UAVs, VTOLs, platforms, and develop grade modules on MAVs.",
  },
  {
    title: "Why it Matters?",
    description: "Supporting real-time security and future defence needs through robotics and AI/ML technology.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60, 
    scale: 0.9,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const AboutSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Dark base background */}
      <div className="absolute inset-0 bg-tactical-darker" />
      
      {/* Animated swirling glow bubbles - matching Figma design */}
      <SwirlingGlow />
      <AnimatedBubbles />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl md:text-3xl text-center text-foreground mb-16"
        >
          About Dhanush Robotics
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6 perspective-1000"
        >
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                scale: 1.03,
                rotateY: 5,
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.5), 0 0 100px hsl(var(--primary) / 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              className="card-defence p-8 text-center group transition-all duration-500 backdrop-blur-sm cursor-pointer preserve-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.h3 
                className="font-display text-sm tracking-wider text-primary mb-6 group-hover:text-emerald-bright transition-colors"
              >
                {card.title}
              </motion.h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {card.description}
              </p>
              
              {/* Glowing border on hover */}
              <motion.div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at center, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
                  boxShadow: "inset 0 0 30px hsl(var(--primary) / 0.1)"
                }}
              />
              
              {/* Corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, transparent 50%, hsl(var(--primary) / 0.2) 100%)",
                  borderRadius: "0 1rem 0 0"
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button 
            className="btn-tactical px-8 py-3 rounded-full font-tech"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px hsl(var(--primary) / 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Our Mission
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
