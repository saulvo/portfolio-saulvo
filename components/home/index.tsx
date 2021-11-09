import { BIO_LIST } from '@/contants/home';
import { faGlobe, faIdCard, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import {
  Avatar,
  BioListItem,
  Box,
  ButtonWork,
  ContactIcon,
  ContactItem,
  Contents,
  Icons,
  InfoDesc,
  InfoName,
  List,
  Profile,
  ProInfo,
  ShortDesc,
  Text,
  TitleCate,
  Wrapper,
} from './style';

const HomePage: FC = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <ShortDesc>{"Hello, I'm a junior frontend developer in VietNam!"}</ShortDesc>
      <Profile>
        <Avatar>
          <Image src={'/avatar.jpg'} alt='Võ Thanh Sơn' width={140} height={140} />
        </Avatar>
        <ProInfo>
          <InfoName>Võ Thanh Sơn</InfoName>
          <InfoDesc>Passionate Web Developer</InfoDesc>
        </ProInfo>
      </Profile>
      <Contents>
        <Box>
          <TitleCate>Work</TitleCate>
          <Text>
            I like to code things from scratch, and enjoy bringing ideas to life in the browser.
            Responsive websites built for an optimal user experience that achieves of business
            goals. Make website fast, easy to find, and reach the widest audience possible.
          </Text>
          <Link href='/works' passHref>
            <ButtonWork target="_self" >My works</ButtonWork>
          </Link>
        </Box>
        <Box>
          <TitleCate>Bio</TitleCate>
          <List>
            {BIO_LIST.map((item, idx) => (
              <BioListItem key={idx}>
                <b>{item.year}</b>
                <div>
                  {item.desc.map((value, index) => (
                    <p key={index}>{value}</p>
                  ))}
                </div>
              </BioListItem>
            ))}
          </List>
        </Box>
        <Box>
          <TitleCate>I love</TitleCate>
          <Text>
            Music, guitar, playing game, traveling, love to learn new things, especially things
            related to frontend stacks.
          </Text>
        </Box>
        <Box>
          <TitleCate>Contact</TitleCate>
          <List>
            <ContactItem>
              <ContactIcon>
                <FontAwesomeIcon icon={faIdCard} className='icon' />
              </ContactIcon>
              <div>
                <a href='tel:84376347057' title='Mobile'>
                  (+84) 3 7634 7057
                </a>
                <a href='mailto:vtson23597@gmail.com' title='Email'>
                  vtson23597@gmail.com
                </a>
              </div>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <FontAwesomeIcon icon={faMapMarkerAlt} className='icon' />
              </ContactIcon>
              <div>
                <span>Ho Chi Minh City</span>
                <Link href='https://goo.gl/maps/mqhJa4VbFWUt16za7' passHref>
                  <a target='_blank' title='Address'>
                    38 Duong Duc Hien, Tan Phu District
                  </a>
                </Link>
              </div>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <FontAwesomeIcon icon={faGlobe} className='icon' />
              </ContactIcon>
              <div>
                <Link href='https://github.com/sonvt-fe'>
                  <a target='_blank' title='Github'>
                    https://github.com/sonvt-fe
                  </a>
                </Link>
                <Link href='http://sonvt.epizy.com'>
                  <a title='Website'>http://sonvt.epizy.com</a>
                </Link>
              </div>
            </ContactItem>
          </List>
          <Icons>
            <Link href='https://www.youtube.com/c/saulvo' passHref>
              <a target='_blank' title='Youtube channel'>
                <Image src='/icon-yt.png' alt='Youtube channel' width={30} height={30} />
              </a>
            </Link>
            <Link href='https://t.me/Son_Growth_IT' passHref>
              <a target='_blank' title='Telegram'>
                <Image src='/icon-te.png' alt='Telegram' width={30} height={30} />
              </a>
            </Link>
            <Link href='https://www.linkedin.com/in/saulvo/' passHref>
              <a target='_blank' title='Linkedin'>
                <Image src='/icon-linkedin.png' alt='Linkedin' width={30} height={30} />
              </a>
            </Link>
          </Icons>
        </Box>
      </Contents>
    </Wrapper>
  );
};

export default HomePage;
