import React from 'react';
import AdminShell from '../components/AdminDashboard/AdminShell';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return <AdminShell>{children}</AdminShell>;
};

export default AdminLayout;