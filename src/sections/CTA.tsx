import { ArrowRight, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-foreground/[0.03] blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-border shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-foreground flex items-center justify-center mx-auto mb-6">
            <GitBranch className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            See Your First Execution Path <span className="gradient-text">In 30 Seconds</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
            Paste a prompt. Trace the path. Find the root cause. Fix it before production.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-foreground text-primary-foreground hover:bg-foreground/90 gap-2 text-base px-8 h-12"
            >
              Try PromptSonar
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-secondary text-base px-8 h-12"
            >
              View Example Report
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
