import React, { useState, useEffect } from "react";
import Card from "./Card/Card";
import "./ClockCard.css";
import instagram from '../../images/icon-instagram.svg';
import pinterest from '../../images/icon-pinterest.svg';
import facebook from '../../images/icon-facebook.svg';


const defaultRemainingTime = {
  seconds: "41",
  minutes: "55",
  hours: "23",
  days: "08",
};
const ClockCard = () => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  const zeroPad = (num, places) => String(num).padStart(places, "0");

  useEffect(() => {
    const s = 1000;
    const m = s * 60;
    const h = m * 60;
    const d = h * 24;
    const now = new Date().getTime();
    const reminderDate = new Date("06/08/2022").getTime();
    let updateRemainingTime = () => {
      let timeLeft = reminderDate - now;
      setRemainingTime({
        days: Math.floor(timeLeft / d),
        hours: Math.floor((timeLeft % d) / h),
        minutes: Math.floor((timeLeft % h) / m),
        seconds: Math.floor((timeLeft % m) / 1000),
      });
    };
    const interval = setInterval(() => {
      updateRemainingTime();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [remainingTime]);

  return (
    <div className="ClockCard">
      <h1>We're lunching soon</h1>
      <div className="counter">
        <div className="day">
          <Card count={zeroPad(remainingTime.days, 2)}></Card>
          <p className="word">Days</p>
        </div>
        <div className="hour">
          <Card count={zeroPad(remainingTime.hours, 2)}></Card>
          <p className="word">Hours</p>
        </div>
        <div className="minute">
          <Card count={zeroPad(remainingTime.minutes, 2)}></Card>
          <p className="word">Minutes</p>
        </div>
        <div className="second">
          <Card count={zeroPad(remainingTime.seconds, 2)}></Card>
          <p className="word">Seconds</p>
        </div>
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com/bipurna/">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://www.pinterest.com/bipurna/">
          <img src={pinterest} alt="Pinterest" />
        </a>
        <a href="https://www.instagram.com/tarafromsky/">
          <img src={instagram} alt="" />
        </a>
      </div>
    </div>
  );
};

export default ClockCard;
