import { Api } from '../../api'

class WordApi extends Api {
  public async getWord(word: string) {
    return await this.client.get<object>(`/${word}`).then((response) => response.data)
  }
}

export const wordApi = new WordApi()
