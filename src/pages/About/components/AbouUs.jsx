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
        src="https://www.ddongauto.com/wp-content/uploads/2023/09/dalou.jpg"
        alt="About Us"
      />
      <AboutUsContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod sapien eu nisl commodo,
        sed fermentum turpis ultricies. Fusce et turpis eget quam interdum sodales. In hac habitasse
        platea dictumst.
      </AboutUsContent>
      {/* Add more content as needed */}
    </AboutUsContainer>
  );
};

export default AboutUs;
