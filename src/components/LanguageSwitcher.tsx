'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

export default function LanguageSwitcher({ isMobile = false }: { isMobile?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const textClass = isMobile ? 'text-black/80 text-sm font-bold' : 'text-white/80 text-[10px] font-mono font-bold uppercase';
  const hoverClass = isMobile ? 'hover:text-black' : 'hover:text-white';
  const activeClass = 'text-7l-gold';

  return (
    <div className={`flex gap-2 tracking-widest ${textClass}`}>
      <button
        onClick={() => switchLocale('es')}
        className={`transition-colors duration-300 ${hoverClass} ${
          locale === 'es' ? activeClass : ''
        }`}
      >
        ES
      </button>
      <span className="opacity-50">/</span>
      <button
        onClick={() => switchLocale('en')}
        className={`transition-colors duration-300 ${hoverClass} ${
          locale === 'en' ? activeClass : ''
        }`}
      >
        EN
      </button>
    </div>
  );
}
