import { H2, P, Lead, UL, OL, LI, A, Code, Todo } from '../components/prose';
import { Admonition } from '../components/Admonition';

export function Introduction() {
  return (
    <>
      <Lead>
        PromptSonar is a deterministic, local-first AI Execution Path Analysis
        platform. It helps developers find security risks in prompts, agent
        workflows, repositories, skills, and MCP configurations — before they
        reach production.
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
        PromptSonar analyzes that path statically and deterministically, then
        gives you a clear verdict — <Code>HIGH RISK</Code> or <Code>SAFE</Code>{' '}
        — with the exact rule, the root cause, and a suggested fix.
      </P>

      <H2>Core principles</H2>
      <UL>
        <LI>
          <strong>Deterministic.</strong> The same input always yields the same
          verdict. No model calls in the hot path, nothing to flake.
        </LI>
        <LI>
          <strong>Local-first.</strong> Analysis runs on your machine. Your
          prompts and code do not leave your environment.
        </LI>
        <LI>
          <strong>Explainable.</strong> Every finding names the rule that fired,
          the text that triggered it, and where it maps in the OWASP LLM Top 10.
        </LI>
        <LI>
          <strong>Repository-first.</strong> Scan a single prompt or an entire
          codebase with the same engine.
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
        <LI>PromptSonar parses your input into an execution path.</LI>
        <LI>Deterministic rules evaluate each node and edge of that path.</LI>
        <LI>
          Findings are scored, mapped to OWASP LLM categories, and rendered as a
          verdict with a root cause.
        </LI>
        <LI>
          You export the result as JSON, SARIF, or HTML — or gate a pull request
          on it.
        </LI>
      </OL>

      <Todo>Add an architecture diagram of the analysis pipeline.</Todo>

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
