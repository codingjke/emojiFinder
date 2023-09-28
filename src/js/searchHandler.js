import { data } from "./data.js";
import { processEmojiData } from "./processEmojiData.js";

export function initializeSearch() {
  const inputElement = document.querySelector(".header__search-input");
  const blocksContainer = document.querySelector(".blocks-container");

  inputElement.addEventListener("input", function () {
    const searchText = inputElement.value.toLowerCase();

    blocksContainer.innerHTML = "";

    let filteredData = data;

    if (searchText.trim() !== "") {
      filteredData = data
        .filter(
          (emoji) =>
            emoji.title.toLowerCase().startsWith(searchText) ||
            emoji.keywords.toLowerCase().includes(searchText)
        )
        .sort((a, b) => a.title.localeCompare(b.title)); 
    }

    filteredData.forEach((emoji) => {
      const keywordsArray = emoji.keywords.split(" ");
      const uniqueKeywordsArray = [...new Set(keywordsArray)];
      emoji.keywords = uniqueKeywordsArray.join(" ");
    });

    processEmojiData(filteredData);
  });
}
