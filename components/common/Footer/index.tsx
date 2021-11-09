import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return <Wrapper>&copy; 2021 Saul Vo. All Rights Reserved.</Wrapper>;
};

export default Footer;

const Wrapper = styled.footer`
  padding: 2rem;

  font-size: 12px;
  text-align: center;
  color: ${({ theme }) => theme.global.colorContrast};
`;
