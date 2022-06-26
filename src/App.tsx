import ActionsBar, { ActionsBarItem } from "./components/ActionsBar";
import SettingsModal from "./components/SettingsModal";
import SettingsButton from "./components/SettingsButton";
import Timer from "./components/Timer";

import "./styles/main.sass";

export default function App() {
  return (
    <main className="main">
      <h1 className="title">Pomodoro</h1>

      <ActionsBar>
        <ActionsBarItem title="POMODORO" />
        <ActionsBarItem title="SHORT_BREAK" />
        <ActionsBarItem title="LONG_BREAK" />
      </ActionsBar>

      <Timer />

      <SettingsButton />

      <SettingsModal />
    </main>
  );
}
