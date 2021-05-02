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

export const to = (unit: 'px' | 'rem' | 'em' | 'p', value: number) => `${value}${unit}`

export const theme = {
  word: {
    description: {
      title: {
        color: '#686060',
        font: {
          size: 14
        }
      },
      text: {
        color: '#3A3131',
        font: {
          size: 16
        }
      }
    }
  },

  color: {
    accent: '#B22234',
    base: '#F9F5F5',
    secondary: '#F3EEEE',
    disabled: '#CFBDBD',
    text: '#3A3131'
  },

  font: {
    size: {
      base: 14,
      guideword: 11
    }
  },

  utils: {
    radius: 8
  },

  constraints: {
    header: 80
  }
}
