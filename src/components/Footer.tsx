import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#product" },
  { name: "Training", href: "#training" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden bg-tactical-darker">
      {/* Content */}
      <div className="relative z-10 py-16 px-6 md:px-8">
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
              <h3 className="font-display text-xl md:text-2xl text-foreground mb-1">
                Subscribe to our
              </h3>
              <h4 className="font-display text-xl md:text-2xl text-foreground mb-4">
                newsletter
              </h4>
              <p className="text-muted-foreground text-sm mb-6">
                Be the first to receive tips, updates and more
              </p>
              
              {/* Email Input with Subscribe Button */}
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-tactical-dark/50 text-foreground placeholder-muted-foreground rounded-l-lg px-4 py-3 border border-primary/20 border-r-0 focus:outline-none focus:border-primary/50 transition-all text-sm"
                />
                <motion.button
                  type="submit"
                  className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-tech px-6 py-3 rounded-r-lg hover:from-primary/90 hover:to-primary/70 transition-all text-sm whitespace-nowrap"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe Now
                </motion.button>
              </form>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="md:col-span-1"
            >
              <h4 className="font-tech text-sm text-foreground mb-4 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3">
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
              <h4 className="font-tech text-sm text-foreground mb-4 uppercase tracking-wider">Social</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                    className="w-10 h-10 rounded-lg bg-tactical-dark/50 border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <social.icon size={18} />
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
            className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-8"
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
