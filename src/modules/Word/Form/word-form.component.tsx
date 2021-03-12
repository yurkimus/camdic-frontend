import React, { FC, useEffect, useRef, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { routes } from '../../../routes'
import { Form } from '../../Common/Form/form.component'
import { Textarea } from '../../Common/Form/Textarea/textarea.component'
import { Button } from '../../Common/Button/button.component'
import { Wrapper } from '../../Common/Wrapper/wrapper.component'
import { detectSubmit } from '../word.helpers'

type LocationState = { word?: string; char?: string } | undefined

type ViewProps = {}

type ComponentProps = { className?: string }

const WordFormComponent: FC<ComponentProps> = ({ className }) => {
  const history = useHistory()
  const location = useLocation<LocationState>()

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [textareaValue, setTextareaValue] = useState<string>('')
  const [isFilled, setIsFilled] = useState<boolean>(false)
  const [word, setWord] = useState<string | undefined>()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const value = textareaRef.current?.value

    value?.trim() ? setWord(value) : setWord(undefined)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const value = textareaRef.current?.value

    detectSubmit(e) && value?.trim() ? setWord(value) : setWord(undefined)
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value

    setTextareaValue(value)

    setIsFilled(!!value.trim())
  }

  useEffect(() => textareaRef.current?.focus(), [])

  useEffect(() => {
    const char = location.state?.char

    if (char && textareaRef.current) {
      setTextareaValue(char)

      textareaRef.current.focus()

      setIsFilled(true)
    }
  }, [location, textareaRef])

  useEffect(() => {
    word && history.replace(`${routes.word}/${word}`, { word })
  }, [word])

  return (
    <Form className={className} onSubmit={handleSubmit}>
      <Textarea
        placeholder='Tap to enter text/word'
        required
        ref={textareaRef}
        value={textareaValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <Wrapper>
        <Button type='button' color='base'>
          Copy text
        </Button>

        <Button type='submit' color={isFilled ? 'accent' : 'disabled'} disabled={!isFilled}>
          Load text
        </Button>
      </Wrapper>
    </Form>
  )
}

export const WordForm = styled(WordFormComponent)<ViewProps>`
  width: 100%;
  height: 100%;
`
