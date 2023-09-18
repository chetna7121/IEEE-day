import React, { useState } from 'react';
import './Collab.css';
const Collab = () => {
    const CollabList = [
        {
          title: 'IEEE Student Branch',
          description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: 'IEEE Student Branch',
          description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        
      
      ];
    
      const [expandedIndex, setExpandedIndex] = useState(null);
    
      return (
        <div>
          <div className="day-heading">
            <h3>COHORT<hr /></h3>
          </div>
          <div className="Collab-boxes"> {/* Updated class name */}
            {CollabList.map((collab, index) => (
              <div
                key={index}
                className={`collab-box ${expandedIndex === index ? 'expanded' : ''}`}
                onMouseEnter={() => setExpandedIndex(index)}
                onMouseLeave={() => setExpandedIndex(null)}
              >
                <h1 className="collab-title">{collab.title}</h1>
                <p className="collab-description">{collab.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };
export default Collab
