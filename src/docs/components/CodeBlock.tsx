import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  /** Raw code string. Newlines preserved. */
  code: string;
  /** Optional language label shown in the header (e.g. "bash", "json"). */
  language?: string;
  /** Optional filename / title shown on the left of the header. */
  title?: string;
  className?: string;
}

/**
 * Code block with a copy-to-clipboard button. Deterministic, no syntax
 * highlighting dependency — plain monospace styled to the warm theme.
 */
export function CodeBlock({ code, language, title, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  return (
    <div
      className={cn(
        'my-5 overflow-hidden rounded-xl border border-border bg-[#1c1c28]',
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="text-[11px] font-medium tracking-wide text-white/40">
          {title ?? language ?? 'code'}
        </span>
        <button
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-medium text-white/50 transition-colors hover:bg-white/10 hover:text-white/90"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" /> Copied
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" /> Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-3.5">
        <code className="font-mono text-[12.5px] leading-relaxed text-[#e4e4ef]">
          {code}
        </code>
      </pre>
    </div>
  );
}
