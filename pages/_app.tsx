import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import 'nprogress/nprogress.css';
import { FC } from 'react';

const Noop: FC = ({ children }) => <>{children}</>;

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  return (
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}
