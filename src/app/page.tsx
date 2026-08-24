import Link from 'next/link';

const tracks = [
  { name: 'Media Buying', desc: 'إدارة وتحسين الحملات الإعلانية المدفوعة' },
  { name: 'SEO', desc: 'رفع ترتيب المواقع في محركات البحث' },
  { name: 'Social Media', desc: 'بناء حضور وتفاعل على منصات التواصل' },
  { name: 'Content Marketing', desc: 'صناعة محتوى يجذب ويحول العملاء' },
  { name: 'E-commerce', desc: 'تسويق المتاجر الإلكترونية ورفع المبيعات' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-canvas">
      {/* شريط علوي بسيط */}
      <header className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <span className="font-display font-700 text-lg text-ink">أكاديمية التسويق الرقمي</span>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/courses" className="text-ink/70 hover:text-ink">الكورسات</Link>
            <Link href="/paths" className="text-ink/70 hover:text-ink">المسارات التدريبية</Link>
            <Link href="/login" className="text-ink/70 hover:text-ink">تسجيل الدخول</Link>
            <Link
              href="/register"
              className="rounded-full bg-brand-500 px-4 py-2 text-white hover:bg-brand-600 transition-colors"
            >
              ابدأ الآن
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-sm font-medium text-brand-600 bg-brand-50 px-3 py-1 rounded-full mb-5">
              تدريب عملي، مش بس شرح نظري
            </span>
            <h1 className="font-display font-700 text-4xl md:text-5xl leading-[1.15] text-ink">
              اتعلم التسويق الرقمي بطريقة تؤهلك فعليًا لسوق الشغل
            </h1>
            <p className="mt-5 text-lg text-ink/70 leading-relaxed">
              كورسات وBootcamps عملية في Media Buying وSEO وSocial Media، بمسارات تدريبية متدرجة من الأساسيات
              للتطبيق العملي على مشاريع حقيقية.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/paths"
                className="rounded-full bg-ember-500 px-6 py-3 font-medium text-ink hover:bg-ember-600 transition-colors"
              >
                استكشف المسارات التدريبية
              </Link>
              <Link href="/courses" className="text-ink font-medium hover:text-brand-600">
                تصفح الكورسات ←
              </Link>
            </div>
          </div>

          {/* الإشارة البصرية المميزة: بطاقة تقدم تحاكي Dashboard الطالب */}
          <div className="rounded-xl2 bg-surface border border-line p-6 shadow-sm">
            <p className="text-sm text-ink/50 mb-4">مسار Media Buying Internship</p>
            <div className="space-y-4">
              {[
                { label: 'المرحلة الأولى: التعلم', pct: 100 },
                { label: 'المرحلة الثانية: التطبيق', pct: 60 },
                { label: 'المرحلة الثالثة: التدريب العملي', pct: 15 },
              ].map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-ink/80">{s.label}</span>
                    <span className="text-ink/50">{s.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-panel overflow-hidden">
                    <div
                      className="h-full rounded-full bg-brand-500"
                      style={{ width: `${s.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* المجالات */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-line">
        <h2 className="font-display font-700 text-2xl text-ink mb-8">المجالات المتاحة حاليًا</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {tracks.map((t) => (
            <div key={t.name} className="rounded-xl2 bg-surface border border-line p-5">
              <h3 className="font-display font-600 text-ink mb-1.5">{t.name}</h3>
              <p className="text-sm text-ink/60">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
