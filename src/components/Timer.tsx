import { useContext, useEffect, useState } from "react";
import { AppContext } from "../state/AppProvider";
import "./styles/timer.sass";

const Timer = () => {
  const { state } = useContext(AppContext);

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

  const durationToPercents = (
    currentDuration: number,
    fullDuration: number
  ) => {
    const singlePercent = fullDuration / 100;
    const durationDifference = fullDuration - currentDuration;

    return 100 - durationDifference / singlePercent;
  };

  const minutesToSeconds = (minutes: number) => minutes * 60;

  const fullDuration = minutesToSeconds(
    state.timer.durations[state.timer.current]
  );

  const [runningTimer, setRunningTimer] = useState(false);
  const [timerDuration, setTimerDuration] = useState(fullDuration);

  let interval: number;

  useEffect(() => {
    if (runningTimer) {
      interval = setInterval(() => {
        setTimerDuration((prev) => {
          if (prev === 0) {
            setRunningTimer(false);
            return fullDuration;
          }

          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [runningTimer]);

  useEffect(() => {
    setRunningTimer(false);
    setTimerDuration(fullDuration);
  }, [state.timer.current, state.timer.durations, state.timer.reset]);

  return (
    <button className="timer" onClick={() => setRunningTimer(!runningTimer)}>
      <svg className="progressbar" viewBox="0 0 100 100">
        <circle className="background" r="48" cx="50" cy="50" />
        <circle
          style={{ transform: "rotate(-0.25turn)", transformOrigin: "center" }}
          className="progress"
          data-color={state.theme.color}
          fill="none"
          r="44"
          cx="50"
          cy="50"
          stroke="currentColor"
          strokeDasharray="276.5 276.5"
          strokeLinecap="round"
          strokeWidth="3"
          strokeDashoffset={
            276.5 -
            (durationToPercents(timerDuration, fullDuration) / 100) * 276.5
          }
        />

        <text
          className="time"
          fill="currentColor"
          data-font={state.theme.font}
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
          data-font={state.theme.font}
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
