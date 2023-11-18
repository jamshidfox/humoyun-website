import React from 'react';
import styled from 'styled-components';

const PeopleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem;
  padding: 40px;
  background-color: #f0f0f0; /* Light gray background */
`;

const PeopleTitle = styled.h2`
  color: #333;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

const PersonContainer = styled.div`
  flex: 0 1 calc(25% - 20px); /* Adjust the width as needed */
  margin: 10px;
  text-align: center;
`;

const PersonImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const PersonName = styled.h3`
  color: #333;
  margin-bottom: 5px;
`;

const PersonRole = styled.p`
  color: #555;
`;

const People = ({ peopleData }) => {
  return (
    <PeopleContainer>
      <PeopleTitle>Our People</PeopleTitle>
      {peopleData.map((person, index) => (
        <PersonContainer key={index}>
          <PersonImage src={person.image} alt={`${person.name} Headshot`} />
          <PersonName>{person.name}</PersonName>
          <PersonRole>{person.role}</PersonRole>
        </PersonContainer>
      ))}
    </PeopleContainer>
  );
};

export default People;
