import { motion } from "framer-motion";
import { useState } from "react";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const newsItems = [
  {
    image: news1,
    description: "Specialized UAV and robotics training focused on surveillance, reconnaissance, and defence applications.",
  },
  {
    image: news2,
    description: "Specialized UAV and robotics training focused on surveillance, reconnaissance, and defence applications.",
  },
  {
    image: news3,
    description: "Specialized UAV and robotics training focused on surveillance, reconnaissance, and defence applications.",
  },
];

interface NewsCardProps {
  item: typeof newsItems[0];
  index: number;
  onClick: () => void;
}

const NewsCard = ({ item, index, onClick }: NewsCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15, duration: 0.6 }}
    onClick={onClick}
    className="group cursor-pointer"
  >
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      {/* Image */}
      <div className="relative h-64 rounded-lg overflow-hidden mb-4">
        <motion.img
          src={item.image}
          alt="News"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tactical-darker via-transparent to-transparent opacity-60" />
        
        {/* Play/View indicator on hover */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <motion.div
            className="w-14 h-14 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/40"
            whileHover={{ scale: 1.1 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary ml-1">
              <path d="M8 5v14l11-7L8 5z" fill="currentColor"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  </motion.div>
);

// News ticker/banner
const NewsBanner = () => (
  <div className="relative overflow-hidden bg-tactical-dark/50 border-y border-primary/10 py-3 mb-8">
    <motion.div
      className="flex whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      {[...Array(4)].map((_, i) => (
        <span key={i} className="text-primary/60 text-sm mx-8 font-display">
          LATEST NEWS • TRAINING UPDATES • PRODUCT LAUNCHES • DEFENCE INNOVATIONS • 
        </span>
      ))}
    </motion.div>
  </div>
);

export const MediaSection = () => {
  const [selectedNews, setSelectedNews] = useState<number | null>(null);

  return (
    <section id="media" className="relative py-24 overflow-hidden bg-tactical-darker">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl md:text-3xl text-primary mb-8"
        >
          Latest News
        </motion.h2>

        {/* News Banner */}
        <NewsBanner />

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <NewsCard 
              key={index} 
              item={item} 
              index={index}
              onClick={() => setSelectedNews(selectedNews === index ? null : index)}
            />
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
            className="btn-tactical px-8 py-3 rounded-full"
            whileHover={{ scale: 1.02, boxShadow: "0 0 30px hsl(var(--primary) / 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            Read More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
