import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

import { DataProvider } from "@/contexts/DataContext";
import { UIProvider } from "@/contexts/UIContext";
import ScrollToTop from "@/components/ScrollToTop";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import LiveCV from "./pages/LiveCV";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import NotFound from "./pages/NotFound";
import LegalNotice from "./pages/legal/LegalNotice";
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";
import Cookies from "./pages/legal/Cookies";
import Accessibility from "./pages/legal/Accessibility";
import Sitemap from "./pages/Sitemap";
import CookieConsent from "./components/CookieConsent";
import ChatWidget from "./components/chat/ChatWidget";
import GlobalLoader from "./components/ui/GlobalLoader";
import GlobalModals from "./components/GlobalModals";
import { Suspense, lazy, useEffect } from "react";
import { useAnalytics } from "./hooks/useAnalytics";

// Lazy Load Pages
const BlogListing = lazy(() => import("./pages/BlogListing"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Faq = lazy(() => import("./pages/Faq"));

const queryClient = new QueryClient();

const AnalyticsTracker = () => {
  const { trackPageView } = useAnalytics();
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <DataProvider>
          <UIProvider>
            <ScrollToTop />
            <AnalyticsTracker />
            <Suspense fallback={<GlobalLoader />}>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/cv-live" element={<LiveCV />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/blog" element={<BlogListing />} />
                  <Route path="/faqs" element={<Faq />} />
                  <Route path="/sitemap" element={<Sitemap />} />

                  {/* Legal Routes */}
                  <Route path="/legal/notice" element={<LegalNotice />} />
                  <Route path="/legal/privacy" element={<Privacy />} />
                  <Route path="/legal/terms" element={<Terms />} />
                  <Route path="/legal/cookies" element={<Cookies />} />
                  <Route path="/legal/accessibility" element={<Accessibility />} />

                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </Suspense>
            <CookieConsent />
            <ChatWidget />
            <GlobalModals />
          </UIProvider>
        </DataProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
