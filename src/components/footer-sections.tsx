import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionTitle } from './ui';
import { X, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({ d: 4, h: 12, m: 34, s: 50 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { d, h, m, s } = prev;
        if (s > 0) s--;
        else {
          s = 59;
          if (m > 0) m--;
          else {
            m = 59;
            if (h > 0) h--;
            else {
              h = 23;
              if (d > 0) d--;
            }
          }
        }
        return { d, h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const Unit = ({ val, label }: { val: number, label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-black border border-nexus-green/30 w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded mb-2 overflow-hidden relative">
        <motion.div 
          key={val}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-2xl md:text-5xl font-mono text-nexus-green font-bold absolute"
        >
          {val.toString().padStart(2, '0')}
        </motion.div>
      </div>
      <span className="text-[10px] font-mono text-nexus-muted tracking-widest uppercase">{label}</span>
    </div>
  );

  return (
    <section className="bg-nexus-dark py-24 border-y border-nexus-green/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-nexus-green/5 blur-[100px] rounded-[100%] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        <div className="flex-1 text-center lg:text-left">
           <div className="font-heading font-bold text-4xl md:text-6xl text-white uppercase tracking-tight mb-2">NEXT DROP</div>
           <div className="font-mono text-xl md:text-2xl text-nexus-green mb-4 glow-text-green">LAMBORGHINI URUS PERFORMANTE</div>
           <div className="text-nexus-muted font-mono text-xs tracking-widest uppercase mb-8">Limited to 25 units worldwide. 657hp SUV. Carbon fiber package.</div>
           <div className="text-4xl font-mono font-bold text-nexus-green mb-8">$275,000</div>
        </div>
        
        <div className="flex-1 flex flex-col items-center lg:items-end">
           <div className="text-nexus-muted font-mono text-xs tracking-widest uppercase mb-6">DROP IN:</div>
           <div className="flex gap-4 md:gap-6 mb-8">
             <Unit val={timeLeft.d} label="DAYS" />
             <Unit val={timeLeft.h} label="HOURS" />
             <Unit val={timeLeft.m} label="MIN" />
             <Unit val={timeLeft.s} label="SEC" />
           </div>
           
           <div className="flex flex-col items-center lg:items-end gap-3 w-full max-w-xs">
             <button className="w-full py-4 bg-nexus-green text-black font-heading font-bold tracking-widest uppercase hover:bg-white transition-colors glow-green">
               NOTIFY ME
             </button>
             <div className="text-[10px] font-mono text-nexus-muted uppercase tracking-wider">Already 847 on waitlist</div>
           </div>
        </div>
      </div>
    </section>
  );
};

export const MembershipSection = () => {
  const plans = [
    { name: 'MEMBER', price: 'Free', desc: 'Standard member', features: ['Early access drops (24h before)', 'Free shipping >$500', 'Monthly newsletter'], btn: 'JOIN FREE' },
    { name: 'ELITE', price: '$49/month', badge: 'MOST POPULAR', desc: 'Priority access', bg: 'bg-nexus-dark border-nexus-green glow-green-sm scale-105 z-10', features: ['Early access drops (72h before)', 'Free express shipping', 'Personal concierge', 'Exclusive products', 'Payment plans >$1000'], btn: 'JOIN ELITE', btnClass: 'bg-nexus-green text-black hover:bg-white' },
    { name: 'ULTRA', price: '$199/month', desc: 'Absolute luxury', features: ['Everything in Elite', 'Private preview (48h before Elite)', 'Dedicated shopper', 'White glove delivery', 'First access Hypercars', 'Quarterly luxury gift box'], btn: 'JOIN ULTRA' },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto text-center flex flex-col items-center">
      <SectionTitle title="NEXUS ELITE MEMBERSHIP" subtitle="Unlock exclusive access. Shop first." />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full max-w-5xl">
        {plans.map((p, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            key={p.name} 
            className={`p-8 border flex flex-col text-left relative ${p.bg || 'bg-black border-white/20'}`}
          >
            {p.badge && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-nexus-green text-black font-mono text-[9px] font-bold px-3 py-1 uppercase tracking-widest">{p.badge}</div>}
            <h3 className="font-heading font-bold text-2xl uppercase tracking-wider mb-2">{p.name}</h3>
            <div className="font-mono text-xs text-nexus-muted mb-6 uppercase tracking-widest">{p.desc}</div>
            <div className="font-mono text-3xl font-bold text-nexus-green mb-8">{p.price}</div>
            
            <div className="flex flex-col gap-4 mb-10 flex-1">
              {p.features.map(f => (
                <div key={f} className="flex items-start gap-3">
                  <Check size={16} className="text-nexus-green shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">{f}</span>
                </div>
              ))}
            </div>
            
            <button className={`w-full py-4 tracking-widest font-heading font-bold uppercase transition-colors ${p.btnClass || 'border border-white/30 text-white hover:bg-white hover:text-black'}`}>
              {p.btn}
            </button>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 text-nexus-muted font-mono text-[10px] tracking-widest uppercase">Cancel anytime. No contracts.</div>
    </section>
  );
};

export const HowItWorks = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-white/5">
      <SectionTitle title="HOW NEXUS WORKS" subtitle="Elite shopping. Simplified." />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12 relative">
         <div className="hidden lg:block absolute top-12 left-24 right-24 h-px bg-white/10" />
         
         {[
           { n: '01', t: 'DISCOVER', d: 'Browse a curated selection of the world\'s most exclusive products. New drops weekly.', b: '250+ Elite Products' },
           { n: '02', t: 'AUTHENTICATE', d: 'Every product is verified by an expert team. Certificates included with luxury items.', b: '100% Authenticated' },
           { n: '03', t: 'PURCHASE', d: 'Secure checkout. Multiple payment options. Payment plans for large purchases. All currencies.', b: 'Bank Security' },
           { n: '04', t: 'RECEIVE', d: 'Worldwide white glove delivery. Full insurance. Real-time tracking. 24/7 Support.', b: 'Worldwide Delivery' },
         ].map((s, i) => (
           <motion.div 
             key={s.n}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: i * 0.2 }}
             className="relative z-10 bg-black pt-4"
           >
             <div className="text-[120px] leading-none font-heading font-bold text-nexus-green/10 absolute -top-16 left-0 -z-10 select-none pointer-events-none">{s.n}</div>
             <h3 className="font-heading font-bold text-2xl uppercase tracking-wider mb-4 border-l-2 border-nexus-green pl-4">{s.t}</h3>
             <p className="text-nexus-muted text-sm leading-relaxed mb-6">{s.d}</p>
             <div className="inline-block bg-nexus-dark border border-nexus-green/30 text-nexus-green font-mono text-[9px] uppercase tracking-widest px-3 py-1">
               {s.b}
             </div>
           </motion.div>
         ))}
      </div>
    </section>
  );
};

export const CommunitySection = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-white/5">
      <SectionTitle title="WHAT OUR MEMBERS SAY" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {[
          { q: "Bought my Huracán through NEXUS. Process was flawless. Delivered in 3 weeks.", n: "ALEXANDER M.", m: "ULTRA Member — Dubai" },
          { q: "Got a Birkin authenticated in 24 hours. The certificate was worth every penny.", n: "ELENA S.", m: "ELITE Member — London" },
          { q: "RTX 5090 arrived same day in perfect condition. NEXUS is on a different level.", n: "VICTOR P.", m: "STANDARD Member — New York" },
        ].map((r, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="bg-nexus-dark p-8 border-l-2 border-nexus-green flex flex-col"
          >
            <div className="text-nexus-green mb-4 text-xs font-mono tracking-widest">[ RATED 5.0 ]</div>
            <p className="text-white/90 italic font-serif leading-relaxed text-lg mb-8 flex-1">"{r.q}"</p>
            <div>
              <div className="font-heading font-bold tracking-widest uppercase">{r.n}</div>
              <div className="font-mono text-[10px] text-nexus-muted uppercase tracking-widest">{r.m}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export const StatsSection = () => {
  const [inView, setInView] = useState(false);
  
  // Custom counter component
  const Counter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (!inView) return;
      let start = 0;
      const end = value;
      if (start === end) return;
      const totalFrames = Math.round((duration * 1000) / 16);
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeOutQuad = progress * (2 - progress);
        const currentCount = start + (end - start) * easeOutQuad;
        setCount(currentCount);
        if (frame === totalFrames) {
          clearInterval(counter);
          setCount(value);
        }
      }, 16);
      return () => clearInterval(counter);
    }, [inView, value, duration]);
    
    return <>{count.toFixed(value % 1 === 0 ? 0 : 1)}</>;
  };
  
  return (
    <motion.section 
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true, margin: "-10%" }}
      className="bg-nexus-dark py-24 border-y border-nexus-green/20"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
        {[
          { n: 2.4, s: 'B+', l: 'Sales in 2026 ($)' },
          { n: 50, s: ',000+', l: 'Elite Members Worldwide' },
          { n: 250, s: '+', l: 'Exclusive Products' },
          { n: 24, s: 'H', l: 'Authentication Guarantee' },
        ].map((st, i) => (
          <div key={i} className="flex flex-col items-center text-center justify-center pt-8 lg:pt-0">
             <div className="font-heading font-bold text-4xl sm:text-5xl md:text-7xl text-nexus-green mb-3 glow-text-green">
               <Counter value={st.n} />{st.s}
             </div>
             <div className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-white/80">{st.l}</div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-black pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
       {/* Green top line traces */}
       <motion.div 
         initial={{ width: 0 }}
         whileInView={{ width: "100%" }}
         viewport={{ once: true }}
         transition={{ duration: 1.5, ease: "easeOut" }}
         className="absolute top-0 left-0 h-px bg-nexus-green glow-green-sm"
       />

       <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10 border-b border-white/10 pb-16">
          
          <div className="flex flex-col gap-6">
            <div className="text-white font-heading font-bold text-2xl tracking-widest flex items-center gap-2 group">
              <span className="text-nexus-green glow-green-sm transition-all duration-300">⬡</span> NEXUS STORE
            </div>
            <p className="font-mono text-xs uppercase text-nexus-muted tracking-widest">OWN THE EXTRAORDINARY.</p>
            <div className="text-nexus-green font-mono text-[10px] tracking-widest">
              INSTAGRAM / TIKTOK / TWITTER / YOUTUBE / DISCORD
            </div>
          </div>

          <div className="flex flex-col gap-4">
             <h4 className="font-heading font-bold uppercase tracking-widest text-white mb-2">SHOP</h4>
             {['Hypercars', 'Tech & Devices', 'Fashion', 'Luxury Goods', 'Real Estate', 'Lifestyle', 'New Drops', 'Flash Drops'].map(l => (
               <a key={l} href="#" className="font-mono text-[11px] text-nexus-muted hover:text-nexus-green transition-colors uppercase tracking-widest">{l}</a>
             ))}
          </div>

          <div className="flex flex-col gap-4">
             <h4 className="font-heading font-bold uppercase tracking-widest text-white mb-2">SERVICES</h4>
             {['Authentication', 'White Glove Delivery', 'Payment Plans', 'Concierge', 'Personal Shopper', 'Gift Cards', 'Returns', 'Order Tracking'].map(l => (
               <a key={l} href="#" className="font-mono text-[11px] text-nexus-muted hover:text-nexus-green transition-colors uppercase tracking-widest">{l}</a>
             ))}
          </div>

          <div className="flex flex-col gap-4">
             <h4 className="font-heading font-bold uppercase tracking-widest text-white mb-2">COMPANY</h4>
             {['About NEXUS', 'Elite Membership', 'Press', 'Careers', 'Partners', 'Terms', 'Privacy'].map(l => (
               <a key={l} href="#" className="font-mono text-[11px] text-nexus-muted hover:text-nexus-green transition-colors uppercase tracking-widest">{l}</a>
             ))}
          </div>

       </div>

       <div className="max-w-[1400px] mx-auto mt-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <div className="font-mono text-[10px] text-nexus-muted tracking-widest uppercase">© 2026 NEXUS STORE. ALL RIGHTS RESERVED.</div>
            <div className="font-mono text-[9px] text-nexus-green tracking-widest uppercase">Authentication certificates provided on all luxury goods.</div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="font-mono text-[9px] text-nexus-muted tracking-widest uppercase flex flex-wrap justify-center gap-3">
              <span>VISA</span> <span>MASTERCARD</span> <span>AMEX</span> <span>PAYPAL</span> <span>APPLE PAY</span> <span>CRYPTO</span>
            </div>
            <div className="font-mono text-[9px] text-white/50 tracking-widest uppercase flex items-center gap-1">
              [ SECURE ] All transactions are SSL encrypted
            </div>
          </div>
       </div>

       {/* Particles */}
       <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
         {Array.from({ length: 15 }).map((_, i) => (
           <div 
             key={i} 
             className="absolute w-1 h-1 bg-nexus-green rounded-full blur-[1px] opacity-0 mix-blend-screen"
             style={{
               left: `${Math.random() * 100}%`,
               bottom: `-10px`,
               animation: `floatUp ${4 + Math.random() * 4}s linear infinite`,
               animationDelay: `${Math.random() * 5}s`
             }}
           />
         ))}
         <style>{`
           @keyframes floatUp {
             0% { transform: translateY(0); opacity: 0; }
             20% { opacity: 0.6; }
             80% { opacity: 0.6; }
             100% { transform: translateY(-500px); opacity: 0; }
           }
         `}</style>
       </div>
    </footer>
  );
}

export const QuickBuyModal = ({ product, onClose }: { product: any, onClose: () => void }) => {
  const { dispatch } = useCart();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(product?.sizes ? product.sizes[0] : null);

  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-md z-[80] flex justify-center items-center p-4 md:p-12 overflow-y-auto"
        onClick={onClose}
      >
        <div 
          className="bg-nexus-panel border border-nexus-green/30 max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 relative glow-green-sm"
          onClick={e => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-nexus-green z-10 transition-colors">
            <X size={24} />
          </button>
          
          <div className="h-[400px] md:h-auto bg-black border-b md:border-b-0 md:border-r border-nexus-green/20 relative">
            <img src={product.image} className="w-full h-full object-cover opacity-80" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
          
          <div className="p-8 md:p-12 flex flex-col justify-center">
            {product.category && <div className="text-[10px] font-mono tracking-widest text-nexus-green uppercase mb-4">{product.category}</div>}
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight mb-2">{product.name}</h2>
            <div className="text-2xl font-mono text-nexus-green font-bold mb-6">${product.price.toLocaleString()}</div>
            
            <p className="text-nexus-muted text-sm mb-8 leading-relaxed">
              {product.desc || product.details || "Extremely exclusive item, verified and authenticated by Nexus experts."}
            </p>
            
            {product.sizes && (
              <div className="mb-6">
                <div className="text-[10px] font-mono tracking-widest uppercase mb-3 text-white/70">Size</div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s: string) => (
                    <button key={s} onClick={() => setSize(s)} className={`w-10 h-10 flex items-center justify-center font-mono border text-xs transition-colors ${size === s ? 'border-nexus-green text-nexus-green bg-nexus-green/10' : 'border-white/20 text-nexus-muted hover:border-white/50 hover:text-white'}`}>{s}</button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center justify-between border border-white/20 p-2 sm:w-32 text-white w-full sm:w-auto">
                <button onClick={() => setQty(Math.max(1, qty-1))} className="w-8 h-8 flex items-center justify-center hover:text-nexus-green">-</button>
                <div className="font-mono text-sm">{qty}</div>
                <button onClick={() => setQty(qty+1)} className="w-8 h-8 flex items-center justify-center hover:text-nexus-green">+</button>
              </div>
              <button 
                onClick={() => {
                  dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity: qty, id: size ? `${product.id}-${size}` : product.id } });
                  onClose();
                }}
                className="w-full sm:flex-1 bg-nexus-green text-black font-heading font-bold tracking-widest uppercase py-4 hover:bg-white transition-colors glow-green"
              >
                ADD TO CART
              </button>
            </div>
            
            <button onClick={onClose} className="text-[10px] font-mono tracking-widest uppercase text-white/50 hover:text-white transition-colors self-start border-b border-transparent hover:border-white">
              VIEW FULL DETAILS
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
