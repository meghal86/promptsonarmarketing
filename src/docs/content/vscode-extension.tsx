import { H2, H3, P, Lead, OL, LI, A } from '../components/prose';
import { Admonition } from '../components/Admonition';

export function VscodeExtension() {
  return (
    <>
      <Lead>
        The VS Code extension surfaces findings inline so you catch risky prompts
        and MCP configs before you commit.
      </Lead>

      <Admonition type="info" title="Local-first and deterministic">
        PromptSonar runs on your machine and uses the same deterministic
        detection engine across its surfaces, so findings stay consistent while
        you work.
      </Admonition>

      <H2>Walkthrough</H2>
      <H3>Typical workflow</H3>
      <OL>
        <LI>
          Install the PromptSonar extension from the Visual Studio Code
          Marketplace.
        </LI>
        <LI>
          Open a workspace containing prompts, skills, or MCP configurations.
        </LI>
        <LI>Review findings directly within the editor as you work.</LI>
        <LI>Apply recommended fixes before committing changes.</LI>
      </OL>

      <H2>Next steps</H2>
      <P>
        Continue with <A href="/docs/quick-start">Quick Start</A> to see the
        same detection engine in action, or review{' '}
        <A href="/docs/repository-scanning">Repository Scanning</A> for
        codebase-wide analysis.
      </P>
    </>
  );
}
