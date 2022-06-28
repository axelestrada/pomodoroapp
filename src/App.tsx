import { useEffect, useState } from "react";

import Timers from "./components/Timers";
import SettingsModal from "./components/SettingsModal";
import SettingsButton from "./components/SettingsButton";
import Timer from "./components/Timer";

import "./styles/main.sass";

export default function App() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [vh, setVh] = useState(window.innerHeight);

  const updateVh = () => {
    setVh(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateVh);

    return () => {
      window.removeEventListener("resize", updateVh);
    };
  }, []);

  return (
    <main className="main" style={{height: vh * 1}}>
      <h1 className="title">Pomodoro</h1>

      <Timers />

      <Timer />

      <SettingsButton toggleOpen={() => setSettingsOpen(!settingsOpen)} />

      <SettingsModal open={settingsOpen} close={() => setSettingsOpen(false)} />
    </main>
  );
}
