import { H2, P, Lead, UL, LI, A } from '../components/prose';
import { Admonition } from '../components/Admonition';

export function Suppressions() {
  return (
    <>
      <Lead>
        Suppressions let you silence findings you have reviewed and accepted —
        without losing signal on everything new. They keep reviews focused and
        your build green for known-safe cases.
      </Lead>

      <H2>When to suppress</H2>
      <UL>
        <LI>A finding is a confirmed false positive.</LI>
        <LI>
          A risk has been accepted and documented elsewhere (with a reason and
          an owner).
        </LI>
        <LI>
          You are adopting PromptSonar on an existing repo and want to gate only
          on <em>new</em> findings.
        </LI>
      </UL>

      <Admonition type="warning" title="Suppress with intent">
        A suppression is a security decision. Always record why a finding is
        safe to ignore so the next reviewer can trust it.
      </Admonition>

      <H2>The suppressions file</H2>
      <P>
        Suppressions live in a checked-in file so they are auditable and review
        as part of a pull request. The exact file shape should be documented in
        your repository alongside the policy that governs who can add or modify
        suppressions.
      </P>
      <P>
        Keep the metadata concise and reviewable: identify the finding, explain
        why it is safe to ignore, and make sure the decision is easy for the
        next reviewer to understand.
      </P>

      <H2>Suppress a single finding</H2>
      <P>
        Scope a suppression as narrowly as possible — to a specific rule and
        path — so it never hides an unrelated, genuine issue.
      </P>
      <P>
        Prefer the smallest possible scope. A narrow suppression is easier to
        audit, easier to revoke, and less likely to mask a real regression.
      </P>

      <H2>Suppress a rule</H2>
      <P>
        If a rule does not apply to your project at all, you can disable it
        globally. Prefer per-finding suppression where you can, since a global
        disable removes the rule everywhere.
      </P>
      <P>
        Use this only when the rule is structurally irrelevant to your codebase.
        If the rule might apply later, keep the suppression narrow and revisit it
        as the code changes.
      </P>

      <Admonition type="tip" title="Expire your suppressions">
        Where supported, set an expiry so accepted risks resurface for review
        instead of silently living forever.
      </Admonition>

      <H2>Keep suppressions honest</H2>
      <UL>
        <LI>Review suppressions in pull requests like any other code.</LI>
        <LI>Require a reason on every entry.</LI>
        <LI>Re-triage on a schedule; remove entries that no longer apply.</LI>
      </UL>

      <H2>Next steps</H2>
      <P>
        Learn how to confirm a finding is safe to suppress in{' '}
        <A href="/docs/false-positive-handling">False Positive Handling</A>, or
        see how findings are rated in{' '}
        <A href="/docs/confidence-scoring">Confidence Scoring</A>.
      </P>
    </>
  );
}
