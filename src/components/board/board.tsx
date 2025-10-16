import { useCallback, useEffect } from "react";
import { useBoard } from "../../hooks/useBoard";
import { Tile } from "./Tile";

export const Board = () => {
  const boardState = useBoard();

  const board = boardState.board;
  const length = board.length;

  const gridColsClass = `grid grid-cols-${length}`;

  const keyPressCallback = useCallback(
    (e: KeyboardEvent) => {
      e.preventDefault();
      if (e.key === "ArrowUp") {
        console.log("up");
      } else if (e.key === "ArrowDown") {
        console.log("down");
      } else if (e.key === "ArrowLeft") {
        console.log("left");
      } else if (e.key === "ArrowRight") {
        console.log("right");
      }
    },
    [boardState.status]
  );

  useEffect(() => {
    window.addEventListener("keyup", keyPressCallback);
    return () => {
      window.removeEventListener("keyup", keyPressCallback);
    };
  }, [keyPressCallback]);

  return (
    <div
      className={`w-3/5 h-2/3 ${gridColsClass} gap-1 bg-gray-500 p-1 rounded-sm shadow-md`}
    >
      {boardState.board.flatMap((row: number[], i: number) =>
        row.map((value, j) => {
          const key = `${i}:${j}`;
          return <Tile value={value} key={key} />;
        })
      )}
    </div>
  );
};
