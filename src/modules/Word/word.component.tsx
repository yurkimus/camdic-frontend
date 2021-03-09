import { FC } from 'react'
import styled from 'styled-components'

type ViewProps = {}

type ComponentProps = {} & { className?: string }

const WordComponent: FC<ComponentProps> = ({ className }) => <div className={className}>WORD PAGE!</div>

export const Word = styled(WordComponent)<ViewProps>`
  width: 100%;
  height: 100%;

  background-color: transparent;

  display: flex;
  flex-flow: column nowrap;
`
