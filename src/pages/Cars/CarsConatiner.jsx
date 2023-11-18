import React from 'react';
import CarSearch from './components/SearchCar';
import CarTools from './components/Cartools';
import PopularSearches from './components/PopularSearches';
import NewCarsExample from './components/NewCars';
import styled from 'styled-components';

const Container = styled('div')`
  margin: 2rem 0rem;
`;
const CarsConatiner = () => {
  return (
    <Container>
      <CarSearch />
      <CarTools />
      <PopularSearches />
      <NewCarsExample />
    </Container>
  );
};

export default CarsConatiner;
