import { data } from "./data.js";
import { processEmojiData } from "./processEmojiData.js";

export function initializeSearch() {
  const inputElement = document.querySelector(".header__search-input");
  const blocksContainer = document.querySelector(".blocks-container");

  inputElement.addEventListener("input", function () {
    const searchText = inputElement.value.toLowerCase();

    blocksContainer.innerHTML = "";

    const filteredData = data.filter((emoji) =>
      emoji.title.toLowerCase().startsWith(searchText)
    );

    processEmojiData(filteredData);
  });
}
