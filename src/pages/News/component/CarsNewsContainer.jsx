import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  background-color: #333; /* Dark background color */
  color: #fff; /* Light text color */
`;

const NewsItem = styled.div`
  margin-bottom: 20px;
`;

const NewsImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

const Date = styled.p`
  font-size: 14px;
  color: #888;
`;

const CarsNewsContainer = ({ newsData }) => {
  return (
    <Container>
      {newsData.map((news, index) => (
        <NewsItem key={index}>
          {news.image && <NewsImage src={news.image} alt={news.title} />}
          <Title>{news.title}</Title>
          <Date>{news.date}</Date>
        </NewsItem>
      ))}
    </Container>
  );
};

export default CarsNewsContainer;
