import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Components from './pages/Components';

function App() {
  return (
    <BrowserRouter>
      <Link to='/'> Home </Link>
      <Link to='/about'> About </Link>
      <Link to='/elements'> Elements </Link>
      <Link to='/components'> Components </Link>
      <Link to='/components'> Resources </Link>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/components' element={<Components />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
