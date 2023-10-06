import React from 'react';
import './Events.css';

const Events = () => {
  const eventLists = [
    {
      day: 'Day 1',
      events: [
        {
          id: 1,
          image: 'https://media.istockphoto.com/vectors/coming-soon-dark-realistic-poster-promotion-flyer-template-vector-vector-id819372848?k=6&m=819372848&s=170667a&w=0&h=xAxMlauGmlvDjeNQUWe1bNguW4EyFs0TEUhVoRUXxWw=',
        },
        {
          id: 2,
          image: 'https://media.istockphoto.com/vectors/coming-soon-dark-realistic-poster-promotion-flyer-template-vector-vector-id819372848?k=6&m=819372848&s=170667a&w=0&h=xAxMlauGmlvDjeNQUWe1bNguW4EyFs0TEUhVoRUXxWw=',

        },
       
      ],
    },
    {
      day: 'Day 2',
      events: [
        {
          id: 5,
          image: 'https://media.istockphoto.com/vectors/coming-soon-dark-realistic-poster-promotion-flyer-template-vector-vector-id819372848?k=6&m=819372848&s=170667a&w=0&h=xAxMlauGmlvDjeNQUWe1bNguW4EyFs0TEUhVoRUXxWw=',

        },
        {
          id: 6,
          image: 'https://media.istockphoto.com/vectors/coming-soon-dark-realistic-poster-promotion-flyer-template-vector-vector-id819372848?k=6&m=819372848&s=170667a&w=0&h=xAxMlauGmlvDjeNQUWe1bNguW4EyFs0TEUhVoRUXxWw=',

        },
      
      ],
    },
    {
      day: 'Day 3',
      events: [
        {
          id: 9,
          image: 'https://media.istockphoto.com/vectors/coming-soon-dark-realistic-poster-promotion-flyer-template-vector-vector-id819372848?k=6&m=819372848&s=170667a&w=0&h=xAxMlauGmlvDjeNQUWe1bNguW4EyFs0TEUhVoRUXxWw=',

        },
        
        {
          id: 12,
          image: 'https://media.istockphoto.com/vectors/coming-soon-dark-realistic-poster-promotion-flyer-template-vector-vector-id819372848?k=6&m=819372848&s=170667a&w=0&h=xAxMlauGmlvDjeNQUWe1bNguW4EyFs0TEUhVoRUXxWw=',

        },
      ],
    },
  ];

  return (
    <div>
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
