import React, { DetailedHTMLProps, ButtonHTMLAttributes, FC } from 'react'
import styled from 'styled-components'

import { to } from '../../../misc/styled'

type ComponentProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  className?: string
}

type ViewProps = {
  variant?: 'base' | 'secondary' | 'accent'
  disabled?: boolean
}

const Component: FC<ComponentProps> = (props) => <button {...props} />

export const Button = styled(Component)<ViewProps>`
  width: 100%;

  padding: 1rem 2rem;

  font-family: 'Avenir-Heavy', sans-serif;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: ${({ theme }) => to('px', theme.utils.radius)};

  transition: all 0.3s;
  cursor: pointer;

  ${({ theme, variant }) => {
    /*
      TODO: fix styling text color based on background color
      DONE: base & disabled
    */
    switch (variant) {
      case 'base':
        return `
          background-color: ${theme.color.base};
          color: ${theme.color.disabled};
        `
      case 'secondary':
        return `
          background-color: ${theme.color.secondary};
          color: ${false};
        `
      case 'accent':
        return `
          background-color: ${theme.color.accent};
          color: ${theme.color.base};
        `
      default:
        return `
          background-color: transparent;
          color: inherit;
        `
    }
  }};

  ${({ theme, disabled }) => {
    if (disabled)
      return `
        background-color: ${theme.color.disabled};
        color: ${theme.color.base};

        cursor: not-allowed;
      `
  }}
`
