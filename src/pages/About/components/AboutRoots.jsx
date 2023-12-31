import React from "react";
import styled from "styled-components";

const RootsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 40px; /* Increased padding */
  background-color: #ece9e9; /* Dark purple color */
  color: #4e4d4d;
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 0 40px; /* Increased padding */
`;

const RootsImage = styled.img`
  width: 50rem; /* Increased width */
  height: auto;
  border-radius: 8px;
  /* margin-right: 40px; Increased margin */
`;

const RootsTitle = styled.h2`
  font-size: 28px; /* Increased font size */
  margin-bottom: 20px; /* Increased margin */
  display: flex;
  justify-content: center;
`;

const RootsContent = styled.p`
  font-size: 16px; /* Increased font size */
  line-height: 1.6;
  text-align: center;
`;

const Roots = () => {
  return (
    <RootsContainer>
      <RootsImage
        src="https://www.infotrack.co.uk/media/keegy510/hero-2-company-search.png?height=457&width=840&quality=&mode=Crop&center=0.41647855530474043,0&bgcolor=transparent" // Replace with the actual image URL
        alt="Roots Image"
      />
      <TextContainer>
        <RootsTitle>Our Roots</RootsTitle>
        <RootsContent>
          Cars.com invented car search. Our site and innovative solutions
          connect buyers and sellers to match people with their perfect car.
          With our people spread across the U.S., we still maintain a startup
          culture with innovation and passion for our people at the core of
          everything we do. Cars.com has an award-winning brand, leadership
          team, and the best and brightest employees in the industry. We’ve been
          featured as one of the top places to work by The Chicago Tribune,
          Built in Chicago, Chicago Innovation, and U.S. News & World Report.
          <br />
          <br />
          Alex Vetter, President and CEO, Cars.com
        </RootsContent>
      </TextContainer>
    </RootsContainer>
  );
};

export default Roots;
