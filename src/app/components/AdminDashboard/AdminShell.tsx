/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminTopbar from './AdminHeader';
// নিওন থিমের সাথে ম্যাচিং আইকন ব্যবহারের জন্য lucide-react (ইন্সটল করা না থাকলে করে নিও)
import { Terminal, Lock, User, ShieldAlert } from 'lucide-react'; 

interface AdminShellProps {
  children: React.ReactNode;
}

const AdminShell = ({ children }: AdminShellProps) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [checkingAuth, setCheckingAuth] = useState<boolean>(true);

  const OWNER_USERNAME = "admin";
  const OWNER_PASSWORD = "password123";

  useEffect(() => {
    const session = localStorage.getItem("portfolio_admin_auth");
    if (session === "true") {
      setIsAuthenticated(true);
    }
    setCheckingAuth(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (username === OWNER_USERNAME && password === OWNER_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("portfolio_admin_auth", "true");
    } else {
      setError("ভুল ক্রেডেনশিয়াল! অ্যাক্সেস ডিনাইড।");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("portfolio_admin_auth");
  };

  if (checkingAuth) {
    return <div className="min-h-screen bg-background" />;
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[140px]" />
        </div>

        <div className="w-full max-w-md bg-background-surface border border-border p-8 rounded-2xl shadow-[var(--glow-soft)]">
          <div className="text-center mb-8">
            <div className="inline-flex p-3 bg-primary/10 rounded-xl text-primary mb-3">
              <Terminal className="h-6 w-6" style={{ filter: "drop-shadow(var(--glow-primary))" }} />
            </div>
            <h2 className="text-xl font-bold font-secondary text-foreground tracking-wide">
              ADMIN GATEWAY
            </h2>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-950/30 border border-red-900/50 rounded-xl flex items-center gap-3 text-sm text-red-400">
              <ShieldAlert className="h-5 w-5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-mono uppercase text-foreground-muted mb-2 tracking-wider">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground-dim" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full bg-[var(--surface-1)] border border-border rounded-xl pl-11 pr-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter username"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-foreground-muted mb-2 tracking-wider">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground-dim" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-[var(--surface-1)] border border-border rounded-xl pl-11 pr-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-primary hover:bg-primary-dark text-black font-semibold py-3 px-4 rounded-xl transition-all duration-200 cursor-pointer shadow-[var(--glow-primary)] text-sm"
            >
              UNLOCK DASHBOARD
            </button>
          </form>
        </div>
      </div>
    );
  }

  // শর্ত ২: ইউজার সাকসেসফুলি লগইন করলে -> তোমার অরিজিনাল লেআউট ও ড্যাশবোর্ড কনটেন্ট রেন্ডার হবে
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:pl-64">
        <AdminTopbar onMenuClick={() => setSidebarOpen(true)} />
        
        {/* কুইক সিস্টেম লগআউট বাটন */}
        <div className="px-4 sm:px-6 lg:px-8 pt-4 flex justify-end">
          <button 
            onClick={handleLogout}
            className="text-xs font-mono bg-[var(--surface-3)] text-primary border border-primary/20 px-3 py-1.5 rounded-lg hover:bg-primary hover:text-black transition-all cursor-pointer shadow-[var(--glow-soft)]"
          >
            [LOGOUT CORE]
          </button>
        </div>

        <main className="custom-max-width mx-auto px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
};


export default AdminShell;