import ActionsBar, { ActionsBarItem } from "./components/ActionsBar";
import SettingsButton from "./components/SettingsButton";
import Timer from "./components/Timer";

export default function App() {
  return (
    <main className="main">
      <h1 className="title">Pomodoro</h1>

      <ActionsBar>
        <ActionsBarItem active title="Pomodoro" />
        <ActionsBarItem title="Descanso Corto" />
        <ActionsBarItem title="Descanso Largo" />
      </ActionsBar>

      <Timer />

      <SettingsButton />
    </main>
  );
}
