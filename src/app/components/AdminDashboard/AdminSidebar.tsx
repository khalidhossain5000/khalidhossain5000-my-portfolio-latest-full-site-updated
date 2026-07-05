'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, LogOut, ArrowUpRight } from 'lucide-react';
import NavLink from './NavLink';
import { navItems } from './nav-items';

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminSidebar = ({ isOpen, onClose }: AdminSidebarProps) => {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-border bg-background-surface transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-border px-5">
          <Link href="/admin" className="flex items-center gap-2">
            <span
              className="bg-clip-text text-lg font-bold tracking-tight text-transparent"
              style={{ backgroundImage: 'var(--gradient-brand)' }}
            >
              KH / Admin
            </span>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="text-foreground-muted hover:text-foreground lg:hidden"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-5">
          {navItems.map((item) => {
            const isActive =
              item.href === '/admin'
                ? pathname === '/admin'
                : pathname.startsWith(item.href);

            return (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
                isActive={isActive}
                onClick={onClose}
              />
            );
          })}
        </nav>

        {/* Footer Actions */}
        <div className="space-y-2 border-t border-border px-3 py-4">
          {/* View Site */}
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground-muted transition-colors hover:bg-[var(--surface-2)] hover:text-accent"
          >
            <ArrowUpRight size={18} />
            View site
          </Link>

          {/* Logout */}
          <button
            type="button"
            onClick={() => {
              // TODO: wire up logout logic
            }}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground-muted transition-colors hover:bg-[var(--surface-2)] hover:text-red-400"
          >
            <LogOut size={18} />
            Log out
          </button>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;