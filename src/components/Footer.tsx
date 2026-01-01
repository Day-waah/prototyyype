import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="relative py-16 bg-tactical-darker overflow-hidden">
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5L35 15V25L20 35L5 25V15L20 5Z" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none"/>
              <path d="M20 10L30 17V23L20 30L10 23V17L20 10Z" fill="hsl(var(--primary))" fillOpacity="0.3"/>
            </svg>
            <div className="flex flex-col leading-none">
              <span className="font-display text-xs tracking-[0.2em] text-foreground">DHANUSH</span>
              <span className="font-display text-[10px] tracking-[0.15em] text-muted-foreground">R.A.S.</span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm mb-8 max-w-md">
            Pioneering India's defence and enterprise drone frontier with precision engineering.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            {['LinkedIn', 'Twitter', 'YouTube'].map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }}
                className="text-muted-foreground text-xs hover:text-primary transition-colors"
              >
                {social}
              </motion.a>
            ))}
          </div>

          <p className="text-muted-foreground text-xs">
            © 2024 Dhanush R.A.S. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
