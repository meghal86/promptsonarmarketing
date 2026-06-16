import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { GitBranch, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DocsSidebar } from './DocsSidebar';
import { DocsSearch } from './DocsSearch';

/**
 * Shell for the entire /docs section: sticky header with logo + search,
 * a fixed sidebar on desktop, a slide-over drawer on mobile, and an Outlet
 * for the active page. Scroll resets to top on navigation.
 */
export function DocsLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  // Reset scroll to the top whenever the route changes.
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-4 px-4 lg:px-8">
          <div className="flex items-center gap-2 lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                className="rounded-md p-1.5 text-muted-foreground hover:bg-secondary"
                aria-label="Open navigation"
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] overflow-y-auto p-6">
                <div className="mb-6 mt-2">
                  <DocsSearch />
                </div>
                <DocsSidebar onNavigate={() => setMobileOpen(false)} />
              </SheetContent>
            </Sheet>
          </div>

          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground">
              <GitBranch className="h-3.5 w-3.5 text-background" />
            </div>
            <span className="text-[14px] font-medium tracking-tight">
              PromptSonar
            </span>
            <span className="rounded border border-border px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              Docs
            </span>
          </Link>

          <div className="ml-auto flex items-center gap-3">
            <div className="hidden sm:block">
              <DocsSearch />
            </div>
            <a
              href="https://github.com/meghal86/promptsonarmarketing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-[13px] text-muted-foreground transition-colors hover:text-foreground md:inline"
            >
              GitHub
            </a>
            <a
              href="https://promptsonar.vercel.app"
              className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-3.5 py-1.5 text-[13px] font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Open App →
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1400px] px-4 lg:px-8">
        {/* Desktop sidebar */}
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-60 shrink-0 overflow-y-auto py-8 pr-4 lg:block">
          <DocsSidebar />
        </aside>

        {/* Content — keyed on pathname so each page mounts fresh */}
        <main key={pathname} className="min-w-0 flex-1 py-10 lg:px-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
