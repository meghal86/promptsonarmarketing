import { H2, P, Lead, UL, LI, A, Code, Todo } from '../components/prose';
import { CodeBlock } from '../components/CodeBlock';
import { Admonition } from '../components/Admonition';

export function Installation() {
  return (
    <>
      <Lead>
        Install the PromptSonar CLI, verify the install, and prepare your
        environment for your first scan. Everything runs locally.
      </Lead>

      <H2>Requirements</H2>
      <UL>
        <LI>A supported operating system: macOS, Linux, or Windows.</LI>
        <LI>
          A recent runtime on your <Code>PATH</Code>.
        </LI>
        <LI>Terminal access to run the CLI.</LI>
      </UL>
      <Todo>Confirm the exact runtime and minimum version requirements.</Todo>

      <H2>Install</H2>
      <P>Install PromptSonar with your preferred package manager.</P>
      <CodeBlock
        language="bash"
        title="install"
        code={`# TODO: replace with the published install command
npm install -g promptsonar`}
      />
      <Todo>Add the verified install command for each package manager.</Todo>

      <Admonition type="tip" title="No global install? Run it once">
        Prefer not to install globally? You can invoke the CLI directly with
        your package runner instead of installing it system-wide.
      </Admonition>

      <H2>Verify the install</H2>
      <P>
        Confirm the CLI is available by printing its version. You should see a
        version number printed back.
      </P>
      <CodeBlock
        language="bash"
        title="verify"
        code={`promptsonar --version`}
      />
      <Todo>Add the expected version output.</Todo>

      <H2>Optional: add to a project</H2>
      <P>
        For repository scanning in CI, add PromptSonar as a project dependency so
        every contributor and pipeline uses the same version.
      </P>
      <CodeBlock
        language="bash"
        title="project install"
        code={`# TODO: confirm the project-level install command
npm install --save-dev promptsonar`}
      />

      <Admonition type="warning" title="Pin your version in CI">
        Pin an exact version in automated pipelines so a new release never
        changes a build's verdict unexpectedly.
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
