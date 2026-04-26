import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { Search, X, Plus, Minus } from 'lucide-react';
import { HERO_PRODUCTS, HYPERCARS, TECH_PRODUCTS, FASHION_PRODUCTS, REAL_ESTATE_PRODUCTS } from '../lib/products';

const allProducts = [...new Set([...HERO_PRODUCTS, ...HYPERCARS, ...TECH_PRODUCTS, ...FASHION_PRODUCTS, ...REAL_ESTATE_PRODUCTS])];

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [text, setText] = useState("");
  const fullText = "> INITIALIZING NEXUS STORE...\n> LUXURY SYSTEMS ONLINE.\n> WELCOME, ELITE MEMBER.";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 30);
    
    // Complete after 3.8s to give room for the flash
    const timeout = setTimeout(onComplete, 3800);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 0.8, delay: 0.2 } }}
    >
      <div className="absolute top-0 w-full h-1 bg-nexus-green animate-[scanline_2s_linear_infinite]" style={{ boxShadow: '0 0 20px #FFD700' }} />
      
      {/* Corner Brackets */}
      <motion.div initial={{ width: 0, height: 0 }} animate={{ width: 40, height: 40 }} transition={{ duration: 0.8 }} className="absolute top-8 left-8 border-t-2 border-l-2 border-nexus-green" />
      <motion.div initial={{ width: 0, height: 0 }} animate={{ width: 40, height: 40 }} transition={{ duration: 0.8 }} className="absolute top-8 right-8 border-t-2 border-r-2 border-nexus-green" />
      <motion.div initial={{ width: 0, height: 0 }} animate={{ width: 40, height: 40 }} transition={{ duration: 0.8 }} className="absolute bottom-8 left-8 border-b-2 border-l-2 border-nexus-green" />
      <motion.div initial={{ width: 0, height: 0 }} animate={{ width: 40, height: 40 }} transition={{ duration: 0.8 }} className="absolute bottom-8 right-8 border-b-2 border-r-2 border-nexus-green" />

      <motion.div 
        exit={{ opacity: 0, scale: 0.9 }}
        className="flex flex-col items-center max-w-lg w-full px-8 relative z-10"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white font-heading font-bold text-4xl mb-8 flex items-center gap-4 tracking-widest"
        >
           <span className="text-nexus-green glow-green-sm">⬡</span> NEXUS STORE
        </motion.div>
        
        <div className="w-full text-left font-mono text-nexus-green text-xs leading-relaxed whitespace-pre h-16">
          {text}
        </div>
        
        <div className="w-full h-1 bg-gray-900 mt-8 relative overflow-hidden">
           <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "linear", delay: 1 }}
            className="absolute top-0 left-0 h-full bg-nexus-green glow-green-sm"
           />
        </div>
      </motion.div>
      
      {/* Final Flash Transition */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.5, delay: 3.2, ease: "circOut" }}
        className="absolute inset-0 bg-nexus-green z-50 pointer-events-none mix-blend-screen"
      />
    </motion.div>
  );
};

export const CartSidebar = () => {
  const { state, dispatch } = useCart();
  const subtotal = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {state.isCartOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch({ type: 'TOGGLE_CART' })}
            className="fixed inset-0 bg-black z-40"
          />
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-nexus-panel border-l border-nexus-green/20 z-50 flex flex-col pt-20" /* pt-20 to clear nav if needed, but nav is fixed */
          >
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/50">
               <h2 className="font-heading text-2xl font-bold uppercase tracking-wider">Cart <span className="text-nexus-green">({state.items.length})</span></h2>
               <button onClick={() => dispatch({ type: 'TOGGLE_CART' })} className="text-white/70 hover:text-white transition-colors">
                 <X size={24} />
               </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {state.items.length === 0 ? (
                <div className="text-center text-nexus-muted font-mono text-sm mt-10">Cart is empty.</div>
              ) : (
                state.items.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-black/40 p-3 rounded border border-white/5">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <h3 className="font-heading font-bold text-sm tracking-wide uppercase pr-2">{item.name}</h3>
                        <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })} className="text-white/50 hover:text-white">
                          <X size={16} />
                        </button>
                      </div>
                      <div className="text-nexus-green font-mono text-sm">${item.price.toLocaleString()}</div>
                      <div className="flex items-center gap-3 mt-2">
                        <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity - 1 }})} className="p-1 border border-white/20 hover:border-nexus-green hover:text-nexus-green rounded"><Minus size={12} /></button>
                        <span className="font-mono text-xs">{item.quantity}</span>
                        <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity + 1 }})} className="p-1 border border-white/20 hover:border-nexus-green hover:text-nexus-green rounded"><Plus size={12} /></button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            {state.items.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-black/50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-nexus-muted tracking-widest text-xs uppercase">Subtotal</span>
                  <span className="text-nexus-green font-mono text-xl glow-green-sm">${subtotal.toLocaleString()}</span>
                </div>
                <button className="w-full py-4 bg-nexus-green text-nexus-black font-heading font-bold text-lg tracking-widest uppercase hover:bg-white transition-colors glow-green">
                  CHECKOUT
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block transition-transform duration-75 ease-out"
    />
  );
};

export const SearchOverlay = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [query, setQuery] = useState("");
  
  const results = query.length > 1 
    ? allProducts.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[60] flex flex-col p-8 md:p-16"
        >
          <button onClick={onClose} className="absolute top-8 right-8 text-white/70 hover:text-white p-2">
            <X size={32} />
          </button>
          
          <div className="max-w-4xl w-full mx-auto mt-20">
            <div className="relative">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-nexus-green" size={32} />
              <input 
                autoFocus
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="SEARCH COLLECTION..."
                className="w-full bg-transparent border-b-2 border-white/20 focus:border-nexus-green outline-none text-3xl md:text-5xl font-heading font-bold text-white py-4 pl-12 placeholder:text-white/20 transition-colors"
              />
            </div>
            
            <div className="mt-12 overflow-y-auto max-h-[60vh] pb-20 scrollbar-hide">
              {query.length > 1 && results.length === 0 && (
                <div className="text-nexus-muted font-mono">No results for "{query}"</div>
              )}
              {results.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {results.slice(0,8).map(r => (
                    <div key={r.id} className="flex gap-6 items-center group cursor-pointer border border-transparent hover:border-nexus-green/30 p-4 rounded bg-white/5 transition-colors">
                      <img src={r.image} alt={r.name} className="w-24 h-24 object-cover rounded opacity-80 group-hover:opacity-100" />
                      <div>
                        <div className="text-xs font-mono text-nexus-green mb-1">{r.category}</div>
                        <h4 className="font-heading font-bold text-xl uppercase tracking-wider group-hover:text-nexus-green transition-colors">{r.name}</h4>
                        <div className="font-mono text-white/70">${r.price.toLocaleString()}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
