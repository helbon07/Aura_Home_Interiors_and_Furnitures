import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { QuoteDrawer } from './components/QuoteDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SearchModal } from './components/SearchModal';
import { FloatingActions } from './components/FloatingActions';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FurniturePage } from './pages/FurniturePage';
import { InteriorDesignPage } from './pages/InteriorDesignPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ManufacturingPage } from './pages/ManufacturingPage';
import { EstimatorPage } from './pages/EstimatorPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-aura-bg-primary text-aura-text-primary selection:bg-aura-gold selection:text-white">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/furniture" element={<FurniturePage />} />
              <Route path="/interior-design" element={<InteriorDesignPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/manufacturing" element={<ManufacturingPage />} />
              <Route path="/estimator" element={<EstimatorPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />

          {/* Interactive Global Modals & Drawers */}
          <ConsultationModal />
          <QuoteDrawer />
          <WishlistDrawer />
          <QuickViewModal />
          <SearchModal />
          <FloatingActions />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;

