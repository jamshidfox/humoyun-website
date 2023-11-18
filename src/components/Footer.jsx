import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
  bottom: 0;
  width: 100%;
  font-family: 'Arial', sans-serif; /* Change the font-family */
`;

const FooterColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const FooterColumn = styled.div`
  text-align: left;

  p {
    font-size: 14px; /* Change the font-size for paragraphs */
  }

  h3 {
    font-size: 16px; /* Change the font-size for headers */
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterColumns>
        <FooterColumn>
          <h3>&copy; 2023 Car Project. All rights reserved.</h3>
        </FooterColumn>
        <FooterColumn>
          <h3>Buying & Selling</h3>
          <p>
            Find a Car | Find a Dealer | Listings by City | Certified Pre-Owned | Car Payment
            Calculators | Car Reviews & Ratings | Compare Side by Side | Fraud Awareness | Sell Your
            Car
          </p>
        </FooterColumn>
        <FooterColumn>
          <h3>Explore Our Brand</h3>
          <p>
            NewCars.com | DealerRater | For Dealers: Dealer Login | GrowWithCars.com | FUEL | Dealer
            Inspire | DealerRater | Accu-Trade
          </p>
        </FooterColumn>
        <FooterColumn>
          <h3>Our Company</h3>
          <p>
            About Cars.com | Contact Cars.com | Investor Relations | Careers | Licensing & Reprints
            | Site Map | Feedback | Our Mobile App
          </p>
          <p>Connect With Us</p>
          {/* Add App Store and Google Play images */}
          <img
            src="https://beta.cstatic-images.com/medium/in/v2/static/mobile-apps/app-store-badge-us-black-1.png"
            alt="App Store"
            style={{ width: '100px', height: 'auto' }}
          />
          <img
            src="https://beta.cstatic-images.com/medium/in/v2/static/mobile-apps/google-play-badge-us-1.png"
            alt="Google Play"
            style={{ width: '100px', height: 'auto' }}
          />
        </FooterColumn>
      </FooterColumns>
      <p>
        Terms & Conditions of Use | Privacy Notice | California Privacy Notice | My Privacy Choices
        | California Consumer Privacy Act (CCPA) Opt-Out Icon | Accessibility Statement | Ad Choices
        | &copy; 2023 Cars.com. All rights reserved.
      </p>
    </FooterContainer>
  );
};

export default Footer;
