import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Footer from './components/Footer/Footer';
import Product from './components/Pages/Product/Product';
import Industries from './components/Pages/Industries we Serve/Industries';
import Contact from './components/Pages/Contact/Contact';
function App() {
  return (
    
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Products" element={<Product />} />
      <Route path="/Industries-we-serve" element={<Industries />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    <Footer/>
    </BrowserRouter>           
    </>
    
  )
}

export default App
