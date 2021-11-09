import { Container } from '@/components/common/styles';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.header`
  position: fixed;
  inset: 0;
  z-index: 9;

  height: 55px;
  width: 100%;

  background-color: ${({ theme }) =>
    theme.mode === 'light' ? 'rgb(255 255 255 / 25%)' : 'rgb(0 0 0 / 25%)'};
  backdrop-filter: blur(10px);
  @media (min-width: 481px) {
    height: 65px;
  }
`;

const InnerWrapper = styled(Container)`
  display: flex;
  align-items: center;

  height: 100%;
`;

const WrapLogo = styled.a`
  display: flex;
  align-items: center;
`;

const anime = keyframes`
  to {
      background-position: 200% center;
    }
`;

const LogoText = styled.h1`
  margin-left: 5px;
  font-size: 22px;
  font-weight: 500;

  @media (min-width: 481px) {
    height: 25px;
  }

  span {
    text-align: center;

    background: linear-gradient(-45deg, #ff4e00 20%, #ec9f05 40%, #ec9f05 60%, #ff4e00 80%);
    background-size: 200% auto;

    color: #000;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: ${anime} 2s linear infinite;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  a {
    display: flex;
    align-items: center;

    font-size: 16px;
    text-underline-offset: 3px;

    padding: 10px;
    &:hover,
    &.active {
      color: red;
      text-decoration: underline;
    }

    > span {
      margin-right: 0.2em !important;
    }

    img {
      filter: ${({ theme }) => (theme.mode === 'dark' ? 'invert(100%)' : 'invert(0)')};
    }
  }
  @media (min-width: 481px) {
    margin-left: 30px;
  }
  @media (max-width: 480px) {
    position: absolute;
    top: ${({ active }) => (active ? 'calc(100% + 5px)' : '-200px')};
    right: 10px;
    z-index: ${({ active }) => (active ? 9 : -1)};

    border-radius: 5px;

    opacity: ${({ active }) => (active ? 1 : 0)};
    background-color: ${({ theme }) => (theme.mode === 'dark' ? '#222' : '#f2f2f2')};
    transition: opacity 0.25s;
    a {
      width: 100%;
      padding: 10px 5px 10px 15px;
    }
  }
`;

const BtnToggleTheme = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 45px;
  height: 22px;
  border-radius: 20px;
  padding: 0 5px;
  margin-left: auto;

  cursor: pointer;
  font-size: 13px;
  border: none;
  color: inherit;
  background-color: ${({ theme }) => (theme.mode === 'dark' ? '#333' : '#e4e4e4')};

  .fa-sun {
    color: yellow;
  }
  span {
    position: absolute;
    left: ${({ theme }) => (theme.mode === 'dark' ? 'calc(100% - 20px)' : '2px')};
    top: 50%;
    transform: translateY(-50%);

    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;

    background-color: #fff;

    transition: all 0.2s;
  }
`;

const BtnMenu = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 35px;
  border: none;

  margin-left: 5px;

  font-size: 25px;
  color: inherit;
  background-color: transparent;
  @media (min-width: 481px) {
    display: none;
  }
`;

export { Wrapper, InnerWrapper, WrapLogo, LogoText, Nav, BtnToggleTheme, BtnMenu };
