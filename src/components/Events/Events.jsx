import React from 'react';
import './Events.css';
import opening from './opening.jpg';
import arsh from './arsh.jpg';
import cs from './cs.jpg';
import cyber from './cyber.jpg';
import research from './research.jpg';
import sports from './sports.jpg';
import duo from './duo.jpg';
import family from './family.jpg';

const Events = () => {
  const eventLists = [
    {
      day: 'DAY 1',
      events: [
        {
          id: 1,
          image: opening,
        },
        {
          id: 2,
          image: cs,
        },
        {
          id: 3,
          image: arsh,

      },
       
      ],
    },
    {
      day: 'DAY 2',
      events: [
        {
          id: 5,
          image: cyber,

        },
        {
          id: 6,
          image: family,

        },
        {
          id: 7,
          image: duo,

        },
        {
          id: 8,
          image: sports,

        },
      
      ],
    },
    {
      day: 'DAY 3',
      events: [
        {
          id: 9,
          image:research,

        },
        
        
      ],
    },
  ];

  return (
    <div>
      <div className="day-heading">
        <h3>EVENTS
           <hr /></h3>
      </div>
      {eventLists.map((day) => (
        
        <div key={day.day}>
          <div className="day-heading">
            
            <h2>{day.day}</h2>
          </div>
          <div className="event-cards">
            {day.events.map((event) => (
              <div key={event.id} className="card">
                <img src={event.image} alt={`Event ${event.id}`} className="card-image" />
              </div>
            ))}
          </div>
        </div>
            ))}
    </div>
  );
};

export default Events;
