import styled, { keyframes } from 'styled-components';
import { fadeInUp } from '../common/styles';

const Wrapper = styled.div`
  animation: ${fadeInUp} 0.5s ease;
`;

const ShortDesc = styled.div`
  border-radius: 5px;
  padding: 1.2rem;
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(255, 255, 255, 20%)' : 'rgb(238 238 238 / 0.5)'};

  font-size: 1.4rem;
  text-align: center;

  @media (min-width: 415px) {
    font-size: 1.6rem;
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 3rem;
`;
const rotate = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const Avatar = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 120px;
  aspect-ratio: 1;
  border-radius: 50%;

  @media (min-width: 415px) {
    width: 140px;
  }

  &::before,
  &::after {
    content: '';

    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;

    display: block;
    border-radius: 50%;
  }

  &::before {
    width: calc(100% + 5px);
    height: calc(100% + 5px);

    background-color: #ff4e00;
    background-image: linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%);

    animation: ${rotate} 1s linear infinite;
  }
  &::after {
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.global.background};
  }

  > span {
    border-radius: 50%;
  }
`;

const ProInfo = styled.div`
  width: max-content;
  max-width: calc(100% - 130px);
  margin-left: 1.5rem;

  @media (min-width: 415px) {
    max-width: calc(100% - 165px);
  }
  @media (min-width: 481px) {
    margin-left: 3rem;
  }
`;

const InfoName = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;

  @media (min-width: 415px) {
    font-size: 3.8rem;
  }
`;

const InfoDesc = styled.div`
  font-size: 1.45rem;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#eee' : '#444')};
  letter-spacing: 0.08rem;

  @media (min-width: 415px) {
    font-size: 1.8rem;
    letter-spacing: 0.12rem;
  }
`;
const Contents = styled.div`
  width: 550px;
  max-width: 100%;
  margin: 0 auto;
`;

const TitleCate = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.2em;
`;

const Text = styled.p`
  text-align: justify;
  text-indent: 1em;
`;

const Box = styled.div`
  margin-top: 3rem;
`;

const ButtonWork = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3.5rem;
  width: 18rem;
  max-width: 100%;
  margin: 1.5rem auto 0;

  border-radius: 5px;

  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;

  color: #fff;
  background: linear-gradient(45deg, #ff4e00, #ff253a);
  transition: all 0.25s;
  &:hover {
    background: linear-gradient(45deg, #ff253a, #ff4e00);
  }
`;

const List = styled.ul`
  padding: 0 1rem;
  list-style: none;
  @media (min-width: 415px) {
    padding: 0 2rem;
  }
`;

const BioListItem = styled.li`
  position: relative;

  display: flex;
  padding-left: 1.5rem;
  padding-bottom: 0.5rem;

  &::before {
    position: absolute;
    top: 0.7rem;
    left: 0;

    content: '';
    display: block;
    width: 4px;
    aspect-ratio: 1;
    border-radius: 50%;

    background-color: ${({ theme }) => (theme.mode === 'dark' ? '#eee' : '#444')};
  }

  b {
    font-weight: 500;
    margin-right: 2rem;
  }
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;

  margin-bottom: 1rem;
  span,
  a {
    display: block;
  }
  a {
    transition: all 0.25s;
    &:hover {
      color: red;
    }
  }
`;

const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 1.2rem;

  background-color: #eee;
  .fa-id-card {
    color: #29d;
  }

  .fa-map-marker-alt {
    color: red;
  }

  .fa-globe {
    color: green;
  }
`;

const Icons = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 1rem;

  @media (min-width: 415px) {
    padding: 1.5rem 2rem 1rem;
  }
  a {
    display: block;
    width: 3rem;
    height: 3rem;
    margin-right: 1.2rem;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export {
  Wrapper,
  ShortDesc,
  Profile,
  Avatar,
  ProInfo,
  InfoName,
  InfoDesc,
  Contents,
  Text,
  TitleCate,
  Box,
  ButtonWork,
  List,
  BioListItem,
  ContactItem,
  ContactIcon,
  Icons,
};
