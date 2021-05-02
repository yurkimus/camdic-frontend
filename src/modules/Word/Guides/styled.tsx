import styled from 'styled-components'

const List = styled.ul`
  padding: 0.5rem 0;

  width: 100%;

  display: flex;

  overflow-x: scroll;
  overflow-y: none;
`

const Item = styled.li`
  margin-right: 0.5rem;

  font-size: ${({ theme }) => theme.font.size.guideword};
  text-transform: uppercase;
  white-space: nowrap;

  :last-child {
    margin-right: 0;
  }
`

export const Wrapper = { List, Item }
