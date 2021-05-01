import type { AppProps } from 'next/app'
import { config, useTransition } from 'react-spring'

import { GlobalStyle } from '../misc/styled'

import { Header } from '../components/Header'
import { Wrapper } from '../components/Page'

export default function _App({ Component, pageProps, router }: AppProps) {
  const transitions = useTransition(router, {
    keys: (router) => router.pathname,
    from: { opacity: 1, transform: 'translate3d(100%, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
    leave: { opacity: 0.8, transform: 'translate3d(-100%, 0, 0)' },
    config: config.gentle
  })

  return (
    <>
      <GlobalStyle />

      <Header />

      <Wrapper.Page>
        {transitions((styles) => (
          <Wrapper.Section style={styles}>
            <Component {...pageProps} />
          </Wrapper.Section>
        ))}
      </Wrapper.Page>
    </>
  )
}