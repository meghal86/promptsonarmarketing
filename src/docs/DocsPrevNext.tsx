import { Link } from 'react-router';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getPrevNext } from './docs.config';

/** Previous / next page links shown at the foot of every doc page. */
export function DocsPrevNext({ slug }: { slug: string }) {
  const { prev, next } = getPrevNext(slug);
  if (!prev && !next) return null;

  return (
    <div className="mt-16 grid gap-3 border-t border-border pt-8 sm:grid-cols-2">
      {prev ? (
        <Link
          to={`/docs/${prev.slug}`}
          className="group flex flex-col rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-foreground/20"
        >
          <span className="mb-1 inline-flex items-center gap-1 text-[11px] text-muted-foreground">
            <ArrowLeft className="h-3 w-3" /> Previous
          </span>
          <span className="text-[14px] font-medium text-foreground">
            {prev.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link
          to={`/docs/${next.slug}`}
          className="group flex flex-col rounded-xl border border-border bg-card px-4 py-3 text-right transition-colors hover:border-foreground/20 sm:col-start-2"
        >
          <span className="mb-1 inline-flex items-center justify-end gap-1 text-[11px] text-muted-foreground">
            Next <ArrowRight className="h-3 w-3" />
          </span>
          <span className="text-[14px] font-medium text-foreground">
            {next.title}
          </span>
        </Link>
      )}
    </div>
  );
}
