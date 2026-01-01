import { motion } from "framer-motion";

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
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const AboutSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Swirling emerald glow background */}
      <div className="absolute inset-0 bg-tactical-darker">
        {/* Large ambient glow - left */}
        <motion.div 
          className="absolute -left-40 top-1/3 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Large ambient glow - right */}
        <motion.div 
          className="absolute -right-40 bottom-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

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
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 60px hsl(var(--primary) / 0.1)"
              }}
              className="card-defence p-8 text-center group transition-all duration-500"
            >
              <h3 className="font-display text-sm tracking-wider text-primary mb-6 group-hover:text-emerald-bright transition-colors">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {card.description}
              </p>
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
            className="btn-tactical px-8 py-3 rounded-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Our Mission
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
