type direction = "up" | "down" | "left" | "right";

export interface GameRecord {
  score: number;
  status: "win" | "lose" | "playing";
  board: number[][];
  direction?: direction;
}
