import { useState } from 'react'
import { wordApi, WordResponse } from './word.api'

export const useGetWord = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [response, setResponse] = useState<WordResponse | undefined>()

  const action = async (word: string) => {
    setLoading(true)

    const data = await wordApi.getWord(word)

    if (data) {
      setLoading(false)

      setResponse(data)
    } else {
      setLoading(false)

      throw Error(`Some error happened at word API`)
    }
  }

  return [loading, action, response] as [boolean, typeof action, typeof response]
}
