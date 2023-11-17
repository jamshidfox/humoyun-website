import React, { useState } from 'react';
import styled from 'styled-components';
import CarCard from './CarCard'; // Import your CarCard component here

const CarsContainerContainer = styled.div`
  flex: 0 1 25%; /* Adjust the width as needed */
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0rem;
  justify-content: space-between;
`;

const ShowMoreContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;

const ShowMoreButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #2980b9;
  }
`;

const CarsContainer = ({ carData, initialDisplayCount }) => {
  const [displayedCars, setDisplayedCars] = useState(initialDisplayCount);

  const showMoreCars = () => {
    const newCount = Math.min(displayedCars + 5, carData.length);
    setDisplayedCars(newCount);
  };

  return (
    <CarsContainerContainer>
      {carData.slice(0, displayedCars).map((car) => (
        <CarCard key={car.model} car={car} />
      ))}
      <ShowMoreContainer>
        {displayedCars < carData.length && (
          <ShowMoreButton onClick={showMoreCars}>Show More</ShowMoreButton>
        )}
      </ShowMoreContainer>
    </CarsContainerContainer>
  );
};

export default CarsContainer;
