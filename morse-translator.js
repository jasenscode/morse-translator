export const translateLetter = (letter) => {
  if (letter === "a") {
    return ".-";
  } else if (letter === "z") {
    return "--..";
  }
};

export const translateNumber = (number) => {
  if (number === 2) {
    return "..---";
  } else if (number === 56) {
    return "..... -....";
  }
};

export const translateWord = (word) => {
  if (word === "hello") {
    return ".... . .-.. .-.. ---";
  } else if (word === "sos") {
    return "... --- ...";
  }
};
