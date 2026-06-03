import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-28">
      <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center">
        <h2 className="font-playfair text-[40px] lg:text-[52px] font-normal leading-[1.08] tracking-tight text-foreground mb-5">
          Find out where your<br />
          prompt <em className="italic">goes</em>.
        </h2>
        <p className="text-[14px] leading-[1.75] text-muted-foreground mb-10 max-w-sm mx-auto">
          No account. No install. Paste a prompt and get your answer in under 5 seconds.
        </p>
        <a
          href="https://promptsonar.vercel.app"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-foreground text-background rounded-xl text-[14px] font-medium hover:bg-foreground/90 transition-colors"
        >
          Scan Prompt <ArrowRight className="w-4 h-4" />
        </a>
        <div className="flex items-center justify-center gap-6 mt-8 text-[11px] text-muted-foreground/50 tracking-[0.04em]">
          <span>No data stored</span>
          <span>·</span>
          <span>Zero LLM calls</span>
          <span>·</span>
          <span>Open source · MIT</span>
        </div>
      </div>
    </section>
  );
}
