import React, { FC, useEffect, useRef, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { routes } from '../../../routes'
import { Form } from '../../Common/Form/form.component'
import { Textarea } from '../../Common/Form/Textarea/textarea.component'
import { Button } from '../../Common/Button/button.component'
import { Wrapper } from '../../Common/Wrapper/wrapper.component'

type LocationState = { word?: string } | undefined

type ViewProps = {}

type ComponentProps = { className?: string }

const WordFormComponent: FC<ComponentProps> = ({ className }) => {
  const history = useHistory<LocationState>()
  const location = useLocation<LocationState>()

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [textareaValue, setTextareaValue] = useState<string>('')
  const [isFilled, setIsFilled] = useState<boolean>(false)
  const [word, setWord] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const value = textareaRef.current?.value

    value?.trim() && setWord(value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const value = textareaRef.current?.value

    if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey && value?.trim()) setWord(value)
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value)

    setIsFilled(Boolean(e.target.value.trim()))
  }

  useEffect(() => textareaRef.current?.focus(), [])

  useEffect(() => {
    if (location?.state?.word && textareaRef.current) {
      textareaRef.current.focus()

      setTextareaValue(location.state.word)
      setIsFilled(true)
    }
  }, [location, textareaRef])

  useEffect(() => {
    word && history.replace(`${routes.word}/${word}`, { word })

    return () => setTextareaValue('')
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
