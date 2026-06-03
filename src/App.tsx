import { Navigation } from './sections/Navigation';
  import { Hero } from './sections/Hero';
  import { TryIt } from './sections/TryIt';
  import { HowItWorks } from './sections/HowItWorks';
  import { Features } from './sections/Features';
  import { WhyExecutionPathsMatter } from './sections/WhyExecutionPathsMatter';
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
        <TryIt />
        <HowItWorks />
        <Features />
        <WhyExecutionPathsMatter />
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
