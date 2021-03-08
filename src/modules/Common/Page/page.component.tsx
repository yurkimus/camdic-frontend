import { FC } from 'react'
import styled from 'styled-components'

type ViewProps = {}

type ComponentProps = {} & { className?: string }

const PageComponent: FC<ComponentProps> = ({ className, children }) => (
  <section className={className}>{children}</section>
)

export const Page = styled(PageComponent)<ViewProps>`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.color.base};

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`
