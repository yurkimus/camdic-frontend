import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 1rem;

    :last-child {
      margin-right: 0;
    }
  }
`
