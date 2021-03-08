import { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { routes } from '../../../routes'

type ViewProps = {}

type ComponentProps = {} & { className?: string }

const HeaderComponent: FC<ComponentProps> = ({ className }) => (
  <header className={className}>
    <Link to={routes.home}>
      <img src={process.env.PUBLIC_URL + '/assets/logo.svg'} alt='logo icon' />
    </Link>

    <img src={process.env.PUBLIC_URL + '/assets/menu.svg'} alt='menu icon' />
  </header>
)

export const Header = styled(HeaderComponent)<ViewProps>`
  padding: ${({ theme }) => theme.indent.base};

  width: 100%;
  min-height: 72px;

  background-color: ${({ theme }) => theme.color.base};

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`
