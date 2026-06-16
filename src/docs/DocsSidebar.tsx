import { NavLink } from 'react-router';
import { DOCS } from './docs.config';
import { cn } from '@/lib/utils';

interface DocsSidebarProps {
  /** Called when a link is chosen — used to close the mobile drawer. */
  onNavigate?: () => void;
}

/**
 * Grouped documentation navigation. Pure data-driven from docs.config.ts.
 * The active link is highlighted via NavLink's isActive state.
 */
export function DocsSidebar({ onNavigate }: DocsSidebarProps) {
  return (
    <nav className="space-y-7 pb-16" aria-label="Documentation">
      {DOCS.map((group) => (
        <div key={group.label}>
          <p className="mb-2.5 px-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground/60">
            {group.label}
          </p>
          <ul className="space-y-0.5">
            {group.items.map((item) => (
              <li key={item.slug}>
                <NavLink
                  to={`/docs/${item.slug}`}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-md px-3 py-1.5 text-[13.5px] transition-colors',
                      isActive
                        ? 'bg-secondary font-medium text-foreground'
                        : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground',
                    )
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
