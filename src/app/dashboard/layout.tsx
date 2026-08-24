import DashboardSidebar from '@/components/DashboardSidebar';
import { getCurrentUserProfile } from '@/lib/supabase/server';

const navItems = [
  { href: '/dashboard', label: 'الرئيسية' },
  { href: '/dashboard/courses', label: 'كورساتي' },
  { href: '/dashboard/paths', label: 'المسارات التدريبية' },
  { href: '/dashboard/profile', label: 'الملف الشخصي' },
];

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const profile = await getCurrentUserProfile();

  return (
    <div className="flex bg-canvas">
      <DashboardSidebar title="لوحة الطالب" items={navItems} userName={profile?.full_name ?? ''} />
      <div className="flex-1 p-6 md:p-10">{children}</div>
    </div>
  );
}
