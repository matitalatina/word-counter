import axios from "axios";

export default class TextFetcher {
  public async getContent(url: string): Promise<string> {
    return (await axios.get(url)).data;
  }
}
