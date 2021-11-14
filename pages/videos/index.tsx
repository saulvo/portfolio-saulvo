import * as api from '@/api/youtube';
import Layout from '@/components/common/Layout';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import dynamic from 'next/dynamic';
const VideosPage = dynamic(() => import('@/components/videos'));

export default function Videos(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <VideosPage {...props} />;
}

Videos.Layout = Layout;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const videoList = await api.getPlaylistById('PLw46C1_ab136VIukkG2lGQK2jlakNVUsO');

  return {
    props: {
      videoList,
    },
  };
}
