import React, { useState } from 'react';
import './About.css';

const About = () => {
  const AboutList = [
    {
      title: 'IEEE',
      description:
        'Institute of Electrical and Electronics Engineers (IEEE) is an association dedicated to advancing innovation and technological excellence for the benefit of humanity.',
    },
    {
      title: 'IEEE Student Branch, Mody University',
      description:
        'IEEE Student Branch, Mody University of Science and Technology was formed in the college in the year of 2015. The Student Branch consists of 111 members and believes in the betterment of the future of the world and in helping build a sustainable society.',
    },
    {
      title: 'IEEE Day Worldwide Celebrations',
      description:
        'IEEE Day worldwide celebrations demonstrate the ways thousands of IEEE members in local communities join together to collaborate on ideas that leverage technology for a better tomorrow.',
    },
  
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div>
      <div className="day-heading">
        <h3>ABOUT IEEE <hr /></h3>
      </div>
      <div className="About-boxes"> {/* Updated class name */}
        {AboutList.map((about, index) => (
          <div
            key={index}
            className={`about-box ${expandedIndex === index ? 'expanded' : ''}`}
            onMouseEnter={() => setExpandedIndex(index)}
            onMouseLeave={() => setExpandedIndex(null)}
          >
            <h1 className="about-title">{about.title}</h1>
            <p className="about-description">{about.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
