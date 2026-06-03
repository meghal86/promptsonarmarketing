import { GitBranch } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-foreground flex items-center justify-center">
            <GitBranch className="w-3 h-3 text-background" />
          </div>
          <span className="text-[13px] font-medium text-foreground tracking-tight">PromptSonar</span>
        </div>
        <div className="flex gap-6">
          {[
            { label: 'App', href: 'https://promptsonar.vercel.app' },
            { label: 'GitHub', href: 'https://github.com/meghal86/promptsonarmarketing' },
            { label: 'Docs', href: '#' },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-[12px] text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="text-[11px] text-muted-foreground/40">
          MIT Licensed · Built for AI engineers
        </div>
      </div>
    </footer>
  );
}
