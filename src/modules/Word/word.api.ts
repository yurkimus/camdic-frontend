import { Api } from '../../api'

export type WordResponse = {
  audio_link: string
  exists: boolean
  guidewords: string[]
  parts_and_descriptions: {
    noun?: string[]
    verb?: string[]
    adjective?: string[]
  }
  title: string
  transcription: string
  url: string
  word_to_use_in_request: string
}

class WordApi extends Api {
  public async getWord(word: string) {
    return await this.client.get<WordResponse>(`/${word}`).then((response) => response.data)
  }
}

export const wordApi = new WordApi()
