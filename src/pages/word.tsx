import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { Page } from '../modules/Common/Page/page.component'

type RouterParams = {
  word?: string
}

export const WordPage: FC = () => {
  const { word } = useParams<RouterParams>()

  return <Page>{word} Page!!!</Page>
}
