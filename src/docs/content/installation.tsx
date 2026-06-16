import { H2, P, Lead, UL, LI, A, Code } from '../components/prose';
import { CodeBlock } from '../components/CodeBlock';
import { Admonition } from '../components/Admonition';

export function Installation() {
  return (
    <>
      <Lead>
        Install the PromptSonar CLI, verify the install, and prepare your
        environment for your first scan. No accounts, API keys, or code uploads
        required. PromptSonar performs analysis entirely on your machine.
      </Lead>

      <H2>Requirements</H2>
      <UL>
        <LI>A supported operating system: macOS, Linux, or Windows.</LI>
        <LI>
          A recent version of Node.js installed and available on your <Code>PATH</Code>.
        </LI>
        <LI>Terminal access to run the CLI.</LI>
      </UL>

      <H2>Install</H2>
      <P>Install PromptSonar globally with npm so the CLI is available in your shell.</P>
      <CodeBlock
        language="bash"
        title="install"
        code={`npm install -g promptsonar`}
      />

      <Admonition type="tip" title="Run without installing globally">
        Prefer not to install globally? Run the CLI through your package
        manager's one-off execution command instead of installing it
        system-wide.
      </Admonition>

      <H2>Verify the install</H2>
      <P>
        Confirm the CLI is available by printing its version. If a version
        number appears, PromptSonar is installed correctly.
      </P>
      <CodeBlock
        language="bash"
        title="verify"
        code={`promptsonar --version`}
      />
      <P>Example output:</P>
      <P>
        <Code>promptsonar 1.x.x</Code>
      </P>

      <H2>Optional: add to a project</H2>
      <P>
        For repository scanning in CI, add PromptSonar as a project dependency so
        every contributor and pipeline uses the same installed CLI.
      </P>
      <CodeBlock
        language="bash"
        title="project install"
        code={`npm install --save-dev promptsonar`}
      />

      <Admonition type="warning" title="Pin your version in CI">
        Resolve PromptSonar from your lockfile or pin an exact version in
        automated pipelines so a new release never changes a build's verdict
        unexpectedly.
      </Admonition>

      <H2>Next steps</H2>
      <P>
        With the CLI installed, head to the{' '}
        <A href="/docs/quick-start">Quick Start</A> to run your first scan, or
        jump straight to{' '}
        <A href="/docs/repository-scanning">Repository Scanning</A>.
      </P>
    </>
  );
}
