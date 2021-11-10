import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Container = styled.div`
  width: 768px;
  max-width: 100%;

  padding: 0 10px;
  margin: 0 auto;

  @media (min-width: 769px) {
    padding: 0 20px;
  }
`;

const TitlePage = styled.h2`
  position: relative;

  width: max-content;
  max-width: calc(100% - 11rem);
  margin: 0 auto 3rem;

  font-size: 2.2rem;
  font-weight: 500;
  text-align: center;

  transition: all 0.2s;

  --bg-line: ${({ theme }) => (theme.mode === 'dark' ? '#eee' : '#ccc')};

  &::before,
  &::after {
    position: absolute;
    top: calc(50% - 0.5px);

    content: '';
    display: block;

    width: 10rem;
    height: 1px;
  }

  &::before {
    right: calc(100% + 0.5rem);
    background: linear-gradient(to left, var(--bg-line), transparent);
  }
  &::after {
    left: calc(100% + 0.5rem);
    background: linear-gradient(to right, var(--bg-line), transparent);
  }
`;

export { Container, fadeIn, fadeInUp, TitlePage };
