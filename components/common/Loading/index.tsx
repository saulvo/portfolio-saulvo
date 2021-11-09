import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading: React.FC = () => {
  return <Loader />;
};

export default Loading;

const rotate = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const Loader = styled.div`
  position: relative;
  width: 100%;
  height: 270px;

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    width: 30px;

    aspect-ratio: 1;
    border-radius: 50%;

    border: 3px solid ${({ theme }) => theme.global.color};
    border-left: 3px solid transparent;
    animation: ${rotate} 1.5s linear infinite;
  }
`;
