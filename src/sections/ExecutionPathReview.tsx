import { useRef } from 'react';
import {
  GitBranch,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Shield,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ExecutionPathReview() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="execution-path-review" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border text-muted-foreground text-xs font-medium mb-4 shadow-sm">
            <Shield className="w-3.5 h-3.5" />
            Execution Path Review
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Execution Path <span className="gradient-text">Review</span>
          </h2>
           <p className="text-muted-foreground max-w-xl mx-auto">
             Every review includes:
             • Execution path
             • Evidence
             • Confidence
             • Root cause
             • Workflow replay
             • Workflow diff
             • Recommended fix
           </p>
        </div>

         {/* Make Execution Path Review visually dominant */}
         <div className="space-y-12">
           {/* Report Card Visual - Full width and prominent */}
           <div className="w-full">
             <div className="rounded-2xl bg-white border border-border shadow-sm overflow-hidden">
               {/* Report Header */}
               <div className="px-8 py-6 border-b border-border flex items-center justify-between">
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                     <GitBranch className="w-5 h=5 text-foreground" />
                   </div>
                   <div>
                     <div className="text-lg font-semibold text-foreground">Execution Path Report</div>
                     <div className="text-sm text-muted-foreground">Scan ID: ps_8f3k2...</div>
                   </div>
                 </div>
                 <div className="flex items-center gap-3">
                   <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 font-medium">
                     <AlertTriangle className="w-4 h-4" />
                     Critical
                   </span>
                 </div>
               </div>

               {/* Report Body */}
               <div className="p-8 space-y-6">
                 {/* Path Visualization */}
                 <div className="space-y-4">
                   <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                     Execution Path
                   </div>
                   <div className="flex items-center gap-4">
                     <span className="px-3 py-2 rounded bg-secondary text-foreground font-mono">User Input</span>
                     <ChevronRight className="w-4 h-4 text-muted-foreground" />
                     <span className="px-3 py-2 rounded bg-secondary text-foreground font-mono">Retrieved Context</span>
                     <ChevronRight className="w-4 h-4 text-muted-foreground" />
                     <span className="px-3 py-2 rounded bg-secondary text-foreground font-mono">Memory</span>
                     <ChevronRight className="w-4 h-4 text-muted-foreground" />
                     <span className="px-3 py-2 rounded bg-red-50 text-red-600 font-mono text-xs font-medium">MCP Server</span>
                     <ChevronRight className="w-4 h-4 text-muted-foreground" />
                     <span className="px-3 py-2 rounded bg-red-50 text-red-600 font-mono text-xs font-medium">Shell Execution</span>
                   </div>
                 </div>

                 {/* Details Grid */}
                 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                   <div className="p-4 rounded-lg bg-secondary/50">
                     <div className="text-xs text-muted-foreground mb-2">Confidence</div>
                     <div className="text-2xl font-bold text-foreground">87%</div>
                   </div>
                   <div className="p-4 rounded-lg bg-secondary/50">
                     <div className="text-xs text-muted-foreground mb-2">Root Cause</div>
                     <div className="text-lg font-semibold text-foreground">Wildcard MCP Permission</div>
                   </div>
                   <div className="p-4 rounded-lg bg-secondary/50">
                     <div className="text-xs text-muted-foreground mb-2">Workflow Replay</div>
                     <div className="text-sm font-medium text-foreground">MCP server granted wildcard tool access → Shell execution sink reached</div>
                   </div>
                   <div className="p-4 rounded-lg bg-secondary/50">
                     <div className="text-xs text-muted-foreground mb-2">Workflow Diff</div>
                     <div className="text-sm font-medium text-foreground">Restrict MCP permissions to specific tools</div>
                   </div>
                 </div>

                 {/* Evidence List */}
                 <div className="space-y-4">
                   <div className="text-sm font-medium text-muted-foreground mb-3">Evidence</div>
                   <div className="space-y-2">
                     <div className="flex items-start gap-3 text-sm">
                       <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                       <span className="text-foreground">MCP server granted wildcard tool access</span>
                     </div>
                     <div className="flex items-start gap-3 text-sm">
                       <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                       <span className="text-foreground">Shell execution sink reached without authorization</span>
                     </div>
                     <div className="flex items-start gap-3 text-sm">
                       <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                       <span className="text-foreground">Trust boundary crossed at MCP layer</span>
                     </div>
                   </div>
                 </div>

                 {/* Recommended Fix */}
                 <div className="mt-6 p-4 rounded-lg bg-secondary/50">
                   <div className="text-sm font-medium text-muted-foreground mb-2">Recommended Fix</div>
                   <div className="text-sm font-medium text-foreground">
                     Update MCP server configuration to restrict tool permissions from wildcard (*) to specific, required tools only.
                   </div>
                 </div>
               </div>

               {/* Report Footer */}
               <div className="px-8 py-4 bg-secondary/30 border-t border-border/40 flex items-center justify-between">
                 <span className="text-sm text-muted-foreground">
                   Generated in 47ms • Local analysis • No LLM calls
                 </span>
                 <div className="flex items-center gap-3">
                   <Button
                     variant="outline"
                     className="border-border hover:bg-secondary"
                   >
                     View Sample Report
                     <ChevronRight className="w-4 h-4" />
                   </Button>
                   <Button
                     className="bg-foreground text-primary-foreground hover:bg-foreground/90"
                   >
                     Generate Your Own Report
                     <ChevronRight className="w-4 h-4" />
                   </Button>
                 </div>
               </div>
             </div>
           </div>
         </div>
      </div>
    </section>
  );
}
