import { FC } from 'react'
import styled from 'styled-components'

type ViewProps = {}

type ComponentProps = {
  title: string
} & { className?: string }

const WordTitleComponent: FC<ComponentProps> = ({ title, className }) =>
  title ? <h1 className={className} children={title} /> : null

export const WordTitle = styled(WordTitleComponent)<ViewProps>`
  width: 100%;
`
