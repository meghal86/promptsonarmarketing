import { H2, P, Lead, UL, OL, LI, A, Code } from '../components/prose';
import { CodeBlock } from '../components/CodeBlock';
import { Admonition } from '../components/Admonition';

export function RepositoryScanning() {
  return (
    <>
      <Lead>
        Point PromptSonar at a repository to uncover execution-path risks across
        prompts, agent workflows, skills, and MCP configurations. PromptSonar
        analyzes the entire codebase using a deterministic engine and reports
        findings with evidence and recommended fixes.
      </Lead>

      <H2>What gets scanned</H2>
      <P>
        Repository scanning walks your project and discovers AI surfaces, then
        runs the same engine that powers single-prompt scans against each one:
      </P>
      <UL>
        <LI>Prompts and system instructions embedded in source files.</LI>
        <LI>Agent workflows and their tool chains.</LI>
        <LI>Skills and their declared capabilities.</LI>
        <LI>MCP server configurations and permission scopes.</LI>
      </UL>

      <H2>Run a repository scan</H2>
      <P>Pass a directory to the scan command.</P>
      <CodeBlock
        language="bash"
        title="scan repo"
        code={`promptsonar scan ./my-repo`}
      />
      <P>
        The scan produces a per-repository report aggregating findings by file,
        severity, and rule. See{' '}
        <A href="/docs/repository-reports">Repository Reports</A> for how to read
        it.
      </P>

      <H2>How analysis works</H2>
      <OL>
        <LI>
          <strong>Discover.</strong> PromptSonar locates AI surfaces across the
          repository.
        </LI>
        <LI>
          <strong>Build paths.</strong> Each surface is parsed into an execution
          path — see{' '}
          <A href="/docs/execution-path-analysis">Execution Path Analysis</A>.
        </LI>
        <LI>
          <strong>Evaluate.</strong> Deterministic rules flag where untrusted
          input can reach sensitive operations.
        </LI>
        <LI>
          <strong>Report.</strong> Findings are scored, mapped to OWASP LLM
          categories, and aggregated.
        </LI>
      </OL>

      <Admonition type="info" title="Deterministic and local">
        Repository scans run entirely on your machine and produce consistent
        results for the same commit, making them well suited for CI workflows.
      </Admonition>

      <H2>Focus a scan</H2>
      <P>
        Large repositories often contain generated or vendored code you do not
        want to scan. Scope the scan to the directories that matter.
      </P>
      <P>
        Use <A href="/docs/suppressions">Suppressions</A> to silence
        known-safe findings.
      </P>
      <CodeBlock
        language="bash"
        title="scoped scan"
        code={`promptsonar scan ./src`}
      />

      <H2>In continuous integration</H2>
      <P>
        Repository scanning is designed to run on every change. Use the{' '}
        <Code>HIGH RISK</Code> exit behavior to fail a build, or annotate pull
        requests with <A href="/docs/github-actions">GitHub Actions</A> and
        broader <A href="/docs/cicd-integration">CI/CD integration</A>.
      </P>

      <H2>Next steps</H2>
      <P>
        Export findings as <A href="/docs/sarif-export">SARIF</A> for code
        scanning, or learn the{' '}
        <A href="/docs/execution-path-analysis">execution-path model</A> behind
        the verdicts.
      </P>
    </>
  );
}
