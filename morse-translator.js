const morseCharacters = {
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
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
};

export const handleTranslation = (word) => {
  // this had to be added in to make test pass although in real environment HTML input value would be converted to string
  const getSplitCharacters = word.toString().split("");
  const getTranslation = getSplitCharacters.map((character) => {
    if (character === " ") {
      return "/";
    } else if (character.toUpperCase()) {
      return morseCharacters[character.toLowerCase()];
    } else {
      return morseCharacters[character];
    }
  });
  const getTranslatedString = getTranslation.join(" ");
  return getTranslatedString;
};
