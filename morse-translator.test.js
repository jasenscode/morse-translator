import { it, expect, describe } from "@jest/globals";
import { handleTranslation } from "./morse-translator.js";

// test individual letters

describe("translate single letters to morse", () => {
  it("should translate a to .-", () => {
    const result = handleTranslation("a");
    expect(result).toBe(".-");
  });

  it("should translate z to --..", () => {
    const result = handleTranslation("z");
    expect(result).toBe("--..");
  });
});

// test numbers

describe("translate numbers to morse", () => {
  it("should translate 2 to ..---", () => {
    const result = handleTranslation(2);
    expect(result).toBe("..---");
  });

  it("should translate 56 to ..... -....", () => {
    const result = handleTranslation(56);
    expect(result).toBe("..... -....");
  });
});

// test complete words

describe("translate words to morse", () => {
  it("should translate hello to .... . .-.. .-.. ---", () => {
    const result = handleTranslation("hello");
    expect(result).toBe(".... . .-.. .-.. ---");
  });

  it("should translate sos to ... --- ...", () => {
    const result = handleTranslation("sos");
    expect(result).toBe("... --- ...");
  });
});

// test for spaces
it("should replace spaces with /", () => {
  const result = handleTranslation("hello ");
  expect(result).toBe(".... . .-.. .-.. --- /");
});

// test for uppercase letters
it("should convert uppercase letters to lowercase", () => {
  const result = handleTranslation("Hello");
  expect(result).toBe(".... . .-.. .-.. ---");
});

// test  for unsupported characters
describe("should ignore characters not in the characters object", () => {
  it("should convert ! to empty string", () => {
    const result = handleTranslation("!");
    expect(result).toBe("");
  });

  it("should convert @ to empty string", () => {
    const result = handleTranslation("@");
    expect(result).toBe("");
  });
});
