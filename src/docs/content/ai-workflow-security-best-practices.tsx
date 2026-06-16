import { H2, P, Lead, UL, LI, A } from '../components/prose';
import { Admonition } from '../components/Admonition';

export function AiWorkflowSecurityBestPractices() {
  return (
    <>
      <Lead>
        A checklist of best practices for shipping AI workflows that resist
        injection and tool abuse.
      </Lead>

      <H2>Security checklist</H2>
      <UL>
        <LI>Separate trusted and untrusted inputs.</LI>
        <LI>Limit tool permissions to the minimum required scope.</LI>
        <LI>Require approval for sensitive actions.</LI>
        <LI>Understand execution paths through workflows and tools.</LI>
        <LI>Review prompt and MCP configuration changes carefully.</LI>
        <LI>Treat suppressions as documented security decisions.</LI>
      </UL>

      <Admonition type="info" title="Practical default">
        Small, reviewable changes are easier to reason about than broad
        permissions and hidden behavior. Keep the workflow simple where you can,
        and make exceptions explicit when you cannot.
      </Admonition>

      <H2>Common mistakes</H2>
      <UL>
        <LI>Granting broad tool access by default.</LI>
        <LI>Automatically executing sensitive operations.</LI>
        <LI>Mixing trusted instructions with untrusted inputs.</LI>
        <LI>Ignoring configuration drift.</LI>
        <LI>Treating agent definitions as documentation instead of code.</LI>
      </UL>

      <P>
        These issues often appear gradually as workflows evolve. The safest
        approach is to review them the same way you would review code changes:
        deliberately and with context.
      </P>

      <H2>How PromptSonar helps</H2>
      <P>
        PromptSonar helps teams review execution paths, configurations, and
        findings against these principles, supporting more informed security
        decisions.
      </P>

      <H2>Next steps</H2>
      <P>
        Review <A href="/docs/how-promptsonar-works">How PromptSonar Works</A>{' '}
        to see how execution paths are modeled, or read{' '}
        <A href="/docs/agent-security-fundamentals">Agent Security Fundamentals</A>{' '}
        for the core concepts behind secure agent design.
      </P>
    </>
  );
}
