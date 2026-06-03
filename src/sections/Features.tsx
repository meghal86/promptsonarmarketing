import { GitBranch, Zap, Target, Wrench, BarChart2, Shield } from 'lucide-react';

const FEATURES = [
  { icon: GitBranch, num: '01', title: 'Prompt Flow', desc: 'Visual node chain showing exactly where your prompt travels — through tools, memory, and actions.' },
  { icon: Zap,       num: '02', title: 'Instant verdict', desc: 'HIGH RISK or SAFE in under 5 seconds. No waiting. No API calls. Fully deterministic.' },
  { icon: Target,    num: '03', title: 'Root cause', desc: 'The exact rule that triggered, why, and the specific text that caused it.' },
  { icon: Wrench,    num: '04', title: 'Before / After fix', desc: 'Every finding comes with a code fix showing the vulnerable version and the safe replacement.' },
  { icon: BarChart2, num: '05', title: 'Model comparison', desc: 'See how GPT-4o, Claude, and Gemini handle the same prompt — safety scores and behavior variance.' },
  { icon: Shield,    num: '06', title: 'Security policies', desc: 'Define rules that automatically pass, warn, or block prompts before they go to production.' },
];

export function Features() {
  return (
    <section id="features" className="py-24 border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted-foreground/60 mb-5">
            Everything in a scan
          </p>
          <h2 className="font-playfair text-[40px] lg:text-[48px] font-normal leading-[1.1] tracking-tight text-foreground">
            Built for developers<br />
            who ship <em className="italic">AI agents</em>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-border/40 rounded-2xl overflow-hidden">
          {FEATURES.map((feat, i) => (
            <div
              key={feat.title}
              className="p-7 border-b border-r border-border/40 hover:bg-secondary/30 transition-colors duration-200 last:border-r-0"
              style={{
                borderRight: (i + 1) % 3 === 0 ? 'none' : undefined,
                borderBottom: i >= 3 ? 'none' : undefined,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <feat.icon className="w-4 h-4 text-muted-foreground/50" />
                <span className="text-[10px] font-medium text-muted-foreground/30 tracking-[0.08em]">
                  {feat.num}
                </span>
              </div>
              <div className="text-[13px] font-medium text-foreground mb-2 tracking-tight">
                {feat.title}
              </div>
              <div className="text-[12px] text-muted-foreground leading-relaxed">
                {feat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
