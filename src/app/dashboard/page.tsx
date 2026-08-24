import Link from 'next/link';
import { createClient, getCurrentUserProfile } from '@/lib/supabase/server';

export default async function StudentDashboardPage() {
  const supabase = createClient();
  const profile = await getCurrentUserProfile();

  // نجيب الكورسات المشترك فيها الطالب مع بيانات الكورس نفسه
  const { data: enrollments } = await supabase
    .from('enrollments')
    .select('course_id, courses(id, title, slug, cover_image_url)')
    .eq('user_id', profile?.id ?? '');

  return (
    <div>
      <h1 className="font-display font-700 text-2xl text-ink mb-1">
        مرحبًا {profile?.full_name ?? ''} 👋
      </h1>
      <p className="text-ink/60 mb-8">إليك آخر تقدمك في رحلتك التعليمية</p>

      <h2 className="font-display font-600 text-lg text-ink mb-4">كورساتي</h2>

      {!enrollments || enrollments.length === 0 ? (
        <div className="rounded-xl2 border border-dashed border-line p-8 text-center text-ink/60">
          لسه مشتركش في أي كورس.{' '}
          <Link href="/courses" className="text-brand-600 font-medium">
            تصفح الكورسات المتاحة
          </Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {enrollments.map((e: any) => (
            <Link
              key={e.course_id}
              href={`/dashboard/courses/${e.courses?.slug}`}
              className="rounded-xl2 bg-surface border border-line overflow-hidden hover:border-brand-300 transition-colors"
            >
              <div className="h-32 bg-panel" />
              <div className="p-4">
                <h3 className="font-display font-600 text-ink">{e.courses?.title}</h3>
                <button className="mt-3 text-sm text-brand-600 font-medium">استكمل التعلم ←</button>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
