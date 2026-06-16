import { H2, P, Lead, UL, LI, A } from '../components/prose';
import { Admonition } from '../components/Admonition';

export function DeterministicDetection() {
  return (
    <>
      <Lead>
        Deterministic detection means no model calls in the hot path: the same
        input always produces the same, explainable result.
      </Lead>

      <H2>Why determinism matters</H2>
      <P>
        Deterministic analysis improves trust in automated workflows. Engineers
        can reproduce findings locally, compare results across environments, and
        rely on stable behavior in CI pipelines.
      </P>

      <H2>What PromptSonar avoids</H2>
      <P>
        PromptSonar avoids non-deterministic model behavior during analysis.
        Findings do not vary based on temperature settings, token sampling, or
        model updates.
      </P>

      <Admonition type="info" title="Operational consistency">
        The point of deterministic detection is not just repeatability for its
        own sake. Stable results make review, regression testing, and build
        gating easier to reason about.
      </Admonition>

      <H2>Operational benefits</H2>
      <UL>
        <LI>Reproducible scans</LI>
        <LI>Stable CI gating</LI>
        <LI>Consistent triage</LI>
        <LI>Reliable regression testing</LI>
      </UL>

      <H2>Scope and limitations</H2>
      <P>
        Deterministic analysis prioritizes explainability and consistency. It
        does not attempt to simulate every possible runtime behavior.
      </P>
      <P>
        That trade-off keeps results stable and reviewable, but it also means
        teams should interpret findings in the context of how their systems are
        actually deployed.
      </P>

      <H2>Next steps</H2>
      <P>
        Review <A href="/docs/how-promptsonar-works">How PromptSonar Works</A>{' '}
        for the end-to-end analysis pipeline, or see{' '}
        <A href="/docs/static-analysis-philosophy">Static Analysis Philosophy</A>{' '}
        for the reasoning behind static, local-first analysis.
      </P>
    </>
  );
}
