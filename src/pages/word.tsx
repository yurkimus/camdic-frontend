import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { Page } from '../modules/Common/Page/page.component'
import { Word } from '../modules/Word/word.component'

type LocationState = { word?: string; char?: string } | undefined

export const WordPage: FC = () => {
  const { pathname } = useLocation<LocationState>()

  return (
    <Page>
      <Word word={pathname.split('/').slice(-1)[0]} />
    </Page>
  )
}
