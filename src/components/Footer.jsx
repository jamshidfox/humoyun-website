import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 Car Project. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
