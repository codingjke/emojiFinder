import { data } from "./data.js";
import { processEmojiData } from "./processEmojiData.js";
import { initializeSearch } from "./searchHandler.js"; // Убедитесь, что путь верный

initializeSearch();
processEmojiData(data);
