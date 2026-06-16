import { H2, P, Lead, UL, LI, A, Todo } from '../components/prose';
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
          <strong>Execution path</strong> — a node chain showing where the input
          travels and where risk is introduced.
        </LI>
        <LI>
          <strong>Findings</strong> — the verdict, root cause, and suggested fix.
        </LI>
      </UL>
      <Todo>Add an annotated screenshot of the Playground layout.</Todo>

      <H2>Walkthrough</H2>
      <P>
        Paste a prompt into the input panel and run the analysis. The execution
        path animates each node, highlighting the step that introduces risk. The
        findings panel then resolves to a verdict with the triggering rule.
      </P>
      <Todo>Add a step-by-step walkthrough with screenshots.</Todo>

      <Admonition type="info" title="Same engine, two surfaces">
        The Playground and the CLI share the same deterministic detection
        engine, so a prompt produces the same verdict in either place.
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
