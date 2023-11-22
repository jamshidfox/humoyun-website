import React, { useEffect, useState } from "react";
import CarSearch from "./components/SearchCar";
import CarTools from "./components/Cartools";
import PopularSearches from "./components/PopularSearches";
import NewCarsExample from "./components/NewCars";
import CarCard from "../../components/Card/ACard";
import axios from "axios";
import styled from "styled-components";

const Container = styled("div")`
  margin: 2rem 0rem;
`;

const CarsContainer = styled("div")`
  flex: 0 1 25%; /* Adjust the width as needed */
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0rem;
  justify-content: center;
`;
const CarsConatiner = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios
      .get("https://humoyun-website-backend.netlify.app/cars/get_all")
      .then((data) => {
        setCars(data.data);
      });
  }, []);
  return (
    <Container>
      <CarSearch />
      <CarTools />
      <CarsContainer>
        {cars.map((car) => (
          <CarCard car={car} />
        ))}
      </CarsContainer>
      <PopularSearches />
      <NewCarsExample />
    </Container>
  );
};

export default CarsConatiner;
