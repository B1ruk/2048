import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Board } from "./components/board/board";
import { BoardProvider } from "./components/wrapper/BoardProvider";

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
