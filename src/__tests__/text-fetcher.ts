import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import TextFetcher from "../text-fetcher";

describe("TextFetcher", () => {
  const textFetcher = new TextFetcher();

  const mock = new MockAdapter(axios);

  it("should get the content as text", async () => {
    const content = "Questo è il contenuto della pagina web";

    mock.onGet("/fake-url").reply(200, content);

    expect(
      await textFetcher.getContent("/fake-url"),
    ).toBe(content);
  });
});
