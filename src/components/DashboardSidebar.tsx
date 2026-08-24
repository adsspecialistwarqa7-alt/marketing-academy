import Link from 'next/link';

type NavItem = { href: string; label: string };

export default function DashboardSidebar({
  title,
  items,
  userName,
}: {
  title: string;
  items: NavItem[];
  userName: string;
}) {
  return (
    <aside className="w-64 shrink-0 border-l border-line bg-surface min-h-screen p-5 hidden md:flex md:flex-col">
      <Link href="/" className="font-display font-700 text-ink mb-1">
        أكاديمية التسويق
      </Link>
      <span className="text-xs text-ink/50 mb-8">{title}</span>

      <nav className="flex flex-col gap-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg px-3 py-2 text-sm text-ink/80 hover:bg-panel hover:text-ink transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-line">
        <p className="text-sm text-ink/70">{userName}</p>
        <form action="/auth/logout" method="post">
          <button className="text-sm text-red-600 mt-1 hover:underline">تسجيل الخروج</button>
        </form>
      </div>
    </aside>
  );
}
