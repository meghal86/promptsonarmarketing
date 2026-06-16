import { Link } from 'react-router';
import {
  ArrowRight,
  Rocket,
  Terminal,
  GitBranch,
  ShieldCheck,
  FileJson,
  Boxes,
  BookOpen,
  Workflow,
  Github,
  Clock,
} from 'lucide-react';
import { DocsSearch } from './DocsSearch';

const POPULAR = [
  {
    slug: 'installation',
    title: 'Installation',
    desc: 'Get the CLI running locally in a minute.',
    icon: Terminal,
  },
  {
    slug: 'quick-start',
    title: 'Quick Start',
    desc: 'From install to your first verdict.',
    icon: Rocket,
  },
  {
    slug: 'repository-scanning',
    title: 'Repository Scanning',
    desc: 'Scan a whole repo for execution-path risks.',
    icon: GitBranch,
  },
  {
    slug: 'github-actions',
    title: 'GitHub Actions',
    desc: 'Gate pull requests on new findings.',
    icon: Github,
  },
];

const FEATURES = [
  {
    title: 'Execution Path Analysis',
    desc: 'See exactly where a prompt can travel — through tools, memory, and actions to a sink.',
    icon: Workflow,
    slug: 'execution-path-analysis',
  },
  {
    title: 'Deterministic Detection',
    desc: 'No model calls in the hot path. The same input always yields the same explainable verdict.',
    icon: ShieldCheck,
    slug: 'deterministic-detection',
  },
  {
    title: 'OWASP LLM Mapping',
    desc: 'Every rule maps to an OWASP LLM category, so findings are explainable and standard.',
    icon: BookOpen,
    slug: 'owasp-llm-mapping',
  },
  {
    title: 'Portable Outputs',
    desc: 'Export JSON, SARIF, HTML, and a Prompt SBOM that plug into your existing tools.',
    icon: FileJson,
    slug: 'sarif-export',
  },
];

const INTEGRATIONS = [
  { title: 'CLI', slug: 'cli-usage', icon: Terminal },
  { title: 'VS Code', slug: 'vscode-extension', icon: Boxes },
  { title: 'GitHub Actions', slug: 'github-actions', icon: Github },
  { title: 'CI/CD', slug: 'cicd-integration', icon: Workflow },
];

export function DocsHome() {
  return (
    <div className="mx-auto max-w-4xl pb-8">
      {/* Hero */}
      <section className="border-b border-border pb-12">
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground/60">
          PromptSonar Documentation
        </p>
        <h1 className="max-w-2xl text-balance text-[40px] font-semibold leading-[1.1] tracking-tight text-foreground lg:text-[48px]">
          Ship AI agents with <em className="font-playfair italic">confidence</em>.
        </h1>
        <p className="mt-5 max-w-xl text-[16px] leading-7 text-muted-foreground">
          PromptSonar is a deterministic, local-first execution-path analyzer
          that surfaces security risks in prompts, agent workflows,
          repositories, and MCP configurations — before they reach production.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link
            to="/docs/quick-start"
            className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2.5 text-[14px] font-medium text-background transition-colors hover:bg-foreground/90"
          >
            <Rocket className="h-4 w-4" /> Quick Start
          </Link>
          <Link
            to="/docs/installation"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2.5 text-[14px] font-medium text-foreground transition-colors hover:border-foreground/20"
          >
            Install the CLI <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="ml-auto hidden md:block">
            <DocsSearch />
          </div>
        </div>
      </section>

      {/* Popular guides */}
      <section className="py-12">
        <h2 className="mb-5 text-[13px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Popular guides
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {POPULAR.map((g) => {
            const Icon = g.icon;
            return (
              <Link
                key={g.slug}
                to={`/docs/${g.slug}`}
                className="group flex items-start gap-3.5 rounded-xl border border-border bg-card p-4 transition-colors hover:border-foreground/20"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[14px] font-medium text-foreground">
                    {g.title}
                    <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </div>
                  <p className="mt-0.5 text-[13px] leading-relaxed text-muted-foreground">
                    {g.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Feature cards */}
      <section className="border-t border-border py-12">
        <h2 className="mb-5 text-[13px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          What you can do
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <Link
                key={f.slug}
                to={`/docs/${f.slug}`}
                className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20"
              >
                <Icon className="mb-3 h-4 w-4 text-muted-foreground/60" />
                <div className="text-[14px] font-medium tracking-tight text-foreground">
                  {f.title}
                </div>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Integrations */}
      <section className="border-t border-border py-12">
        <h2 className="mb-5 text-[13px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Integrations
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {INTEGRATIONS.map((i) => {
            const Icon = i.icon;
            return (
              <Link
                key={i.slug}
                to={`/docs/${i.slug}`}
                className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card px-3 py-5 text-center transition-colors hover:border-foreground/20"
              >
                <Icon className="h-5 w-5 text-foreground/70" />
                <span className="text-[13px] font-medium text-foreground">
                  {i.title}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Start scanning in under 5 minutes */}
      <section className="mt-4 overflow-hidden rounded-2xl border border-border bg-card">
        <div className="flex flex-col gap-6 p-8 sm:flex-row sm:items-center">
          <div className="flex-1">
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
              <Clock className="h-3 w-3" /> ~5 minutes
            </div>
            <h2 className="text-[22px] font-semibold tracking-tight text-foreground">
              Start scanning in under 5 minutes
            </h2>
            <p className="mt-2 max-w-md text-[14px] leading-7 text-muted-foreground">
              Install the CLI, point it at a prompt or repository, and read your
              first verdict. No account, no API keys — everything runs locally.
            </p>
            <Link
              to="/docs/quick-start"
              className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2.5 text-[14px] font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Get started <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ol className="flex-1 space-y-3 border-l border-border pl-6 text-[13.5px] text-foreground/80">
            <li>
              <span className="mr-2 font-mono text-muted-foreground">01</span>
              Install the PromptSonar CLI
            </li>
            <li>
              <span className="mr-2 font-mono text-muted-foreground">02</span>
              Run a scan on a prompt or repo
            </li>
            <li>
              <span className="mr-2 font-mono text-muted-foreground">03</span>
              Read the verdict and apply the fix
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
