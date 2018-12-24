import WordCounter from "../word-counter";

describe("WordCounter", () => {
  const wordCounter = new WordCounter();

  it("should count the word inside text", () => {
    expect(
      wordCounter.count("Questo è il testo in cui dobbiamo cercare.", "testo"),
    ).toBe(1);
  });

  it("should count the word inside text (multiple)", () => {
    expect(wordCounter.count("pippo pippo ciao pippo", "pippo")).toBe(3);
    expect(wordCounter.count("ciao ciao", "ciao")).toBe(2);
    expect(wordCounter.count("ciao", "nonesistequestaparola")).toBe(0);
  });

  it("should count the word case insensitive", () => {
    expect(wordCounter.count("Ciao ciao CIAO", "ciao")).toBe(3);
  });

  it("should count word that have signs nearby", () => {
    expect(wordCounter.count("ciao, ciao! ", "ciao")).toBe(2);
  });
});
