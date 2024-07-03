import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page/Home/Home';
import Contact from './Page/Contact/Contact';
import Header from './Component/Header/Header';
import Weather from './Component/Weather/Weather';
import Button from './Component/Button';
import Props from './Component/Props/Props';
import Switch from './Component/Switch/Switch';
import ProductDetail from './Page/ProductDetail/ProductDetail';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
