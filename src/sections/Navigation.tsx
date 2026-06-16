import { useState, useEffect } from 'react';
import { GitBranch, Menu, X } from 'lucide-react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Docs', href: '/docs' },
    { label: 'GitHub', href: 'https://github.com/meghal86/promptsonarmarketing', external: true },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-background/90 backdrop-blur-xl border-b border-border/50'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-foreground flex items-center justify-center">
            <GitBranch className="w-3.5 h-3.5 text-background" />
          </div>
          <span className={`text-[14px] font-medium tracking-tight transition-colors duration-300 ${
            scrolled ? 'text-foreground' : 'text-white'
          }`}>
            PromptSonar
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className={`text-[13px] font-normal transition-colors duration-300 ${
                scrolled
                  ? 'text-muted-foreground hover:text-foreground'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {scrolled && (
          <a
            href="https://promptsonar.vercel.app"
            className="hidden md:inline-flex items-center gap-1.5 text-[13px] font-medium px-4 py-2 rounded-lg transition-all bg-foreground text-background hover:bg-foreground/90"
          >
            Scan Prompt →
          </a>
        )}

        <button
          className={`md:hidden ${scrolled ? 'text-foreground' : 'text-white'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 space-y-3">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="block text-[14px] text-muted-foreground hover:text-foreground py-1.5"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://promptsonar.vercel.app"
            className="block mt-2 text-center text-[14px] font-medium bg-foreground text-background py-2.5 rounded-lg"
          >
            Scan Prompt →
          </a>
        </div>
      )}
    </nav>
  );
}
