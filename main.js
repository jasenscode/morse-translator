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
  const splitCharacters = userInput.value.split("");
  console.log(splitCharacters);
};

translateBtn.addEventListener("click", handleTranslation);
