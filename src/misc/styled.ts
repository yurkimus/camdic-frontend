import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  :root {
    font-size: 16px;
  }

  html {
    font-size: 1rem;
  }

  html, body, #__next {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: #F9F5F5;
  }
`

export const constraints = {
  header: 80
}

export const theme = {}
