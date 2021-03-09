import { useEffect } from 'react'
import { FC } from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import { LocationState } from './Form/word-form.component'
import { useGetWord } from './word.hooks'

type ViewProps = {}

type ComponentProps = {} & { className?: string }

const WordComponent: FC<ComponentProps> = ({ className }) => {
  const { state } = useLocation<LocationState>()

  const [loading, getWord, response] = useGetWord()

  useEffect(() => {
    getWord(state.word)
  }, [state])

  return <div className={className}>{JSON.stringify(response)}</div>
}

export const Word = styled(WordComponent)<ViewProps>`
  width: 100%;
  height: 100%;

  background-color: transparent;

  display: flex;
  flex-flow: column nowrap;
`
