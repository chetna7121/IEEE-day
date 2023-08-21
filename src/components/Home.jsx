import './Home.css';
import React, { useEffect, useState } from "react";

const Home = () => {

  const calculateTimeLeft = () => {
    const targetDate = new Date("October 6, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;
    const timeLeft = {};
    if (difference > 0) {
      timeLeft.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      timeLeft.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      timeLeft.minutes = Math.floor((difference / (1000 * 60)) % 60);
      timeLeft.seconds = Math.floor((difference / 1000) % 60);
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (timeLeft[interval]) {
      return (
        <div key={interval} className="timer-box">
          <span className="timer-number">{timeLeft[interval]}</span>
          <span className="timer-label">{interval}</span>
        </div>
      );
    }
    return null;
  });

  return (
  
    <div className="text-container">
      <h1>IEEE DAY</h1>
      <h1>CELEBRATIONS'23</h1>
      <div className="timer-container">
        {timerComponents.length ? timerComponents : <span className="times-up">See you all!</span>}
      </div>
       <div className="container">
      <div className="center">
        <button className="register-button">
          <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
            <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
          </svg>
          <span>Register Now</span>
        </button>
      </div>
    </div>
   
    </div>
    
  );
};

export default Home;
