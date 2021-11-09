import Layout from '@/components/common/Layout';
import HomePage from '@/components/home';
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
export default function Home({}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <HomePage />;
}

Home.Layout = Layout;

export async function getStaticProps({ preview, locale, locales }: GetStaticPropsContext) {
  return {
    props: {},
    revalidate: 60,
  };
}
