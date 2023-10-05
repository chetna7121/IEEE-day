import React, { useState } from 'react';
import './Collab.css';
const Collab = () => {
    const CollabList = [
        {
          title: 'IEEE BITS PILANI STUDENT CHAPTER',
          img:"https://ieee-website-one.vercel.app/assets/images/VectorIEEE_logo_final.png",
          description:'IEEE BPSC at BITS Pilani serves as a student-driven center for tech innovation, research, and STEM involvement. Their inclusive platform supports learning, networking, and project work, nurturing creativity and critical thinking.'
        },
        
      
      ];
    
      const [expandedIndex, setExpandedIndex] = useState(null);
    
      return (
        <div>
          <div className="day-heading">
            <h3>COLLAB<hr /></h3>
          </div>
          <div className="Collab-boxes"> {/* Updated class name */}
            {CollabList.map((collab, index) => (
              <div
                key={index}
                className={`collab-box ${expandedIndex === index ? 'expanded' : ''}`}
                onMouseEnter={() => setExpandedIndex(index)}
                onMouseLeave={() => setExpandedIndex(null)}
              >
                           <img className="collab-image" src={collab.img} />

                <h1 className="collab-title">{collab.title}</h1>
                <p className="collab-description">{collab.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };
export default Collab
