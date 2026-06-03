import { useEffect, useRef, useState } from 'react';
import { MessageSquare, Search, Database, Server, Wrench, Terminal, Zap } from 'lucide-react';

const STEPS = [
  {
    id: 'input',
    icon: MessageSquare,
    title: 'User Input',
    desc: 'Untrusted instructions enter the workflow.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    id: 'context',
    icon: Search,
    title: 'Retrieved Context',
    desc: 'External data is fetched and injected into the prompt.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
  {
    id: 'memory',
    icon: Database,
    title: 'Memory',
    desc: 'Data persists across sessions and agents.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    id: 'mcp',
    icon: Server,
    title: 'MCP Server',
    desc: 'External capabilities become available.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    id: 'tools',
    icon: Wrench,
    title: 'Tools',
    desc: 'Instructions gain access to actions.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
  },
  {
    id: 'shell',
    icon: Terminal,
    title: 'Shell Execution',
    desc: 'Can run system commands and modify files.',
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveStep((s) => (s + 1) % STEPS.length);
    }, 900);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section id="how-it-works" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border text-muted-foreground text-xs font-medium mb-4 shadow-sm">
            <Zap className="w-3.5 h-3.5" />
            How a prompt travels
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Every prompt takes a <span className="gradient-text">path</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            PromptSonar traces the full journey — from user input to the final destination.
            The last node is where the risk lives.
          </p>
        </div>

        {/* Animated node chain */}
        <div className="flex flex-wrap items-center justify-center gap-1 mb-16">
          {STEPS.map((step, i) => (
            <div key={step.id} className="flex items-center gap-1">
              <div className={[
                'flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-500',
                i <= activeStep
                  ? i === STEPS.length - 1 && activeStep === STEPS.length - 1
                    ? 'border-red-300 bg-red-50 shadow-sm'
                    : `border-border/60 ${step.bg}`
                  : 'border-border/30 bg-secondary/30 opacity-40',
              ].join(' ')}>
                <step.icon className={`w-3.5 h-3.5 flex-shrink-0 ${i <= activeStep ? step.color : 'text-muted-foreground/30'}`} />
                <span className={`text-xs font-semibold whitespace-nowrap ${i <= activeStep ? 'text-foreground' : 'text-muted-foreground/30'}`}>
                  {step.title}
                </span>
                {i === STEPS.length - 1 && activeStep === STEPS.length - 1 && (
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
                )}
              </div>
              {i < STEPS.length - 1 && (
                <span className={`text-xs font-bold transition-colors duration-300 ${i < activeStep ? 'text-foreground/40' : 'text-border'}`}>
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Step cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              step: '1',
              title: 'Paste your prompt',
              desc: 'Drop in any system prompt, agent instruction, MCP config, or user query. Works on prompts of any size or format.',
              chip: 'promptsonar.vercel.app',
            },
            {
              step: '2',
              title: 'The scanner maps the flow',
              desc: 'PromptSonar traces every path — through tools, memory, MCP servers, and system commands. Deterministic. Same result every time.',
              chip: '~47ms · no LLM calls',
            },
            {
              step: '3',
              title: 'Get your verdict + fix',
              desc: 'SAFE or HIGH RISK — plus a Prompt Flow showing exactly where it goes, why it happened, and a Before/After fix.',
              chip: 'verdict · flow · fix',
            },
          ].map((item) => (
            <div key={item.step} className="p-6 rounded-xl bg-white border border-border hover:border-foreground/10 transition-all duration-300 hover:shadow-md">
              <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center mb-4">
                <span className="text-xs font-bold text-primary-foreground">{item.step}</span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-secondary border border-border text-xs font-mono text-muted-foreground">
                {item.chip}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
