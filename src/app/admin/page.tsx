import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';

export default async function AdminOverviewPage() {
  const supabase = createClient();

  const [{ count: coursesCount }, { count: studentsCount }, { count: pathsCount }] = await Promise.all([
    supabase.from('courses').select('*', { count: 'exact', head: true }),
    supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('role', 'student'),
    supabase.from('training_paths').select('*', { count: 'exact', head: true }),
  ]);

  const stats = [
    { label: 'الكورسات', value: coursesCount ?? 0, href: '/admin/courses' },
    { label: 'الطلاب', value: studentsCount ?? 0, href: '/admin/students' },
    { label: 'المسارات التدريبية', value: pathsCount ?? 0, href: '/admin/paths' },
  ];

  return (
    <div>
      <h1 className="font-display font-700 text-2xl text-ink mb-1">لوحة التحكم</h1>
      <p className="text-ink/60 mb-8">نظرة سريعة على حالة المنصة</p>

      <div className="grid sm:grid-cols-3 gap-5 mb-10">
        {stats.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="rounded-xl2 bg-surface border border-line p-6 hover:border-brand-300 transition-colors"
          >
            <p className="text-3xl font-display font-700 text-ink">{s.value}</p>
            <p className="text-sm text-ink/60 mt-1">{s.label}</p>
          </Link>
        ))}
      </div>

      <Link
        href="/admin/courses/new"
        className="inline-block rounded-full bg-brand-500 text-white px-5 py-2.5 text-sm font-medium hover:bg-brand-600 transition-colors"
      >
        + إضافة كورس جديد
      </Link>
    </div>
  );
}
