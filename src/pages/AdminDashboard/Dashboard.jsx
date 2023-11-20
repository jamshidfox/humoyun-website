import React from 'react';
import Overview from './components/Overview';
import Statistics from './components/Statistics';
import RecentActivityChart from './components/RecentActivites';
import SideMenu from './components/SideMenu'; // Import the new SideMenu component

import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

const ContentContainer = styled.div`
  flex: 1;
  margin-left: 20px;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  color: #3498db;
  font-size: 24px;
  margin-bottom: 15px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const CardTitle = styled.h3`
  color: #333;
  font-size: 18px;
  margin-bottom: 10px;
`;

const CardContent = styled.p`
  color: #777;
  font-size: 14px;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <SideMenu /> {/* Include the SideMenu component */}
      <ContentContainer>
        <Section>
          <SectionTitle>Overview</SectionTitle>
          <Card>
            <Overview />
          </Card>
        </Section>

        <Section>
          <SectionTitle>Statistics</SectionTitle>
          <Card>
            <Statistics />
          </Card>
        </Section>

        <Section>
          <SectionTitle>Recent Activity</SectionTitle>
          <Card>
            <RecentActivityChart />
          </Card>
        </Section>
      </ContentContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
