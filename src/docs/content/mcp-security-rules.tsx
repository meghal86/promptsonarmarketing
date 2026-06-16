import { H2, P, Lead, UL, LI, A } from '../components/prose';
import { CodeBlock } from '../components/CodeBlock';
import { Admonition } from '../components/Admonition';

export function McpSecurityRules() {
  return (
    <>
      <Lead>
        Rules that inspect MCP server configurations for wildcard permissions,
        auto-execution, and tool-hijacking risks.
      </Lead>

      <H2>Why MCP security matters</H2>
      <P>
        Model Context Protocol (MCP) servers connect language models to external
        tools and resources. Misconfigured permissions or unsafe execution
        patterns can allow untrusted instructions to influence sensitive
        operations. PromptSonar helps identify these risks before MCP
        configurations reach production.
      </P>

      <H2>Common MCP risks</H2>
      <UL>
        <LI>Wildcard permissions.</LI>
        <LI>Overly broad tool scopes.</LI>
        <LI>Automatic execution without safeguards.</LI>
        <LI>Tool-hijacking opportunities.</LI>
      </UL>

      <Admonition type="note" title="MCP in practice">
        The risk is not the protocol itself. The risk is exposing powerful tools
        and resources to prompts without enough restriction, review, or
        approval.
      </Admonition>

      <H2>Example finding</H2>
      <P>
        A representative MCP finding shows how PromptSonar reports the issue,
        the evidence that triggered it, and the recommended fix.
      </P>
      <CodeBlock
        language="text"
        title="example finding"
        code={`Verdict: HIGH RISK
Rule ID: mcp-tool-hijacking
Evidence: MCP server configuration includes autoExecute: true and permissions: "*".
Root cause: The server can invoke tools without approval and exposes all permissions to untrusted instructions.
Recommended fix: Disable automatic execution, scope permissions to the minimum required tools, and require explicit approval for sensitive actions.`}
      />

      <H2>Next steps</H2>
      <P>
        Compare these patterns with <A href="/docs/repository-scanning">Repository
        Scanning</A> to see how PromptSonar finds MCP risks across a codebase, or
        review <A href="/docs/owasp-llm-mapping">OWASP LLM Mapping</A> to see how
        related findings are categorized.
      </P>
    </>
  );
}
