import { useState } from "react";

import Timers from "./components/Timers";
import SettingsModal from "./components/SettingsModal";
import SettingsButton from "./components/SettingsButton";
import Timer from "./components/Timer";

import "./styles/main.sass";

export default function App() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <main className="main">
      <h1 className="title">Pomodoro</h1>

      <Timers />

      <Timer />

      <SettingsButton toggleOpen={() => setSettingsOpen(!settingsOpen)} />

      <SettingsModal open={settingsOpen} close={() => setSettingsOpen(false)} />
    </main>
  );
}
