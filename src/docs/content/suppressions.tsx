import { H2, P, Lead, UL, LI, A, Todo } from '../components/prose';
import { CodeBlock } from '../components/CodeBlock';
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
          A risk is accepted and tracked elsewhere (with a reason and an owner).
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
        as part of a pull request. Each entry should identify the finding and
        explain the rationale.
      </P>
      <CodeBlock
        language="yaml"
        title="promptsonar.suppress.yml"
        code={`# TODO: confirm the suppression file name and schema
suppressions:
  - rule: shell-execution-reachable
    path: src/agents/legacy.ts
    reason: "Sandboxed runner; risk accepted — see TICKET-123"
    expires: 2026-12-31`}
      />
      <Todo>Confirm the exact suppression file name, location, and fields.</Todo>

      <H2>Suppress a single finding</H2>
      <P>
        Scope a suppression as narrowly as possible — to a specific rule and
        path — so it never hides an unrelated, genuine issue.
      </P>
      <Todo>Add an example of an inline / single-finding suppression.</Todo>

      <H2>Suppress a rule</H2>
      <P>
        If a rule does not apply to your project at all, you can disable it
        globally. Prefer per-finding suppression where you can, since a global
        disable removes the rule everywhere.
      </P>
      <CodeBlock
        language="yaml"
        title="disable a rule"
        code={`# TODO: confirm rule-level disable syntax
rules:
  some-rule-id: off`}
      />

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
