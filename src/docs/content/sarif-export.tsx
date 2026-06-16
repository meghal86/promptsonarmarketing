import { H2, P, Lead, UL, LI, A, Code } from '../components/prose';
import { CodeBlock } from '../components/CodeBlock';
import { Admonition } from '../components/Admonition';

export function SarifExport() {
  return (
    <>
      <Lead>
        Export PromptSonar findings as SARIF — the Static Analysis Results
        Interchange Format — so they appear in GitHub code scanning and any other
        SARIF-aware tool.
      </Lead>

      <H2>What is SARIF?</H2>
      <P>
        SARIF is an OASIS standard JSON format for static-analysis results.
        GitHub code scanning consumes SARIF natively, allowing PromptSonar
        findings to appear directly in pull requests and the repository's
        Security tab.
      </P>

      <H2>Generate a SARIF report</H2>
      <P>Ask the scan to write SARIF to a file.</P>
      <CodeBlock
        language="bash"
        title="export sarif"
        code={`promptsonar scan . --format sarif --output results.sarif`}
      />

      <H2>What is in the report</H2>
      <P>Each PromptSonar finding becomes a SARIF result containing:</P>
      <UL>
        <LI>The rule id and a description of what it detects.</LI>
        <LI>
          A location — file and region — pointing at the triggering text.
        </LI>
        <LI>A severity level mapped to SARIF's level field.</LI>
        <LI>
          The OWASP LLM category as a tag — see{' '}
          <A href="/docs/owasp-llm-mapping">OWASP LLM Mapping</A>.
        </LI>
      </UL>
      <P>
        This representative example shows the standard SARIF fields PromptSonar
        exports for a single finding.
      </P>
      <CodeBlock
        language="json"
        title="results.sarif"
        code={`{
  "$schema": "https://json.schemastore.org/sarif-2.1.0.json",
  "version": "2.1.0",
  "runs": [
    {
      "tool": {
        "driver": {
          "name": "PromptSonar"
        }
      },
      "results": [
        {
          "ruleId": "prompt-injection",
          "level": "error",
          "message": {
            "text": "HIGH RISK — untrusted input can reach a dangerous sink"
          },
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "prompt.txt"
                },
                "region": {
                  "startLine": 1
                }
              }
            }
          ],
          "properties": {
            "confidence": "Confirmed",
            "owaspCategory": "LLM01 - Prompt Injection"
          }
        }
      ]
    }
  ]
}`}
      />

      <H2>Upload to GitHub code scanning</H2>
      <P>
        In CI, upload the SARIF file with the CodeQL action's upload step. After
        it runs, findings appear on the pull request.
      </P>
      <CodeBlock
        language="yaml"
        title="upload-sarif"
        code={`- name: Upload SARIF
  uses: github/codeql-action/upload-sarif@v3
  with:
    sarif_file: results.sarif`}
      />
      <P>
        For the full workflow, see{' '}
        <A href="/docs/github-actions">GitHub Actions</A>.
      </P>

      <Admonition type="warning" title="Required permission">
        Uploading SARIF needs <Code>security-events: write</Code> on the job.
        Grant it explicitly if your repository restricts default permissions.
      </Admonition>

      <Admonition type="tip" title="Open it in any SARIF viewer">
        SARIF is portable. Drop <Code>results.sarif</Code> into a SARIF viewer
        extension to browse findings locally without GitHub.
      </Admonition>

      <H2>Other formats</H2>
      <P>
        Prefer something else? PromptSonar also produces machine-readable{' '}
        <A href="/docs/json-reports">JSON</A>, shareable{' '}
        <A href="/docs/html-reports">HTML</A>, and a{' '}
        <A href="/docs/prompt-sbom">Prompt SBOM</A> inventory.
      </P>
    </>
  );
}
