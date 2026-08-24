import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';

export default async function CoursesPage() {
  const supabase = createClient();
  const { data: courses } = await supabase
    .from('courses')
    .select('id, title, slug, description, category, cover_image_url')
    .eq('is_published', true)
    .order('sort_order');

  return (
    <main className="min-h-screen bg-canvas">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="font-display font-700 text-3xl text-ink mb-2">الكورسات</h1>
        <p className="text-ink/60 mb-10">اختر المجال اللي يهمك وابدأ التعلم</p>

        {!courses || courses.length === 0 ? (
          <p className="text-ink/50">لا توجد كورسات منشورة حاليًا.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c) => (
              <Link
                key={c.id}
                href={`/courses/${c.slug}`}
                className="rounded-xl2 bg-surface border border-line overflow-hidden hover:border-brand-300 transition-colors"
              >
                <div className="h-36 bg-panel" />
                <div className="p-5">
                  {c.category && (
                    <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">
                      {c.category}
                    </span>
                  )}
                  <h3 className="font-display font-600 text-ink mt-3">{c.title}</h3>
                  <p className="text-sm text-ink/60 mt-1 line-clamp-2">{c.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
