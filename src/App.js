import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RoutesWithSupRoute from './components/RoutesWithSupRoute';
import styled from 'styled-components';

const ChildrenBody = styled('div')`
  padding: 2rem;
`;
function App() {
  return (
    <div className="App">
      <Navbar />
      <ChildrenBody>
        <RoutesWithSupRoute />
      </ChildrenBody>
      <Footer />
    </div>
  );
}

export default App;
