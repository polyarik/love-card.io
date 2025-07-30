import { createCardController } from "./card.js";
import { createDeckController } from "./deck.js";

/**
 * Initializes the game components and controllers
 * @throws {Error} If required DOM elements are missing
 */
export const initGame = () => {
  const truthsDeckEl = document.getElementById("truths");
  const daresDeckEl = document.getElementById("dares");
  const activeCardEl = document.getElementById("activeCard");

  if (!truthsDeckEl || !daresDeckEl || !activeCardEl) {
    throw new Error("Missing required DOM elements for game initialization");
  }

  const activeCard = createCardController(activeCardEl);

  createDeckController("truth", truthsDeckEl, activeCard);
  createDeckController("dare", daresDeckEl, activeCard);
};
