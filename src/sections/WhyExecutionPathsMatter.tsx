import { Zap } from 'lucide-react';

export function WhyExecutionPathsMatter() {
  return (
    <section id="why-execution-paths-matter" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-50" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border text-muted-foreground text-xs font-medium mb-4 shadow-sm">
            <Zap className="w-3.5 h-3.5" />
            Why Execution Paths Matter
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Why Execution Paths <span className="gradient-text">Matter</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Most AI incidents are not caused by prompts.
            They happen when prompts reach:
          </p>
        </div>
        
        {/* 5-card horizontal layout */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <div className="p-6 rounded-xl bg-white border border-border hover:border-foreground/10 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-xl bg-primary-foreground flex items-center justify-center">
                <span className="text-xs font-medium text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Tools</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Prompts can reach tools that perform actions on your behalf
            </p>
          </div>
          
          <div className="p-6 rounded-xl bg-white border border-border hover:border-foreground/10 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-xl bg-primary-foreground flex items-center justify-center">
                <span className="text-xs font-medium text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Memory</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Prompts can persist in memory across sessions and agents
            </p>
          </div>
          
          <div className="p-6 rounded-xl bg-white border border-border hover:border-foreground/10 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-xl bg-primary-foreground flex items-center justify-center">
                <span className="text-xs font-medium text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">MCP Servers</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Prompts can access external capabilities through MCP servers
            </p>
          </div>
          
          <div className="p-6 rounded-xl bg-white border border-border hover:border-foreground/10 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-xl bg-primary-foreground flex items-center justify-center">
                <span className="text-xs font-medium text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Filesystems</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Prompts can read, write, and modify filesystem resources
            </p>
          </div>
          
          <div className="p-6 rounded-xl bg-white border border-border hover:border-foreground/10 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-xl bg-primary-foreground flex items-center justify-center">
                <span className="text-xs font-medium text-white">5</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Shell Execution</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Prompts can execute privileged system commands
            </p>
          </div>
        </div>
        
        {/* Bottom message */}
        <div className="mt-12 text-center text-muted-foreground">
          PromptSonar shows those paths before they run.
        </div>
      </div>
    </section>
  );
}