import { useRef } from 'react';
import { GitBranch, ChevronRight, CheckCircle2, AlertTriangle, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ExecutionPathReview() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="execution-path-review" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border text-muted-foreground text-xs font-medium mb-4 shadow-sm">
            <Shield className="w-3.5 h-3.5" />
            Example scan report
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Every scan gives you a{' '}
            <span className="gradient-text">complete picture</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Not just a risk label. A full explanation of what the prompt can reach,
            why it's risky, and exactly how to fix it.
          </p>
        </div>

        <div className="rounded-2xl bg-white border border-border shadow-sm overflow-hidden">
          {/* Report header */}
          <div className="px-8 py-5 border-b border-border flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
                <GitBranch className="w-4 h-4 text-foreground" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Scan Report</div>
                <div className="text-xs text-muted-foreground font-mono">Scan ID: ps_8f3k2… · 47ms</div>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100">
              <AlertTriangle className="w-4 h-4" />
              HIGH RISK
            </span>
          </div>

          <div className="p-8 space-y-8">
            {/* Prompt Flow */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Prompt Flow
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {['User Input', 'Retrieved Context', 'Memory'].map((node) => (
                  <div key={node} className="flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-secondary text-foreground font-mono text-xs font-medium border border-border">
                      {node}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                  </div>
                ))}
                <span className="px-3 py-1.5 rounded-lg bg-red-50 text-red-600 font-mono text-xs font-medium border border-red-200">
                  MCP Server
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                <span className="px-3 py-1.5 rounded-lg bg-red-50 text-red-600 font-mono text-xs font-medium border border-red-200">
                  Shell Execution
                </span>
              </div>
            </div>

            {/* Why + Fix side by side */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Why This Happened */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Why This Happened
                </div>
                <div className="rounded-xl border border-red-100 bg-red-50/40 p-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-red-800 font-medium">MCP tool hijacking — autoExecute: true with wildcard permissions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-red-700">Approval bypass — no human-in-the-loop check before shell access</span>
                  </div>
                </div>
              </div>

              {/* Fix */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Fix
                </div>
                <div className="rounded-xl overflow-hidden border border-border">
                  <div className="px-4 py-2 bg-red-50 border-b border-red-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600">Before</span>
                  </div>
                  <div className="px-4 py-3 bg-white font-mono text-xs text-foreground leading-relaxed border-b border-border">
                    <span className="text-red-600">autoExecute: true</span><br />
                    <span className="text-red-600">permissions: "*"</span>
                  </div>
                  <div className="px-4 py-2 bg-emerald-50 border-b border-emerald-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">After</span>
                  </div>
                  <div className="px-4 py-3 bg-white font-mono text-xs text-foreground leading-relaxed">
                    <span className="text-emerald-600">autoExecute: false</span><br />
                    <span className="text-emerald-600">permissions: ["filesystem.read"]</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom row */}
            <div className="flex items-center justify-between flex-wrap gap-3 pt-2 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                Risk reduced 94% after applying fix
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="text-xs" asChild>
                  <a href="https://promptsonar.vercel.app">Run your own scan →</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
