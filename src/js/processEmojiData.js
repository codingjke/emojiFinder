import { createCard } from "./createCard.js";
import { appendCardToContainer } from "./appendCardToContainer.js";

export function processEmojiData(data) {
  const blocksContainer = document.querySelector(".blocks-container");

  data.forEach((emoji) => {
    const card = createCard(emoji);
    appendCardToContainer(card, blocksContainer);
  });
}
