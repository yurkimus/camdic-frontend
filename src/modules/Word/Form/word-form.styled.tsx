import styled from 'styled-components'

const Form = styled.form`
  height: 100%;

  display: flex;
  flex-flow: column nowrap;
`

const Textarea = styled.textarea`
  margin-bottom: 1rem;
  padding: 2rem;

  height: 100%;
  width: 100%;

  background-color: transparent;
  border: none;

  resize: none;
`

const Actions = styled.div`
  display: flex;

  > * {
    margin-right: 1rem;

    :last-child {
      margin-right: 0;
    }
  }
`

export const Wrapper = { Form, Textarea, Actions }
