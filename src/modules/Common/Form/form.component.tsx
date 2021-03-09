import React, { FC, useRef } from 'react'
import styled from 'styled-components'

type ViewProps = {}

type ComponentProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>, data: FormData) => void
} & {
  className?: string
}

const FormComponent: FC<ComponentProps> = ({ onSubmit, ...props }) => {
  const element = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (element.current) {
      const data = new FormData(element.current)

      onSubmit(e, data)
    }
  }

  return <form ref={element} onSubmit={handleSubmit} {...props} />
}

export const Form = styled(FormComponent)<ViewProps>`
  height: 100%;
  width: 100%;

  background-color: transparent;

  display: flex;
  flex-flow: row nowrap;
`
