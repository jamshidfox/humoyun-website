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
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.imageUrl})`};
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
              <Card key={car.title} imageUrl={car.picture}>
                <CarTitle>{car.title}</CarTitle>
                <CarPrice>${car.price}</CarPrice>
              </Card>
            ))
          : cars.slice(0, 3).map((car) => (
              <Card key={car.title} imageUrl={car.picture}>
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
  {
    title: 'Audi Q4 e-tron Sportback',
    price: 58200,
    picture:
      'https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80',
  },
  {
    title: 'Mercedes-Benz EQE 500',
    price: 85900,
    picture:
      'https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80',
  },
  {
    title: 'Lucid Air',
    price: 77400,
    picture:
      'https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80',
  },
  {
    title: 'Rivian R1S',
    price: 78000,
    picture:
      'https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80',
  },
  {
    title: 'Hyundai Kona EV',
    price: 33550,
    picture:
      'https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80',
  },
  {
    title: 'Ford E-Transit',
    price: 49995,
    picture:
      'https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80',
  },
];

const NewCarsExample = () => <NewCars cars={carsData} />;

export default NewCarsExample;
