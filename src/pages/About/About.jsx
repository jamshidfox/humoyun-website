import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CompanyInfo from './components/CompanyInfo';
import AboutUs from './components/AbouUs';
import WhoWeAre from './components/WhoWeAre';
import Roots from './components/AboutRoots';
import People from './components/OurPeople';
import Office from './components/OurLocation';
import axios from 'axios';

const Container = styled('div')``;
const About = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get('https://humoyun-website-backend.netlify.app/employees/get_all')
      .then((data) => setEmployees(data.data));
  }, []);
  return (
    <Container>
      <AboutUs />
      <WhoWeAre />
      <Roots />
      <CompanyInfo />
      <People peopleData={employees} />
      <Office />
    </Container>
  );
};

export default About;
