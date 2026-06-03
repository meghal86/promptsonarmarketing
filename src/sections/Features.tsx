import { GitBranch, Zap, Target, Wrench, BarChart2, Shield } from 'lucide-react';

const FEATURES = [
  {
    icon: GitBranch,
    title: 'Prompt Flow',
    desc: 'Visual node chain showing exactly where your prompt travels — through tools, memory, and actions.',
  },
  {
    icon: Zap,
    title: 'Instant verdict',
    desc: 'HIGH RISK or SAFE in under 5 seconds. No waiting. No API calls. Fully deterministic.',
  },
  {
    icon: Target,
    title: 'Root cause',
    desc: 'Exactly which rule triggered, why, and the specific text that caused it — not just "something\'s wrong".',
  },
  {
    icon: Wrench,
    title: 'Before / After fix',
    desc: 'Every finding comes with a concrete code fix showing the vulnerable version and the safe replacement.',
  },
  {
    icon: BarChart2,
    title: 'Model comparison',
    desc: 'See how GPT-4o, Claude, Gemini, and Llama handle the same prompt — safety scores and behavior variance.',
  },
  {
    icon: Shield,
    title: 'Security policies',
    desc: 'Define rules that automatically pass, warn, or block prompts before they go to production.',
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/[0.02] to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border text-muted-foreground text-xs font-medium mb-4 shadow-sm">
            <Shield className="w-3.5 h-3.5" />
            Everything in a scan
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Built for developers who ship{' '}
            <span className="gradient-text">AI agents</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every scan gives you the full picture — not just a risk label.
          </p>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden border border-border">
          {FEATURES.map((feat) => (
            <div
              key={feat.title}
              className="bg-white p-6 hover:bg-secondary/30 transition-colors duration-200"
            >
              <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <feat.icon className="w-4.5 h-4.5 text-foreground" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">{feat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
