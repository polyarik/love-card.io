import { createCardController } from "./card.js";
import { shuffleArray } from "./shuffleArray.js";
import { CARD_DECKS } from "../cards/index.js";

/**
 * Creates a deck controller
 * @param {keyof CARD_DECKS} type - Type of deck
 * @param {HTMLElement} deckEl - DOM element for the deck
 * @param {ReturnType<createCardController>} cardController - Active card controller
 */
export const createDeckController = (type, deckEl, cardController) => {
  const cards = [...CARD_DECKS[type]];
  /** @type string[] */
  let deck = [];

  /**
   * Initializes and shuffles the deck
   */
  const initializeDeck = () => {
    deck = shuffleArray(cards);
    updateDeckStatus();
  };

  /**
   * Updates deck UI status
   */
  const updateDeckStatus = () => {
    deckEl.classList.toggle("empty", !deck.length);
  };

  /**
   * Draws a card from the deck
   * @returns {string | undefined} Card text
   */
  const drawCard = () => deck.pop();

  /**
   * Handles deck click event
   * @param {PointerEvent} event
   */
  const handleDeckClick = (event) => {
    event.preventDefault();

    if (!deck.length) {
      initializeDeck();
      return;
    }

    const cardText = drawCard();
    if (cardText) {
      cardController.displayCard(type, cardText);
    }
    updateDeckStatus();
  };

  initializeDeck();
  deckEl.addEventListener("click", handleDeckClick);
};
