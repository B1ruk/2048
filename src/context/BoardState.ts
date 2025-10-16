import { createContext } from "react";
import type { GameRecord } from "../models/game";

export const BoardContext = createContext<GameRecord>({
  score: 0,
  status: "playing",
  board: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 2, 0, 0],
    [0, 0, 0, 0],
  ],
});
