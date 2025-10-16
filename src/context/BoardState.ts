import { createContext } from "react";
import type { direction, GameRecord } from "../models/game";

export interface GameState {
  game: GameRecord;
  undo: () => void;
  move: (key: direction) => void;
  newGame: () => void;
  boardStates: GameRecord[] | [];
}

export const BoardContext = createContext<GameState | undefined>(undefined);
