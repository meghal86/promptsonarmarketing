import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { ListTodo } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Lightweight typographic primitives for authoring docs content in TSX.
 * Headings auto-generate ids from their text so the "On this page" rail and
 * deep links work without extra wiring.
 */

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function textOf(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(textOf).join('');
  return '';
}

export function H2({ children }: { children: ReactNode }) {
  const id = slugify(textOf(children));
  return (
    <h2
      id={id}
      className="group mt-12 mb-3 scroll-mt-24 text-[22px] font-semibold tracking-tight text-foreground"
    >
      <a href={`#${id}`} className="no-underline">
        {children}
        <span className="ml-2 text-muted-foreground/30 opacity-0 transition-opacity group-hover:opacity-100">
          #
        </span>
      </a>
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  const id = slugify(textOf(children));
  return (
    <h3
      id={id}
      className="mt-8 mb-2 scroll-mt-24 text-[16px] font-semibold tracking-tight text-foreground"
    >
      {children}
    </h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="my-4 text-[14.5px] leading-7 text-foreground/80">{children}</p>
  );
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="mb-6 text-[16px] leading-7 text-muted-foreground">{children}</p>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="my-4 list-disc space-y-1.5 pl-5 text-[14.5px] leading-7 text-foreground/80 marker:text-muted-foreground/50">
      {children}
    </ul>
  );
}

export function OL({ children }: { children: ReactNode }) {
  return (
    <ol className="my-4 list-decimal space-y-1.5 pl-5 text-[14.5px] leading-7 text-foreground/80 marker:text-muted-foreground/60">
      {children}
    </ol>
  );
}

export function LI({ children }: { children: ReactNode }) {
  return <li className="pl-1">{children}</li>;
}

export function Code({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-[5px] border border-border bg-secondary/60 px-1.5 py-0.5 font-mono text-[12.5px] text-foreground">
      {children}
    </code>
  );
}

export function A({ href, children }: { href: string; children: ReactNode }) {
  const internal = href.startsWith('/');
  if (internal) {
    return (
      <Link
        to={href}
        className="font-medium text-[#4f46e5] underline-offset-2 hover:underline"
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-[#4f46e5] underline-offset-2 hover:underline"
    >
      {children}
    </a>
  );
}

/** Visible, intentional placeholder for content to be filled in later. */
export function Todo({ children }: { children: ReactNode }) {
  return (
    <div className="my-5 flex items-start gap-2.5 rounded-xl border border-dashed border-[#d6c7a8] bg-[#fbf7ec] px-4 py-3">
      <ListTodo className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#a8842c]" />
      <span className="font-mono text-[12.5px] leading-relaxed text-[#8a6d22]">
        TODO: {children}
      </span>
    </div>
  );
}

/** Numbered "do this, then this" walkthrough used in guides. */
export function Steps({ children }: { children: ReactNode }) {
  return (
    <ol className="my-6 space-y-6 border-l border-border pl-6 [counter-reset:step]">
      {children}
    </ol>
  );
}

export function Step({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <li className="relative [counter-increment:step]">
      <span className="absolute -left-[33px] flex h-5 w-5 items-center justify-center rounded-full border border-border bg-card text-[10px] font-semibold text-muted-foreground before:content-[counter(step)]" />
      <h4 className="mb-1 text-[14.5px] font-semibold tracking-tight text-foreground">
        {title}
      </h4>
      <div className="text-[14px] leading-7 text-foreground/80">{children}</div>
    </li>
  );
}

/** Simple two-column key/value reference table. */
export function RefTable({
  head,
  rows,
}: {
  head: [string, string];
  rows: [ReactNode, ReactNode][];
}) {
  return (
    <div className="my-5 overflow-hidden rounded-xl border border-border">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-secondary/50">
            {head.map((h) => (
              <th
                key={h}
                className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={cn(i > 0 && 'border-t border-border')}>
              <td className="px-4 py-2.5 align-top font-mono text-[12.5px] text-foreground">
                {r[0]}
              </td>
              <td className="px-4 py-2.5 align-top text-[13.5px] leading-relaxed text-foreground/80">
                {r[1]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
