export function createCard(emoji) {
  const block = document.createElement("div");
  const title = document.createElement("h2");
  const symbol = document.createElement("p");
  const keywords = document.createElement("p");

  title.innerText = emoji.title;
  symbol.innerText = emoji.symbol;
  keywords.innerText = emoji.keywords;

  block.className = "blocks-row__block";
  title.className = "block-title";
  symbol.className = "block-symbol";
  keywords.className = "block-keywords";

  block.append(symbol, title, keywords);

  return block;
}
