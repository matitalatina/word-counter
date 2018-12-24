import TextFetcher from "./text-fetcher";
import WordCounter from "./word-counter";

export default class CounterApp {
  constructor(private textFetcher: TextFetcher, private wordCounter: WordCounter) {

  }

  public async countWordFromUrl(url: string, wordToFind: string): Promise<number> {
    const text = await this.textFetcher.getContent(url);
    return this.wordCounter.count(text, wordToFind);
  }
}
