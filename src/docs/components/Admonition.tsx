import type { ReactNode } from 'react';
import { Info, AlertTriangle, Lightbulb, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type AdmonitionKind = 'info' | 'warning' | 'tip' | 'note';

const STYLES: Record<
  AdmonitionKind,
  { icon: typeof Info; label: string; wrap: string; iconColor: string }
> = {
  info: {
    icon: Info,
    label: 'Info',
    wrap: 'border-[#c7d2fe] bg-[#eef2ff]',
    iconColor: 'text-[#4f46e5]',
  },
  tip: {
    icon: Lightbulb,
    label: 'Tip',
    wrap: 'border-[#bbf7d0] bg-[#f0fdf4]',
    iconColor: 'text-[#16a34a]',
  },
  warning: {
    icon: AlertTriangle,
    label: 'Warning',
    wrap: 'border-[#fde68a] bg-[#fffbeb]',
    iconColor: 'text-[#d97706]',
  },
  note: {
    icon: AlertCircle,
    label: 'Note',
    wrap: 'border-border bg-secondary/40',
    iconColor: 'text-muted-foreground',
  },
};

interface AdmonitionProps {
  type?: AdmonitionKind;
  title?: string;
  children: ReactNode;
}

/**
 * Callout box used inside docs content. Three primary variants —
 * Info, Warning, Tip — plus a neutral Note, per the design spec.
 */
export function Admonition({ type = 'info', title, children }: AdmonitionProps) {
  const s = STYLES[type];
  const Icon = s.icon;
  return (
    <div className={cn('my-5 rounded-xl border px-4 py-3.5', s.wrap)}>
      <div className="flex items-center gap-2 mb-1.5">
        <Icon className={cn('w-3.5 h-3.5', s.iconColor)} />
        <span className="text-[12px] font-semibold tracking-tight text-foreground">
          {title ?? s.label}
        </span>
      </div>
      <div className="text-[13.5px] leading-relaxed text-foreground/80 [&_a]:underline [&_a]:underline-offset-2 [&_code]:font-mono [&_code]:text-[12.5px]">
        {children}
      </div>
    </div>
  );
}
