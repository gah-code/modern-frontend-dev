import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Components from './pages/Components';

// import App from './App.jsx';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Link to='/'> Home </Link>
      <Link to='/about'> About </Link>
      <Link to='/elements'> Elements </Link>
      <Link to='/components'> Components </Link>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/components' element={<Components />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
