import { it, expect, describe } from "@jest/globals";
import { translateLetter, translateNumber } from "./morse-translator.js";

// test individual letters
// it should translate a to .-
// it should translate z to --..

describe("translate single letters to morse", () => {
  it("should translate a to .-", () => {
    const result = translateLetter("a");
    expect(result).toBe(".-");
  });

  it("should translate z to --..", () => {
    const result = translateLetter("z");
    expect(result).toBe("--..");
  });
});

// test numbers
// it should translate 2 to ..---
// it should translate 56 to ..... -....

describe("translate numbers to morse", () => {
  it("should translate 2 to ..---", () => {
    const result = translateNumber(2);
    expect(result).toBe("..---");
  });

  it("should translate 56 to ..... -....", () => {
    const result = translateNumber(56);
    expect(result).toBe("..... -....");
  });
});

// test complete words
// it should translate sos to ... --- ...
// it should translate hello to .... . .-.. .-.. ---

describe("translate words to morse", () => {
  it("should translate hello to .... . .-.. .-.. ---", () => {
    const result = translateNumber("hello");
    expect(result).toBe(".... . .-.. .-.. ---");
  });

  it("should translate sos to ... --- ...", () => {
    const result = translateNumber("sos");
    expect(result).toBe("... --- ...");
  });
});

// test punctuation
// it should translate comma to --..--
// it should translate apostrophe to .----.
