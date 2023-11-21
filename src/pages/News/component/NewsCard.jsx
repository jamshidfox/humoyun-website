import React from 'react';
import styled from 'styled-components';

const NewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const NewsCard = styled.div`
  width: 300px;
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const NewsImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const NewsContent = styled.div`
  padding: 15px;
`;

const NewsTitle = styled.h3`
  color: #333;
  margin-bottom: 10px;
`;

const NewsDate = styled.p`
  color: #777;
  margin-bottom: 10px;
`;

const NewsText = styled.p`
  color: #555;
`;

const NewsCardContainer = ({ newsData }) => {
  return (
    <NewsContainer>
      {newsData.map((news) => (
        <NewsCard key={news.id}>
          <NewsImage src={news.image} alt={news.title} />
          <NewsContent>
            <NewsTitle>{news.title}</NewsTitle>
            <NewsDate>{news.date}</NewsDate>
            <NewsText>{news.content}</NewsText>
          </NewsContent>
        </NewsCard>
      ))}
    </NewsContainer>
  );
};

export default NewsCardContainer;
