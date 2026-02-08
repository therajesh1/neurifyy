import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LoadingScreen } from '@/components/LoadingScreen';
import { CustomCursor } from '@/components/CustomCursor';
import { ThemeTransition } from '@/components/ThemeTransition';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { Services } from '@/pages/Services';
import { ServiceDetail } from '@/pages/ServiceDetail';
import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';
import { EcommercePortfolio } from '@/pages/portfolio/EcommercePortfolio';
import { AIChatbotsPortfolio } from '@/pages/portfolio/AIChatbotsPortfolio';
import { BrandIdentityPortfolio } from '@/pages/portfolio/BrandIdentityPortfolio';
import { VRExperiencePortfolio } from '@/pages/portfolio/VRExperiencePortfolio';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <LoadingScreen />
        <div className="min-h-screen w-full overflow-x-hidden" style={{ cursor: 'none' }}>
          <CustomCursor />
          <ThemeTransition />
          <ScrollToTop />
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio/ecommerce" element={<EcommercePortfolio />} />
            <Route path="/portfolio/ai-chatbots" element={<AIChatbotsPortfolio />} />
            <Route path="/portfolio/brand-identity" element={<BrandIdentityPortfolio />} />
            <Route path="/portfolio/vr-experience" element={<VRExperiencePortfolio />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}