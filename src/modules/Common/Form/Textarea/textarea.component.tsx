import React, { FC } from 'react'
import styled from 'styled-components'

type ViewProps = {}

type ComponentProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  className?: string
}

const TextareaComponent: FC<ComponentProps> = (props) => <textarea {...props} />

export const Textarea = styled(TextareaComponent)<ViewProps>`
  margin-bottom: 1rem;
  padding: ${({ theme }) => theme.indent.base};

  height: 100%;
  width: 100%;

  background-color: transparent;
  border: none;
`
