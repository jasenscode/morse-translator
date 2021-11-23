import { morseCharacters } from "./data/data.js";

export const handleTranslation = (word) => {
  // split string into array of individual characters
  const getSplitCharacters = word.toString().split("");

  // map over new array and compare to values in morseAlphabet object and create new array of morse translations
  const getTranslation = getSplitCharacters.map((character) => {
    if (character === " ") {
      return "/";
    } else if (character.toUpperCase()) {
      return morseCharacters[character.toLowerCase()];
    } else {
      return morseCharacters[character];
    }
  });

  // join array elements into one string
  const getTranslatedString = getTranslation.join(" ");
  return getTranslatedString;
};
