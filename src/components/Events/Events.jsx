import React from 'react';
import './Events.css';


const Events = () => {
  const eventList = [
    {
      title: 'Event 1',
      date: 'August 6, 2023',
      location: 'Venue A',
      description: 'Description for Event 1.',
    },
    {
      title: 'Event 2',
      date: 'August 6, 2023',
      location: 'Venue B',
      description: 'Description for Event 2.',
    },
    {
      title: 'Event 2',
      date: 'August 7, 2023',
      location: 'Venue B',
      description: 'Description for Event 2.',
    },
    {
      title: 'Event 2',
      date: 'August 8, 2023',
      location: 'Venue B',
      description: 'Description for Event 2.',
    },
  ];

  return (
    <div className="event-cards">
      {eventList.map((event, index) => (
        <div key={index} className="card">
          <h2 className="card-title">{event.title}</h2>
          <p className="card-date">{event.date}</p>
          <p className="card-location">{event.location}</p>
          <p className="card-description">{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Events;
