export function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Paste your prompt',
      desc: 'Drop in any system prompt, agent instruction, MCP config, or user query. Works on prompts of any size or format.',
      chip: 'promptsonar.vercel.app',
    },
    {
      num: '02',
      title: 'The scanner maps the flow',
      desc: 'PromptSonar traces every path — through tools, memory, MCP servers, and system commands. Deterministic. Same result every time.',
      chip: '~47ms · zero LLM calls',
    },
    {
      num: '03',
      title: 'Get your verdict and fix',
      desc: 'SAFE or HIGH RISK — plus a Prompt Flow showing exactly where it goes, why it happened, and a Before / After fix.',
      chip: 'verdict · flow · fix',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">
          <div>
            <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted-foreground/60 mb-5">
              How it works
            </p>
            <h2 className="font-playfair text-[40px] lg:text-[48px] font-normal leading-[1.1] tracking-tight text-foreground mb-6">
              Every prompt takes<br />
              a <em className="italic">path</em>
            </h2>
            <p className="text-[14px] leading-[1.75] text-muted-foreground max-w-xs">
              PromptSonar traces the full journey from user input to the final destination. The last node is where the risk lives.
            </p>
          </div>
          <div className="space-y-0">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex gap-8 py-7 border-b border-border/40 last:border-b-0"
              >
                <span className="text-[11px] font-medium text-muted-foreground/40 tracking-[0.06em] pt-0.5 min-w-[24px]">
                  {step.num}
                </span>
                <div>
                  <div className="text-[14px] font-medium text-foreground mb-1.5 tracking-tight">
                    {step.title}
                  </div>
                  <div className="text-[13px] text-muted-foreground leading-relaxed mb-3">
                    {step.desc}
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-secondary text-[11px] font-mono text-muted-foreground border border-border/60">
                    {step.chip}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
