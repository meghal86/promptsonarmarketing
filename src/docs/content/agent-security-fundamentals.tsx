import { H2, P, Lead, A } from '../components/prose';
import { Admonition } from '../components/Admonition';

export function AgentSecurityFundamentals() {
  return (
    <>
      <Lead>
        The fundamentals of agent security: trust boundaries, tool permissions,
        approval steps, and sinks.
      </Lead>

      <H2>What makes agent security different?</H2>
      <P>
        Traditional applications execute predefined logic. Agents make decisions
        about which tools to use and when to use them. This flexibility
        introduces new security considerations.
      </P>

      <H2>Trust boundaries</H2>
      <P>
        Trust boundaries separate trusted instructions from untrusted inputs.
        User messages, retrieved documents, and external systems should not
        automatically gain the same level of authority as developer-defined
        behavior.
      </P>

      <H2>Tool permissions</H2>
      <P>
        The capabilities granted to an agent determine its potential impact.
        Broad permissions increase flexibility but also expand the consequences
        of mistakes or manipulation.
      </P>

      <H2>Approval steps</H2>
      <P>
        Sensitive actions such as deleting files, modifying infrastructure, or
        accessing credentials may benefit from explicit approval before
        execution.
      </P>

      <H2>Sensitive sinks</H2>
      <P>
        Sinks are sensitive operations where risk materializes. Examples include
        shell execution, filesystem access, credential exposure, and external
        network requests.
      </P>

      <Admonition type="info" title="Review the path, not just the prompt">
        In agent systems, the important question is often where the instructions
        can travel and what they can reach. That is why execution paths matter
        as much as the original input.
      </Admonition>

      <H2>How PromptSonar helps</H2>
      <P>
        PromptSonar helps teams understand execution paths that cross trust
        boundaries and reach sensitive sinks. By surfacing evidence and context,
        PromptSonar supports informed security reviews.
      </P>

      <H2>Next steps</H2>
      <P>
        Review <A href="/docs/how-promptsonar-works">How PromptSonar Works</A>{' '}
        for the analysis pipeline, or read{' '}
        <A href="/docs/what-is-prompt-injection">What is Prompt Injection?</A>{' '}
        and <A href="/docs/what-is-mcp-security">What is MCP Security?</A> for
        related concepts.
      </P>
    </>
  );
}
