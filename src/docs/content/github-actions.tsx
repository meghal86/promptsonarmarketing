import { H2, P, Lead, UL, LI, A, Code, Todo } from '../components/prose';
import { CodeBlock } from '../components/CodeBlock';
import { Admonition } from '../components/Admonition';

export function GithubActions() {
  return (
    <>
      <Lead>
        Run PromptSonar in GitHub Actions to scan every pull request, annotate
        findings inline, and optionally fail the build when a new{' '}
        <Code>HIGH RISK</Code> issue is introduced.
      </Lead>

      <H2>What this gives you</H2>
      <UL>
        <LI>Every pull request is scanned automatically.</LI>
        <LI>Findings appear as checks and, optionally, as SARIF annotations.</LI>
        <LI>Builds can fail on new high-risk findings to block regressions.</LI>
      </UL>

      <H2>Add the workflow</H2>
      <P>
        Create a workflow file in your repository at{' '}
        <Code>.github/workflows/promptsonar.yml</Code>.
      </P>
      <CodeBlock
        language="yaml"
        title=".github/workflows/promptsonar.yml"
        code={`name: PromptSonar

on:
  pull_request:
  push:
    branches: [main]

jobs:
  scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      # TODO: replace with the published install/run steps
      - name: Install PromptSonar
        run: npm install -g promptsonar

      - name: Scan repository
        run: promptsonar scan . --format sarif --output results.sarif`}
      />
      <Todo>Confirm the install command and scan flags for CI.</Todo>

      <H2>Surface findings in code scanning</H2>
      <P>
        Upload the SARIF output so findings appear in the pull request and the
        repository's Security tab.
      </P>
      <CodeBlock
        language="yaml"
        title="upload step"
        code={`      - name: Upload SARIF
        uses: github/codeql-action/upload-sarif@v3
        with:
          sarif_file: results.sarif`}
      />
      <P>
        See <A href="/docs/sarif-export">SARIF Export</A> for details on the
        format.
      </P>

      <Admonition type="warning" title="Permissions for SARIF upload">
        Uploading SARIF requires <Code>security-events: write</Code> permission
        on the job. Add a <Code>permissions</Code> block if your repository uses
        restricted default permissions.
      </Admonition>

      <H2>Fail the build on new findings</H2>
      <P>
        PromptSonar's exit code lets you gate merges. Configure the scan step so
        a <Code>HIGH RISK</Code> finding returns a non-zero exit, which fails the
        job.
      </P>
      <CodeBlock
        language="yaml"
        title="gating"
        code={`      - name: Scan and gate
        run: promptsonar scan . --fail-on high`}
      />
      <Todo>Confirm the exact gating flag and exit-code behavior.</Todo>

      <Admonition type="tip" title="Reduce noise on existing repos">
        Adopting on an existing codebase? Start by gating only on{' '}
        <em>new</em> findings and triage the backlog with{' '}
        <A href="/docs/suppressions">Suppressions</A>.
      </Admonition>

      <H2>Next steps</H2>
      <P>
        Running a different pipeline? See{' '}
        <A href="/docs/cicd-integration">CI/CD Integration</A> for GitLab CI,
        CircleCI, and Jenkins patterns.
      </P>
    </>
  );
}
