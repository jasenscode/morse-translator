import { it, expect, describe } from "@jest/globals";

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

// test complete words
// it should translate sos to ... --- ...
// it should translate hello to .... . .-.. .-.. ---

// test punctuation
// it should translate comma to --..--
// it should translate apostrophe to .----.
