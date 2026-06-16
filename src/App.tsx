import { Routes, Route } from 'react-router';
import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { ScanMarquee } from './sections/ScanMarquee';
import { HowItWorks } from './sections/HowItWorks';
import { Features } from './sections/Features';
import { DarkQuote } from './sections/DarkQuote';
import { ExecutionPathReview } from './sections/ExecutionPathReview';
import { Integrations } from './sections/Integrations';
import { SocialProof } from './sections/SocialProof';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';
import { DocsLayout } from './docs/DocsLayout';
import { DocsHome } from './docs/DocsHome';
import { DocsPage } from './docs/DocsPage';

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <ScanMarquee />
        <HowItWorks />
        <Features />
        <DarkQuote />
        <ExecutionPathReview />
        <Integrations />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/docs" element={<DocsLayout />}>
        <Route index element={<DocsHome />} />
        <Route path=":slug" element={<DocsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
