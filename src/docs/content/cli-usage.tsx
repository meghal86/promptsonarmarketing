import { H2, P, Lead, UL, LI, A } from '../components/prose';
import { CodeBlock } from '../components/CodeBlock';
import { Admonition } from '../components/Admonition';
import { FileText } from 'lucide-react';

export function CliUsage() {
  return (
    <>
      <Lead>
        Reference for the PromptSonar CLI, including common commands, output
        formats, exit behaviors, and automation workflows.
      </Lead>

      <Admonition type="info" title="Local-first and deterministic">
        The CLI runs on your machine and uses the same deterministic detection
        engine as the rest of PromptSonar, so the same input produces the same
        findings.
      </Admonition>

      <H2>When to use the CLI</H2>
      <P>Use the CLI when you need to:</P>
      <UL>
        <LI>Analyze prompts locally during development.</LI>
        <LI>Scan repositories for execution-path risks.</LI>
        <LI>Integrate PromptSonar into CI/CD pipelines.</LI>
        <LI>Export findings for downstream tooling.</LI>
      </UL>

      <H2>Walkthrough</H2>
      <P>
        Start with a single prompt file to see the overall verdict, evidence,
        and recommended fix:
      </P>
      <CodeBlock
        language="bash"
        title="scan a prompt"
        code={`promptsonar scan prompt.txt`}
      />
      <P>
        To scan a repository, point the CLI at the project root:
      </P>
      <CodeBlock
        language="bash"
        title="scan a repository"
        code={`promptsonar scan ./my-repo`}
      />
      <P>
        For downstream tooling, export results in SARIF:
      </P>
      <CodeBlock
        language="bash"
        title="export SARIF"
        code={`promptsonar scan . --format sarif --output results.sarif`}
      />
      <P>
        For CI pipelines, fail builds on high-risk findings:
      </P>
      <CodeBlock
        language="bash"
        title="gate on findings"
        code={`promptsonar scan . --fail-on high`}
      />

      <Admonition type="tip" title="Read the output">
        PromptSonar reports an overall verdict, supporting evidence, the
        triggered rule, root cause, severity, and recommended fixes.
      </Admonition>

      <H2>Next steps</H2>
      <P>
        Continue with <A href="/docs/quick-start">Quick Start</A> for a guided
        first scan, <A href="/docs/repository-scanning">Repository Scanning</A>{' '}
        for codebases, or <A href="/docs/sarif-export">SARIF Export</A> and{' '}
        <A href="/docs/github-actions">GitHub Actions</A> for automation.
      </P>

      <div className="mt-8 flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-4 py-3 text-[13px] text-muted-foreground">
        <FileText className="h-4 w-4 shrink-0" />
        Found something missing? Open an issue or contribute improvements through
        GitHub.
      </div>
    </>
  );
}
