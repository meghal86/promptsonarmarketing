import { H2, P, Lead, UL, LI, A } from '../components/prose';
import { Admonition } from '../components/Admonition';

export function StaticAnalysisPhilosophy() {
  return (
    <>
      <Lead>
        The design principles behind a static, local-first approach to AI
        security analysis.
      </Lead>

      <H2>Why static analysis</H2>
      <P>
        Static analysis provides predictable, explainable results. The same
        input produces the same output, making findings reproducible and suitable
        for automation.
      </P>

      <H2>Why local-first</H2>
      <P>
        Prompts, repositories, and agent configurations often contain sensitive
        information. Running analysis locally helps teams evaluate AI systems
        without uploading code or requiring external services.
      </P>

      <H2>Trade-offs</H2>
      <P>
        Static analysis cannot prove exploitability. Instead, PromptSonar
        focuses on identifying meaningful execution paths, surfacing evidence,
        and helping teams prioritize review.
      </P>

      <Admonition type="info" title="A deliberate trade-off">
        PromptSonar favors clear results over speculative scoring. That means
        teams get a stable basis for review, but they still need to apply human
        judgment when evaluating whether a path is relevant in their
        environment.
      </Admonition>

      <H2>What PromptSonar optimizes for</H2>
      <UL>
        <LI>Explainability over opacity</LI>
        <LI>Consistency over non-determinism</LI>
        <LI>Automation over manual review</LI>
        <LI>Evidence over intuition</LI>
      </UL>

      <P>
        These priorities shape how PromptSonar presents findings and why its
        output is suited to engineering and security workflows that need stable,
        reviewable results.
      </P>

      <H2>Next steps</H2>
      <P>
        Review <A href="/docs/how-promptsonar-works">How PromptSonar Works</A>{' '}
        for the end-to-end analysis pipeline, or see{' '}
        <A href="/docs/repository-scanning">Repository Scanning</A> to apply the
        philosophy to a codebase.
      </P>
    </>
  );
}
