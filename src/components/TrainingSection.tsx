import { motion } from "framer-motion";

const trainingPrograms = [
  {
    title: "Defence Training",
    description: "Tactical UAV and robotics training for weather surveillance, reconnaissance, and defence applications.",
  },
  {
    title: "Civilian Training",
    description: "Industry-oriented UAV training for mapping, inspections, and advanced agriculture and mining operations.",
  },
  {
    title: "Certification and Workshop",
    description: "Specialized advanced programs and hands-on MAVs base platforms for professional excellence.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const TrainingSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-tactical-darker">
        {/* Subtle Grid Background */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Ambient glow */}
        <motion.div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-xl md:text-2xl text-foreground mb-2">
            Empowering the Next Generation of UAV
          </h2>
          <h3 className="font-display text-xl md:text-2xl text-foreground">
            Operators
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {trainingPrograms.map((program, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                x: 8,
                backgroundColor: "hsl(var(--card))",
              }}
              className="card-defence p-6 flex flex-col md:flex-row md:items-center gap-4 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex-shrink-0 min-w-[200px]">
                <span className="font-display text-sm text-primary group-hover:text-emerald-bright transition-colors">
                  {program.title}
                </span>
              </div>
              <div className="hidden md:block w-px h-8 bg-border/50" />
              <p className="text-muted-foreground text-sm flex-1">
                {program.description}
              </p>
              
              {/* Arrow indicator */}
              <motion.div
                className="text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button 
            className="btn-tactical px-8 py-3 rounded-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Training Programs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
