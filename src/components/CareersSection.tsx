import { motion } from "framer-motion";
import careerBg from "@/assets/career-bg.jpg";

const jobCategories = [
  "Engineers",
  "Analysts",
  "Trainers",
  "Interns",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40, 
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const CareersSection = () => {
  return (
    <section id="careers" className="relative py-24 overflow-hidden bg-tactical-darker">
      {/* Curved image section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-6xl px-4 mb-16"
      >
        <div className="relative h-80 md:h-96 rounded-b-[60px] overflow-hidden">
          <img 
            src={careerBg} 
            alt="Career" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-tactical-darker/30 via-transparent to-tactical-darker" />
          
          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-body text-foreground/80 text-sm md:text-base mb-2"
            >
              Find jobs, employment and career opportunities
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-display text-2xl md:text-4xl text-primary tracking-wider"
            >
              JOIN THE MISSION
            </motion.h2>
          </div>
        </div>
      </motion.div>

      {/* Job Categories */}
      <div className="max-w-5xl mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-xl md:text-2xl text-center text-foreground mb-10"
        >
          JOB CATEGORIES
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {jobCategories.map((category) => (
            <motion.div
              key={category}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.08,
                y: -5,
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group cursor-pointer"
            >
              <div className="bg-tactical-dark/50 border border-primary/20 rounded-2xl py-6 px-8 text-center transition-all duration-300 group-hover:bg-tactical-dark/80 group-hover:border-primary/50">
                <span className="font-tech text-foreground text-sm md:text-base">
                  {category}
                </span>
              </div>
              
              {/* Subtle glow on hover */}
              <motion.div
                className="absolute -inset-1 bg-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <motion.button 
            className="bg-primary/90 text-tactical-darker font-display px-10 py-3 rounded-md hover:bg-primary transition-colors"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px hsl(var(--primary) / 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Apply now!
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
