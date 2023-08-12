import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './components/Home';
import Events from './components/Events/Events';
import About from './components/About/About';
import Sponsors from './components/Sponsors/Sponsors';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Show Home component by default */}
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Home/>
      <Events/>
    </div>
  );
}

export default App;
