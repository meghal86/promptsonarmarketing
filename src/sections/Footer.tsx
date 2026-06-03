import { GitBranch, Github, Twitter } from 'lucide-react';

const FOOTER_LINKS = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  Developers: ['Documentation', 'API Reference', 'CLI', 'GitHub Action'],
  Company: ['Blog', 'About', 'Careers', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Security'],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-white/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
                <GitBranch className="w-4 h-4 text-white" />
              </div>
              <span className="text-base font-semibold text-foreground">
                PromptSonar
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-4">
              AI Execution Path Analyzer. Trace prompts through memory, tools, MCP servers, and privileged actions.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-foreground mb-3">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 PromptSonar. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
