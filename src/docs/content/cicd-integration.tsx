import { H2, P, Lead, UL, LI, A } from '../components/prose';
import { Admonition } from '../components/Admonition';

export function CicdIntegration() {
  return (
    <>
      <Lead>
        Patterns for running PromptSonar in GitLab CI, CircleCI, Jenkins, and
        other pipelines using the CLI and exit codes.
      </Lead>

      <H2>Common integration patterns</H2>
      <P>Use PromptSonar in CI/CD pipelines to:</P>
      <UL>
        <LI>Scan repositories during pull request validation.</LI>
        <LI>Prevent regressions by failing builds on high-risk findings.</LI>
        <LI>Export reports for downstream security tooling.</LI>
        <LI>
          Integrate deterministic analysis into existing automation workflows.
        </LI>
      </UL>

      <Admonition type="info" title="Integration roadmap">
        Detailed examples for specific CI/CD providers will be added over time as
        integrations mature.
      </Admonition>

      <H2>Next steps</H2>
      <P>
        Start with <A href="/docs/github-actions">GitHub Actions</A> for a
        concrete gating example, review <A href="/docs/cli-usage">CLI Usage</A>{' '}
        for exit behaviors and output formats, or see{' '}
        <A href="/docs/repository-scanning">Repository Scanning</A> for
        repository-wide analysis.
      </P>
    </>
  );
}
