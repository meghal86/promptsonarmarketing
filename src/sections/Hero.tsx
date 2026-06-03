import { useEffect, useRef } from 'react';
import { ArrowRight, Zap, Lock, Server, GitBranch, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.15 + 0.05,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(26, 26, 46, ${p.opacity})`;
        ctx.fill();
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(26, 26, 46, ${0.05 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const trustBadges = [
    { icon: Lock, label: 'Local First' },
    { icon: Shield, label: 'Zero LLM Calls' },
    { icon: Zap, label: 'Deterministic Analysis' },
    { icon: GitBranch, label: 'Open Source' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border text-muted-foreground text-sm font-medium mb-8 shadow-sm">
          <Server className="w-4 h-4 text-emerald-500" />
          AI Execution Path Analyzer
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
          See Where Your Prompt{' '}
          <span className="gradient-text">Goes</span>
        </h1>

         {/* Subheadline */}
         <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
           PromptSonar traces prompts through memory, tools, MCP servers, and privileged actions before they execute.
           Find execution paths, root causes, and workflow risks using deterministic local analysis.
         </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-foreground text-primary-foreground hover:bg-foreground/90 gap-2 text-base px-8 h-12"
            asChild
          >
            <a href="#try">
              Try PromptSonar
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-border hover:bg-secondary text-base px-8 h-12"
          >
            View Example Report
          </Button>
        </div>

         {/* Trust Badges */}
         <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
           {trustBadges.map((badge) => (
             <div
               key={badge.label}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border text-muted-foreground text-sm font-medium shadow-sm"
             >
               <badge.icon className="w-4 h-4 text-emerald-500" />
               {badge.label}
             </div>
           ))}
         </div>
         
         {/* Execution Path Snippet */}
         <div className="mt-10 max-w-2xl mx-auto">
           <Card className="border-muted border bg-background/50">
             <CardContent className="space-y-4 text-sm">
               <div className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                 <span className="font-mono text-muted-foreground">USER INPUT</span>
               </div>
               <div className="h-0.5 bg-muted" />
               <div className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                 <span className="font-mono text-muted-foreground">MCP SERVER</span>
               </div>
               <div className="h-0.5 bg-muted" />
               <div className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                 <span className="font-mono text-muted-foreground">TOOL ROUTER</span>
               </div>
               <div className="h-0.5 bg-muted" />
               <div className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                 <span className="font-mono text-muted-foreground">SHELL EXECUTION</span>
               </div>
               <div className="mt-4 space-y-2 text-xs text-muted-foreground">
                 <div className="flex items-center gap-2">
                   <Zap className="w-3 h-3" />
                   <span>Evidence: autoExecute=true</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <Zap className="w-3 h-3" />
                   <span>Confidence: HIGH</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <Zap className="w-3 h-3" />
                   <span>Root Cause: MCP Tool Poisoning</span>
                 </div>
               </div>
             </CardContent>
           </Card>
         </div>
       </div>
     </section>
   );
 }
