import { useRouter } from 'next/router'

import { Word } from 'Word/word.component'

const WordPage = () => {
  const router = useRouter()

  const {
    query: { word }
  } = router

  return <Word word={word as string} />
}

export default WordPage
