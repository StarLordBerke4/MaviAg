/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ReportProvider } from './context/ReportContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MapPage } from './pages/MapPage';
import { ReportPage } from './pages/ReportPage';
import { DashboardPage } from './pages/DashboardPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ReportProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
          <Navbar />
          <main className="flex-1 pb-16 md:pb-0">
            <Routes>
              {/* 1. Anasayfa (Landing Page) */}
              <Route path="/" element={<HomePage />} />
              
              {/* 2. Kirlilik Haritası (Map Page) */}
              <Route path="/harita" element={<MapPage />} />
              
              {/* 3. İhbar Formu (Report Page) */}
              <Route path="/ihbar" element={<ReportPage />} />
              
              {/* 4. Yönetici Paneli (Dashboard Page) */}
              <Route path="/admin" element={<DashboardPage />} />

              {/* 5. Hakkında (About / Proje Detayı) */}
              <Route path="/hakkinda" element={<AboutPage />} />

              {/* 6. İletişim (Contact) */}
              <Route path="/iletisim" element={<ContactPage />} />

              {/* 7. Blog & Araştırmalar */}
              <Route path="/blog" element={<BlogPage />} />
              
              {/* Catch-all redirect */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ReportProvider>
  );
}

