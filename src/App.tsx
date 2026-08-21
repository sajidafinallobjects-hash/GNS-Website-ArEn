import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Services } from '@/pages/Services';
import { Projects } from '@/pages/Projects';
import { CaseStudy } from '@/pages/CaseStudy';
import { WhyGNS } from '@/pages/WhyGNS';
import { Contact } from '@/pages/Contact';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import { ScrollToTop } from '@/components/ScrollToTop';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<CaseStudy />} />
        <Route path="/why-gns" element={<WhyGNS />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
