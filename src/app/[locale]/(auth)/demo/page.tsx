'use client';

import Typography from '@/components/ui/Typography';
import { useTranslate } from '@/hooks';
import { getTranslations } from 'next-intl/server';

export default function Demo() {
  const {translate} = useTranslate();
  return (
    <div className="py-5 text-dang [&_p]:my-6 ">
      {/* <Hello /> */}
      {translate('alo')}
      <p className="text-darkkkk">Màu đỏ ở sáng</p>
      <Typography variant='error' className="text-darkkkk shadow-card">Màu đỏ ở sáng</Typography>
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