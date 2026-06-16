import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Search } from 'lucide-react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { DOCS } from './docs.config';

/**
 * Docs search. Renders a trigger button (with ⌘K hint) and a command
 * palette dialog that indexes every page's title and purpose from the
 * config. Opens on click or the ⌘K / Ctrl+K shortcut.
 */
export function DocsSearch() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const go = (slug: string) => {
    setOpen(false);
    navigate(`/docs/${slug}`);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex w-full items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-[13px] text-muted-foreground transition-colors hover:border-foreground/20 sm:w-64"
        aria-label="Search documentation"
      >
        <Search className="h-3.5 w-3.5" />
        <span className="flex-1 text-left">Search docs…</span>
        <kbd className="hidden rounded border border-border bg-secondary px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline">
          ⌘K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search the documentation…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {DOCS.map((group) => (
            <CommandGroup key={group.label} heading={group.label}>
              {group.items.map((item) => (
                <CommandItem
                  key={item.slug}
                  value={`${item.title} ${item.purpose}`}
                  onSelect={() => go(item.slug)}
                >
                  <div className="flex flex-col">
                    <span className="text-[13px] font-medium text-foreground">
                      {item.title}
                    </span>
                    <span className="text-[11.5px] text-muted-foreground">
                      {item.purpose}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
