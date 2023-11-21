import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #3498db;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const HeaderTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
`;

const HeaderSubtitle = styled.p`
  font-size: 18px;
`;

const HeaderForNews = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Latest News</HeaderTitle>
      <HeaderSubtitle>Stay updated with our latest announcements and articles.</HeaderSubtitle>
    </HeaderContainer>
  );
};

export default HeaderForNews;
