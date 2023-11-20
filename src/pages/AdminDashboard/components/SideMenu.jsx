import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SideMenuContainer = styled.div`
  width: 200px;
  background-color: #2c3e50; /* Set your desired background color */
  padding: 20px;
  color: #ecf0f1; /* Set your desired text color */
`;

const MenuItem = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
`;

const SideMenu = () => {
  return (
    <SideMenuContainer>
      <MenuItem>
        <Link to="/admin/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
          Dashboard
        </Link>
      </MenuItem>
      <MenuItem>
        <Link style={{ textDecoration: 'none', color: 'inherit' }}>Overview</Link>
      </MenuItem>
      <MenuItem>
        <Link style={{ textDecoration: 'none', color: 'inherit' }}>Statistics</Link>
      </MenuItem>
      <MenuItem>
        <Link style={{ textDecoration: 'none', color: 'inherit' }}>Recent Activity</Link>
      </MenuItem>
      <MenuItem>
        <Link to={'/admin/add/new-car'} style={{ textDecoration: 'none', color: 'inherit' }}>
          Add New Car
        </Link>
      </MenuItem>
      {/* Add more menu items as needed */}
    </SideMenuContainer>
  );
};

export default SideMenu;
