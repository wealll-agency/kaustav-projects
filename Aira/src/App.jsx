import React, { useState } from 'react';
import TopBar from './components/layout/TopBar/TopBar';
import Header from './components/layout/Header/Header';
import MobileNav from './components/layout/MobileNav/MobileNav';
import HeroSlider from './features/home/components/HeroSlider/HeroSlider';
import ShopByCategories from './features/home/components/ShopByCategories/ShopByCategories';
import PromoBanners from './features/home/components/PromoBanners/PromoBanners';
import FeaturedProducts from './features/home/components/FeaturedProducts/FeaturedProducts';
import MultiBannerGrid from './features/home/components/MultiBannerGrid/MultiBannerGrid';
import ProductWidgetColumns from './features/home/components/ProductWidgetColumns/ProductWidgetColumns';
import NewsletterBanner from './features/home/components/NewsletterBanner/NewsletterBanner';
import BrandLogos from './features/home/components/BrandLogos/BrandLogos';
import BlogSection from './features/home/components/BlogSection/BlogSection';
import Footer from './components/layout/Footer/Footer';
import BackToTop from './components/common/BackToTop/BackToTop';

/**
 * Main Application Root
 */
function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const handleOpenMobileMenu = () => setMobileMenuOpen(true);
  const handleCloseMobileMenu = () => setMobileMenuOpen(false);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const handleAddToWishlist = () => {
    setWishlistCount(prev => prev + 1);
  };

  return (
    <div className="aira-app-wrapper">
      {/* Section 1: Global Header & TopBar */}
      <TopBar />
      <Header
        onOpenMobileMenu={handleOpenMobileMenu}
        cartCount={cartCount}
        wishlistCount={wishlistCount}
      />
      <MobileNav show={mobileMenuOpen} onHide={handleCloseMobileMenu} />

      {/* Main Content Area */}
      <main id="main-content" className="aira-main-content">
        {/* Section 2: Animated Hero Banner Slider */}
        <HeroSlider />

        {/* Section 3: Shop By Categories Circular Carousel */}
        <ShopByCategories />

        {/* Section 4: Dual Promotional Banners  */}
        <PromoBanners />

        {/* Section 4: Featured Products with Filter Tabs  */}
        <FeaturedProducts
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
        />

        {/* Section 5: Asymmetric 4-Banner Grid Showcase  */}
        <MultiBannerGrid />

        {/* Section 6: 3-Column Product List Widgets (Best Seller, Top Rated, On Sale) */}
        <ProductWidgetColumns />

        {/* Section 7: Newsletter Signup Promo Banner */}
        <NewsletterBanner />

        {/* Section 8: Brand Partners Logo Showcase */}
        <BrandLogos />

        {/* Section 9: Latest Editorial & Beauty Tips Blog */}
        <BlogSection />
      </main>

      {/* Global Footer with Service Perks, Navigation, Socials, and Copyright */}
      <Footer />

      {/* Floating Back To Top Button */}
      <BackToTop />
    </div>
  );
}

export default App;

