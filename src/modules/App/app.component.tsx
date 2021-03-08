import { FC } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { HomePage } from '../../pages/home'
import { WordPage } from '../../pages/word'
import { routes } from '../../routes'

import { Header } from '../Common/Header/header.component'

type ViewProps = {}

type ComponentProps = {} & { className?: string }

const AppComponent: FC<ComponentProps> = ({ className }) => (
  <div className={className}>
    <Header />

    <Switch>
      <Route path={routes.home} component={HomePage} exact />

      <Route path={routes.word} component={WordPage} />
    </Switch>
  </div>
)

export const App = styled(AppComponent)<ViewProps>`
  width: 100vw;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.color.base};

  display: grid;
  grid-template-rows: 72px 1fr;
`
