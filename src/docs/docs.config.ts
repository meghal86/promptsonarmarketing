/**
 * docs.config.ts
 * ---------------------------------------------------------------------------
 * Single source of truth for the PromptSonar documentation system.
 *
 * The sidebar, search index, breadcrumbs, prev/next navigation, and routing
 * are all derived from this file. To add a page: add an entry to a group
 * below, then (optionally) register a rich content component in
 * `content/index.tsx`. Pages without registered content fall back to an
 * informative scaffold rendered from the `purpose` / `description` here.
 */

export type DocStatus = 'ready' | 'draft';

export interface DocItem {
  /** URL slug, unique across all docs. Page lives at /docs/<slug>. */
  slug: string;
  /** Sidebar + page <h1> title. */
  title: string;
  /** One-line purpose, shown under the title and used by search. */
  purpose: string;
  /** Longer summary used for the scaffold intro and meta description. */
  description: string;
  /** `ready` pages have hand-authored content; `draft` render the scaffold. */
  status: DocStatus;
}

export interface DocGroup {
  label: string;
  items: DocItem[];
}

export const DOCS: DocGroup[] = [
  {
    label: 'Getting Started',
    items: [
      {
        slug: 'introduction',
        title: 'Introduction',
        purpose: 'What PromptSonar is and who it is for.',
        description:
          'PromptSonar is a deterministic, local-first AI Execution Path Analysis platform that surfaces security risks in prompts, agent workflows, repositories, skills, and MCP configurations before they reach production.',
        status: 'ready',
      },
      {
        slug: 'installation',
        title: 'Installation',
        purpose: 'Install the PromptSonar CLI and verify your setup.',
        description:
          'Install PromptSonar locally, confirm the install, and prepare your environment for your first scan. Local-first: no code leaves your machine.',
        status: 'ready',
      },
      {
        slug: 'quick-start',
        title: 'Quick Start',
        purpose: 'Run your first scan and read the verdict in under 5 minutes.',
        description:
          'Scan a prompt or repository, interpret the HIGH RISK / SAFE verdict, and follow the suggested fix. The fastest path from install to insight.',
        status: 'ready',
      },
      {
        slug: 'playground-guide',
        title: 'Playground Guide',
        purpose: 'Explore prompts interactively in the hosted Playground.',
        description:
          'Use the PromptSonar Playground to paste a prompt, watch the execution path, and inspect findings without installing anything.',
        status: 'ready',
      },
    ],
  },
  {
    label: 'Repository Analysis',
    items: [
      {
        slug: 'repository-scanning',
        title: 'Repository Scanning',
        purpose: 'Scan an entire repository for AI execution-path risks.',
        description:
          'Point PromptSonar at a repository to analyze prompts, agent workflows, skills, and MCP configurations across your whole codebase.',
        status: 'ready',
      },
      {
        slug: 'execution-path-analysis',
        title: 'Execution Path Analysis',
        purpose: 'How PromptSonar traces where a prompt can travel.',
        description:
          'Execution Path Analysis maps the chain from user input through tools, memory, and actions to find where untrusted input can reach a dangerous sink.',
        status: 'draft',
      },
      {
        slug: 'workflow-graphs',
        title: 'Workflow Graphs',
        purpose: 'Read the node-graph view of an agent workflow.',
        description:
          'Workflow Graphs visualize the nodes and edges of an agent run so you can see exactly where risk is introduced.',
        status: 'draft',
      },
      {
        slug: 'repository-reports',
        title: 'Repository Reports',
        purpose: 'Understand the per-repository findings report.',
        description:
          'Repository Reports aggregate findings, severities, and suppressions across a scan into a single reviewable summary.',
        status: 'draft',
      },
    ],
  },
  {
    label: 'Integrations',
    items: [
      {
        slug: 'cli-usage',
        title: 'CLI Usage',
        purpose: 'Command-line reference for everyday scanning.',
        description:
          'Reference for the PromptSonar CLI: commands, flags, exit codes, and output formats for local and automated use.',
        status: 'draft',
      },
      {
        slug: 'vscode-extension',
        title: 'VS Code Extension',
        purpose: 'Scan inline as you edit prompts and configs.',
        description:
          'The VS Code extension surfaces findings inline so you catch risky prompts and MCP configs before you commit.',
        status: 'draft',
      },
      {
        slug: 'github-actions',
        title: 'GitHub Actions',
        purpose: 'Gate pull requests on PromptSonar findings.',
        description:
          'Run PromptSonar in GitHub Actions to scan every pull request, annotate findings, and optionally fail the build on new HIGH RISK issues.',
        status: 'ready',
      },
      {
        slug: 'cicd-integration',
        title: 'CI/CD Integration',
        purpose: 'Wire PromptSonar into any pipeline.',
        description:
          'Patterns for running PromptSonar in GitLab CI, CircleCI, Jenkins, and other pipelines using the CLI and exit codes.',
        status: 'ready',
      },
    ],
  },
  {
    label: 'Rules & Detection',
    items: [
      {
        slug: 'owasp-llm-mapping',
        title: 'OWASP LLM Mapping',
        purpose: 'How findings map to the OWASP Top 10 for LLM Apps.',
        description:
          'Every PromptSonar rule maps to an OWASP LLM category so findings are explainable and align with an industry-standard taxonomy.',
        status: 'ready',
      },
      {
        slug: 'mcp-security-rules',
        title: 'MCP Security Rules',
        purpose: 'Detections for Model Context Protocol configurations.',
        description:
          'Rules that inspect MCP server configurations for wildcard permissions, auto-execution, and tool-hijacking risks.',
        status: 'ready',
      },
      {
        slug: 'confidence-scoring',
        title: 'Confidence Scoring',
        purpose: 'How PromptSonar rates the certainty of a finding.',
        description:
          'Confidence scoring expresses how certain a deterministic rule is about a finding, helping you triage and tune.',
        status: 'ready',
      },
      {
        slug: 'suppressions',
        title: 'Suppressions',
        purpose: 'Silence known-safe findings without losing signal.',
        description:
          'Suppress individual findings or whole rules with an auditable suppression file so reviews stay focused on what is new.',
        status: 'ready',
      },
      {
        slug: 'false-positive-handling',
        title: 'False Positive Handling',
        purpose: 'Triage, report, and tune away false positives.',
        description:
          'A workflow for confirming false positives, suppressing them safely, and improving rules over time.',
        status: 'ready',
      },
    ],
  },
  {
    label: 'Outputs',
    items: [
      {
        slug: 'json-reports',
        title: 'JSON Reports',
        purpose: 'The machine-readable findings format.',
        description:
          'The JSON report is the canonical, machine-readable output that every other format is derived from.',
        status: 'ready',
      },
      {
        slug: 'sarif-export',
        title: 'SARIF Export',
        purpose: 'Export findings as SARIF for code-scanning tools.',
        description:
          'Export PromptSonar findings as SARIF so they appear in GitHub code scanning and other SARIF-aware tools.',
        status: 'ready',
      },
      {
        slug: 'html-reports',
        title: 'HTML Reports',
        purpose: 'A shareable, human-readable report.',
        description:
          'Generate a self-contained HTML report to share findings with teammates who do not use the CLI.',
        status: 'ready',
      },
      {
        slug: 'prompt-sbom',
        title: 'Prompt SBOM',
        purpose: 'An inventory of every prompt and tool in your project.',
        description:
          'The Prompt SBOM is a software-bill-of-materials-style inventory of the prompts, tools, and MCP servers PromptSonar discovered.',
        status: 'ready',
      },
    ],
  },
  {
    label: 'Methodology',
    items: [
      {
        slug: 'how-promptsonar-works',
        title: 'How PromptSonar Works',
        purpose: 'The analysis pipeline, end to end.',
        description:
          'A tour of how PromptSonar parses inputs, builds an execution path, applies deterministic rules, and produces a verdict.',
        status: 'ready',
      },
      {
        slug: 'static-analysis-philosophy',
        title: 'Static Analysis Philosophy',
        purpose: 'Why PromptSonar analyzes statically and locally.',
        description:
          'The design principles behind a static, local-first approach to AI security analysis.',
        status: 'ready',
      },
      {
        slug: 'deterministic-detection',
        title: 'Deterministic Detection',
        purpose: 'Why the same input always yields the same verdict.',
        description:
          'Deterministic detection means no model calls in the hot path: the same input always produces the same, explainable result.',
        status: 'ready',
      },
      {
        slug: 'benchmarking-strategy',
        title: 'Benchmarking Strategy',
        purpose: 'How detection quality is measured.',
        description:
          'How PromptSonar measures precision and recall against a labeled corpus to keep detections honest.',
        status: 'ready',
      },
    ],
  },
  {
    label: 'Learn',
    items: [
      {
        slug: 'what-is-prompt-injection',
        title: 'What is Prompt Injection?',
        purpose: 'A plain-language primer on prompt injection.',
        description:
          'Understand prompt injection: how untrusted input hijacks an LLM, why it matters, and how PromptSonar detects it.',
        status: 'ready',
      },
      {
        slug: 'what-is-mcp-security',
        title: 'What is MCP Security?',
        purpose: 'Security risks introduced by the Model Context Protocol.',
        description:
          'An introduction to the Model Context Protocol and the security considerations of giving agents tools.',
        status: 'ready',
      },
      {
        slug: 'agent-security-fundamentals',
        title: 'Agent Security Fundamentals',
        purpose: 'Core concepts for securing autonomous agents.',
        description:
          'The fundamentals of agent security: trust boundaries, tool permissions, approval steps, and sinks.',
        status: 'ready',
      },
      {
        slug: 'ai-workflow-security-best-practices',
        title: 'AI Workflow Security Best Practices',
        purpose: 'Practical guardrails for production AI workflows.',
        description:
          'A checklist of best practices for shipping AI workflows that resist injection and tool abuse.',
        status: 'ready',
      },
    ],
  },
];

/** Flattened, in-order list of every doc item. */
export const ALL_DOCS: DocItem[] = DOCS.flatMap((g) => g.items);

/** Look up a single doc item by slug. */
export function getDoc(slug: string): DocItem | undefined {
  return ALL_DOCS.find((d) => d.slug === slug);
}

/** Find the group label that contains a slug (used for breadcrumbs). */
export function getGroupLabel(slug: string): string | undefined {
  return DOCS.find((g) => g.items.some((i) => i.slug === slug))?.label;
}

/** Previous / next items in reading order, for footer navigation. */
export function getPrevNext(slug: string): {
  prev: DocItem | null;
  next: DocItem | null;
} {
  const idx = ALL_DOCS.findIndex((d) => d.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? ALL_DOCS[idx - 1] : null,
    next: idx < ALL_DOCS.length - 1 ? ALL_DOCS[idx + 1] : null,
  };
}

/** The first page users should land on from "Quick start". */
export const DEFAULT_DOC_SLUG = 'introduction';
