import Layout from '@/components/common/Layout';
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
export default function Posts({}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>Posts</div>;
}

Posts.Layout = Layout;

export async function getStaticProps({ preview, locale, locales }: GetStaticPropsContext) {
  return {
    props: {},
    revalidate: 60,
  };
}
