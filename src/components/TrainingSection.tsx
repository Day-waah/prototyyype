import { motion } from "framer-motion";
import trainingBg from "@/assets/training-bg.jpg";

const trainingPrograms = [
  {
    title: "Defence Training",
    description: "Specialized UAV and robotics training focused on surveillance, reconnaissance, and defence applications.",
  },
  {
    title: "Civilian Training",
    description: "Industry-oriented UAV training for mapping, inspection, disaster response, and emerging civilian use cases.",
  },
  {
    title: "Certification and Workshop",
    description: "Structured certification programs and hands-on workshops guided by experienced professionals.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    x: -60, 
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const TrainingSection = () => {
  return (
    <section id="training" className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={trainingBg} 
          alt="Training Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-tactical-darker/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-tactical-darker via-transparent to-tactical-darker/50" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-2xl md:text-3xl text-foreground">
            <span className="text-primary">Empowering</span> the Next Generation of <span className="text-primary">UAV</span>
          </h2>
          <h3 className="font-display text-2xl md:text-3xl text-foreground mt-1">
            Opera<span className="text-primary">tors</span>
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-5"
        >
          {trainingPrograms.map((program, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                x: 15,
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
              className="relative group cursor-pointer"
            >
              {/* Pill-shaped container */}
              <div className="relative bg-tactical-dark/60 backdrop-blur-md border border-primary/20 rounded-full px-8 py-5 flex flex-col md:flex-row md:items-center gap-3 transition-all duration-500 group-hover:border-primary/40 group-hover:bg-tactical-dark/80 overflow-hidden">
                {/* Animated gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <div className="flex-shrink-0 min-w-[220px] relative z-10">
                  <span className="font-display text-sm text-primary group-hover:text-emerald-bright transition-colors">
                    {program.title}
                  </span>
                </div>
                <p className="font-body text-muted-foreground text-sm flex-1 relative z-10">
                  {program.description}
                </p>
                
                {/* Pulse effect on hover */}
                <motion.div
                  className="absolute right-8 w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-14"
        >
          <motion.button 
            className="btn-tactical px-8 py-3 rounded-full font-tech"
            whileHover={{ scale: 1.02, boxShadow: "0 0 30px hsl(var(--primary) / 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            View Training Programs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
