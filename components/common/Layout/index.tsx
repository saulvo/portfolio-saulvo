import Theme from '@/components/common/Theme';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { Container } from '../styles';

const Loading = dynamic(() => import('../Loading'));
const PlanesModel = dynamic(() => import('@/components/common/PlanesModel'), {
  ssr: false,
  loading: () => <Loading />,
});
const Header = dynamic(() => import('@/components/common/Header'));
const Footer = dynamic(() => import('@/components/common/Footer'));
const TopProgressBar = dynamic(
  () => {
    return import('@/components/common/TopProgressBar');
  },
  { ssr: false },
);
const Snowfall = dynamic(() => import('../Snowfall'), { ssr: false });

const Layout: FC = ({ children }) => {
  const router = useRouter();

  return (
    <Theme>
      <TopProgressBar />
      <Header />
      <main>
        {router.pathname !== '/404' && (
          <>
            <Snowfall />
            <PlanesModel />
          </>
        )}
        <Container>{children}</Container>
      </main>
      <Footer />
    </Theme>
  );
};

export default Layout;
