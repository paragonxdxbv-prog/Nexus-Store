import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionTitle, ProductCard } from './ui';
import { HYPERCARS, TECH_PRODUCTS, FASHION_PRODUCTS, REAL_ESTATE_PRODUCTS } from '../lib/products';

export const FeaturedDrop = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight">DROP OF THE WEEK</h2>
        <span className="w-2 h-2 rounded-full bg-nexus-green animate-pulse" />
        <span className="text-nexus-green font-mono text-xs tracking-widest font-bold">LIVE NOW</span>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full bg-nexus-dark border border-nexus-green flex flex-col lg:flex-row glow-green-sm group"
      >
        <div className="w-full lg:w-[55%] h-[400px] lg:h-[600px] overflow-hidden bg-black relative">
          <img src="https://wallpapers.com/images/hd/bugatti-4k-bn6lkcogu4p28vu6.jpg" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" alt="Bugatti" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-nexus-dark/90 lg:to-nexus-dark hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-nexus-dark via-transparent to-transparent lg:hidden" />
        </div>
        
        <div className="w-full lg:w-[45%] p-8 md:p-16 flex flex-col justify-center relative z-10 bg-nexus-dark">
           <div className="bg-nexus-green/10 text-nexus-green border border-nexus-green/30 w-fit px-3 py-1 text-[10px] font-mono tracking-widest uppercase mb-6 flex items-center gap-2">
             <span>[ RARE ]</span> ULTRA RARE DROP
           </div>
           
           <h3 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase tracking-tight mb-4 leading-none">
             BUGATTI CENTODIECI
           </h3>
           
           <div className="text-white/60 font-mono text-xs tracking-widest uppercase mb-6">
             ONLY 10 UNITS WORLDWIDE
           </div>
           
           <div className="text-nexus-muted font-mono text-xs tracking-[0.2em] mb-6">
             8.0L W16 // 1,600HP // €8.9M
           </div>
           
           <p className="text-white/80 leading-relaxed mb-10 max-w-md">
             The Centodieci pays homage to the EB110. Only 10 produced. Every detail handcrafted in Molsheim. This is automotive perfection.
           </p>
           
           <div className="text-4xl md:text-5xl font-mono text-nexus-green font-bold mb-8 glow-text-green">
             $9,000,000
           </div>
           
           <div className="flex flex-col sm:flex-row gap-4 mb-6">
             <button className="py-4 px-8 bg-nexus-green text-black font-heading font-bold uppercase tracking-widest hover:bg-white transition-colors glow-green">
               BUY NOW
             </button>
             <button className="py-4 px-8 border border-white text-white font-heading font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
               REQUEST INFO
             </button>
           </div>
           
           <div className="text-[10px] font-mono text-nexus-muted uppercase mb-2">
             Free worldwide delivery included
           </div>
           <div className="flex items-center gap-2 text-nexus-green text-[10px] font-mono uppercase">
             <span className="w-1.5 h-1.5 rounded-full bg-nexus-green animate-pulse" /> 8 of 10 remaining
           </div>
        </div>
      </motion.div>
    </section>
  );
};

const CATEGORIES = [
  { name: 'HYPERCARS', count: '12 exclusive vehicles', price: '85,000', img: 'https://4kwallpapers.com/images/wallpapers/lamborghini-3840x2160-11125.jpeg' },
  { name: 'TECH & DEVICES', count: '48 premium products', price: '999', img: 'https://wallpapercave.com/wp/wp15787821.jpg' },
  { name: 'FASHION', count: '156 curated pieces', price: '89', img: 'https://images4.alphacoders.com/108/1085299.jpg' },
  { name: 'LUXURY GOODS', count: '34 authenticated items', price: '4,200', img: 'https://pbs.twimg.com/ext_tw_video_thumb/1750244517771436032/pu/img/Jw5pEfolXkzcyV1_.jpg' },
  { name: 'REAL ESTATE', count: '8 elite properties', price: '2.4M', img: 'https://images.pexels.com/photos/10647324/pexels-photo-10647324.jpeg' },
  { name: 'LIFESTYLE', count: '67 premium items', price: '49', img: 'https://wallpapercave.com/wp/wp13760348.jpg' },
]

export const CategoriesSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      <SectionTitle title="EXPLORE THE COLLECTION" subtitle="Every category. Elite level." />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES.map((cat, i) => (
          <motion.div 
            key={cat.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative h-[400px] overflow-hidden bg-black flex flex-col justify-end p-8 border border-white/10 hover:border-nexus-green transition-colors cursor-pointer"
          >
             <div className="absolute inset-0 bg-black z-0">
               <img src={cat.img} alt={cat.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" loading="lazy" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
             </div>
             
             <div className="absolute inset-0 border border-transparent group-hover:border-nexus-green glow-green-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20" />
             
             <div className="relative z-10 text-center flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-16">
               <h3 className="font-heading font-bold text-3xl text-white uppercase tracking-wider mb-2">{cat.name}</h3>
               <p className="text-nexus-muted font-mono text-[10px] uppercase tracking-widest mb-4">{cat.count}</p>
               <p className="text-nexus-green font-mono text-xs uppercase tracking-widest">From ${cat.price}</p>
             </div>
             
             <div className="absolute bottom-6 left-8 right-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-30">
               <button className="w-full py-3 bg-nexus-green text-black font-heading font-bold tracking-widest uppercase text-sm cursor-none-magnetic">BROWSE &rarr;</button>
             </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export const ProductSection = ({ title, subtitle, products, openQuickBuy, showFilters = false }: any) => {
  const [filter, setFilter] = useState('ALL');
  const tabs = ['ALL', 'PHONES', 'GPUs', 'LAPTOPS', 'AUDIO'];
  const fTabs = ['ALL', 'SNEAKERS', 'APPAREL', 'ACCESSORIES', 'LUXURY'];
  
  const activeTabs = title.includes('TECH') ? tabs : title.includes('FASHION') ? fTabs : [];

  const filteredProducts = products.filter((p: any) => {
    if (filter === 'ALL') return true;
    // VERY simple filter logic based on name matching
    if (filter === 'PHONES') return p.name.includes('IPHONE') || p.name.includes('SAMSUNG');
    if (filter === 'GPUs') return p.name.includes('RTX') || p.name.includes('RX');
    if (filter === 'LAPTOPS') return p.name.includes('MACBOOK');
    if (filter === 'AUDIO') return p.name.includes('SONY');
    if (filter === 'SNEAKERS') return p.name.includes('NIKE') || p.name.includes('JORDAN');
    if (filter === 'APPAREL') return p.name.includes('HOODIE');
    if (filter === 'ACCESSORIES') return p.name.includes('BELT');
    if (filter === 'LUXURY') return p.name.includes('BIRKIN');
    return true;
  });

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-white/5">
      <SectionTitle title={title} subtitle={subtitle} />
      
      {showFilters && activeTabs.length > 0 && (
        <div className="flex flex-wrap gap-4 mb-12">
           {activeTabs.map(t => (
             <button 
               key={t}
               onClick={() => setFilter(t)}
               className={`px-6 py-2 font-mono text-[10px] uppercase tracking-widest border transition-all ${filter === t ? 'border-nexus-green text-nexus-green glow-green-sm bg-nexus-green/10' : 'border-white/20 text-nexus-muted hover:border-white/50 hover:text-white'}`}
             >
               {t}
             </button>
           ))}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((p: any, i: number) => (
             <motion.div key={p.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
               <ProductCard product={p} openQuickBuy={() => openQuickBuy(p)} index={i} />
             </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}


export const EditorialTimeline = () => {
  const steps = [
    { year: "1.", title: "THE VISION", desc: "NEXUS was born from a desire to elevate luxury to an absolute art form. Every detail is carefully curated to offer an unmatched experience." },
    { year: "2.", title: "SOURCING", desc: "We travel the globe connecting with master artisans, exclusive manufacturers, and private collectors. Only the rarest pieces make it to our catalog." },
    { year: "3.", title: "AUTHENTICATION", desc: "A rigorous 48-hour inspection by our elite team of authenticators ensures flawless provenance. We never compromise on origin." },
    { year: "4.", title: "THE VAULT", desc: "Your items are stored in climate-controlled, military-grade secure facilities until the moment of white-glove dispatch." }
  ];

  return (
    <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-white/5 relative overflow-hidden">
      <SectionTitle title="THE PRODUCTION PROCESS" subtitle="NEXUS Store // Absolute Perfection." />
      
      <div className="relative mt-24">
         {/* Vertical animated line */}
         <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/10" />
         <motion.div 
           className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-nexus-green shadow-[0_0_15px_rgba(255,215,0,0.8)] origin-top"
           initial={{ scaleY: 0 }}
           whileInView={{ scaleY: 1 }}
           viewport={{ once: true, margin: "-150px" }}
           transition={{ duration: 2, ease: "easeInOut" }}
         />

         <div className="flex flex-col gap-24 relative z-10 w-full pl-12 md:pl-0">
           {steps.map((s, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: i * 0.2 }}
               className={`flex flex-col md:flex-row items-start md:items-center w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
             >
               <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:pl-16 lg:pl-32 text-left' : 'md:pr-16 lg:pr-32 text-left md:text-right'}`}>
                  <div className="font-heading font-bold text-6xl md:text-8xl text-nexus-green/20 mb-2 select-none -translate-x-2 md:translate-x-0">{s.year}</div>
                  <h3 className="font-heading font-bold text-3xl uppercase tracking-widest text-nexus-green mb-4">{s.title}</h3>
                  <p className="font-mono text-sm leading-relaxed text-nexus-muted uppercase tracking-widest">{s.desc}</p>
               </div>
             </motion.div>
           ))}
         </div>
      </div>
    </section>
  );
};

export const RealEstateSection = ({ openQuickBuy }: any) => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-white/5">
      <SectionTitle title="LUXURY & REAL ESTATE" subtitle="The finest things in life." />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative h-[500px] overflow-hidden bg-nexus-dark border border-nexus-green/30 hover:border-nexus-green transition-all col-span-1 lg:col-span-2 glow-green-sm"
          >
             <img src={REAL_ESTATE_PRODUCTS[0].image} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all duration-700" loading="lazy" />
             <div className="absolute inset-0 bg-gradient-to-t from-nexus-dark via-nexus-dark/50 to-transparent" />
             
             <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
               <div>
                  <div className="bg-nexus-green text-black font-mono font-bold text-[10px] px-2 py-1 uppercase tracking-widest w-fit mb-4">{REAL_ESTATE_PRODUCTS[0].badge}</div>
                  <h3 className="font-heading font-bold text-4xl md:text-5xl uppercase text-white mb-2">{REAL_ESTATE_PRODUCTS[0].name}</h3>
                  <div className="font-mono text-xs text-nexus-muted tracking-[0.2em] mb-4">{REAL_ESTATE_PRODUCTS[0].specs}</div>
                  <div className="text-nexus-green font-mono text-3xl font-bold glow-text-green">${REAL_ESTATE_PRODUCTS[0].price.toLocaleString()}</div>
               </div>
               <div className="flex gap-4">
                 <button className="px-6 py-3 bg-nexus-green text-black font-heading font-bold uppercase tracking-wider hover:bg-white transition-colors glow-green">REQUEST VIEWING</button>
                 <button className="px-6 py-3 border border-white text-white font-heading font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors hidden sm:block">VIRTUAL TOUR</button>
               </div>
             </div>
        </motion.div>

        {REAL_ESTATE_PRODUCTS.slice(1).map((p, i) => (
           <ProductCard key={p.id} product={p} openQuickBuy={() => openQuickBuy(p)} index={i + 1} />
        ))}
      </div>
    </section>
  )
}
