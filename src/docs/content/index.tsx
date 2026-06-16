import type { ComponentType } from 'react';

import { Introduction } from './introduction';
import { Installation } from './installation';
import { QuickStart } from './quick-start';
import { PlaygroundGuide } from './playground-guide';
import { RepositoryScanning } from './repository-scanning';
import { CliUsage } from './cli-usage';
import { VscodeExtension } from './vscode-extension';
import { GithubActions } from './github-actions';
import { CicdIntegration } from './cicd-integration';
import { McpSecurityRules } from './mcp-security-rules';
import { ConfidenceScoring } from './confidence-scoring';
import { FalsePositiveHandling } from './false-positive-handling';
import { JsonReports } from './json-reports';
import { HtmlReports } from './html-reports';
import { PromptSbom } from './prompt-sbom';
import { HowPromptSonarWorks } from './how-promptsonar-works';
import { StaticAnalysisPhilosophy } from './static-analysis-philosophy';
import { DeterministicDetection } from './deterministic-detection';
import { BenchmarkingStrategy } from './benchmarking-strategy';
import { WhatIsPromptInjection } from './what-is-prompt-injection';
import { WhatIsMcpSecurity } from './what-is-mcp-security';
import { AgentSecurityFundamentals } from './agent-security-fundamentals';
import { AiWorkflowSecurityBestPractices } from './ai-workflow-security-best-practices';
import { OwaspLlmMapping } from './owasp-llm-mapping';
import { Suppressions } from './suppressions';
import { SarifExport } from './sarif-export';

/**
 * Registry mapping a doc slug to its authored content component.
 * Slugs missing here fall back to the metadata-driven scaffold in DocsPage.
 * Add a page by authoring `content/<slug>.tsx` and registering it below.
 */
export const CONTENT: Record<string, ComponentType> = {
  introduction: Introduction,
  installation: Installation,
  'quick-start': QuickStart,
  'playground-guide': PlaygroundGuide,
  'repository-scanning': RepositoryScanning,
  'cli-usage': CliUsage,
  'vscode-extension': VscodeExtension,
  'github-actions': GithubActions,
  'cicd-integration': CicdIntegration,
  'mcp-security-rules': McpSecurityRules,
  'confidence-scoring': ConfidenceScoring,
  'false-positive-handling': FalsePositiveHandling,
  'json-reports': JsonReports,
  'html-reports': HtmlReports,
  'prompt-sbom': PromptSbom,
  'how-promptsonar-works': HowPromptSonarWorks,
  'static-analysis-philosophy': StaticAnalysisPhilosophy,
  'deterministic-detection': DeterministicDetection,
  'benchmarking-strategy': BenchmarkingStrategy,
  'what-is-prompt-injection': WhatIsPromptInjection,
  'what-is-mcp-security': WhatIsMcpSecurity,
  'agent-security-fundamentals': AgentSecurityFundamentals,
  'ai-workflow-security-best-practices': AiWorkflowSecurityBestPractices,
  'owasp-llm-mapping': OwaspLlmMapping,
  suppressions: Suppressions,
  'sarif-export': SarifExport,
};
