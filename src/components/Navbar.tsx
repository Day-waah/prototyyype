import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

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
        {/* Logo with green glow effect */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative flex items-center"
        >
          {/* Green glow background */}
          <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl" />
          <div className="absolute -inset-2 bg-primary/10 rounded-full blur-md" />
          
          <img 
            src={logo} 
            alt="Dhanush R.A.S." 
            className="relative h-12 w-auto brightness-110 drop-shadow-[0_0_10px_hsl(152,76%,42%,0.5)]"
          />
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
              className="font-tech text-xs tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300 uppercase"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};
