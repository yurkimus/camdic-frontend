import { useRouter } from 'next/router'
import { FormEvent, KeyboardEvent, ChangeEvent, FC, useEffect, useRef, useState } from 'react'

import { routes } from '../../../misc/routes'

import { helpers } from '../word.helpers'

import { Button } from '../../Common/Button/button.component'

import { Wrapper } from './styled'

export const Form: FC = () => {
  const router = useRouter()

  const {
    query: { char }
  } = router

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const [filled, setFilled] = useState<boolean>(false)
  const [text, setText] = useState<string>('')
  const [word, setWord] = useState<string | undefined>(undefined)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setWord(textareaRef.current?.value?.trim())
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    helpers.detect.submit(e) && setWord(textareaRef.current?.value?.trim())
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)

    setFilled(!!e.target.value.trim())
  }

  useEffect(() => {
    textareaRef.current?.focus()
  }, [])

  useEffect(() => {
    if (typeof char == 'string' && char && textareaRef.current) {
      setText(char)

      textareaRef.current.focus()

      setFilled(true)
    }
  }, [router, textareaRef])

  useEffect(() => {
    word && router.push(`${routes.word}/${word}`)
  }, [word])

  return (
    <Wrapper.Form onSubmit={handleSubmit}>
      <Wrapper.Textarea
        placeholder='Tap to enter text or word'
        required
        ref={textareaRef}
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <Wrapper.Actions>
        <Button type='button' variant='base' children='copy' disabled />

        <Button type='submit' variant='accent' disabled={!filled} children='define' />
      </Wrapper.Actions>
    </Wrapper.Form>
  )
}
