import React, { Children, useState } from "react";
import { BoardContext } from "../../context/BoardState";
import type { GameRecord } from "../../models/game";

const getInitialBoard = (n: number = 4): number[][] => {
  const board = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));

  board[getRandomIndex(n)][getRandomIndex(n)] = 2;
  return board;
};

const getRandomIndex = (n: number) => Math.floor(Math.random() * n);

export const BoardProvider = ({ children }) => {
  const [game, setGame] = useState<GameRecord>({
    score: 0,
    status: "playing",
    board: getInitialBoard(),
  });

  return <BoardContext.Provider value={game}>{children}</BoardContext.Provider>;
};
