import styled from 'styled-components';
import { fadeInUp } from '../common/styles';

const Wrapper = styled.div`
  animation: ${fadeInUp} 0.5s ease;
`;

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const Col = styled.div`
  width: calc(50% - 0.5rem);
  margin-bottom: 2rem;

  @media (min-width: 481px) {
    width: calc(100% / 3 - 0.5rem);
  }

  > a > span {
    border-radius: 3px;
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 500;
  }
`;

export { Wrapper, Row, Col };
