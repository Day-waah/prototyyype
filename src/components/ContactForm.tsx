import { motion } from "framer-motion";
import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden bg-tactical-darker">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground text-center mb-12"
        >
          Get in Touch
        </motion.h2>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl p-6 md:p-10 border border-primary/30 bg-gradient-to-br from-tactical-dark/50 to-tactical-darker/80 backdrop-blur-sm"
        >
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          
          <form onSubmit={handleSubmit} className="relative space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <label className="block text-foreground text-sm font-tech mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-tactical-darker/80 text-foreground placeholder-muted-foreground rounded-lg px-4 py-3 border border-primary/20 focus:outline-none focus:border-primary/50 transition-all"
                  placeholder="Name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <label className="block text-foreground text-sm font-tech mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-tactical-darker/80 text-foreground placeholder-muted-foreground rounded-lg px-4 py-3 border border-primary/20 focus:outline-none focus:border-primary/50 transition-all"
                  placeholder="Email"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <label className="block text-foreground text-sm font-tech mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full bg-tactical-darker/80 text-foreground placeholder-muted-foreground rounded-lg px-4 py-3 border border-primary/20 focus:outline-none focus:border-primary/50 transition-all resize-none"
                placeholder="Message"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-center pt-2"
            >
              <motion.button
                type="submit"
                className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-tech px-12 py-3 rounded-lg hover:from-primary/90 hover:to-primary/70 transition-all shadow-lg shadow-primary/20"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px hsl(var(--primary) / 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
