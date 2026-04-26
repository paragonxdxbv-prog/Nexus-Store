import React from 'react';
import { motion } from 'motion/react';

export const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -30 }} 
    whileInView={{ opacity: 1, x: 0 }} 
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="mb-12"
  >
    <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-[0.15em] uppercase">
      {title}
    </h2>
    {subtitle && <p className="text-nexus-muted mt-2 tracking-[0.2em] uppercase text-sm">{subtitle}</p>}
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="h-px bg-gradient-to-r from-nexus-green to-transparent w-32 mt-6 origin-left" 
    />
  </motion.div>
);

export const ProductCard: React.FC<{ product: any; openQuickBuy?: () => void; index?: number }> = ({ product, openQuickBuy, index = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative bg-nexus-dark border-t-2 border-t-nexus-green/50 rounded-lg overflow-hidden flex flex-col card-trace-border h-full"
    >
      <div className="absolute inset-0 border border-transparent group-hover:border-nexus-green group-hover:glow-green rounded-lg transition-all duration-300 pointer-events-none z-20" />
      
      <div className="relative h-64 overflow-hidden bg-black flex-shrink-0">
        <motion.img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
        
        {product.badge && (
          <div className={`absolute top-4 right-4 px-2 py-1 text-[10px] font-mono tracking-widest uppercase border ${product.badge.includes('STOCK') || product.badge.includes('NEW') || product.badge.includes('SALE') ? 'border-nexus-green text-nexus-green' : 'border-white text-white'} bg-black/50 backdrop-blur-sm z-10 flex items-center gap-2`}>
            {(product.badge.includes('STOCK') || product.badge.includes('NEW')) && (
              <span className="w-1.5 h-1.5 rounded-full bg-nexus-green animate-pulse" />
            )}
            {product.badge}
          </div>
        )}
        
        <div className="absolute bottom-4 left-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10 flex flex-col gap-2">
           <button 
            onClick={openQuickBuy}
            className="w-full py-2 bg-nexus-green text-nexus-black font-heading font-bold tracking-wider hover:bg-white transition-colors"
           >
             BUY NOW
           </button>
           <button className="w-full py-2 border border-white/30 text-white font-heading font-bold tracking-wider hover:bg-white hover:text-black transition-colors text-xs">
             ADD TO LIST
           </button>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow z-10 bg-gradient-to-b from-transparent to-nexus-dark relative">
        <div className="text-xs font-mono text-nexus-green mb-1">${product.price.toLocaleString()}</div>
        {product.oldPrice && (
           <div className="text-[10px] font-mono text-white line-through opacity-70 mb-1">${product.oldPrice.toLocaleString()}</div>
        )}
        <h3 className="font-heading font-bold text-xl uppercase tracking-wider mb-2">{product.name}</h3>
        {product.specs && <p className="text-[10px] font-mono text-nexus-muted tracking-tight mb-2 mt-auto">{product.specs}</p>}
        {product.stock && <p className="text-[10px] font-mono text-orange-400 mt-1">{product.stock}</p>}
      </div>
    </motion.div>
  );
};
