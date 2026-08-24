import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#12131A',       // أسود دافئ للنصوص الرئيسية
        canvas: '#F7F6F2',    // خلفية فاتحة محايدة
        surface: '#FFFFFF',
        panel: '#EFEDE6',
        brand: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          300: '#A5B4FC',
          500: '#4F46E5',   // إنديجو - اللون الأساسي (ثقة/احترافية)
          600: '#4338CA',
          700: '#3730A3',
          900: '#1E1B4B',
        },
        ember: {
          400: '#FFB020',   // كهرماني - لون الطاقة والنمو (CTA)
          500: '#F59E0B',
          600: '#D97706',
        },
        line: '#E4E1D8',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
};

export default config;
