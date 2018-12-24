import CounterApp from "./counter-app";
import TextFetcher from "./text-fetcher";
import WordCounter from "./word-counter";

async function testApp() {
  const url = "https://raw.githubusercontent.com/matitalatina/word-counter/master/README.md";
  const wordToFind = "WordCounter";

  const count = await new CounterApp(new TextFetcher(), new WordCounter())
    .countWordFromUrl(url, wordToFind);

  console.log(`The word "${wordToFind}", in ${url}, appears ${count} times`);
}

testApp();
