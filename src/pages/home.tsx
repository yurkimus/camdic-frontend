import { FC } from 'react'
import { Page } from '../modules/Common/Page/page.component'
import { WordForm } from '../modules/Word/Form/word-form.component'

export const HomePage: FC = () => (
  <Page>
    <WordForm />
  </Page>
)
