import React from 'react';
import styled from 'styled-components';

const OfficeContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0; /* Light gray background */
  border: 1px solid #ddd; /* Border color */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Box shadow */
  margin-bottom: 3rem;
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 0 20px;
`;

const OfficeImage = styled.img`
  width: 300px; /* Adjust the width as needed */
  height: auto;
  border-radius: 8px;
  margin-right: 20px;
`;

const OfficeTitle = styled.h2`
  margin-bottom: 10px;
  color: #333;
`;

const OfficeContent = styled.p`
  color: #555;
  line-height: 1.6;
`;

const Office = () => {
  return (
    <OfficeContainer>
      <OfficeImage
        src="https://locations-api-production.imgix.net/locations/image/179bd7a6-0b05-11ea-96ab-0a5bc5747799/Web_72DPI-20191028_WeWork_222_South_Riverside_Plaza_Chicago_007.jpg?auto=format%20compress&fit=crop&q=50&w=1000&h=563" // Replace with the actual image URL of your office
        alt="Office Image"
      />
      <TextContainer>
        <OfficeTitle>Our Office</OfficeTitle>
        <OfficeContent>
          Cars.com is located at 300 South Riverside, a 23-story Class A, LEED Gold Certified office
          tower.
          <br />
          <br />
          Cars.com
          <br />
          300 S. Riverside Plaza, Suite 1000
          <br />
          Chicago, IL 60606
        </OfficeContent>
      </TextContainer>
    </OfficeContainer>
  );
};

export default Office;
