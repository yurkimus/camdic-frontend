import { FC } from 'react'
import styled from 'styled-components'

type ViewProps = {}

type ComponentProps = {} & { className?: string }

const HeaderComponent: FC<ComponentProps> = ({ className }) => <header className={className}>header!</header>

export const Header = styled(HeaderComponent)<ViewProps>`
  padding: ${({ theme }) => theme.indent.base};

  width: 100%;
  height: 72px;

  background-color: ${({ theme }) => theme.color.base};

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`
