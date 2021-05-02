import { useState } from 'react'

import { wordApi, WordResponse } from 'Word/word.api'

export const useGetWord = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [response, setResponse] = useState<WordResponse | undefined>()

  const action = async (word: string) => {
    setLoading(true)

    const data = await wordApi.getWord(word)

    if (data && Object.keys(data).length) {
      setResponse(data)

      setLoading(false)
    } else {
      setLoading(false)

      setResponse(undefined)
    }
  }

  return [loading, action, response] as [boolean, typeof action, WordResponse | undefined]
}
