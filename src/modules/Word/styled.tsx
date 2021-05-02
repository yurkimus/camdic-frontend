import styled from 'styled-components'

// export const Wrapper = styled.div`
//   height: 100%;
//   display: flex;
//   flex-flow: column nowrap;
//   > * {
//     margin-bottom: 1rem;
//     :last-child {
//       margin-bottom: 0;
//     }
//   }
// `

const Base = styled.div`
  width: 100%;
  height: 100%;

  div:first-child {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    > *:first-child {
      flex: 1;
      margin-right: 1rem;
    }
  }
`

export const Wrapper = { Base }
