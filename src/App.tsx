import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Loader, CartSidebar, CustomCursor, SearchOverlay } from './components/overlays';
import { Navbar, BackToTop } from './components/navigation';
import { Hero, Ticker } from './components/hero';
import { FeaturedDrop, CategoriesSection, ProductSection, RealEstateSection, EditorialTimeline } from './components/sections';
import { CountdownSection, MembershipSection, HowItWorks, CommunitySection, StatsSection, Footer, QuickBuyModal } from './components/footer-sections';
import { HYPERCARS, TECH_PRODUCTS, FASHION_PRODUCTS } from './lib/products';

function AppContent() {
  const [loading, setLoading] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [quickBuyProduct, setQuickBuyProduct] = useState<any>(null);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <>
      <div className="bg-grain" />
      <CustomCursor />
      <Navbar onSearchClick={() => setSearchOpen(true)} />
      <CartSidebar />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      {quickBuyProduct && <QuickBuyModal product={quickBuyProduct} onClose={() => setQuickBuyProduct(null)} />}
      
      <main>
        <Hero openQuickBuy={setQuickBuyProduct} />
        <Ticker />
        
        <EditorialTimeline />
        
        <FeaturedDrop />
        <CategoriesSection />
        
        <ProductSection 
          title="HYPERCARS" 
          subtitle="The most exclusive vehicles in the world." 
          products={HYPERCARS} 
          openQuickBuy={setQuickBuyProduct}
        />
        
        <ProductSection 
          title="TECH & DEVICES" 
          products={TECH_PRODUCTS} 
          openQuickBuy={setQuickBuyProduct}
          showFilters={true}
        />
        
        <ProductSection 
          title="FASHION" 
          products={FASHION_PRODUCTS} 
          openQuickBuy={setQuickBuyProduct}
          showFilters={true}
        />
        
        <RealEstateSection openQuickBuy={setQuickBuyProduct} />
        
        <CountdownSection />
        <MembershipSection />
        <HowItWorks />
        <CommunitySection />
        <StatsSection />
      </main>
      
      <Footer />
      <BackToTop />
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
