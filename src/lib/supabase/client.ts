import { createBrowserClient } from '@supabase/ssr';

// هذا الملف يُستخدم داخل الـ Client Components (فورم تسجيل الدخول مثلاً)
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
