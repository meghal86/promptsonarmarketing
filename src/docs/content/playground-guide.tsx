import { H2, P, Lead, UL, LI, A } from '../components/prose';
import { Admonition } from '../components/Admonition';

export function PlaygroundGuide() {
  return (
    <>
      <Lead>
        The Playground lets you analyze a prompt in the browser — paste it, watch
        the execution path, and inspect findings without installing anything.
      </Lead>

      <Admonition type="tip" title="Open the Playground">
        Launch the hosted app at{' '}
        <A href="https://promptsonar.vercel.app">promptsonar.vercel.app</A> to
        follow along.
      </Admonition>

      <H2>When to use the Playground</H2>
      <UL>
        <LI>Evaluating PromptSonar before installing the CLI.</LI>
        <LI>Quickly sanity-checking a single prompt or MCP snippet.</LI>
        <LI>Demonstrating a finding to a teammate with a shareable view.</LI>
      </UL>
      <P>
        For repositories, CI gating, and exports, use the{' '}
        <A href="/docs/cli-usage">CLI</A> instead.
      </P>

      <H2>The interface</H2>
      <P>The Playground is organized into three areas:</P>
      <UL>
        <LI>
          <strong>Input</strong> — paste a prompt, agent config, or MCP snippet.
        </LI>
        <LI>
          <strong>Execution path</strong> — a visual representation of how
          instructions travel and where risk is introduced.
        </LI>
        <LI>
          <strong>Findings</strong> — the overall verdict, supporting evidence,
          triggered rules, and recommended fixes.
        </LI>
      </UL>

      <H2>Walkthrough</H2>
      <P>
        Paste a prompt into the input panel and run the analysis. The execution
        path helps explain how instructions flow through the system, while the
        findings panel highlights the triggered rules, evidence, and recommended
        fixes.
      </P>

      <Admonition type="info" title="Same engine, two surfaces">
        The Playground and CLI use the same deterministic detection engine,
        ensuring consistent findings across both experiences.
      </Admonition>

      <H2>Next steps</H2>
      <P>
        Ready to scan real projects? Install the CLI via{' '}
        <A href="/docs/installation">Installation</A> and follow the{' '}
        <A href="/docs/quick-start">Quick Start</A>.
      </P>
    </>
  );
}
