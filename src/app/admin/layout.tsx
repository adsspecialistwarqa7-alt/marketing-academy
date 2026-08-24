import DashboardSidebar from '@/components/DashboardSidebar';
import { getCurrentUserProfile } from '@/lib/supabase/server';

const navItems = [
  { href: '/admin', label: 'نظرة عامة' },
  { href: '/admin/courses', label: 'إدارة الكورسات' },
  { href: '/admin/paths', label: 'إدارة المسارات' },
  { href: '/admin/students', label: 'إدارة الطلاب' },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  // ملاحظة: الحماية الفعلية (منع غير الأدمن) تتم في middleware.ts
  const profile = await getCurrentUserProfile();

  return (
    <div className="flex bg-canvas">
      <DashboardSidebar title="لوحة التحكم" items={navItems} userName={profile?.full_name ?? ''} />
      <div className="flex-1 p-6 md:p-10">{children}</div>
    </div>
  );
}
