import Link from 'next/link'
import styled from 'styled-components'

import { constraints } from '../misc/styled'

const Wrapper = {
  Header: styled.header`
    height: ${constraints.header}px;
  `
}

export const Header = () => (
  <Wrapper.Header>
    <nav>
      <ul>
        <li>
          <Link href='/'>
            <a>to Home</a>
          </Link>
        </li>

        <li>
          <Link href='/word'>
            <a>to Word</a>
          </Link>
        </li>
      </ul>
    </nav>
  </Wrapper.Header>
)
