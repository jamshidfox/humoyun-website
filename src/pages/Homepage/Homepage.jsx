import React, { useState, useEffect } from 'react';
import CarCard from '../../components/Card/ACard';
import LogoCard from '../../components/Card/LogoCard';
import { carData, companyBrands, whyChooseUs } from './constants/cars';
import WhyChooseUs from './components/WhyChoose';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled('div')``;
const FirstContent = styled('div')`
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const SecondContent = styled('div')`
  flex: 0 1 25%; /* Adjust the width as needed */
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0rem;
  justify-content: space-between;
`;
const ThirdContent = styled('div')`
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
`;
const FourthContent = styled('div')`
  flex: 0 1 25%; /* Adjust the width as needed */
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0rem;
  justify-content: space-between;
`;

const FourthHeadline = styled('h1')`
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const BestCarTitle = styled('h2')`
  color: #333;
`;

const BestCarInfo = styled('p')`
  color: #555;
`;

const BestCarImage = styled('img')`
  width: 80%; /* Adjust the width as needed */
  max-height: 400px;
  object-fit: cover;
  margin: 20px 0;
`;

const ShowMoreContainer = styled('div')`
  text-align: center;
  margin-top: 20px;
`;

const ShowMoreButton = styled('button')`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Homepage = () => {
  const [displayedCars, setDisplayedCars] = useState(5);
  const [cars, setCars] = useState([]);
  const bestCarIndex = Math.floor(Math.random() * carData.length);
  const bestCar = carData[bestCarIndex];

  useEffect(() => {
    axios.get('https://humoyun-website-backend.netlify.app/cars/get_all').then((data) => {
      setCars(data.data);
    });
  }, []);
  const showMoreCars = () => {
    setDisplayedCars((prev) => prev + 5); // Increase the number of displayed cars
  };

  return (
    <Container>
      <FirstContent>
        <BestCarTitle>Best Car: {bestCar.model}</BestCarTitle>
        <BestCarInfo>{bestCar.blurb}</BestCarInfo>
        <BestCarImage src={bestCar.picture} alt={bestCar.model} />
      </FirstContent>
      <SecondContent>
        {companyBrands.map((company, index) => {
          return <LogoCard key={index} company={company} />;
        })}
      </SecondContent>
      <ThirdContent>
        <WhyChooseUs whyChooseUs={whyChooseUs} />
      </ThirdContent>
      <FourthContent>
        {cars.slice(0, displayedCars).map((car) => {
          return <CarCard key={car.model} car={car} />;
        })}
        <ShowMoreContainer>
          {displayedCars < cars.length && (
            <ShowMoreButton onClick={showMoreCars}>Show More</ShowMoreButton>
          )}
        </ShowMoreContainer>
      </FourthContent>
    </Container>
  );
};

export default Homepage;
