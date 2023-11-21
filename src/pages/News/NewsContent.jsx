import React from 'react';
import styled from 'styled-components';
import NewsCard from './component/NewsCard';
import HeaderForNews from './component/Headline';
import CarsNewsContainer from './component/CarsNewsContainer';

const Container = styled('div')``;

const newsData = [
  {
    id: 1,
    title: 'Hyundai',
    date: '2023-01-01',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/large-57833-hyundaiandamazonpartnertodeliverinnovativecustomerexperiencesandcloudtransformation-655ba558ca197.jpg?crop=0.668xw:1.00xh;0.119xw,0&resize=360:*', // Replace with actual image URLs
    content: 'Hyundai Will Begin Selling Vehicles on Amazon',
  },
  {
    id: 2,
    title: 'Honda',
    date: '2023-02-21',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/2019-honda-pilot-99leadgallery-1534804397.jpg?crop=0.731xw:1.00xh;0.138xw,0&resize=360:*',
    content: 'Hondas, Acuras under Recall for Engine Stall Risk',
  },
  {
    id: 3,
    title: '2008 Honda',
    date: '2023-05-11',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/2008-honda-civic-mugen-si-105-655687f87cdcd.jpg?crop=1.00xw:0.751xh;0,0.171xh&resize=1200:*',
    content: "2008 Honda Civic Mugen Si Is Today's Bring a Trailer Find",
  },
  {
    id: 4,
    title: '2025 min',
    date: '2023-08-01',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/2025-mini-countryman-s-all4-rear-three-quarters-6556933363bec.jpg?crop=0.995xw:1.00xh;0.00326xw,0&resize=360:*',
    content: '2025 Mini Countryman S All4 Has 241 HP, Costs $39K',
  },
  {
    id: 5,
    title: '1989 Turbo',
    date: '2023-08-01',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/1989-pontiac-turbo-grand-prix-bat-101-65563bb2dc055.jpg?crop=0.751xw:1.00xh;0.125xw,0&resize=360:*',
    content: '1989 Pontiac Turbo Grand Prix by ASC McLaren Is on Bring a Trailer',
  },
  {
    id: 6,
    title: 'The jeep',
    date: '2023-08-19',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/img-9278-jpg-6538fe810b188.jpg?crop=1.00xw:0.754xh;0,0.124xh&resize=360:*',
    content: "The Jeep Wrangler Can Tow More Than Ever—There's Just One Problem",
  },

  // Add more news items with similar structure
];

const newsData2 = [
  {
    title: '2024 Kia Sorento Adds an Off-Road X-Pro Trim and Gets a New Look',
    date: 'NOV 16, 2023',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/2024-kia-sorento-103-6554e5ef0b819.jpg?crop=0.549xw:0.826xh;0.238xw,0.148xh&resize=360:*',
  },
  {
    title: "2024 Hyundai Santa Fe's Beefed-Up XRT Trim Debuts",
    date: 'NOV 16, 2023',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/2024-hyundai-santa-fe-103-65552328a2523.jpg?crop=0.668xw:1.00xh;0.177xw,0&resize=360:*',
  },
  {
    title: '2025 Subaru Forester Wilderness Illustration',
    date: 'NOV 16, 2023',
    content: 'We Imagine the 2025 Subaru Forester Wilderness',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/2025-subaru-forester-wilderness-illustration-65562db94fadc.jpg?crop=0.629xw:0.941xh;0.250xw,0.0331xh&resize=360:*',
  },
  {
    title: '2025 Subaru Forester Gets New Bodywork, More Tech',
    date: 'NOV 16, 2023',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/2025-subaru-forester-touring-front-three-quarters-2-654ab0772e79f.jpg?crop=0.582xw:0.870xh;0.218xw,0.130xh&resize=360:*',
  },
  {
    title: '2025 Lucid Gravity Is a Compelling Family EV',
    date: 'NOV 16, 2023',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/2025-lucid-gravity-exterior-103-655634db9636b.jpg?crop=0.368xw:0.617xh;0.169xw,0.292xh&resize=360:*',
  },
  {
    title: "See the 2025 Hyundai Ioniq 5 N's Coolest Upgrades",
    date: 'NOV 16, 2023',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/2025-hyundai-ioniq-5-n-103-6555104ba2699.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=360:*',
  },
  {
    title: 'Mercedes Opening Truly Fast Fast-Charging Stations',
    date: 'NOV 15, 2023',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/mercedes-charging-station-6554de11a3b88.jpeg?crop=0.564xw:1.00xh;0.426xw,0&resize=360:*',
  },
  {
    title: 'Ferrari SF90 XX Stradale Sets Record at Fiorano',
    date: 'NOV 15, 2023',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/2024-sf90xx-lap-record-01-65539dd029e94.jpg?crop=0.668xw:1.00xh;0.0153xw,0&resize=360:*',
  },
  {
    title: '2025 Toyota Camry Goes Hybrid-Only and Offers AWD',
    date: 'NOV 15, 2023',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/2025-toyota-camry-xse-001-6554db6746bdc.jpg?crop=0.389xw:0.519xh;0.303xw,0.184xh&resize=360:*',
  },
  {
    title: 'Toyota Venza Dies, Replaced by Crown Signia SUV',
    date: 'NOV 15, 2023',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/2024-toyota-venza-nightshade-001-65527723bdb59.png?crop=0.453xw:0.529xh;0.309xw,0.259xh&resize=360:*',
  },
  {
    title: '2025 Toyota Crown Signia Is a Two-Row Hybrid SUV',
    date: 'NOV 15, 2023',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/2025-toyota-crown-signia-0004-65528386cfd83.jpg?crop=0.454xw:0.606xh;0.332xw,0.240xh&resize=360:*',
  },
  {
    title: 'New IIHS Data Gives Bleak View of Tall Vehicles',
    date: 'NOV 14, 2023',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/iihs-image-6553e02aba2ed.jpeg?crop=0.566xw:1.00xh;0.230xw,0&resize=360:*',
  },
];

const NewsContent = () => {
  return (
    <Container>
      <HeaderForNews />
      <NewsCard newsData={newsData} />
      <CarsNewsContainer newsData={newsData2} />
    </Container>
  );
};

export default NewsContent;
