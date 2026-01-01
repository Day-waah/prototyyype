import { motion } from "framer-motion";

const navItems = ["About", "Product", "Training", "Vision", "Careers", "Media", "Contact"];

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-2"
        >
          <div className="relative">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5L35 15V25L20 35L5 25V15L20 5Z" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none"/>
              <path d="M20 10L30 17V23L20 30L10 23V17L20 10Z" fill="hsl(var(--primary))" fillOpacity="0.3"/>
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-xs tracking-[0.2em] text-foreground">DHANUSH</span>
            <span className="font-display text-[10px] tracking-[0.15em] text-muted-foreground">R.A.S.</span>
          </div>
        </motion.div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              className="text-xs tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300 uppercase"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};
