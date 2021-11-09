import React from 'react';
import Snow from 'react-snowfall';
import styled from 'styled-components';

const Snowfall = () => {
  return (
    <Wrapper>
      <Snow snowflakeCount={20} />
    </Wrapper>
  );
};

export default Snowfall;

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;

  width: 100vw;
  height: 100vh;
`;
