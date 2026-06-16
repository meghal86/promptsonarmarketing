import { H2, P, Lead, UL, OL, LI, A, Todo } from '../components/prose';
import { Admonition } from '../components/Admonition';

export function Introduction() {
  return (
    <>
      <Lead>
        PromptSonar is a deterministic, local-first AI Execution Path Analysis
        platform. It helps developers identify security risks in prompts, agent
        workflows, repositories, skills, and MCP configurations before they reach
        production.
      </Lead>

      <H2>What problem it solves</H2>
      <P>
        Modern AI applications give models tools: shells, file systems, HTTP
        clients, and Model Context Protocol (MCP) servers. The moment untrusted
        input can influence which tool runs, you have an execution-path problem.
        A single crafted prompt can travel from user input, through your agent,
        and into a dangerous sink.
      </P>
      <P>
        PromptSonar analyzes those execution paths statically and deterministically,
        then reports findings with the exact rule, root cause, supporting evidence,
        and a recommended fix.
      </P>

      <H2>Core principles</H2>
      <UL>
        <LI>
          <strong>Deterministic.</strong> The same input always produces the same
          result. No model calls in the hot path and no non-deterministic behavior.
        </LI>
        <LI>
          <strong>Local-first.</strong> Analysis runs entirely on your machine.
          Your prompts and code stay within your environment.
        </LI>
        <LI>
          <strong>Explainable.</strong> Every finding identifies the rule that
          fired, the evidence that triggered it, and its OWASP LLM mapping.
        </LI>
        <LI>
          <strong>Repository-first.</strong> Use the same engine to analyze a
          single prompt or an entire repository.
        </LI>
      </UL>

      <H2>What you can analyze</H2>
      <UL>
        <LI>Individual prompts and system messages.</LI>
        <LI>Agent workflows and their tool chains.</LI>
        <LI>Repositories, including skills and configuration files.</LI>
        <LI>MCP server configurations and permission scopes.</LI>
      </UL>

      <Admonition type="info" title="Local-first by design">
        PromptSonar performs static analysis on your machine. There is no
        account to create and no code is uploaded to run a scan.
      </Admonition>

      <H2>How a scan works</H2>
      <OL>
        <LI>PromptSonar parses prompts, repositories, and configurations into execution paths.</LI>
        <LI>Deterministic rules analyze each path for risky patterns and unsafe behavior.</LI>
        <LI>
          Findings are mapped to OWASP LLM guidance and enriched with evidence,
          severity, and recommended fixes.
        </LI>
        <LI>
          Export reports as JSON, SARIF, or HTML — or integrate PromptSonar into
          pull request workflows.
        </LI>
      </OL>

      <Todo>
        [Architecture diagram coming soon: Prompt → Execution Path → Rule Engine →
        Findings → Reports]
      </Todo>

      <H2>Next steps</H2>
      <P>
        Ready to try it? <A href="/docs/installation">Install the CLI</A>, then
        follow the <A href="/docs/quick-start">Quick Start</A> to run your first
        scan in under five minutes. To understand the philosophy behind the
        engine, read{' '}
        <A href="/docs/deterministic-detection">Deterministic Detection</A>.
      </P>
    </>
  );
}
