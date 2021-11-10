import { TitlePage } from '@/components/common/styles';
import { NextSeo } from 'next-seo';
import { FC } from 'react';
import { Wrapper } from './style';

const PostsPage: FC = () => {
  return (
    <Wrapper>
      <NextSeo title='Posts - Saul Vo' description="Posts's Saul Vo" />
      <TitlePage>Posts</TitlePage>
      <p style={{ textAlign: 'center' }}>Soon comming...</p>
    </Wrapper>
  );
};

export default PostsPage;
