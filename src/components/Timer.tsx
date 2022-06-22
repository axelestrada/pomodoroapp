import { useState } from "react";

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
    <button className="timer">
      <svg
        className="progressbar"
        fill="currentColor"
        width="200"
        height="200"
        viewBox="0 0 100 100"
      >
        <circle fill="currentColor" r="48" cx="50" cy="50" />
        <circle
          style={{ transform: "rotate(-0.25turn)", transformOrigin: "center" }}
          className="stroke"
          fill="none"
          r="44"
          cx="50"
          cy="50"
          stroke="currentColor"
          stroke-dasharray="276.5 276.5"
          stroke-linecap="round"
          stroke-width="3"
          stroke-dashoffset={
            276.5 -
            (durationToPerecents(timerDuration, fullDuration) / 100) * 276.5
          }
        />

        <text
          fill="currentColor"
          font-size="150%"
          text-anchor="middle"
          x="50%"
          y="50%"
          dy=".3em"
        >
          {secondsToMinutes(timerDuration)}
        </text>

        <text
          fill="currentColor"
          font-size="30%"
          text-anchor="middle"
          x="50%"
          y="70%"
        >
          {runningTimer ? "PAUSAR" : "COMENZAR"}
        </text>
      </svg>
    </button>
  );
};

export default Timer;
