import Layout from '@/components/common/Layout';
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
export default function Works({}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>Works</div>;
}

Works.Layout = Layout;

export async function getStaticProps({ preview, locale, locales }: GetStaticPropsContext) {
  return {
    props: {},
    revalidate: 60,
  };
}
