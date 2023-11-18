import React from 'react';
import styled from 'styled-components';
import CompanyInfo from './components/CompanyInfo';
import AboutUs from './components/AbouUs';
import WhoWeAre from './components/WhoWeAre';
import Roots from './components/AboutRoots';
import People from './components/OurPeople';
import Office from './components/OurLocation';
import { peopleData } from './components/constants';

const Container = styled('div')``;
const About = () => {
  return (
    <Container>
      <AboutUs />
      <WhoWeAre />
      <Roots />
      <CompanyInfo />
      <People peopleData={peopleData} />
      <Office />
    </Container>
  );
};

export default About;
