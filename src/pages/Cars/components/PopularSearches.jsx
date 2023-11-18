import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronDown, ChevronUp } from 'react-feather';

const PopularSearchesContainer = styled.div`
  margin: 3rem 0rem;
  padding: 0rem 30rem;
  background-color: #f0f0f0; /* Light gray background */
`;

const SectionTitle = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

const CategoryContainer = styled.div`
  margin-bottom: 20px;
`;

const CategoryTitle = styled.h3`
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const IconContainer = styled.span`
  margin-left: 10px;
`;

const SearchList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const SearchItem = styled.li`
  margin-bottom: 5px;
`;

const CollapseContent = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const PopularSearches = () => {
  const [isCarBrandsOpen, setCarBrandsOpen] = useState(true);
  const [isCarBodyStylesOpen, setCarBodyStylesOpen] = useState(false);
  const [isUsedCarsByPriceOpen, setUsedCarsByPriceOpen] = useState(false);
  const [isCarsByCityOpen, setCarsByCityOpen] = useState(false);
  const [isPopularNewCarsOpen, setPopularNewCarsOpen] = useState(false);
  const [isPopularUsedCarsOpen, setPopularUsedCarsOpen] = useState(false);
  const [isCarsByFuelTypeOpen, setCarsByFuelTypeOpen] = useState(false);

  return (
    <PopularSearchesContainer>
      <SectionTitle>Popular Searches</SectionTitle>

      <CategoryContainer>
        <CategoryTitle onClick={() => setCarBrandsOpen(!isCarBrandsOpen)}>
          Car Brands
          <IconContainer>{isCarBrandsOpen ? <ChevronUp /> : <ChevronDown />}</IconContainer>
        </CategoryTitle>
        <CollapseContent isOpen={isCarBrandsOpen}>
          <SearchList>
            <SearchItem>AC</SearchItem>
            <SearchItem>Acura</SearchItem>
            <SearchItem>Alfa Romeo</SearchItem>
            <SearchItem>Am General</SearchItem>
            <SearchItem>Aston Martin</SearchItem>
            <SearchItem>Audi</SearchItem>
            <SearchItem>Austin-Healey</SearchItem>
            <SearchItem>Bentley</SearchItem>
            <SearchItem>BMW</SearchItem>
            <SearchItem>Buick</SearchItem>
            {/* Add more car brands */}
            {/* ... */}
            <SearchItem>Volvo</SearchItem>
          </SearchList>
        </CollapseContent>
      </CategoryContainer>

      <CategoryContainer>
        <CategoryTitle onClick={() => setCarBodyStylesOpen(!isCarBodyStylesOpen)}>
          Car Body Styles
          <IconContainer>{isCarBodyStylesOpen ? <ChevronUp /> : <ChevronDown />}</IconContainer>
        </CategoryTitle>
        <CollapseContent isOpen={isCarBodyStylesOpen}>
          <SearchList>
            <SearchItem>Coupes & sedans</SearchItem>
            <SearchItem>Sedan</SearchItem>
            <SearchItem>Convertible</SearchItem>
            <SearchItem>Coupe</SearchItem>
            <SearchItem>Pickup trucks</SearchItem>
            <SearchItem>Truck</SearchItem>
            <SearchItem>Regular cab truck</SearchItem>
            <SearchItem>Crew cab truck</SearchItem>
            <SearchItem>Extended cab truck</SearchItem>
            <SearchItem>Vans & minivans</SearchItem>
            <SearchItem>Minivan</SearchItem>
            <SearchItem>Cargo van</SearchItem>
            <SearchItem>Passenger van</SearchItem>
            <SearchItem>SUVs & crossovers</SearchItem>
            <SearchItem>SUV</SearchItem>
            <SearchItem>Wagon</SearchItem>
            <SearchItem>Hatchback</SearchItem>
            {/* Add more body styles */}
            {/* ... */}
            <SearchItem>Hatchback</SearchItem>
          </SearchList>
        </CollapseContent>
      </CategoryContainer>

      <CategoryContainer>
        <CategoryTitle onClick={() => setUsedCarsByPriceOpen(!isUsedCarsByPriceOpen)}>
          Used Cars by Price
          <IconContainer>{isUsedCarsByPriceOpen ? <ChevronUp /> : <ChevronDown />}</IconContainer>
        </CategoryTitle>
        <CollapseContent isOpen={isUsedCarsByPriceOpen}>
          <SearchList>
            <SearchItem>Used cars for sale under $1,000</SearchItem>
            <SearchItem>Used cars for sale under $2,000</SearchItem>
            <SearchItem>Used cars for sale under $2,500</SearchItem>
            <SearchItem>Used cars for sale under $3,000</SearchItem>
            <SearchItem>Used cars for sale under $4,000</SearchItem>
            <SearchItem>Used cars for sale under $5,000</SearchItem>
            <SearchItem>Used cars for sale under $6,000</SearchItem>
            <SearchItem>Used cars for sale under $7,000</SearchItem>
            {/* ... Add more used car price ranges */}
          </SearchList>
        </CollapseContent>
      </CategoryContainer>

      <CategoryContainer>
        <CategoryTitle onClick={() => setCarsByCityOpen(!isCarsByCityOpen)}>
          Cars by Popular City
          <IconContainer>{isCarsByCityOpen ? <ChevronUp /> : <ChevronDown />}</IconContainer>
        </CategoryTitle>
        <CollapseContent isOpen={isCarsByCityOpen}>
          <SearchList>
            <SearchItem>Atlanta, GA</SearchItem>
            <SearchItem>Chicago, IL</SearchItem>
            <SearchItem>Columbus, OH</SearchItem>
            <SearchItem>Dallas, TX</SearchItem>
            <SearchItem>Denver, CO</SearchItem>
            <SearchItem>Houston, TX</SearchItem>
            <SearchItem>Los Angeles, CA</SearchItem>
            <SearchItem>New York, NY</SearchItem>
            <SearchItem>Philadelphia, PA</SearchItem>
            <SearchItem>Phoenix, AZ</SearchItem>
            <SearchItem>San Diego, CA</SearchItem>
            <SearchItem>Seattle, WA</SearchItem>
            {/* ... Add more popular cities */}
          </SearchList>
        </CollapseContent>
      </CategoryContainer>

      <CategoryContainer>
        <CategoryTitle onClick={() => setPopularNewCarsOpen(!isPopularNewCarsOpen)}>
          Popular New Cars for Sale
          <IconContainer>{isPopularNewCarsOpen ? <ChevronUp /> : <ChevronDown />}</IconContainer>
        </CategoryTitle>
        <CollapseContent isOpen={isPopularNewCarsOpen}>
          <SearchList>
            <SearchItem>2024 Chevrolet Silverado 1500 for sale</SearchItem>
            <SearchItem>2024 Ford F-150 for sale</SearchItem>
            <SearchItem>2024 Ford Mustang for sale</SearchItem>
            <SearchItem>2024 Ford Ranger for sale</SearchItem>
            <SearchItem>2024 GMC Sierra 1500 for sale</SearchItem>
            <SearchItem>2024 Honda CR-V for sale</SearchItem>
            <SearchItem>2024 Jeep Grand Cherokee for sale</SearchItem>
            <SearchItem>2024 Jeep Wrangler for sale</SearchItem>
            <SearchItem>2024 RAM 1500 for sale</SearchItem>
            <SearchItem>2024 Toyota Camry for sale</SearchItem>
            <SearchItem>2024 Toyota Sequoia for sale</SearchItem>
            <SearchItem>2023 Toyota Tacoma for sale</SearchItem>
            {/* ... Add more popular new cars */}
          </SearchList>
        </CollapseContent>
      </CategoryContainer>

      <CategoryContainer>
        <CategoryTitle onClick={() => setPopularUsedCarsOpen(!isPopularUsedCarsOpen)}>
          Popular Used Cars for Sale
          <IconContainer>{isPopularUsedCarsOpen ? <ChevronUp /> : <ChevronDown />}</IconContainer>
        </CategoryTitle>
        <CollapseContent isOpen={isPopularUsedCarsOpen}>
          <SearchList>
            <SearchItem>Used Dodge Challenger for sale</SearchItem>
            <SearchItem>Used Dodge Charger for sale</SearchItem>
            <SearchItem>Used Ford Explorer for sale</SearchItem>
            <SearchItem>Used Ford F-150 for sale</SearchItem>
            <SearchItem>Used Honda Accord for sale</SearchItem>
            <SearchItem>Used Honda Civic for sale</SearchItem>
            <SearchItem>Used Jeep Grand Cherokee for sale</SearchItem>
            <SearchItem>Used Jeep Wrangler for sale</SearchItem>
            <SearchItem>Used Nissan Rogue for sale</SearchItem>
            <SearchItem>Used RAM 1500 for sale</SearchItem>
            <SearchItem>Used Toyota Camry for sale</SearchItem>
            <SearchItem>Used Toyota Tacoma for sale</SearchItem>
            {/* ... Add more popular used cars */}
          </SearchList>
        </CollapseContent>
      </CategoryContainer>

      <CategoryContainer>
        <CategoryTitle onClick={() => setCarsByFuelTypeOpen(!isCarsByFuelTypeOpen)}>
          Cars by Fuel Type
          <IconContainer>{isCarsByFuelTypeOpen ? <ChevronUp /> : <ChevronDown />}</IconContainer>
        </CategoryTitle>
        <CollapseContent isOpen={isCarsByFuelTypeOpen}>
          <SearchList>
            <SearchItem>Electric</SearchItem>
            <SearchItem>Hybrid</SearchItem>
            {/* ... Add more fuel types */}
          </SearchList>
        </CollapseContent>
      </CategoryContainer>
    </PopularSearchesContainer>
  );
};

export default PopularSearches;
