import { H2, P, Lead, OL, LI, A } from '../components/prose';
import { Admonition } from '../components/Admonition';

export function FalsePositiveHandling() {
  return (
    <>
      <Lead>
        A workflow for confirming false positives, suppressing them safely, and
        improving rules over time.
      </Lead>

      <H2>Triage workflow</H2>
      <OL>
        <LI>
          <strong>Review the evidence.</strong> Inspect the execution path,
          supporting evidence, and triggered rules.
        </LI>
        <LI>
          <strong>Validate the finding.</strong> Determine whether the reported
          behavior is reachable and relevant within your environment.
        </LI>
        <LI>
          <strong>Suppress carefully.</strong> If the finding is safe to ignore,
          document the rationale and suppress it as narrowly as possible.
        </LI>
        <LI>
          <strong>Improve over time.</strong> Track recurring false positives and
          refine rules where appropriate.
        </LI>
      </OL>

      <H2>Use confidence scoring to prioritize</H2>
      <P>Use confidence to decide what needs immediate attention and what needs more review:</P>
      <UL>
        <LI>Confirmed findings should receive immediate attention.</LI>
        <LI>Probable findings deserve review and validation.</LI>
        <LI>Potential findings may require additional investigation before action.</LI>
      </UL>

      <Admonition type="info" title="Deterministic and explainable">
        PromptSonar's findings are deterministic, so the same input produces the
        same evidence and the same confidence level. That consistency makes it
        easier to compare findings over time and keep triage decisions stable.
      </Admonition>

      <H2>Suppressions are the last step</H2>
      <P>
        Suppressions should follow validation, not replace it. Every
        suppression should include a clear rationale so future reviewers
        understand the decision.
      </P>
      <P>
        Keep suppressions narrow, review them like code, and revisit them when
        the surrounding implementation changes.
      </P>

      <H2>Keep improving the rules</H2>
      <P>
        When the same false positive appears repeatedly, capture the pattern and
        refine the rule or triage guidance where appropriate. Mature workflows
        treat false positives as feedback that improves future reviews.
      </P>

      <H2>Next steps</H2>
      <P>
        Review <A href="/docs/suppressions">Suppressions</A> for safe, auditable
        ways to record accepted findings, or read{' '}
        <A href="/docs/confidence-scoring">Confidence Scoring</A> to understand
        how PromptSonar helps prioritize triage.
      </P>
    </>
  );
}
