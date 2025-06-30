'use client';

import Typography from '@/components/ui/Typography';
import { useTranslate } from '@/hooks';

export default function Demo() {
  const { translate } = useTranslate();
  return (
    <div className="py-5 text-dang [&_p]:my-6 ">
      {/* <Hello /> */}
      {translate('alo')}
      {/* <p className="text-[var(--color-error)] text-darkkkk text-[var(--text-5xl, 3rem)]">Màu đỏ ở sáng</p> */}
      <p className="text-error text-h1 text-[var(--text-5xl, 3rem)]">Màu đỏ ở sáng</p>
      <Typography variant="h1" className="text-black shadow-card">Màu đỏ ở sáng</Typography>
    </div>
  );
}

// export async function generateMetadata(props: {
//   params: Promise<{ locale: string }>;
// }) {
//   const { locale } = await props.params;
//   const t = await getTranslations({
//     locale,
//     namespace: 'Demo',
//   });

//   return {
//     title: t('alo'),
//   };
// }
