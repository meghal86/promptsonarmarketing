import { useParams, Navigate, Link } from 'react-router';
import { ChevronRight, FileText, Pencil } from 'lucide-react';
import { getDoc, getGroupLabel, DEFAULT_DOC_SLUG } from './docs.config';
import { DocsPrevNext } from './DocsPrevNext';
import { CONTENT } from './content';
import { H2, P, Lead, UL, LI, Todo } from './components/prose';
import { Admonition } from './components/Admonition';

const GITHUB_EDIT_BASE =
  'https://github.com/meghal86/promptsonarmarketing/edit/main/src/docs/content';

/**
 * Route component for /docs/:slug. Looks up the page in the config, renders
 * the breadcrumb + title + purpose, then either the registered content
 * component or a scaffold built from the page's metadata.
 */
export function DocsPage() {
  const { slug = '' } = useParams();
  const doc = getDoc(slug);

  if (!doc) {
    return <Navigate to={`/docs/${DEFAULT_DOC_SLUG}`} replace />;
  }

  const group = getGroupLabel(slug);
  const Content = CONTENT[slug];

  return (
    <article className="mx-auto max-w-3xl">
      {/* Breadcrumb */}
      <nav className="mb-4 flex items-center gap-1.5 text-[12px] text-muted-foreground">
        <Link to="/docs" className="hover:text-foreground">
          Docs
        </Link>
        {group && (
          <>
            <ChevronRight className="h-3 w-3" />
            <span>{group}</span>
          </>
        )}
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">{doc.title}</span>
      </nav>

      {/* Title + purpose */}
      <h1 className="text-[34px] font-semibold leading-tight tracking-tight text-foreground">
        {doc.title}
      </h1>
      <p className="mt-2 text-[16px] leading-7 text-muted-foreground">
        {doc.purpose}
      </p>

      <div className="mt-8">
        {Content ? <Content /> : <Scaffold description={doc.description} />}
      </div>

      {/* Edit link */}
      <div className="mt-12 border-t border-border pt-5">
        <a
          href={`${GITHUB_EDIT_BASE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[12.5px] text-muted-foreground transition-colors hover:text-foreground"
        >
          <Pencil className="h-3 w-3" /> Edit this page on GitHub
        </a>
      </div>

      <DocsPrevNext slug={slug} />
    </article>
  );
}

/** Default body for pages whose content has not been authored yet. */
function Scaffold({ description }: { description: string }) {
  return (
    <>
      <Lead>{description}</Lead>

      <Admonition type="info" title="This page is being written">
        The structure below is the planned outline. Authored content will
        replace these placeholders.
      </Admonition>

      <H2>On this page</H2>
      <P>This guide will cover:</P>
      <UL>
        <LI>What this feature is and when to reach for it.</LI>
        <LI>A step-by-step walkthrough with copy-paste examples.</LI>
        <LI>How to read the output and act on findings.</LI>
        <LI>Common pitfalls and how to resolve them.</LI>
      </UL>

      <H2>Walkthrough</H2>
      <Todo>Add the step-by-step walkthrough for this page.</Todo>
      <Todo>Insert a representative example (command, config, or screenshot).</Todo>

      <H2>Next steps</H2>
      <P>
        Continue with the related guides linked at the bottom of this page, or
        jump back to the{' '}
        <Link
          to="/docs"
          className="font-medium text-[#4f46e5] underline-offset-2 hover:underline"
        >
          documentation home
        </Link>
        .
      </P>

      <div className="mt-8 flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-4 py-3 text-[13px] text-muted-foreground">
        <FileText className="h-4 w-4 shrink-0" />
        Want this page prioritized? Open an issue and tell us what you need.
      </div>
    </>
  );
}
