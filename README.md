# أكاديمية التسويق الرقمي — MVP

## ما تم بناؤه في هذه المرحلة (Authentication + الأساس)

- إعداد المشروع بالكامل: Next.js 14 + TypeScript + Tailwind (RTL عربي بالكامل)
- قاعدة البيانات الكاملة (`supabase/schema.sql`) بكل الجداول وسياسات الأمان RLS
- نظام تسجيل الدخول / إنشاء حساب / تسجيل الخروج (متصل فعليًا بـ Supabase)
- حماية صفحات الطالب (`/dashboard`) وصفحات الأدمن (`/admin`) عبر `middleware.ts`
- الصفحة الرئيسية العامة
- صفحة عرض الكورسات (تسحب البيانات من قاعدة البيانات الحقيقية)
- هيكل لوحة تحكم الطالب ولوحة تحكم الأدمن (بها بيانات حقيقية: عدد الكورسات، الطلاب، المسارات)

## خطوات التشغيل

1. **تثبيت الحزم:**
   ```bash
   npm install
   ```

2. **إنشاء مشروع Supabase:**
   - افتح [supabase.com](https://supabase.com) وأنشئ مشروع جديد (مجاني)
   - من `Project Settings → API` انسخ الـ `URL` و `anon public key`

3. **إعداد متغيرات البيئة:**
   ```bash
   cp .env.local.example .env.local
   ```
   ثم ضع بيانات مشروعك داخل `.env.local`

4. **تشغيل قاعدة البيانات:**
   - افتح `SQL Editor` داخل لوحة تحكم Supabase
   - انسخ محتوى ملف `supabase/schema.sql` بالكامل وشغّله

5. **تشغيل المشروع محليًا:**
   ```bash
   npm run dev
   ```
   ثم افتح `http://localhost:3000`

6. **جعل نفسك Admin (للتجربة):**
   بعد إنشاء حساب من `/register`، افتح `Table Editor → profiles` داخل Supabase،
   وغيّر قيمة `role` لحسابك من `student` إلى `admin`.

## الخطوة القادمة (المرحلة 3 المتبقية)

- صفحات إدارة الكورسات والدروس من لوحة الأدمن (إضافة/تعديل/حذف)
- مشغّل الفيديو مع نظام Tracking باستخدام YouTube IFrame API
- صفحات المسارات التدريبية (Public + Student + Admin)
- صفحة الملف الشخصي واستعادة كلمة المرور

## هيكل المشروع

```
src/
  app/              → الصفحات (Next.js App Router)
    (public)        → الرئيسية، الكورسات، المسارات
    login/, register/
    dashboard/       → منطقة الطالب (محمية)
    admin/           → منطقة الأدمن (محمية)
  components/        → مكونات مشتركة
  lib/supabase/       → إعداد الاتصال بـ Supabase (client + server)
  middleware.ts       → حماية الصفحات وفحص الصلاحيات
supabase/
  schema.sql          → قاعدة البيانات الكاملة + الأمان (RLS)
```
