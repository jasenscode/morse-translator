"use strict";

//Selectors
const userInput = document.querySelector(".user-input");
const translationOutput = document.querySelector(".translate-output");
const translateBtn = document.querySelector(".btn");
const morseAlphabet = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  1: "*----",
  2: "**---",
  3: "***--",
  4: "****-",
  5: "*****",
  6: "-****",
  7: "--***",
  8: "---**",
  9: "----*",
  0: "-----",
};

const handleTranslation = () => {
  // split string into array of individual characters
  const getSplitCharacters = userInput.value.split("");
  // map over new array and compare to values in morseAlphabet object and create new array of morse translations
  const getTranslation = getSplitCharacters.map((character) => {
    if (character === " ") {
      return "/";
    } else {
      return morseAlphabet[character];
    }
  });
  // join the array into one complete string
  const getTranslatedString = getTranslation.join(" ");
  console.log(getTranslatedString);
};

translateBtn.addEventListener("click", handleTranslation);
