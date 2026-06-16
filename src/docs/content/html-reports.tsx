import { H2, P, Lead, UL, LI, A } from '../components/prose';
import { Admonition } from '../components/Admonition';

export function HtmlReports() {
  return (
    <>
      <Lead>
        Generate a self-contained HTML report to share findings with teammates
        who do not use the CLI.
      </Lead>

      <H2>When to use HTML reports</H2>
      <P>Use HTML reports when you need to:</P>
      <UL>
        <LI>Share findings with teammates who do not use the CLI.</LI>
        <LI>Review repository-level risks in a browser.</LI>
        <LI>Attach scan results to an issue, pull request, or security review.</LI>
        <LI>Preserve a human-readable snapshot of a scan.</LI>
      </UL>

      <Admonition type="info" title="Built for sharing">
        HTML is a practical handoff format for reviewers and stakeholders. It is
        easy to open, easy to pass along, and easier to read than a raw data
        export when you want to explain what PromptSonar found.
      </Admonition>

      <H2>What the report should show</H2>
      <UL>
        <LI>Overall result</LI>
        <LI>Findings grouped by severity</LI>
        <LI>Triggered rules and evidence</LI>
        <LI>Recommended fixes</LI>
        <LI>Affected files and locations</LI>
        <LI>Execution-path context where available</LI>
      </UL>
      <P>
        The goal is to give readers enough context to understand the finding
        without forcing them to open the CLI or decode a machine-oriented
        export.
      </P>

      <H2>Generate an HTML report</H2>
      <P>
        Use the HTML report flow when you want a browser-friendly snapshot of a
        scan. If your workflow depends on a specific command or flags, verify
        the exact invocation in your environment before documenting it.
      </P>
      <P>
        Keep the output focused on the findings and the remediation context so
        teammates can review the report without navigating through raw scan
        data.
      </P>

      <Admonition type="tip" title="Keep it portable">
        HTML reports work best when they remain self-contained and easy to share
        through the systems your team already uses.
      </Admonition>

      <H2>Next steps</H2>
      <P>
        See <A href="/docs/json-reports">JSON Reports</A> for the canonical
        machine-readable format, or review{' '}
        <A href="/docs/sarif-export">SARIF Export</A> for code-scanning
        workflows.
      </P>
    </>
  );
}
