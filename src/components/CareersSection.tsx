import { motion } from "framer-motion";
import careerBg from "@/assets/career-bg.jpg";

const jobCategories = [
  "Engineers",
  "Analysts",
  "Trainers",
  "Interns",
];

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
              className="text-foreground/80 text-sm md:text-base mb-2"
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {jobCategories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                borderColor: "hsl(var(--primary) / 0.6)"
              }}
              className="relative group cursor-pointer"
            >
              <div className="bg-tactical-dark/50 border border-primary/20 rounded-2xl py-6 px-8 text-center transition-all duration-300 group-hover:bg-tactical-dark/80">
                <span className="text-foreground text-sm md:text-base font-display">
                  {category}
                </span>
              </div>
              
              {/* Subtle glow on hover */}
              <motion.div
                className="absolute -inset-1 bg-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <motion.button 
            className="bg-primary/90 text-tactical-darker font-display px-10 py-3 rounded-md hover:bg-primary transition-colors"
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px hsl(var(--primary) / 0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            Apply now!
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
