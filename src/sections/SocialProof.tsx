import { useEffect, useRef, useState } from 'react';
  import { GitBranch, FileSearch, CheckCircle2, Shield, Zap } from 'lucide-react';

const METRICS = [
  {
    id: 'repos',
    icon: GitBranch,
    value: '20+',
    label: 'Public AI Repositories',
  },
  {
    id: 'files',
    icon: FileSearch,
    value: '465+',
    label: 'Prompt Files',
  },
  {
    id: 'mcp',
    icon: Zap,
    value: '8+',
    label: 'MCP Configurations',
  },
  {
    id: 'open',
    icon: CheckCircle2,
    value: 'MIT Licensed',
    label: 'Open Source',
  },
];

export function SocialProof() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="social-proof" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
           <div className="text-center mb-12">
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border text-muted-foreground text-xs font-medium mb-4 shadow-sm">
               <Shield className="w-3.5 h-3.5" />
               Built From Real AI Workflows
             </div>
             <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
               Built From Real <span className="gradient-text">AI Workflows</span>
             </h2>
             <p className="text-muted-foreground max-w-xl mx-auto">
               PromptSonar is grounded in analysis of production AI workflows. No exaggeration. Actual repository metrics.
             </p>
           </div>

         {/* Primary Metrics */}
         <div className="mb-8">
           <div
             className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 ${
               isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
             }`}
           >
             {METRICS.map((metric) => (
               <div
                 key={metric.id}
                 className="p-6 rounded-xl bg-white border border-border hover:border-foreground/10 transition-all duration-300 hover:shadow-md text-center"
               >
                 <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                   <metric.icon className="w-6 h-6 text-foreground" />
                 </div>
                 <div className="text-2xl font-bold text-foreground mb-1">
                   {metric.value}
                 </div>
                 <div className="text-sm text-muted-foreground">
                   {metric.label}
                 </div>
               </div>
             ))}
           </div>
         </div>
         
         {/* Secondary Metrics */}
         <div className="space-y-4">
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
             <div className="p-4 rounded-xl bg-white border border-border hover:border-foreground/10 transition-all duration-300 hover:shadow-md">
               <div className="text-2xl font-bold text-foreground mb-2">127</div>
               <div className="text-sm font-medium text-muted-foreground">Execution Paths Analyzed</div>
             </div>
             <div className="p-4 rounded-xl bg-white border border-border hover:border-foreground/10 transition-all duration-300 hover:shadow-md">
               <div className="text-2xl font-bold text-foreground mb-2">34</div>
               <div className="text-sm font-medium text-muted-foreground">Privileged Sink Paths</div>
             </div>
             <div className="p-4 rounded-xl bg-white border border-border hover:border-foreground/10 transition-all duration-300 hover:shadow-md">
               <div className="text-2xl font-bold text-foreground mb-2">19</div>
               <div className="text-sm font-medium text-muted-foreground">High-Risk Workflows</div>
             </div>
             <div className="p-4 rounded-xl bg-white border border-border hover:border-foreground/10 transition-all duration-300 hover:shadow-md">
               <div className="text-2xl font-bold text-foreground mb-2">100%</div>
               <div className="text-sm font-medium text-muted-foreground">Local Analysis</div>
             </div>
           </div>
         </div>
      </div>
    </section>
  );
}
