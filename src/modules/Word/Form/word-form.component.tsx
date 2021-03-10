import { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { routes } from '../../../routes'
import { Form } from '../../Common/Form/form.component'
import { Textarea } from '../../Common/Form/Textarea/textarea.component'
import { Button } from '../../Common/Button/button.component'
import { Wrapper } from '../../Common/Wrapper/wrapper.component'

export type LocationState = {
  word: string
}

type ViewProps = {}

type ComponentProps = {} & { className?: string }

const WordFormComponent: FC<ComponentProps> = ({ className }) => {
  const history = useHistory()
  const [textareaContent, setTextareaContent] = useState<string>('')
  const [isFilled, setIsFilled] = useState<boolean>(false)
  const [word, setWord] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, data: FormData) => {
    e.preventDefault()

    data.forEach((value, key) => {
      key === 'word-textarea' && typeof value === 'string' && setWord(value)
    })
  }

  useEffect(() => (textareaContent ? setIsFilled(true) : setIsFilled(false)), [textareaContent])

  useEffect(() => {
    word && history.push(`${routes.word}/${word}`, { word } as LocationState)
  }, [word])

  return (
    <Form className={className} onSubmit={handleSubmit}>
      <Textarea
        name='word-textarea'
        placeholder='Tap to enter text/word'
        required
        onChange={(e) => setTextareaContent(e.target.value)}
      />

      <Wrapper>
        <Button color='base' wide>
          Copy text
        </Button>

        <Button type='submit' color={isFilled ? 'accent' : 'disabled'} wide disabled={!isFilled}>
          Load text
        </Button>
      </Wrapper>
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
