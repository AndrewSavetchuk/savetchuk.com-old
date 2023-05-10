import 'normalize.css';
import '@/styles/index.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
