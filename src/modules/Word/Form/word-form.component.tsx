import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Form } from '../../Common/Form/form.component'
import { Textarea } from '../../Common/Form/Textarea/textarea.component'
import { Button } from '../../Common/Button/button.component'
import { useHistory } from 'react-router'
import { routes } from '../../../routes'

const Div = styled.div`
  display: flex;

  > * {
    margin-right: 1rem;

    :last-child {
      margin-right: 0;
    }
  }
`

export type LocationState = {
  word: string
}

type ViewProps = {}

type ComponentProps = {} & { className?: string }

const WordFormComponent: FC<ComponentProps> = ({ className }) => {
  const history = useHistory()
  const [word, setWord] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, data: FormData) => {
    e.preventDefault()

    data.forEach((value, key) => {
      key === 'word-textarea' && typeof value === 'string' && setWord(value)
    })
  }

  useEffect(() => {
    word && history.push(`${routes.word}/${word}`, { word } as LocationState)
  }, [word])

  return (
    <Form className={className} onSubmit={handleSubmit}>
      <Textarea name='word-textarea' placeholder='Tap to enter text/word' required />

      <Div>
        <Button color='base' wide>
          Copy text
        </Button>

        <Button type='submit' color='disabled' wide>
          Load text
        </Button>
      </Div>
    </Form>
  )
}

export const WordForm = styled(WordFormComponent)<ViewProps>`
  width: 100%;
  height: 100%;

  background-color: transparent;

  display: flex;
  flex-flow: column nowrap;
`
