import { useEffect, useRef, useState } from 'react';
import {
  Terminal,
  GitPullRequest,
  Code2,
  Copy,
  Check,
  ChevronRight,
  FileJson,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const INTEGRATIONS = [
  {
    id: 'cli',
    icon: Terminal,
    title: 'CLI',
    description: 'Analyze prompts directly from your terminal. Perfect for local development and CI pipelines.',
    install: 'npm install -g @promptsonar/cli',
    example: `$ promptsonar scan "Tell me a joke"
  Status: SAFE (confidence: 99.1%)
  Scanned in 42ms`,
    color: 'text-foreground',
    bg: 'bg-secondary',
    border: 'border-border',
  },
  {
    id: 'github',
    icon: GitPullRequest,
    title: 'GitHub PR Review',
    description: 'Review prompt changes before merge. Catch execution path anomalies in pull requests.',
    install: 'uses: promptsonar/action@v2',
    example: `- name: PromptSonar Review
  uses: promptsonar/action@v2
  with:
    api-key: \${{ secrets.PS_API_KEY }}
    scan-path: './src/prompts'`,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
  {
    id: 'vscode',
    icon: Code2,
    title: 'VS Code',
    description: 'See execution paths directly in your editor. Inline annotations and quick fixes.',
      install: ' ext install PromptSonar.promptsonar',
      example: `// Inline suggestion in your editor:
  const prompt = "You are an expert data analyst. Think step-by-step: First, identify the key metrics to analyze. Second, gather the relevant customer feedback data. Third, calculate trends and patterns. Finally, generate a comprehensive report.
Example: Analyze Q1 customer satisfaction scores from survey data to identify areas for improvement."
  //     ^ PromptSonar: Safe execution path detected`,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
  },
  {
    id: 'cursor',
    icon: Code2,
    title: 'Cursor',
    description: 'Review planned tool execution before it runs. Native Cursor extension.',
     install: ' ext install PromptSonar.promptsonar',
     example: `// Cursor integration:
 const prompt = "Read user configuration file"
 //     ^ PromptSonar: File access detected`,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
  },
  {
    id: 'claude',
    icon: Terminal,
    title: 'Claude Code',
    description: 'Review planned tool execution before it runs. Native Claude Code integration.',
    install: 'promptsonar claude install',
    example: `$ promptsonar claude review
  Tool: shell_execute
  Risk: Privileged sink
  Confidence: 94%`,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
  },
  {
    id: 'sarif',
    icon: FileJson,
    title: 'SARIF',
    description: 'Industry-standard SARIF format for security toolchains and CI integration.',
    install: 'promptsonar export --format sarif',
    example: `$ promptsonar export --format sarif
  Output: promptsonar-report.sarif
  Compatible with GitHub Security tab`,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
  },
];

export function Integrations() {
  const [activeTab, setActiveTab] = useState(INTEGRATIONS[0].id);
  const [copiedInstall, setCopiedInstall] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const active = INTEGRATIONS.find((i) => i.id === activeTab) || INTEGRATIONS[0];

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

  const copyInstall = () => {
    navigator.clipboard.writeText(active.install);
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  return (
    <section id="integrations" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border text-muted-foreground text-xs font-medium mb-4 shadow-sm">
            <Terminal className="w-3.5 h-3.5" />
            Developer Workflows
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Works Where Developers <span className="gradient-text">Already Work</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From local development to production deployment — review execution paths in the tools you use every day.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {INTEGRATIONS.map((integration) => (
            <button
              key={integration.id}
              onClick={() => setActiveTab(integration.id)}
              className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === integration.id
                  ? `${integration.bg} ${integration.color} border ${integration.border} shadow-sm`
                  : 'text-muted-foreground hover:text-foreground bg-white border border-transparent hover:border-border shadow-sm'
              }`}
            >
              <integration.icon className="w-4.5 h-4.5" />
              {integration.title}
            </button>
          ))}
        </div>

        {/* Integration Detail */}
        <div
          className={`transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Info */}
            <div className="lg:col-span-2 p-6 rounded-2xl bg-white border border-border shadow-sm">
              <div className={`w-12 h-12 rounded-xl ${active.bg} flex items-center justify-center mb-4`}>
                <active.icon className={`w-6 h-6 ${active.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{active.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {active.description}
              </p>

              {/* Install Command */}
              <div className="relative">
                <div className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">
                  Install
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary border border-border font-mono text-xs text-foreground">
                  <span className="truncate">{active.install}</span>
                  <button
                    onClick={copyInstall}
                    className="shrink-0 p-1.5 rounded hover:bg-background transition-colors text-muted-foreground hover:text-foreground"
                  >
                    {copiedInstall ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              <Button
                variant="outline"
                className="mt-6 w-full border-border hover:bg-secondary gap-2"
              >
                View Documentation
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Code Example */}
            <div className="lg:col-span-3 p-6 rounded-2xl bg-[#1a1a2e] border border-border overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 text-xs text-muted-foreground font-mono">
                  {active.id === 'cli' && 'terminal'}
                  {active.id === 'github' && '.github/workflows/security.yml'}
                  {active.id === 'vscode' && 'example.ts'}
                  {active.id === 'cursor' && 'example.ts'}
                  {active.id === 'claude' && 'terminal'}
                  {active.id === 'sarif' && 'terminal'}
                </span>
              </div>
              <pre className="text-sm font-mono leading-relaxed overflow-x-auto">
                <code className="text-emerald-300">{active.example}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
