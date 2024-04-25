import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Components from './pages/Components';
import styled from 'styled-components';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Wrapper>
          <NavList>
            <Link to='/'> Home </Link>
            <Link to='/about'> About </Link>
            <Link to='/elements'> Elements </Link>
            <Link to='/components'> Components </Link>
            <Link to='/components'> Resources </Link>
          </NavList>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/components' element={<Components />} />
          </Routes>
        </Wrapper>
      </Header>
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
  max-width: 60rem;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;
`;

const Header = styled.header`
  padding: max(2rem, 10vh) 0;
`;

const NavList = styled.nav`
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  gap: 0 max(1rem, 2vw);
  flex-wrap: wrap;
`;

export default App;
