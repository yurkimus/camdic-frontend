import { FC } from 'react'
import styled from 'styled-components'
import { Form } from '../../Common/Form/form.component'
import { Textarea } from '../../Common/Form/Textarea/textarea.component'
import { Button } from '../../Common/Button/button.component'

const Div = styled.div`
  display: flex;

  > * {
    margin-right: 1rem;

    :last-child {
      margin-right: 0;
    }
  }
`

type ViewProps = {}

type ComponentProps = {} & { className?: string }

const WordFormComponent: FC<ComponentProps> = ({ className }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, data: FormData) => {
    e.preventDefault()

    // TODO: remove mock log
    for (const pairs of data) console.log(pairs)
  }

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
