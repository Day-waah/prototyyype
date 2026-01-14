import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import droneMq9 from "@/assets/drone-mq9.jpg";
import droneT82 from "@/assets/drone-t82.jpg";
import droneVtol from "@/assets/drone-vtol.jpg";
import { MinimalParticles, SubtleGrid, MinimalScanLine, TargetingReticle } from "./TechEffectsOverlay";

const products = [
  {
    name: "MQ9",
    image: droneMq9,
  },
  {
    name: "TB2 Drone",
    image: droneT82,
  },
  {
    name: "VTOL",
    image: droneVtol,
  },
  {
    name: "VTOL-X",
    image: droneVtol,
  },
];

interface ProductCardProps {
  product: typeof products[0];
  index: number;
  isSelected: boolean;
  onClick: () => void;
}

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
    y: 80, 
    scale: 0.8,
    rotateY: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ProductCard = ({ product, index, isSelected, onClick }: ProductCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer perspective-1000"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.08, z: 50 }}
        transition={{ duration: 0.3 }}
        className="relative group"
      >
        <div className={`relative overflow-hidden rounded-lg transition-all duration-500 ${isSelected ? 'ring-2 ring-primary shadow-lg shadow-primary/30' : ''}`}>
          {/* Image Container */}
          <div className="relative h-40 overflow-hidden bg-tactical-darker rounded-lg">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              style={{
                transform: "translateZ(30px)",
              }}
            />
            
            {/* Scan Line Effect */}
            <motion.div 
              className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >
              <motion.div 
                className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent"
                animate={{ y: ["-100%", "4000%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Holographic overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* 3D depth shadow */}
            <div className="absolute inset-0 shadow-inner" style={{ boxShadow: 'inset 0 0 30px rgba(0,0,0,0.5)' }} />
          </div>

          {/* Product Name */}
          <div className="text-center mt-3">
            <h3 className="font-display text-sm text-foreground group-hover:text-primary transition-colors duration-300">
              {product.name}
            </h3>
          </div>
        </div>

        {/* Glow Effect */}
        <motion.div 
          className="absolute -inset-2 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
        />
      </motion.div>
    </motion.div>
  );
};

// Animated wavy lines background
const WavyLinesBackground = () => (
  <svg className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 pointer-events-none" viewBox="0 0 400 600" preserveAspectRatio="none">
    {[...Array(20)].map((_, i) => (
      <motion.path
        key={i}
        d={`M ${400 - i * 20} 0 Q ${350 - i * 20} 300 ${400 - i * 20} 600`}
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ 
          duration: 3, 
          delay: i * 0.1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    ))}
  </svg>
);

export const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  return (
    <section id="products" className="relative py-24 overflow-hidden bg-tactical-darker">
      {/* Tech effects */}
      <SubtleGrid opacity={0.025} />
      <MinimalParticles count={8} opacity={0.2} />
      <MinimalScanLine interval={10} />
      <TargetingReticle x={15} y={40} />
      <TargetingReticle x={85} y={60} />
      
      {/* Background */}
      <WavyLinesBackground />
      
      {/* Smooth transitions */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl md:text-3xl text-center text-foreground mb-12"
        >
          Our Star Produc<span className="text-primary">ts</span>
        </motion.h2>

        {/* Products Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-tactical-dark/50 border border-primary/20 rounded-2xl p-8 backdrop-blur-sm"
        >
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {products.map((product, index) => (
              <ProductCard 
                key={product.name} 
                product={product} 
                index={index}
                isSelected={selectedProduct === index}
                onClick={() => setSelectedProduct(selectedProduct === index ? null : index)}
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button 
            className="btn-tactical px-8 py-3 rounded-full font-tech"
            whileHover={{ scale: 1.02, boxShadow: "0 0 30px hsl(var(--primary) / 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            Explore All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
