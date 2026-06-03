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

function App() {
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

export default App;
