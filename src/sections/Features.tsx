import { useState } from 'react';
import {
  Shield,
  GitBranch,
  FileSearch,
  Eye,
  ChevronRight,
  CheckCircle2,
  Zap,
} from 'lucide-react';

interface Feature {
  name: string;
  description: string;
  icon: typeof Shield | typeof GitBranch | typeof FileSearch | typeof Eye | typeof Zap;
}

interface Layer {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof Shield;
  features: Feature[];
  color: string;
  borderColor: string;
  bgColor: string;
}

const LAYERS: Layer[] = [
  {
    id: 'core',
    title: 'Execution Path',
    subtitle: 'Trace & Analyze',
    icon: GitBranch,
    color: 'text-foreground',
    borderColor: 'border-foreground/10',
    bgColor: 'bg-secondary',
    features: [
      { name: 'Execution Path', description: 'Shows where prompts can travel.', icon: GitBranch },
      { name: 'Evidence', description: 'Shows exactly why the path exists.', icon: FileSearch },
      { name: 'Confidence', description: 'Shows how certain the analysis is.', icon: Zap },
      { name: 'Root Cause', description: 'Shows the finding creating the risk.', icon: Eye },
      { name: 'Workflow Diff', description: 'Shows how remediation changes execution.', icon: Eye },
    ],
  },
];

export function Features() {
  const [activeLayer] = useState(LAYERS[0].id);
  const currentLayer = LAYERS.find((l) => l.id === activeLayer) || LAYERS[0];

  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border text-muted-foreground text-xs font-medium mb-4 shadow-sm">
            <Shield className="w-3.5 h-3.5" />
            What PromptSonar Explains
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            What PromptSonar <span className="gradient-text">Explains</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Execution visibility is the product. Security findings are an output.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentLayer.features.map((feature, i) => (
            <div
              key={feature.name}
              className="group relative p-5 rounded-xl bg-white border border-border hover:border-foreground/10 transition-all duration-300 hover:shadow-md"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-lg ${currentLayer.bgColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className={`w-5 h-5 ${currentLayer.color}`} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1 group-hover:text-foreground/80 transition-colors">
                    {feature.name}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>

        {/* Status Indicators */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Execution Path Tracing</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Deterministic Evidence</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Root Cause Analysis</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Workflow Diff</span>
          </div>
        </div>
      </div>
    </section>
  );
}
