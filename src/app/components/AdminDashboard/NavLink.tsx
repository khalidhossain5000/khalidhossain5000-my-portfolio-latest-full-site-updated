'use client';

import React from 'react';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  href: string;
  label: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick?: () => void;
}

const NavLink = ({ href, label, icon: Icon, isActive, onClick }: NavLinkProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
        isActive
          ? 'bg-[var(--surface-3)] text-primary'
          : 'text-foreground-muted hover:bg-[var(--surface-2)] hover:text-foreground'
      }`}
    >
      {isActive && (
        <span
          className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-primary"
          style={{ boxShadow: 'var(--glow-primary)' }}
        />
      )}
      <Icon size={18} strokeWidth={2} />
      {label}
    </Link>
  );
};

export default NavLink;