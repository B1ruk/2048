import { useBoard } from "../../hooks/useBoard";
import { Tile } from "./Tile";

export const Board = () => {
  const boardState = useBoard();

  const board = boardState.board;
  const length = board.length;

  const gridColsClass = `grid grid-cols-${length}`;

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
