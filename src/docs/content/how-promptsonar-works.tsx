import { H2, P, Lead, OL, LI, UL, A } from '../components/prose';
import { CodeBlock } from '../components/CodeBlock';
import { Admonition } from '../components/Admonition';

export function HowPromptSonarWorks() {
  return (
    <>
      <Lead>
        A tour of how PromptSonar parses inputs, builds an execution path,
        applies deterministic rules, and produces a verdict.
      </Lead>

      <H2>The analysis pipeline</H2>
      <OL>
        <LI>
          <strong>Input discovery.</strong> PromptSonar locates prompts,
          repositories, and configurations that should be analyzed.
        </LI>
        <LI>
          <strong>Execution-path construction.</strong> Inputs are modeled as
          paths that can travel through workflows, tools, memory, and MCP
          configurations.
        </LI>
        <LI>
          <strong>Deterministic rule evaluation.</strong> Rules inspect each
          path for patterns that can reach sensitive operations.
        </LI>
        <LI>
          <strong>Evidence collection.</strong> PromptSonar captures the text and
          locations that triggered the rule.
        </LI>
        <LI>
          <strong>Confidence scoring.</strong> Findings are assigned a level of
          confidence to support triage and review.
        </LI>
        <LI>
          <strong>Verdict generation.</strong> The analysis resolves to an
          overall result such as HIGH RISK or SAFE.
        </LI>
        <LI>
          <strong>Output rendering.</strong> Findings are rendered for human and
          machine workflows, including JSON, SARIF, HTML, and Prompt SBOM
          outputs.
        </LI>
      </OL>

      <Admonition type="info" title="Methodology first">
        The pipeline is designed to explain how a result was reached, not just
        to label the input. That makes the output easier to review, reproduce,
        and automate.
      </Admonition>

      <H2>Why deterministic analysis</H2>
      <P>
        PromptSonar does not rely on language models during analysis. The same
        input always produces the same result, improving explainability,
        reproducibility, and suitability for automated workflows.
      </P>

      <H2>Execution paths provide context</H2>
      <P>
        Rather than evaluating prompts in isolation, PromptSonar models how
        instructions can travel through workflows, tools, memory, and MCP
        configurations. These execution paths help identify meaningful risks and
        reduce ambiguity.
      </P>

      <H2>What every finding includes</H2>
      <P>
        A finding is more useful when it explains what triggered it and how to
        act on it. PromptSonar findings include:
      </P>
      <UL>
        <LI>Triggered rules</LI>
        <LI>Supporting evidence</LI>
        <LI>Affected locations</LI>
        <LI>Confidence levels</LI>
        <LI>Recommended fixes</LI>
      </UL>
      <P>
        That structure makes it easier to compare findings across scans and to
        separate actionable issues from items that need more review.
      </P>

      <H2>Architecture diagram</H2>
      <CodeBlock
        language="text"
        title="promptsonar-analysis-flow"
        code={`Prompt / Repository / MCP

↓

Discovery Layer

↓

Execution Path Builder

↓

Deterministic Rule Engine

↓

Evidence Collection

↓

Confidence Scoring

↓

Verdict + Recommendations

↓

JSON • SARIF • HTML • Prompt SBOM`}
      />

      <H2>Next steps</H2>
      <P>
        See <A href="/docs/deterministic-detection">Deterministic Detection</A>{' '}
        for the reasoning behind deterministic analysis, or review{' '}
        <A href="/docs/repository-scanning">Repository Scanning</A> to see the
        pipeline applied to a codebase.
      </P>
    </>
  );
}
