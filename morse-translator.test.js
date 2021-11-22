import { it, expect, describe } from "@jest/globals";
import { translateLetter, translateNumber, translateWord, replaceSpace } from "./morse-translator.js";

// test individual letters

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

describe("translate words to morse", () => {
  it("should translate hello to .... . .-.. .-.. ---", () => {
    const result = translateWord("hello");
    expect(result).toBe(".... . .-.. .-.. ---");
  });

  it("should translate sos to ... --- ...", () => {
    const result = translateWord("sos");
    expect(result).toBe("... --- ...");
  });
});

// test for spaces
it("should replace spaces with /", () => {
  const result = replaceSpace("hello ");
  expect(result).toBe(".... . .-.. .-.. --- /");
});
