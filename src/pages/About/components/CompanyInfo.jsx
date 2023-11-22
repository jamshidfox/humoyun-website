import React from "react";
import styled from "styled-components";

const CompanyInfoContainer = styled.div`
  /* max-width: 800px; */
  margin: auto;
  margin-top: 5rem;
  padding: 20px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CompanyInfoTitle = styled.h2`
  color: #333;
`;

const CompanyImagesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

const CompanyImage = styled.img`
  width: 48%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const CompanyInfoContent = styled.p`
  color: #555;
  line-height: 1.6;
`;

const CompanyInfo = () => {
  return (
    <CompanyInfoContainer>
      <CompanyInfoTitle>Our Company</CompanyInfoTitle>
      <CompanyImagesContainer>
        <CompanyImage
          src="https://carwow-uk-wp-2.imgix.net/best-company-cars-lead-1-scaled.jpg?auto=format&cs=tinysrgb&fit=crop&h=800&ixlib=rb-1.1.0&q=60&w=1600"
          alt="Company Image 1"
        />
        <CompanyImage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40nDZEiygF9paqzMcQLNNM1YNdZGCLK5dBQ&usqp=CAU"
          alt="Company Image 2"
        />
      </CompanyImagesContainer>
      <CompanyInfoContent>
        Henan Dongdong Automobile Service Co., Ltd. ddongauto.com is subordinate
        to Henan Dongdong Automobile Service Co., Ltd, which was founded in 2016
        and is located in Zhengzhou, Henan Province, China, with a registered
        capital of 30.5 million yuan.
        <br />
        <br />
        Henan Dongdong Auto Service Co., Ltd. with 8 years of export experience
        is a leading electric vehicle wholesaler, distributor, and dealer in
        China, and is authorized by the Chinese government to promote and sell
        vehicles such as electric cars and used cars all over the world.
      </CompanyInfoContent>
      {/* Add more content and images as needed */}
    </CompanyInfoContainer>
  );
};

export default CompanyInfo;
