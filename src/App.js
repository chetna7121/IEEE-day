import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Events from './components/Events/Events';
import About from './components/About/About';
import Sponsors from './components/Sponsors/Sponsors';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallary/Gallery';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Home/>
        <Gallery/>
        <Routes>
          <Route path="/home" element={<Home />} /> {/* Show Home component by default */}
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
