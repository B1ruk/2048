import { BoardProvider } from "./components/wrapper/BoardProvider";
import { Board } from "./components/board/Board";

function App() {
  return (
    <div className="App flex flex-col items-center justify-center min-h-screen gap-6 bg-[#faf8ef]">
      <BoardProvider>
        <Board />
      </BoardProvider>
    </div>
  );
}

export default App;
