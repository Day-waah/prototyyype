import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import droneMq9 from "@/assets/drone-mq9.jpg";
import droneT82 from "@/assets/drone-t82.jpg";
import droneVtol from "@/assets/drone-vtol.jpg";

const products = [
  {
    name: "MQ9",
    image: droneMq9,
    description: "Multi-role reconnaissance UAV",
  },
  {
    name: "T82 Drone",
    image: droneT82,
    description: "Tactical surveillance platform",
  },
  {
    name: "VTOL",
    image: droneVtol,
    description: "Vertical takeoff & landing system",
  },
];

interface ProductCardProps {
  product: typeof products[0];
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative group"
      >
        <div className="card-defence overflow-hidden transition-all duration-500 group-hover:border-primary/50">
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              style={{
                transform: "translateZ(20px)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            
            {/* Scan Line Effect */}
            <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-scan-line" />
            </div>

            {/* Holographic overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-5 text-center relative">
            <h3 className="font-display text-lg text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
              {product.name}
            </h3>
            <p className="text-muted-foreground text-xs">
              {product.description}
            </p>
          </div>

          {/* Corner Accents - Enhanced */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/20 group-hover:border-primary/60 transition-colors duration-300 rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/20 group-hover:border-primary/60 transition-colors duration-300 rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/20 group-hover:border-primary/60 transition-colors duration-300 rounded-bl-lg" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/20 group-hover:border-primary/60 transition-colors duration-300 rounded-br-lg" />
        </div>

        {/* Glow Effect */}
        <div className="absolute -inset-3 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
      </motion.div>
    </motion.div>
  );
};

export const ProductsSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background with swirling glow */}
      <div className="absolute inset-0 bg-tactical-darker">
        <motion.div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 50%)",
            filter: "blur(100px)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl md:text-3xl text-center text-foreground mb-16"
        >
          Our Star Products
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button 
            className="btn-tactical px-8 py-3 rounded-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
