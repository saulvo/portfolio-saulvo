import { FC, useEffect, useState } from 'react';
import Snow from 'react-snowfall';
import styled from 'styled-components';

const Snowfall: FC = () => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <Wrapper>{show && <Snow snowflakeCount={20} />}</Wrapper>;
};

export default Snowfall;

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;

  width: 100vw;
  height: 100vh;
`;
