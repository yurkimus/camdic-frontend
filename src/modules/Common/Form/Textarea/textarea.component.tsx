import React, { FC, forwardRef } from 'react'
import styled from 'styled-components'

type ViewProps = {}

type TextareaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>

type ComponentProps = { className?: string }

const TextareaComponent = forwardRef<HTMLTextAreaElement, TextareaProps & ComponentProps>((props, ref) => (
  <textarea ref={ref} {...props} />
))

export const Textarea = styled(TextareaComponent)<ViewProps>`
  margin-bottom: 1rem;
  padding: ${({ theme }) => theme.indent.base};

  height: 100%;
  width: 100%;

  background-color: transparent;
  border: none;
`
