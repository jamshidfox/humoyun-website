import React from 'react';
import styled from 'styled-components';
import CompanyInfo from './components/CompanyInfo';
import AboutUs from './components/AbouUs';

const Container = styled('div')``;
const About = () => {
  return (
    <Container>
      <AboutUs />
      <CompanyInfo />
    </Container>
  );
};

export default About;
