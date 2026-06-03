import { Brain, Wrench, Server, HardDrive, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CARDS = [
  {
    icon: Wrench,
    title: 'Tools',
    desc: 'Prompts can reach tools that perform real actions on your behalf — file writes, API calls, database queries.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: Brain,
    title: 'Memory',
    desc: 'Prompts can write to memory that persists across sessions and agents — poisoning future interactions.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    icon: Server,
    title: 'MCP Servers',
    desc: 'Connected MCP tools can be hijacked to run commands with wildcard permissions and no approval step.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: HardDrive,
    title: 'Filesystems',
    desc: 'Prompts can read, write, and modify files — including config files, credentials, and application code.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
  },
  {
    icon: Terminal,
    title: 'Shell Execution',
    desc: 'With MCP or code execution enabled, a malicious prompt can reach system commands with no authorization.',
    color: 'text-red-600',
    bg: 'bg-red-50',
    border: 'border-red-100',
  },
];

export function WhyExecutionPathsMatter() {
  return (
    <section id="why-execution-paths-matter" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-50" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border text-muted-foreground text-xs font-medium mb-4 shadow-sm">
            Why this matters
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Prompts don't fail at the model.{' '}
            <span className="gradient-text">They fail after.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Most AI incidents start when untrusted input reaches memory, tools, or system commands.
            PromptSonar shows you exactly where your prompt can go — before it ships.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="p-5 rounded-xl bg-white border border-border hover:border-foreground/10 transition-all duration-300 hover:shadow-md flex flex-col gap-4"
            >
              <div className={`w-10 h-10 rounded-xl ${card.bg} border ${card.border} flex items-center justify-center flex-shrink-0`}>
                <card.icon className={`w-5 h-5 ${card.color}`} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-foreground text-primary-foreground flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <div className="font-semibold mb-1">PromptSonar shows you the path</div>
            <div className="text-sm text-primary-foreground/70">
              Paste any prompt and find out exactly what it can reach — and how to close the path before it ships.
            </div>
          </div>
          <Button
            asChild
            className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 transition-colors flex-shrink-0"
          >
            <a href="https://promptsonar.vercel.app">Scan Prompt →</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
