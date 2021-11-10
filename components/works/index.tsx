import { TitlePage } from '@/components/common/styles';
import { NextSeo } from 'next-seo';
import { FC } from 'react';
import { Wrapper } from './style';

const WorksPage: FC = () => {
  return (
    <Wrapper>
      <NextSeo title='Works - Saul Vo' description="Works's Saul Vo" />
      <TitlePage>Works</TitlePage>
      <p style={{ textAlign: 'center' }}>Soon comming...</p>
    </Wrapper>
  );
};

export default WorksPage;
