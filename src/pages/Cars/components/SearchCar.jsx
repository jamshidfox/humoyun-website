import React from 'react';
import styled from 'styled-components';

const CarSearchContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #f0f0f0; /* Light gray background */
`;

const SearchTitle = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

const SearchImage = styled.img`
  width: 100%;
  max-height: 400px; /* Adjust the max-height as needed for a larger image */
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid #3498db; /* Blue border color */
  margin-bottom: 20px;
`;

const SearchForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 200px;
`;

const SearchSelect = styled.select`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SearchButton = styled.button`
  padding: 10px;
  background-color: #3498db; /* Blue color */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9; /* Darker blue color on hover */
  }
`;

const CarSearch = () => {
  return (
    <CarSearchContainer>
      <SearchImage
        src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960"
        alt="Car Search Image"
      />
      <SearchTitle>Cars for Sale</SearchTitle>
      <SearchForm>
        <SearchInput type="text" placeholder="Make" />
        <SearchInput type="text" placeholder="Model" />
        <SearchSelect>
          <option value="new">New</option>
          <option value="used">Used</option>
        </SearchSelect>
        <SearchSelect>
          <option value="electric">Electric</option>
          <option value="gas">Gas</option>
        </SearchSelect>
        <SearchInput type="text" placeholder="Price" />
        <SearchInput type="text" placeholder="Distance" />
        <SearchInput type="text" placeholder="ZIP" />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
    </CarSearchContainer>
  );
};

export default CarSearch;
