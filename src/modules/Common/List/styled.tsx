import styled from 'styled-components'

import { to } from 'misc/styled'

const Base = styled.div``

const List = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;

  li {
    margin-bottom: 0.25rem;

    p {
      font-size: ${({ theme }) => to('px', theme.font.size.text)};
      color: ${({ theme }) => theme.color.mark};

      ::before {
        content: '-';

        margin-right: 0.5rem;
      }
    }
  }
`

export const Wrapper = { Base, List }

export const Title = styled.h2`
  margin-bottom: 0.5rem;

  font-size: ${({ theme }) => to('px', theme.font.size.base)};
  color: ${({ theme }) => theme.color.text};
`
