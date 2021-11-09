import styled, {keyframes} from 'styled-components';

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

export { Container, fadeIn, fadeInUp };

