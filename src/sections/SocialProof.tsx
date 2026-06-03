const STATS = [
  { val: '47ms',  label: 'Average scan time.\nNo LLM calls required.' },
  { val: '465+',  label: 'Prompt files scanned\nacross public repos.' },
  { val: '20+',   label: 'AI repositories\nanalyzed for rules.' },
  { val: 'MIT',   label: 'Open source.\nFree to use forever.' },
];

export function SocialProof() {
  return (
    <section className="border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.val}
              className={`py-12 px-6 ${
                i < STATS.length - 1 ? 'border-r border-border/40' : ''
              }`}
            >
              <div className="font-playfair text-[44px] font-normal tracking-tight text-foreground leading-none mb-3">
                {stat.val}
              </div>
              <div className="text-[12px] text-muted-foreground leading-relaxed whitespace-pre-line">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
