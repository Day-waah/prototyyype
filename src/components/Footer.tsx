import { motion } from "framer-motion";

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Training", href: "#training" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-tactical-darker via-primary/20 to-primary/40" />
      
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-1"
            >
              <h3 className="font-display text-xl md:text-2xl text-foreground mb-2">
                Subscribe to our
              </h3>
              <h4 className="font-display text-xl md:text-2xl text-foreground mb-4">
                newsletter
              </h4>
              <p className="text-muted-foreground text-sm mb-6">
                Be the first to receive tips, updates and more
              </p>
              <motion.button
                className="bg-tactical-darker text-foreground font-display px-6 py-3 rounded-md hover:bg-tactical-dark transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe Now
              </motion.button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="md:col-span-1"
            >
              <h4 className="font-display text-sm text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="md:col-span-1"
            >
              <h4 className="font-display text-sm text-foreground mb-4">Social</h4>
              <div className="flex gap-4">
                {['LinkedIn', 'Twitter', 'YouTube'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1, color: "hsl(var(--foreground))" }}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center"
          >
            <p className="text-muted-foreground text-sm">
              © 2025 Dhanush Robotics & Aerial Systems Pvt. Ltd.
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
