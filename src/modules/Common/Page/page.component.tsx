import { FC } from 'react'
import styled from 'styled-components'

type ViewProps = {}

type ComponentProps = {} & { className?: string }

const PageComponent: FC<ComponentProps> = ({ className, children }) => (
  <section className={className}>{children}</section>
)

export const Page = styled(PageComponent)<ViewProps>`
  padding: ${({ theme }) => theme.indent.page};

  width: 100%;
  max-width: 100vw;
  height: 100%;

  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: 1rem 1rem 0 0;

  display: flex;
  flex-flow: column nowrap;
`
