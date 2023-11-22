// WhyChooseUs.js
import React from "react";
import styled from "styled-components";

const WhyChooseUsContainer = styled.div`
  text-align: center;
  padding: 40px 20px;
  background-color: #f0f0f0;
  border-radius: 14px;
`;

const SectionTitle = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

const ReasonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ReasonCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ReasonImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ReasonContent = styled.div`
  padding: 16px;
  background-color: #a1cdf4;
  border-radius: 8px;
`;

const ReasonTitle = styled.h3`
  margin: 0;
  color: #333;
`;

const ReasonDescription = styled.p`
  color: #555;
`;

const WhyChooseUs = ({ whyChooseUs }) => {
  return (
    <WhyChooseUsContainer>
      <SectionTitle>Why Choose Us</SectionTitle>
      <ReasonsContainer>
        {whyChooseUs.map((reason, index) => (
          <ReasonCard key={index}>
            <ReasonImage src={reason.image} alt={reason.title} />
            <ReasonContent>
              <ReasonTitle>{reason.title}</ReasonTitle>
              <ReasonDescription>{reason.description}</ReasonDescription>
            </ReasonContent>
          </ReasonCard>
        ))}
      </ReasonsContainer>
    </WhyChooseUsContainer>
  );
};

export default WhyChooseUs;
