import { Api } from '../../api'

export type RestItem = {
  title: string
  descriptions: string[]
}

export type PartsAndDescriptions = {
  adjective: string[]
  preposition: string[]
  conjunction: string[]
  determiner: string[]
  noun: string[]
  pronoun: string[]
  verb: string[]
  'auxiliary verb': string[]
  'phrasal verb': string[]
  adverb: string[]
  exclamation: string[]
  suffix: string[]
  prefix: string[]
  rest: RestItem[]
}

export type WordResponse = {
  audio_link: string
  exists: boolean
  guidewords: string[]
  parts_and_descriptions: Partial<PartsAndDescriptions>
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
