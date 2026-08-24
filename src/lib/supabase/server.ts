import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';

// هذا الملف يُستخدم في أي صفحة أو دالة تعمل على السيرفر
// (مثل Server Components، أو middleware، أو قراءة بيانات محمية بـ RLS)
export function createClient() {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch {
            // يحدث هذا الخطأ إذا تم النداء من Server Component بدون Middleware نشط — يمكن تجاهله
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options });
          } catch {
            // نفس الملاحظة أعلاه
          }
        },
      },
    }
  );
}

// دالة مساعدة: تجيب بيانات المستخدم الحالي مع الـ role الخاص به من profiles
export async function getCurrentUserProfile() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  return profile;
}
