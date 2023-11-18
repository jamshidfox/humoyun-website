import React from 'react';
import styled from 'styled-components';

const AboutUsContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const AboutUsTitle = styled.h2`
  color: #333;
`;

const AboutUsImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin: 20px 0;
  border-radius: 8px;
`;

const AboutUsContent = styled.p`
  color: #555;
  line-height: 1.6;
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <AboutUsTitle>About Us</AboutUsTitle>
      <AboutUsImage
        src="https://d6xcmfyh68wv8.cloudfront.net/learn-content/uploads/2019/09/register-company-online.png"
        alt="About Us"
      />
      <AboutUsContent>
       
      </AboutUsContent>
      {/* Add more content as needed */}
    </AboutUsContainer>
  );
};

export default AboutUs;
