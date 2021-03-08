import React, { FC } from 'react'
import styled from 'styled-components'

type ViewProps = {}

type ComponentProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
} & { className?: string }

const FormComponent: FC<ComponentProps> = ({ className, children, onSubmit }) => (
  <form className={className} onSubmit={onSubmit}>
    {children}
  </form>
)

export const Form = styled(FormComponent)<ViewProps>`
  padding: ${({ theme }) => theme.indent.base};

  width: 100%;
  height: 72px;

  background-color: ${({ theme }) => theme.color.base};

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`
