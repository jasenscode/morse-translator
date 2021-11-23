"use strict";

import { handleTranslation } from "./morse-translator.js";

//Selectors
const userInput = document.querySelector(".user-input");
const translationOutput = document.querySelector(".morse-output");
const displayInput = document.querySelector(".display-input");
const translateBtn = document.querySelector(".btn");

// Translate function
const handleTranslations = () => {
  const getTranslation = handleTranslation(userInput.value);

  translationOutput.innerHTML = getTranslation;
  displayInput.innerHTML = userInput.value;
  userInput.value = "";
};

// eventListener
translateBtn.addEventListener("click", handleTranslations);
