import React, { useState } from 'react';
import styled from 'styled-components';

const NewCarsContainer = styled.div`
  padding: 20px;
`;

const SectionTitle = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
`;

const CarTitle = styled.h3`
  color: #333;
  margin-bottom: 10px;
`;

const CarPrice = styled.p`
  color: #777;
  margin-bottom: 10px;
`;

const SeeAllButton = styled.button`
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

const NewCars = ({ cars }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <NewCarsContainer>
      <SectionTitle>New Cars</SectionTitle>
      <CardContainer>
        {showAll
          ? cars.map((car) => (
              <Card key={car.title}>
                <CarTitle>{car.title}</CarTitle>
                <CarPrice>${car.price}</CarPrice>
              </Card>
            ))
          : cars.slice(0, 3).map((car) => (
              <Card key={car.title}>
                <CarTitle>{car.title}</CarTitle>
                <CarPrice>${car.price}</CarPrice>
              </Card>
            ))}
      </CardContainer>
      <SeeAllButton onClick={toggleShowAll}>{showAll ? 'See Less' : 'See All'}</SeeAllButton>
    </NewCarsContainer>
  );
};

const carsData = [
  { title: 'Audi Q4 e-tron Sportback', price: 58200 },
  { title: 'Mercedes-Benz EQE 500', price: 85900 },
  { title: 'Lucid Air', price: 77400 },
  { title: 'Rivian R1S', price: 78000 },
  { title: 'Hyundai Kona EV', price: 33550 },
  { title: 'Ford E-Transit', price: 49995 },
];

const NewCarsExample = () => <NewCars cars={carsData} />;

export default NewCarsExample;
