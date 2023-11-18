import React from 'react';
import styled from 'styled-components';
import { toolsData } from './constants';

const CarToolsContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #f0f0f0; /* Light gray background */
`;

const ToolsTitle = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

const ToolsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ToolCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ToolImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ToolContent = styled.div`
  padding: 16px;
`;

const ToolTitle = styled.h3`
  margin: 0;
  color: #333;
`;

const ToolDescription = styled.p`
  color: #555;
`;

const CarTools = () => {
  return (
    <CarToolsContainer>
      <ToolsTitle>Find New & Used Cars for Sale</ToolsTitle>
      <ToolsContainer>
        {toolsData.map((tool, index) => (
          <ToolCard key={index}>
            <ToolImage src={tool.image} alt={tool.title} />
            <ToolContent>
              <ToolTitle>{tool.title}</ToolTitle>
              <ToolDescription>{tool.description}</ToolDescription>
            </ToolContent>
          </ToolCard>
        ))}
      </ToolsContainer>
    </CarToolsContainer>
  );
};

export default CarTools;
