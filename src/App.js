import React from 'react';
import  './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Events from './components/Events/Events';
import About from './components/About/About';
import Sponsors from './components/Sponsors/Sponsors';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallary/Gallery';
import Collab from './components/Collab/Collab';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
     
        <br />
        <br />
        <Routes>
        <Route exact path="/IEEE-day" element={<>

        <Home/>
        <Gallery/></>} /> 
        <Route exact path="/" element={<>
        
        <Home/>
        <Gallery/></>} /> 
       {/* <Route path="/events" element={<Events />} />*/}
          <Route path="/home" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/collab" element={<Collab />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
   
  );
}

export default App;
