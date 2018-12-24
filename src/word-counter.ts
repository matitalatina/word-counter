export default class WordCounter {
  public count(text: string, wordToFind: string): number {
    const wordToFindLower = wordToFind.toLowerCase();
    return text.toLowerCase()
      .split(/[^a-zA-Z\d]/)
      .filter((word) => word === wordToFindLower)
      .length;
  }
}
