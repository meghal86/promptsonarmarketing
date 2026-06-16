import { H2, P, Lead, A, RefTable, Todo } from '../components/prose';
import { Admonition } from '../components/Admonition';

export function OwaspLlmMapping() {
  return (
    <>
      <Lead>
        Every PromptSonar rule maps to a category in the OWASP Top 10 for Large
        Language Model Applications. That mapping makes findings explainable and
        aligns them with an industry-standard taxonomy.
      </Lead>

      <H2>Why we map to OWASP</H2>
      <P>
        Security teams already reason in OWASP terms. By tagging each finding
        with its OWASP LLM category, PromptSonar lets you triage with a shared
        vocabulary, report against a recognized framework, and prioritize the
        risks that matter most.
      </P>

      <H2>The categories</H2>
      <P>
        PromptSonar references the OWASP Top 10 for LLM Applications. The table
        below lists the canonical categories; the right column notes where
        PromptSonar focuses today.
      </P>
      <RefTable
        head={['OWASP LLM', 'Focus area']}
        rows={[
          ['LLM01', 'Prompt Injection'],
          ['LLM02', 'Sensitive Information Disclosure'],
          ['LLM03', 'Supply Chain'],
          ['LLM04', 'Data and Model Poisoning'],
          ['LLM05', 'Improper Output Handling'],
          ['LLM06', 'Excessive Agency'],
          ['LLM07', 'System Prompt Leakage'],
          ['LLM08', 'Vector and Embedding Weaknesses'],
          ['LLM09', 'Misinformation'],
          ['LLM10', 'Unbounded Consumption'],
        ]}
      />
      <Admonition type="note" title="Taxonomy version">
        Category names and numbering follow the OWASP Top 10 for LLM
        Applications. Refer to the official OWASP project for the authoritative,
        current list.
      </Admonition>
      <Todo>Confirm which OWASP LLM version PromptSonar targets and pin it here.</Todo>

      <H2>How a finding shows its mapping</H2>
      <P>
        Each finding carries its OWASP category alongside the rule id and
        severity, so you can see at a glance what class of risk it represents.
      </P>
      <Todo>Insert a sample finding showing the OWASP category field.</Todo>

      <H2>Map your rules to categories</H2>
      <P>
        When you tune detection, keep the OWASP mapping intact so reports stay
        consistent. Rules that fire on the same class of issue should share a
        category. For everyday triage, combine the OWASP tag with{' '}
        <A href="/docs/confidence-scoring">confidence scoring</A> to sort
        findings by both class and certainty.
      </P>

      <H2>Next steps</H2>
      <P>
        Dig into specific detections in{' '}
        <A href="/docs/mcp-security-rules">MCP Security Rules</A>, or learn how to
        quiet expected findings with{' '}
        <A href="/docs/suppressions">Suppressions</A>. New to the topic? Start
        with <A href="/docs/what-is-prompt-injection">What is Prompt Injection?</A>
      </P>
    </>
  );
}
