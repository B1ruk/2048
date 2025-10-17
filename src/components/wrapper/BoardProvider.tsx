import React, { useMemo, useState } from "react";
import { BoardContext, type GameState } from "../../context/BoardState";
import type { direction, GameRecord } from "../../models/game";
import { checkGameStatus, handleMove } from "../../logic/gameLogic";

const getInitialBoard = (n: number = 4): number[][] => {
  const board = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));

  board[getRandomIndex(n)][getRandomIndex(n)] = 2;
  board[getRandomIndex(n)][getRandomIndex(n)] = 2;
  return board;
};

const getRandomIndex = (n: number) => Math.floor(Math.random() * n);

export const BoardProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [game, setGame] = useState<GameRecord>({
    score: 0,
    status: "playing",
    board: getInitialBoard(),
  });

  const move = (key: direction) => {
    if (game.status !== "playing") return;

    const updatedBoard = handleMove(game.board, key);

    setGame({
      score: game.score,
      board: updatedBoard,
      status: checkGameStatus(updatedBoard),
    });
  };

  const gameContextValue: GameState = useMemo(
    () => ({
      game,
      move,
      undo: () => {},
      newGame: () => {},
      boardStates: [],
    }),
    [game, move]
  );

  return (
    <BoardContext.Provider value={gameContextValue}>
      {children}
    </BoardContext.Provider>
  );
};
