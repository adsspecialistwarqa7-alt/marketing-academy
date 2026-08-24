'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (password.length < 6) {
      setError('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
      return;
    }

    setLoading(true);
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } }, // يُستخدم في trigger إنشاء الـ profile
    });

    setLoading(false);

    if (error) {
      setError(error.message.includes('already registered')
        ? 'هذا البريد الإلكتروني مسجل بالفعل'
        : 'حدث خطأ أثناء إنشاء الحساب، حاول مرة أخرى');
      return;
    }

    setSuccess(true);
    setTimeout(() => router.push('/login'), 2000);
  }

  return (
    <main className="min-h-screen bg-canvas flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <Link href="/" className="block text-center font-display font-700 text-lg text-ink mb-8">
          أكاديمية التسويق الرقمي
        </Link>

        <div className="rounded-xl2 bg-surface border border-line p-7 shadow-sm">
          <h1 className="font-display font-700 text-xl text-ink mb-1">إنشاء حساب جديد</h1>
          <p className="text-sm text-ink/60 mb-6">ابدأ رحلتك في تعلم التسويق الرقمي</p>

          {success ? (
            <p className="text-sm text-green-700 bg-green-50 rounded-lg px-3 py-3 text-center">
              تم إنشاء حسابك بنجاح، جاري تحويلك لتسجيل الدخول...
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-ink mb-1.5">
                  الاسم الكامل
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-lg border border-line bg-canvas px-3.5 py-2.5 text-ink focus:border-brand-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
                  البريد الإلكتروني
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-line bg-canvas px-3.5 py-2.5 text-ink focus:border-brand-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-ink mb-1.5">
                  كلمة المرور
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-line bg-canvas px-3.5 py-2.5 text-ink focus:border-brand-500 focus:outline-none"
                  placeholder="6 أحرف على الأقل"
                />
              </div>

              {error && (
                <p role="alert" className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-brand-500 text-white font-medium py-2.5 hover:bg-brand-600 transition-colors disabled:opacity-60"
              >
                {loading ? 'جاري الإنشاء...' : 'إنشاء الحساب'}
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-sm text-ink/60 mt-5">
          لديك حساب بالفعل؟{' '}
          <Link href="/login" className="text-brand-600 font-medium">
            سجّل الدخول
          </Link>
        </p>
      </div>
    </main>
  );
}
