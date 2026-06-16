import { H2, P, Lead, UL, LI, A } from '../components/prose';
import { Admonition } from '../components/Admonition';

export function BenchmarkingStrategy() {
  return (
    <>
      <Lead>
        How PromptSonar measures precision and recall against a labeled corpus
        to keep detections honest.
      </Lead>

      <H2>Why benchmarking matters</H2>
      <P>
        Benchmarking helps validate detection quality, identify regressions,
        and improve confidence in PromptSonar findings over time.
      </P>

      <H2>Evaluation methodology</H2>
      <P>
        PromptSonar is evaluated against labeled examples that represent the
        kinds of prompts, workflows, repositories, skills, and MCP
        configurations the product is designed to analyze. Those examples act as
        fixtures for checking whether rules continue to fire where expected and
        stay quiet where they should.
      </P>
      <P>
        The public documentation does not enumerate the full corpus here, so the
        important part is the process: representative inputs are labeled, the
        expected outcome is recorded, and the analysis is compared against those
        labels to verify behavior before changes ship.
      </P>
      <Admonition type="note" title="Transparent by design">
        Benchmarking is used as a validation process, not a scorecard. The goal
        is to confirm that detections still match the labeled examples and to
        make regressions visible before they reach production.
      </Admonition>

      <H2>Metrics</H2>
      <P>
        PromptSonar tracks the standard quality metrics you would expect for a
        rule-based analysis system:
      </P>
      <UL>
        <LI>Precision</LI>
        <LI>Recall</LI>
        <LI>False-positive rate</LI>
        <LI>False-negative rate</LI>
        <LI>Throughput</LI>
      </UL>
      <P>
        These metrics help distinguish detection quality from scan performance,
        which is important when the same engine is used interactively and in CI.
      </P>

      <H2>Continuous improvement</H2>
      <P>
        Benchmarking results are used to validate new rules, check existing
        rules after changes, and catch regressions before they affect users.
        When a rule is updated, the labeled examples provide a repeatable way to
        confirm that the behavior still matches expectations.
      </P>
      <P>
        That feedback loop keeps PromptSonar honest: rules can evolve, but their
        behavior should remain explainable and stable for the same input.
      </P>

      <H2>Next steps</H2>
      <P>
        Review <A href="/docs/deterministic-detection">Deterministic Detection</A>{' '}
        for the execution model behind stable results, or see{' '}
        <A href="/docs/false-positive-handling">False Positive Handling</A> for
        how benchmark findings feed triage and rule improvement.
      </P>
    </>
  );
}
