import styled from 'styled-components';
import { fadeInUp } from '../common/styles';

const Wrapper = styled.div`
  animation: ${fadeInUp} 0.5s ease;
`;

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 -0.5rem;
`;

const Col = styled.div`
  width: calc(50% - 1rem);
  margin: 0 0.5rem 2rem;

  @media (min-width: 481px) {
    width: calc(100% / 3 - 1rem);
    &:nth-child(10) {
      display: none;
    }
  }

  > a {
    display: block;
    height: 100%;
    > span {
      border-radius: 3px;
    }
  }
  h3 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 1.6rem;
    font-weight: 500;
  }
`;

const Button = styled.a`
  display: block;
  width: max-content;
  border-radius: 3px;
  margin: 1rem auto 0;
  padding: 0.6rem 1.2rem;

  font-size: 1.6rem;
  font-weight: 500;

  color: #fff;
  background: linear-gradient(45deg, #ff4e00, #ff253a);
`;

export { Wrapper, Row, Col, Button };
