import React from 'react';
import './About.css';

const About = () => {
  const AboutList = [
    {
      title: 'About 1',
      date: 'August 5, 2023',
      location: 'Venue A',
      description: 'desc',
    },
    {
      title: 'About 2',
      date: 'August 5, 2023',
      location: 'Venue',
      description: 'desc',
    },
  ];

  return (
    <div>
      <div className="day-heading">
        <h3>ABOUT IEEE <hr /></h3>
      
      </div>
      <div className="About-cards">
        {AboutList.map((about, index) => (
          <div key={index} className="card">
            <h1 className="card-title">{about.title}</h1>
            <p className="card-date">{about.date}</p>
            <p className="card-location">{about.location}</p>
            <p className="card-description">{about.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default About;
