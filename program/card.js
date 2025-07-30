/**
 * Creates a card controller
 * @param {HTMLElement} cardEl - DOM element for the card
 * @returns Card controller API
 */
export const createCardController = (cardEl) => {
  const typeElement = cardEl.querySelector(".type");
  const textElement = cardEl.querySelector(".text");

  if (!typeElement || !textElement) {
    throw new Error("Card element is missing required children");
  }

  let currentType = "";

  /**
   * Resets card state
   */
  const resetCard = () => {
    typeElement.textContent = "";
    textElement.textContent = "";

    cardEl.classList.remove("dropped");

    if (currentType) {
      cardEl.classList.remove(currentType);
      currentType = "";
    }
  };

  /**
   * Displays a card
   * @param {string} type - Card type
   * @param {string} text - Card text
   */
  const displayCard = (type, text) => {
    if (currentType) {
      cardEl.classList.remove(currentType);
    }

    typeElement.textContent = type;
    textElement.textContent = text;

    currentType = type;
    cardEl.classList.add(type);
    cardEl.classList.remove("dropped");
  };

  /**
   * Handles card click (dismissal)
   */
  const handleCardClick = () => {
    cardEl.classList.add("dropped");
  };

  resetCard();
  cardEl.addEventListener("click", handleCardClick);

  return {
    displayCard,
    resetCard,
  };
};
