import { H2, P, Lead, UL, LI, A } from '../components/prose';
import { Admonition } from '../components/Admonition';

export function WhatIsMcpSecurity() {
  return (
    <>
      <Lead>
        An introduction to the Model Context Protocol and the security
        considerations of giving agents tools.
      </Lead>

      <H2>What is MCP?</H2>
      <P>
        Model Context Protocol (MCP) provides a standardized way for language
        models to interact with external tools and resources. Rather than
        generating text alone, agents can perform actions such as reading
        files, making network requests, or invoking specialized capabilities.
      </P>

      <H2>Why MCP matters</H2>
      <P>
        MCP expands what AI systems can do. By connecting models to tools,
        organizations can automate workflows and build more capable agents.
      </P>

      <H2>Why MCP introduces security considerations</H2>
      <P>
        Granting models access to tools changes the security model. Misconfigured
        permissions, automatic execution paths, and overly broad capabilities can
        increase the impact of prompt injection and other attacks.
      </P>

      <H2>Common MCP security risks</H2>
      <UL>
        <LI>Wildcard permissions</LI>
        <LI>Excessive tool access</LI>
        <LI>Automatic execution without safeguards</LI>
        <LI>Tool hijacking opportunities</LI>
      </UL>

      <Admonition type="note" title="Plain-language summary">
        The core issue is simple: once an agent can reach tools, mistakes in
        configuration or instruction handling can have real operational impact.
      </Admonition>

      <H2>How PromptSonar helps</H2>
      <P>
        PromptSonar helps identify execution paths and configuration patterns
        that may warrant further review. By combining deterministic analysis
        with execution-path context, PromptSonar supports safer adoption of
        MCP-enabled systems.
      </P>

      <H2>Next steps</H2>
      <P>
        Review <A href="/docs/mcp-security-rules">MCP Security Rules</A> for a
        closer look at the kinds of configurations PromptSonar inspects, or see{' '}
        <A href="/docs/repository-scanning">Repository Scanning</A> for how the
        same analysis applies across a codebase.
      </P>
    </>
  );
}
