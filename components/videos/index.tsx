import { TitlePage } from '@/components/common/styles';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Col, Row, Wrapper } from './style';
interface Props {
  videoList: any;
}
const VideosPage: FC<Props> = ({ videoList }) => {
  const { rows = [], count } = videoList;
  console.log(rows);

  return (
    <Wrapper>
      <TitlePage>Videos</TitlePage>
      <Row>
        {rows.length > 0 &&
          rows.map((item) => (
            <Col key={item.id}>
              <Link
                href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
                passHref>
                <a target='_blank'>
                  <Image
                    src={item.snippet.thumbnails.high.url}
                    width={item.snippet.thumbnails.high.width}
                    height={item.snippet.thumbnails.high.height}
                    alt={item.snippet.title}
                  />
                  <h3>{item.snippet.title}</h3>
                </a>
              </Link>
            </Col>
          ))}
      </Row>
    </Wrapper>
  );
};

export default VideosPage;
