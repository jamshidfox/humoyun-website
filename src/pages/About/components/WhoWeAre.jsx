import React from 'react';
import styled from 'styled-components';

const WhoWeAreContainer = styled.div`
  padding: 20px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 20px 0;
`;

const WhoWeAreTitle = styled.h2`
  color: #333;
`;

const WhoWeAreContent = styled.p`
  color: #555;
  line-height: 1.6;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const WhoWeAre = () => {
  return (
    <WhoWeAreContainer>
      <WhoWeAreTitle>Who We Are</WhoWeAreTitle>
      <WhoWeAreContent>
        Cars.com is a leading digital marketplace and solutions provider for the automotive industry
        that connects car shoppers with sellers. Launched in 1998 and headquartered in Chicago, the
        Company empowers shoppers with the data, resources, and digital tools needed to make
        informed buying decisions and seamlessly connect with automotive retailers. In a rapidly
        changing market, Cars.com enables dealerships and OEMs with innovative technical solutions
        and data-driven intelligence to better reach and influence ready-to-buy shoppers, increase
        inventory turn and gain market share. In 2018, Cars.com acquired Dealer Inspire®, an
        innovative technology company building solutions that future-proof dealerships with more
        efficient operations, a faster and easier car buying process, and connected digital
        experiences that sell and service more vehicles.
        <br />
        <br />
        Cars.com properties include <Link href="http://www.dealerrater.com">
          DealerRater®
        </Link>, <Link href="http://www.dealerinspire.com">Dealer Inspire®</Link>,{' '}
        <Link href="http://www.auto.com">Auto.com™</Link>,{' '}
        <Link href="http://www.pickuptrucks.com">PickupTrucks.com®</Link>, and{' '}
        <Link href="http://www.newcars.com">NewCars.com®</Link>. For more information, visit{' '}
        <Link href="http://www.Cars.com">www.Cars.com</Link>.
      </WhoWeAreContent>
    </WhoWeAreContainer>
  );
};

export default WhoWeAre;
