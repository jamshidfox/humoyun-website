import React from "react";
import styled from "styled-components";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "react-feather";

const contactData = {
  address: "123 Main Street, Cityville",
  phone: "+123 456 7890",
  email: "info@example.com",
};

const socialMediaData = [
  {
    platform: "Facebook",
    link: "https://www.facebook.com/example",
    icon: <Facebook size={50} />,
  },
  {
    platform: "Twitter",
    link: "https://www.twitter.com/example",
    icon: <Twitter size={50} />,
  },
  {
    platform: "Instagram",
    link: "https://www.instagram.com/example",
    icon: <Instagram size={50} />,
  },
  {
    platform: "LinkedIn",
    link: "https://www.linkedin.com/example",
    icon: <Linkedin size={50} />,
  },
  {
    platform: "YouTube",
    link: "https://www.youtube.com/example",
    icon: <Youtube size={50} />,
  },
];

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #2c3e50; /* Dark background color */
  color: #ecf0f1; /* Light text color */
  padding: 40px;
  height: 100vh; /* Full screen height */
`;

const ContactInfo = styled.div`
  text-align: left;
  max-width: 400px;

  h3 {
    color: #3498db; /* Highlight color */
    margin-bottom: 10px;
  }

  p {
    color: #bdc3c7; /* Lighter text color */
    margin-bottom: 5px;
    display: flex;
    align-items: center;

    .icon {
      margin-right: 10px;
    }
  }
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: #ecf0f1; /* Light text color */
    margin-right: 20px;
    font-size: 24px;
  }
`;

const ContactUs = () => {
  return (
    <ContactContainer>
      <ContactInfo>
        <h3>Contact Us</h3>
        <p>
          <MapPin className="icon" />
          {contactData.address}
        </p>
        <p>
          <Phone className="icon" />
          {contactData.phone}
        </p>
        <p>
          <Mail className="icon" />
          {contactData.email}
        </p>
      </ContactInfo>

      <SocialMedia>
        {socialMediaData.map((social) => (
          <a
            key={social.platform}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.icon}
            {social.platform}
          </a>
        ))}
      </SocialMedia>
    </ContactContainer>
  );
};

export default ContactUs;
