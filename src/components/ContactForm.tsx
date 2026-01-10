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
    // Handle form submission
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-tactical-darker">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#9b8b7a] rounded-2xl p-8 md:p-12"
        >
          {/* Subtle border */}
          <div className="absolute inset-0 rounded-2xl border-4 border-tactical-darker/30" />
          
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-display text-2xl md:text-3xl text-tactical-darker italic mb-8"
          >
            Get in Touch
          </motion.h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <label className="block text-tactical-darker text-sm mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-primary/80 text-tactical-darker placeholder-tactical-darker/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-darker/30 transition-all"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <label className="block text-tactical-darker text-sm mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-primary/80 text-tactical-darker placeholder-tactical-darker/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-darker/30 transition-all"
                  placeholder="your@email.com"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <label className="block text-tactical-darker text-sm mb-2">Message here</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full bg-primary/80 text-tactical-darker placeholder-tactical-darker/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-darker/30 transition-all resize-none"
                placeholder="Your message..."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-center pt-4"
            >
              <motion.button
                type="submit"
                className="bg-tactical-darker text-foreground font-display px-10 py-3 rounded-lg hover:bg-tactical-dark transition-colors"
                whileHover={{ scale: 1.02 }}
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
