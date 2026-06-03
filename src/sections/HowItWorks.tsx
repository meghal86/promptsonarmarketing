import { useEffect, useRef, useState } from 'react';
import {
  MessageSquare,
  Search,
  Database,
  Server,
  Route,
  Terminal,
  Zap,
} from 'lucide-react';

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
    id: 'router',
    icon: Route,
    title: 'Tool Router',
    desc: 'Instructions gain access to actions.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
  },
  {
    id: 'sink',
    icon: Terminal,
    title: 'Shell Execution',
    desc: 'A privileged sink capable of changing systems.',
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute('data-step') || '0');
            setVisibleSteps((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.3, rootMargin: '-50px' }
    );

    const items = sectionRef.current?.querySelectorAll('[data-step]');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-50" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border text-muted-foreground text-xs font-medium mb-4 shadow-sm">
            <Search className="w-3.5 h-3.5" />
            How It Works
          </div>
           <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
             How Execution Paths <span className="gradient-text">Form</span>
           </h2>
           <p className="text-muted-foreground max-w-xl mx-auto">
             Most AI failures do not start at execution. They start when untrusted input reaches memory, tools, MCP servers, or privileged actions. PromptSonar makes those paths visible before deployment.
           </p>
        </div>

        {/* Pipeline */}
        <div className="relative">
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-border via-foreground/10 to-border -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-12">
            {STEPS.map((step, i) => {
              const isLeft = i % 2 === 0;
              const isVisible = visibleSteps.has(i);

              return (
                <div
                  key={step.id}
                  data-step={i}
                  className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div
                    className={`flex-1 ${isLeft ? 'lg:text-right' : 'lg:text-left'} ${
                      isLeft ? 'lg:order-1' : 'lg:order-3'
                    }`}
                  >
                    <div
                      className={`inline-flex items-center gap-3 mb-3 ${
                        isLeft ? 'lg:flex-row-reverse' : ''
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl ${step.bg} flex items-center justify-center`}>
                        <step.icon className={`w-5 h-5 ${step.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto lg:mx-0">
                      {step.desc}
                    </p>
                  </div>

                  <div className="hidden lg:flex order-2 w-12 h-12 rounded-full bg-white border-2 border-foreground/10 items-center justify-center z-10 shadow-sm">
                    <span className="text-xs font-bold text-foreground font-mono">{i + 1}</span>
                  </div>

                  <div className={`hidden lg:block flex-1 ${isLeft ? 'order-3' : 'order-1'}`} />
                </div>
              );
            })}
          </div>
        </div>

         {/* Bottom CTA */}
         <div className="mt-16 text-center">
           <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-border shadow-sm">
             <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
               <Zap className="w-5 h-5 text-foreground" />
             </div>
             <div className="text-left">
               <div className="text-sm font-semibold text-foreground">PromptSonar identifies the exact point where trust breaks down.</div>
               <div className="text-xs text-muted-foreground">
                 Deterministic analysis. No LLM calls. Local first.
               </div>
             </div>
           </div>
           <div className="mt-4 text-xs text-muted-foreground">
             PromptSonar identifies execution paths before they become incidents.
           </div>
         </div>
      </div>
    </section>
  );
}
