import type { ComponentType } from 'react';

import { Introduction } from './introduction';
import { Installation } from './installation';
import { QuickStart } from './quick-start';
import { PlaygroundGuide } from './playground-guide';
import { RepositoryScanning } from './repository-scanning';
import { GithubActions } from './github-actions';
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
  'github-actions': GithubActions,
  'owasp-llm-mapping': OwaspLlmMapping,
  suppressions: Suppressions,
  'sarif-export': SarifExport,
};
