import { TitlePage } from '@/components/common/styles';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Col, Row, Wrapper } from './style';

interface Props {
  videoList: {
    rows: Array<{
      id: string;
      photo: string;
      title: string;
      url: string;
    }>;
    count: number;
  };
}
const VideosPage: FC<Props> = ({ videoList }) => {
  const { rows = [], count } = videoList;

  return (
    <Wrapper>
      <NextSeo title='Videos - Saul Vo' description="Videos's Saul Vo" />
      <TitlePage>Videos</TitlePage>
      <Row>
        {rows.length > 0 &&
          rows.map((video) => (
            <Col key={video.id}>
              <Link href={video.url} passHref>
                <a target='_blank'>
                  <Image src={video.photo} width={480} height={360} alt={video.title} />
                  <h3>{video.title}</h3>
                </a>
              </Link>
            </Col>
          ))}
      </Row>
    </Wrapper>
  );
};

export default VideosPage;
