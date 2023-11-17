import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  &:hover {
    transform: scale(1.05);
    transition: 0.4s;
  }
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: contain;
`;

const LogoCard = ({ company }) => {
  return (
    <CardContainer>
      <LogoImage src={company.logo} alt="Company Logo" />
    </CardContainer>
  );
};

export default LogoCard;
