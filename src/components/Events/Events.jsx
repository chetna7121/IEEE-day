import React from 'react';
import './Events.css';
import opening from './opening.jpg';
import arsh from './arsh.jpg';
import cs from './cs.jpg';
import cyber1 from './cyber1.jpg';
import research from './research.jpg';
import sports from './sports.jpg';
import duo1 from './duo1.jpg';
import family1 from './family1.jpg';
import night from './night.jpg';
import chit1 from './chit1.jpg';

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
          id: 8,
          image: sports,

        },
        {
          id: 5,
          image: cyber1,

        },
        {
          id: 6,
          image: family1,

        },
        {
          id: 7,
          image: duo1,

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
        {
          id: 10,
          image:chit1,

        },
        {
          id: 11,
          image:night,

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
