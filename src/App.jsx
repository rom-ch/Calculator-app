import { Header } from "./components/Header";
import { Keypad } from "./components/Keypad";
import { Screen } from "./components/Screen";

function App() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6 px-6 py-8">
      <Header />
      <Screen />
      <Keypad />
    </div>
  );
}

export default App;
