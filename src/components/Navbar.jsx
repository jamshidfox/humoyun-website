import React from 'react';
import styled from 'styled-components';
import { Truck } from 'react-feather';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.div`
  background-color: #34495e;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CarShopLogo = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

const LogoIcon = styled(Truck)`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const LogoText = styled.h1`
  color: white;
  font-size: 24px;
  font-family: 'Roboto', sans-serif; /* Change to your preferred font */
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2c3e50;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <CarShopLogo>
        <LogoIcon />
        <LogoText>CarShop</LogoText>
      </CarShopLogo>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about-us">About Us</StyledLink>
        <StyledLink to="/cars">Cars</StyledLink>
        <StyledLink to="/contact-us">Contact Us</StyledLink>
        <StyledLink to="/news">News</StyledLink>
        <StyledLink to="/faq-help">FAQ & Help</StyledLink>
        <StyledLink to="/admin">Admin</StyledLink>
      </Nav>
    </NavbarContainer>
  );
};

export default Navbar;
