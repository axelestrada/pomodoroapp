import ActionsBar, { ActionsBarItem } from "./components/ActionsBar";
import SettingsButton from "./components/SettingsButton";
import Timer from "./components/Timer";

import "./styles/main.sass"

export default function App() {
  return (
    <main className="main">
      <h1 className="title">Pomodoro</h1>

      <ActionsBar>
        <ActionsBarItem active title="Pomodoro" />
        <ActionsBarItem title="Short Break" />
        <ActionsBarItem title="Long Break" />
      </ActionsBar>

      <Timer />

      <SettingsButton />
    </main>
  );
}
