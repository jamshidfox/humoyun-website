import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  margin: 0;
`;

const CardDescription = styled.p`
  color: #555;
`;

const CarCard = ({ car }) => {
  console.log(car);
  return (
    <CardContainer>
      <CardImage src={car.picture} alt={car.model} />
      <CardContent>
        <CardTitle>{car.model}</CardTitle>
        <CardDescription>{car.blurb}</CardDescription>
        <p>
          Engine: <strong>{car.engine}</strong>
        </p>
      </CardContent>
    </CardContainer>
  );
};

export default CarCard;
