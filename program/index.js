import { initGame } from "./game.js";

try {
  initGame();
} catch (error) {
  console.error("Game initialization failed:", error);
  alert("Failed to initialize the game. Please refresh the page.");
}
