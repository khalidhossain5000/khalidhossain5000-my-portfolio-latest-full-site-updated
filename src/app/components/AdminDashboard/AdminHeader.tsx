'use client';

import React from 'react';
import { Menu } from 'lucide-react';

interface AdminTopbarProps {
  title?: string;
  onMenuClick: () => void;
}

const AdminTopbar = ({ title = 'Dashboard', onMenuClick }: AdminTopbarProps) => {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur-md sm:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-md p-2 text-foreground-muted hover:bg-[var(--surface-2)] hover:text-foreground lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-base font-semibold text-foreground sm:text-lg">{title}</h1>
      </div>

      <div
        className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-2)] text-sm font-semibold text-primary"
        style={{ boxShadow: 'var(--glow-soft)' }}
      >
        KH
      </div>
    </header>
  );
};

export default AdminTopbar;