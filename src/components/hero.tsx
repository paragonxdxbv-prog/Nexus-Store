import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HERO_PRODUCTS } from '../lib/products';
import { useCart } from '../context/CartContext';

export const Hero = ({ openQuickBuy }: { openQuickBuy: (p: any) => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0); // to force re-render of progress bar
  
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_PRODUCTS.length);
      setProgressKey(k => k + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgressKey(k => k + 1);
  };
  
  const h = HERO_PRODUCTS[currentIndex];

  return (
      <div className="relative w-full h-[100vh] min-h-[700px] overflow-hidden bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with Crossfade */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${h.image})` }}
        />
      </AnimatePresence>

      {/* Gradients and Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/95 via-black/75 to-black/25 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-1/2 h-1/2 glow-radial-hero pointer-events-none opacity-30" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-6 md:px-12 flex items-center pt-20">
        
        {/* Left Side Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={h.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col flex-start items-start"
            >
              {/* Row 1: Status */}
              <div className="flex items-center gap-4 mb-4 font-mono text-[10px] tracking-widest uppercase">
                <div className="flex items-center gap-2 text-nexus-green">
                  <span className="animate-pulse">[ LIVE ]</span> DROP — 2,847 MEMBERS SHOPPING
                </div>
                <span className="text-white/30">|</span>
                <div className="text-nexus-muted">NEW ARRIVALS THIS WEEK: 11</div>
              </div>

              {/* Row 2: Label */}
              <div className="bg-nexus-dark border border-nexus-green/30 px-3 py-1 text-[10px] font-mono text-nexus-green tracking-widest mb-6">
                [ NEXUS STORE — EST. 2026 ]
              </div>

              {/* Row 3: Product Name */}
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-tight text-glow-green leading-[0.9] mb-4">
                {h.name}
              </h1>

              {/* Row 4: Specs/Price */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-4">
                 <div className="border border-nexus-green px-3 py-1 flex items-center text-[10px] font-heading font-bold text-nexus-green tracking-widest uppercase glow-green-sm">
                   {h.category}
                 </div>
                 <div className="text-xl md:text-2xl font-mono text-nexus-green">
                   ${h.price.toLocaleString()}
                 </div>
                 <div className="flex items-center gap-2 text-nexus-green text-[10px] font-mono font-bold tracking-widest">
                   {h.badge === 'LIMITED' ? <span className="text-white">LIMITED</span> : <span>IN STOCK</span>}
                 </div>
              </div>

              {/* Row 5: Desc */}
              <p className="text-xs md:text-sm text-nexus-muted max-w-lg mb-6 leading-relaxed">
                {h.desc}
              </p>

              {/* Row 6: Actions */}
              <div className="flex flex-wrap items-center gap-3 mb-8 w-full sm:w-auto">
                <button 
                  onClick={() => openQuickBuy(h)}
                  className="px-6 py-3 bg-nexus-green text-black font-heading font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors duration-300 w-full sm:w-auto flex items-center justify-center glow-green"
                >
                  BUY NOW
                </button>
                <button className="px-6 py-3 border border-white/30 text-white font-heading font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors duration-300 w-full sm:w-auto">
                  ADD TO LIST
                </button>
                <button className="px-6 py-3 border border-transparent text-nexus-muted font-heading font-bold uppercase tracking-widest text-xs hover:text-white transition-colors duration-300 w-full sm:w-auto">
                  MORE INFO
                </button>
              </div>

              {/* Row 7: Specs string */}
              <div className="text-[10px] sm:text-xs font-mono text-nexus-muted tracking-[0.2em] uppercase">
                {h.specs}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side Cards Desktop - Showing other products */}
        <div className="hidden lg:flex flex-col gap-4 absolute right-12 top-1/2 -translate-y-1/2 w-[350px]">
           {HERO_PRODUCTS.filter((_, i) => i !== currentIndex).slice(0,3).map((p) => (
             <div key={p.id} className="bg-nexus-panel/80 backdrop-blur-md border border-white/5 hover:border-nexus-green/50 p-4 flex items-center gap-6 cursor-pointer group transition-all" onClick={() => goToSlide(HERO_PRODUCTS.findIndex(x=>x.id===p.id))}>
               <img src={p.image} alt={p.name} className="w-20 h-20 object-cover opacity-70 group-hover:opacity-100" />
               <div className="flex-col">
                 <div className="text-[10px] font-mono text-nexus-green">{p.category}</div>
                 <div className="text-sm font-heading font-bold text-white uppercase tracking-wider truncate w-48">{p.name}</div>
                 <div className="text-xs font-mono text-white/50">${p.price.toLocaleString()}</div>
               </div>
             </div>
           ))}
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center gap-4">
         <div className="flex items-center gap-3">
           {HERO_PRODUCTS.map((_, i) => (
             <button 
               key={i} 
               onClick={() => goToSlide(i)}
               className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-nexus-green scale-125' : 'bg-white/20 hover:bg-white/50'}`}
             />
           ))}
         </div>
         {/* Green Progress Bar */}
         <div className="w-64 h-[1px] bg-white/20 overflow-hidden">
            <motion.div 
               key={progressKey}
               initial={{ x: "-100%" }}
               animate={{ x: 0 }}
               transition={{ duration: 5, ease: "linear" }}
               className="w-full h-full bg-nexus-green"
            />
         </div>
      </div>
    </div>
  );
};

export const Ticker = () => {
  return (
    <div className="bg-nexus-dark py-4 overflow-hidden border-y border-nexus-green/20">
      <div className="flex whitespace-nowrap mb-2 relative">
         <motion.div 
           animate={{ x: [0, -1000] }}
           transition={{ ease: "linear", duration: 20, repeat: Infinity }}
           className="flex font-heading font-bold text-xl md:text-2xl tracking-[0.2em] text-white uppercase"
         >
           {Array(4).fill("LAMBORGHINI REVUELTO /// BUGATTI CENTODIECI /// IPHONE 17 PRO MAX /// RTX 5090 /// HERMÈS BIRKIN /// AIR JORDAN 1 /// DUBAI VILLA /// NEXUS STORE ///").map((t, i) => (
             <span key={i} className="mx-4">{t.split('///').map((word, j) => <React.Fragment key={j}>{word} <span className="text-nexus-green">///</span></React.Fragment>)}</span>
           ))}
         </motion.div>
      </div>
      <div className="flex whitespace-nowrap opacity-70 relative">
         <motion.div 
           animate={{ x: [-1000, 0] }}
           transition={{ ease: "linear", duration: 25, repeat: Infinity }}
           className="flex font-heading font-semibold text-lg md:text-xl tracking-[0.2em] text-white uppercase"
         >
           {Array(4).fill("FREE WORLDWIDE SHIPPING /// AUTHENTICATED & VERIFIED /// 24/7 CONCIERGE /// PAYMENT PLANS AVAILABLE /// MEMBERS GET EARLY ACCESS /// NEXUS STORE ///").map((t, i) => (
             <span key={i} className="mx-4">{t.split('///').map((word, j) => <React.Fragment key={j}>{word} <span className="text-nexus-green">///</span></React.Fragment>)}</span>
           ))}
         </motion.div>
      </div>
    </div>
  );
};
