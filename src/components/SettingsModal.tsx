import { ReactNode, useContext, useEffect, useState } from "react";
import { AppContext } from "../state/AppProvider";
import { timers } from "../state/interfaces";

import "./styles/settingsModal.sass";

const SettingsModal = ({
  open,
  close,
}: {
  open: boolean;
  close: () => void;
}) => {
  const { state } = useContext(AppContext);

  const [timerDurations, setTimerDurations] = useState(state.timer.durations);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    timers.forEach((timer) => {
      if (timerDurations[timer] < 1 || timerDurations[timer] > 60) {
        if (!errors.includes(timer)) setErrors((prev) => [...prev, ...[timer]]);
      } else if (errors.includes(timer)) {
        setErrors((prev) => prev.filter((item) => item !== timer));
      }
    });
  }, [timerDurations]);

  const closeSettings = () => {
    close();

    setTimerDurations(state.timer.durations);
  };

  return (
    <div className={open ? "settings-modal open" : "settings-modal"}>
      <div className="background-overlay" onClick={closeSettings}></div>

      <div className="modal">
        <header className="header">
          <h2 className="title">Settings</h2>

          <button className="close-button" onClick={closeSettings}>
            <svg fill="currentColor" width="14" height="14" viewBox="0 0 14 14">
              <path d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z" />
            </svg>
          </button>
        </header>

        <form className="settings">
          <SettingsSection title="Time (Minutes)" direction="column" errors={errors}>
            {timers.map((timer, index) => (
              <div
                key={index}
                className={errors.includes(timer) ? "input error" : "input"}
              >
                <label className="text" htmlFor={timer}>
                  {timer
                    .toLowerCase()
                    .replace("_", " ")
                    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                      letter.toUpperCase()
                    )}
                </label>

                <input
                  type="number"
                  min="1"
                  max="59"
                  step="1"
                  name={timer}
                  value={timerDurations[timer]}
                  onChange={(e) =>
                    setTimerDurations((prev) => ({
                      ...prev,
                      ...{ [timer]: e.target.value },
                    }))
                  }
                />
              </div>
            ))}
          </SettingsSection>

          <SettingsSection title="Font">
            <SettingsItem font="KUMBH_SANS" type="button" />
            <SettingsItem font="ROBOTO_SLAB" type="button" />
            <SettingsItem font="SPACE_MONO" type="button" />
          </SettingsSection>

          <SettingsSection title="Color">
            <SettingsItem color="RED" type="button" />
            <SettingsItem color="CYAN" type="button" />
            <SettingsItem color="VIOLET" type="button" />
          </SettingsSection>

          <button type="submit" className="apply-button">
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

interface ISettingsSection {
  title: string;
  children: ReactNode;
  errors?: string[];
  direction?: "row" | "column";
}

const SettingsSection = ({
  title,
  children,
  errors,
  direction = "row",
}: ISettingsSection) => {
  return (
    <div className={`section ${direction}`}>
      <h3 className="title">{title}</h3>

      <div className="items">{children}</div>

      {errors && (
        <div className={errors.length > 0 ? "error visible" : "error"}>
          <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
            <path
              fillRule="evenodd"
              d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm8.036-4.024a.75.75 0 00-1.06 1.06L10.939 12l-2.963 2.963a.75.75 0 101.06 1.06L12 13.06l2.963 2.964a.75.75 0 001.061-1.06L13.061 12l2.963-2.964a.75.75 0 10-1.06-1.06L12 10.939 9.036 7.976z"
            ></path>
          </svg>

          <p className="text">
            Make sure that timer duration is between 1 and 60 minutes!
          </p>
        </div>
      )}
    </div>
  );
};

interface ISettingsItem {
  title?: string;
  id?: string;
  font?: string;
  color?: string;
  type: "input" | "button";
}

const SettingsItem = ({ id, title, font, color, type }: ISettingsItem) => {
  return (
    <>
      {type === "input" && id && (
        <div className={`input`}>
          <label className="text" htmlFor={id}>
            {title}
          </label>

          <input type="number" min="1" max="59" step="1" name={id} />
        </div>
      )}

      {type === "button" && (
        <button
          className={`button ${font ? "font" : "color"}`}
          data-theme={color}
          data-font={font}
        >
          {font && "Aa"}

          {color && (
            <svg
              height="11"
              width="15"
              viewBox="0 0 15 11"
              fill="none"
              stroke="currentColor"
            >
              <path d="M1 5.5L4.95263 9.45263L13.4053 1" strokeWidth="2" />
            </svg>
          )}
        </button>
      )}
    </>
  );
};

export default SettingsModal;
