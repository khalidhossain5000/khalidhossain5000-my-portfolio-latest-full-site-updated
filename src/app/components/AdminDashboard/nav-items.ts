import type { LucideIcon } from 'lucide-react';
import { LayoutDashboard, MessageSquare, Sparkles, FolderKanban, Settings } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { label: 'Overview', href: '/admin', icon: LayoutDashboard },
  { label: 'Messages', href: '/admin/messages', icon: MessageSquare },
  { label: 'Skills', href: '/admin/skills', icon: Sparkles },
  { label: 'Projects', href: '/admin/projects', icon: FolderKanban },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
];