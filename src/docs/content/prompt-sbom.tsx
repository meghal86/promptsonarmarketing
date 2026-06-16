import { H2, P, Lead, UL, LI, A } from '../components/prose';
import { Admonition } from '../components/Admonition';

export function PromptSbom() {
  return (
    <>
      <Lead>
        The Prompt SBOM is a software-bill-of-materials-style inventory of the
        prompts, tools, and MCP servers PromptSonar discovered.
      </Lead>

      <H2>Why Prompt SBOM matters</H2>
      <P>
        AI capabilities are often distributed across prompts, workflows, tools,
        and MCP configurations. A Prompt SBOM provides a centralized inventory
        of these assets, making them easier to understand, review, and govern.
      </P>

      <H2>What Prompt SBOM contains</H2>
      <P>
        Prompt SBOM is an inventory view of the AI assets PromptSonar discovers
        in your project. The focus is on visibility and governance: what exists,
        where it lives, and how the pieces of your AI stack fit together.
      </P>
      <UL>
        <LI>Prompts and system instructions embedded in source files.</LI>
        <LI>Tools that agents can reach or invoke.</LI>
        <LI>Agent workflows and their tool chains.</LI>
        <LI>Skills and their declared capabilities.</LI>
        <LI>MCP server configurations and permission scopes.</LI>
      </UL>

      <Admonition type="info" title="Inventory, not findings">
        Prompt SBOM is about discovery and governance. It helps teams see the AI
        surface area they are managing before they decide which parts need
        deeper review.
      </Admonition>

      <H2>Common use cases</H2>
      <UL>
        <LI>Discovering AI assets across repositories.</LI>
        <LI>Supporting security and architecture reviews.</LI>
        <LI>Understanding which tools and MCP servers exist within a project.</LI>
        <LI>Tracking changes in AI capabilities over time.</LI>
        <LI>Supporting governance initiatives.</LI>
      </UL>

      <Admonition type="tip" title="Useful for ownership and review">
        A centralized inventory makes it easier to assign ownership, ask the
        right questions in review, and keep track of what changed between
        releases.
      </Admonition>

      <H2>Next steps</H2>
      <P>
        Use <A href="/docs/repository-scanning">Repository Scanning</A> to see
        how PromptSonar finds these assets across a codebase, or review{' '}
        <A href="/docs/json-reports">JSON Reports</A> for the machine-readable
        output behind the inventory.
      </P>
    </>
  );
}
