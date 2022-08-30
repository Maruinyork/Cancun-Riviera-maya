import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Habitaciones from './pages/Habitaciones';
import About from './pages/About';
import Contact from './pages/Contact';
import Novedades from './pages/Novedades'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/habitaciones" element={<Habitaciones/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/novedades" element={<Novedades/>} />
      </Routes>
      <Footer/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
