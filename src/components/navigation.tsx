import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShoppingCart, ArrowUp } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar = ({ onSearchClick }: { onSearchClick: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const { state, dispatch } = useCart();
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalItems = state.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-nexus-green/20 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left */}
        <div className="flex flex-col">
          <div className="text-white font-heading font-bold text-2xl tracking-widest flex items-center gap-3 cursor-pointer group">
            <img src="https://i.pinimg.com/736x/75/15/3f/75153fff0105371ffef1d492c4f3b783.jpg" alt="Logo" className="w-8 h-8 rounded-full object-cover group-hover:glow-green-sm transition-all duration-300" referrerPolicy="no-referrer" />
            NEXUS STORE
          </div>
          <div className="font-mono text-[9px] text-nexus-green tracking-widest mt-1 opacity-80 ml-11">v2.0 // LIVE DROPS</div>
        </div>

        {/* Center - hidden on mobile */}
        <div className="hidden lg:flex items-center gap-8">
          {['STORE', 'HYPERCARS', 'TECH', 'FASHION', 'LUXURY', 'REAL ESTATE'].map(item => (
            <div key={item} className="relative group cursor-pointer">
              <span className="font-heading font-semibold text-sm tracking-[0.15em] text-white/80 group-hover:text-white transition-colors uppercase">
                {item}
              </span>
              <div className="absolute -bottom-2 left-0 w-0 h-px bg-nexus-green group-hover:w-full transition-all duration-300 pointer-events-none glow-green-sm" />
            </div>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <button onClick={onSearchClick} className="text-white/80 hover:text-white hover:text-shadow-glow-green transition-all">
            <Search size={20} />
          </button>
          <button onClick={() => dispatch({ type: 'TOGGLE_CART' })} className="relative text-white/80 hover:text-white transition-all">
            <ShoppingCart size={20} />
            <AnimatePresence>
              {totalItems > 0 && (
                <motion.div 
                  initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                  className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-nexus-green rounded-full flex items-center justify-center text-[9px] font-mono font-bold text-black border border-black z-10"
                >
                  {totalItems}
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          
          <button className="hidden md:block px-6 py-2 bg-nexus-green text-nexus-black font-heading font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors duration-300 shadow-[0_0_15px_rgba(0,255,136,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            SHOP NOW
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-nexus-green rounded-full flex items-center justify-center text-black z-40 hover:bg-white transition-colors glow-green"
        >
          <ArrowUp size={20} strokeWidth={3} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
