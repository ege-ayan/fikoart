import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';

export default async function Home() {
  const t = await getTranslations('HomePage');

  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-6">
      <h1 className="text-3xl font-semibold">{t('title')}</h1>
      <nav className="flex gap-4 text-sm">
        <Link href="/" locale="en">
          EN
        </Link>
        <Link href="/" locale="tr">
          TR
        </Link>
      </nav>
    </div>
  );
}
