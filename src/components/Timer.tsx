import { useState } from "react";
import "./styles/timer.sass";

const Timer = () => {
  const [runningTimer, setRunningTimer] = useState(false);

  const [fullDuration, setFullDuration] = useState(20);
  const [timerDuration, setTimerDuration] = useState(1079);

  const minutesToSeconds = (minutes: number) => minutes * 60;

  const secondsToMinutes = (duration: number) => {
    let seconds: string | number = parseInt((duration % 60).toString(), 10);
    let minutes: string | number = parseInt(
      ((duration / 60) % 60).toString(),
      10
    );

    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return minutes + ":" + seconds;
  };

  const durationToPerecents = (
    currentDuration: number,
    fullDuration: number
  ) => {
    const fullDurationSeconds = minutesToSeconds(fullDuration);

    const singlePercent = fullDurationSeconds / 100;
    const durationDifference = fullDurationSeconds - currentDuration;

    return 100 - durationDifference / singlePercent;
  };

  return (
    <button className="timer" data-theme="RED">
      <svg
        className="progressbar"
        viewBox="0 0 100 100"
      >
        <circle className="background" r="48" cx="50" cy="50" />
        <circle
          style={{ transform: "rotate(-0.25turn)", transformOrigin: "center" }}
          className="progress"
          fill="none"
          r="44"
          cx="50"
          cy="50"
          strokeDasharray="276.5 276.5"
          strokeLinecap="round"
          strokeWidth="3"
          strokeDashoffset={
            276.5 -
            (durationToPerecents(timerDuration, fullDuration) / 100) * 276.5
          }
        />

        <text
          className="time"
          fill="currentColor"
          fontSize="1.5rem"
          textAnchor="middle"
          x="50%"
          y="50%"
          dy=".3em"
        >
          {secondsToMinutes(timerDuration)}
        </text>

        <text
          className="timer-state"
          fill="currentColor"
          fontSize="0.375rem"
          textAnchor="middle"
          x="50%"
          y="70%"
          dx=".7em"
        >
          {runningTimer ? "PAUSE" : "START"}
        </text>
      </svg>
    </button>
  );
};

export default Timer;
