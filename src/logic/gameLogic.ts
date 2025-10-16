import type { direction } from "../models/game";

export const checkGameStatus = (
  board: number[][]
): "win" | "lose" | "playing" => {
  return "playing";
};

export const handleMove = (board: number[][], key: direction) => {
  const updatedBoard = processMove(board, key);
  return hydrateBoard(updatedBoard);
};

const hydrateBoard = (board: number[][]) => {
  const emptyCells: { r: number; c: number }[] = board.reduce((acc, row, r) => {
    row.forEach((tile, c) => {
      if (tile === 0) acc.push({ r, c });
    });
    return acc;
  }, [] as { r: number; c: number }[]);

  if (emptyCells.length === 0) return board;

  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  const { r, c } = emptyCells[randomIndex];

  return board.map((row, rowIdx) =>
    rowIdx === r
      ? row.map((tile, colIdx) => (colIdx === c ? 2 : tile))
      : [...row]
  );
};

const processMove = (board: number[][], key: direction): number[][] => {
  if (key === "right" || key === "left") {
    return board.map((row) =>
      consolidateLine(row, key === "left" ? true : false)
    );
  }
  if (key === "down" || key === "up") {
    const transposedBoard = swapRowsAndColumns(board);
    const moved = transposedBoard.map((row) =>
      consolidateLine(row, key === "up" ? true : false)
    );

    return swapRowsAndColumns(moved);
  }
  return board;
};

const swapRowsAndColumns = (board: number[][]) => {
  if (!board || board.length == 0) return [];

  return board[0].map((_, colIndex) => board.map((row) => row[colIndex]));
};

const consolidateLine = (line: number[], slideToStart: boolean) => {
  if (line.length === 0) return [];

  const reCompressed = removeZeros(mergeTiles(removeZeros(line)));

  return padWithZero(reCompressed, line.length, slideToStart);
};

const padWithZero = (line: number[], size: number, slideToStart: boolean) => {
  const padding = Array(size - line.length).fill(0);
  if (slideToStart) {
    return [...line, ...padding];
  }
  return [...padding, ...line];
};

const removeZeros = (line: number[]) => line.filter((tile) => tile !== 0);

const mergeTiles = (line: number[]) => {
  const tiles = [...line];

  for (let i = 0; i < tiles.length - 1; i++) {
    if (tiles[i] !== 0 && tiles[i] === tiles[i + 1]) {
      tiles[i] = tiles[i] * 2;
      tiles[i + 1] = 0;
    }
  }
  return tiles;
};
