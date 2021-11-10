import styled from 'styled-components';

const Container = styled.div<{ z: boolean }>`
  position: relative;
  width: 100%;
  height: ${({ z }) => (z ? 'calc(100vh - 55px)' : '250px')};
  margin-bottom: 2rem;
  cursor: pointer;
  background-position: center;
  background-color: ${({ theme }) => (theme.mode === 'dark' ? '#000' : '#eee')};
  transition: height 0.35s;

  @media (min-width: 481px) {
    height: ${({ z }) => (z ? 'calc(100vh - 65px)' : '250px')};
  }
`;

const Button = styled.button`
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;

  width: 2.5rem;
  height: 2.5rem;
  border: none;

  cursor: pointer;
  background-color: transparent;

  &:focus {
    outline: none;
  }
  span {
    position: absolute;
    --bg: ${({ theme }) => (theme.mode === 'dark' ? '#fff' : '#333')};

    &:nth-child(1),
    &:nth-child(2) {
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(
        to right,
        var(--bg) 0,
        var(--bg) 40%,
        transparent 40%,
        transparent 60%,
        var(--bg) 60%,
        var(--bg) 100%
      );
    }

    &:nth-child(3),
    &:nth-child(4) {
      top: 0;
      width: 2px;
      height: 100%;

      background: linear-gradient(
        to bottom,
        var(--bg) 0,
        var(--bg) 40%,
        transparent 40%,
        transparent 60%,
        var(--bg) 60%,
        var(--bg) 100%
      );
    }
  }

  &.zoom-in {
    span {
      &:nth-child(1) {
        top: 0;
      }

      &:nth-child(2) {
        bottom: 0;
      }
      &:nth-child(3) {
        left: 0;
      }
      &:nth-child(4) {
        right: 0;
      }
    }
  }

  &.zoom-out {
    span {
      &:nth-child(1) {
        top: 35%;
      }
      &:nth-child(2) {
        bottom: 35%;
      }
      &:nth-child(3) {
        left: 35%;
      }
      &:nth-child(4) {
        right: 35%;
      }
    }
  }
`;

export { Container, Button };
