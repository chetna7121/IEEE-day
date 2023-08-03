import './Home.css';
import React, { useEffect, useState } from "react";

const Home = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("October 3, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    console.log("Target Date:", targetDate);
    console.log("Current Date:", now);
    console.log("Time Difference:", difference);

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
      <h1>IEEE DAY'22</h1>
      <div className="timer-container">
        {timerComponents.length ? timerComponents : <span className="times-up">See you all!</span>}
      </div>
    </div>
  );
};

export default Home;
