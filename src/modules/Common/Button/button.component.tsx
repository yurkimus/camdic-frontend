import React, { FC } from 'react'
import styled from 'styled-components'
import { theme } from '../../../theme'

type ViewProps = {
  wide?: boolean
  color?: keyof typeof theme.color
}

type ComponentProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { className?: string }

const ButtonComponent: FC<ComponentProps> = (props) => <button {...props} />

export const Button = styled(ButtonComponent)<ViewProps>`
  padding: ${({ theme }) => theme.indent.button};
  width: ${({ wide }) => (wide ? '100%' : false)};

  border-radius: ${({ theme }) => theme.utils.radius};
  border: none;

  font-family: 'Avenir-Heavy', sans-serif;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  transition: all 0.3s;

  ${({ theme, color }) => {
    /*
      TODO: fix styling text color based on background color
      DONE: base & disabled
    */
    switch (color) {
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
      case 'disabled':
        return `
          background-color: ${theme.color.disabled};
          color: ${theme.color.base};
        `
      default:
        return `
          background-color: transparent;
          color: inherit;
        `
    }
  }};
`
