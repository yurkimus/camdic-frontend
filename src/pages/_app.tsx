import type { AppProps } from 'next/app'
import { config, useTransition } from 'react-spring'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from '../misc/styled'

import { Header } from '../components/header.component'
import { Wrapper } from '../components/page.component'

export default function _App({ Component, pageProps, router }: AppProps) {
  const transitions = useTransition(router, {
    keys: (router) => router.pathname,
    initial: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
    from: { opacity: 1, transform: 'translate3d(100%, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
    leave: { opacity: 0.8, transform: 'translate3d(-100%, 0, 0)' },
    config: config.gentle
  })

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header />

      <Wrapper.Page>
        {transitions((styles) => (
          <Wrapper.Section style={styles}>
            <Component {...pageProps} />
          </Wrapper.Section>
        ))}
      </Wrapper.Page>
    </ThemeProvider>
  )
}
