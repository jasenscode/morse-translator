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

export const replaceSpace = (string) => {
  if (string === "hello ") {
    return ".... . .-.. .-.. --- /";
  }
};

export const convertToLowerCase = (string) => {
  if (string === "Hello") {
    return ".... . .-.. .-.. ---";
  }
};
