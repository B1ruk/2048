import { useCallback, useEffect } from "react";
import { useBoard } from "../../hooks/useBoard";
import { Tile } from "./Tile";

export const Board = () => {
  const boardState = useBoard();

  const board = boardState.game.board;
  const length = board.length;

  const gridColsClass = `grid grid-cols-${length}`;

  const keyPressCallback = useCallback(
    (e: KeyboardEvent) => {
      e.preventDefault();
      if (e.key === "ArrowUp") {
        boardState.move("up");
      } else if (e.key === "ArrowDown") {
        boardState.move("down");
      } else if (e.key === "ArrowLeft") {
        boardState.move("left");
      } else if (e.key === "ArrowRight") {
        boardState.move("right");
      }
    },
    [boardState.game.board]
  );

  useEffect(() => {
    window.addEventListener("keyup", keyPressCallback);
    return () => {
      window.removeEventListener("keyup", keyPressCallback);
    };
  }, [keyPressCallback]);

  return (
    <div className={`pt-[20vh] sm:pt-[15vh]`}>
      <div
        className={`
          w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] ${gridColsClass} gap-1 bg-gray-500 p-1 rounded-sm shadow-md`}
      >
        {boardState.game.board.flatMap((row: number[], i: number) =>
          row.map((value, j) => {
            const key = `${i}:${j}`;
            return <Tile value={value} key={key} />;
          })
        )}
      </div>
    </div>
  );
};
