import { FC, forwardRef } from 'react'
import styled from 'styled-components'

type ViewProps = {}

type FormProps = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>

type ComponentProps = { className?: string }

const FormComponent: FC<FormProps & ComponentProps> = (props) => <form {...props} />

export const Form = styled(FormComponent)<ViewProps>`
  height: 100%;
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
`
