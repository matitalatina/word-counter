import { instance, mock, when } from "ts-mockito";
import CounterApp from "../counter-app";
import TextFetcher from "../text-fetcher";
import WordCounter from "../word-counter";

describe("CounterApp", () => {
  // Initialization
  const mockWordCounter: WordCounter = mock(WordCounter);
  const mockTextFetcher: TextFetcher = mock(TextFetcher);
  const counterApp = new CounterApp(instance(mockTextFetcher), instance(mockWordCounter));

  it("should get parameters from cli and get the count", async () => {
    const providedUrl = "url";
    const providedWordToFind = "word";
    const fakeContent = "Testo recuperato";
    const expectedCount = 1;

    when(mockTextFetcher.getContent(providedUrl))
      .thenReturn(Promise.resolve(fakeContent));
    when(mockWordCounter.count(fakeContent, providedWordToFind))
      .thenReturn(expectedCount);

    expect(await counterApp.countWordFromUrl(providedUrl, providedWordToFind))
      .toBe(expectedCount);
  });
});
