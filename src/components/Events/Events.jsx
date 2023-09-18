import React from 'react';
import './Events.css';
const Events = () => {
  const day1EventList = [
    {
      title: 'Event 1',
      date: 'August 5, 2023',
      location: 'Venue A',
      description: 'desc',
    },
    {
      title: 'Event 2',
      date: 'August 5, 2023',
      location: 'Venue',
      description: 'desc',
    },
  ];

  const day2EventList = [
    {
      title: 'Event 3',
      date: 'August 6, 2023',
      location: 'Venue',
      description: 'desc',
    },
    {
      title: 'Event 4',
      date: 'August 6, 2023',
      location: 'Venue',
      description: 'desc'
    },
  ];

  const day3EventList = [
    {
      title: 'Event 5',
      date: 'August 7, 2023',
      location: 'Venue',
      description: 'desc',
    },
    {
      title: 'Event 6',
      date: 'August 7, 2023',
      location: 'Venue',
      description: 'desc',
    },
   
  ];

  return (
   
    <div>
      <div className="day-heading">
      <div class="snowflakes" aria-hidden="true">
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❅
  </div>
</div>
        <h3>EVENTS <hr /></h3>
        
        <h4>DAY 1</h4>
      </div>
      <div className="event-cards">
        {day1EventList.map((event, index) => (
          <div key={index} className="card">
            <h1 className="card-title">{event.title}</h1>
            <p className="card-date">{event.date}</p>
            <p className="card-location">{event.location}</p>
            <p className="card-description">{event.description}</p>
          </div>
        ))}
      </div>

      <div className="day-heading">
        <h4>DAY 2 <hr /></h4>
      </div>
      <div className="event-cards">
        {day2EventList.map((event, index) => (
          <div key={index} className="card">
            <h1 className="card-title">{event.title}</h1>
            <p className="card-date">{event.date}</p>
            <p className="card-location">{event.location}</p>
            <p className="card-description">{event.description}</p>
          </div>
        ))}
      </div>

      <div className="day-heading">
        <h4>DAY 3 <hr /></h4>
      </div>
      <div className="event-cards">
        {day3EventList.map((event, index) => (
          <div key={index} className="card">
            <h1 className="card-title">{event.title}</h1>
            <p className="card-date">{event.date}</p>
            <p className="card-location">{event.location}</p>
            <p className="card-description">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
