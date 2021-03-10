import { FC } from 'react'
import styled from 'styled-components'

type ViewProps = {}

type ComponentProps = {
  guidewords: string[]
} & { className?: string }

const WordGuidesComponent: FC<ComponentProps> = ({ guidewords, className }) =>
  guidewords && guidewords.length ? (
    <ul className={className}>
      {guidewords.map((word) => (
        <li key={word}>
          <span children={word} />
        </li>
      ))}
    </ul>
  ) : null

export const WordGuides = styled(WordGuidesComponent)<ViewProps>`
  padding: 0.5rem 0;

  width: 100%;

  display: flex;

  overflow-x: scroll;
  overflow-y: none;

  li {
    margin-right: 0.5rem;

    font-size: ${({ theme }) => theme.fz.guideword};
    text-transform: uppercase;
    white-space: nowrap;

    :last-child {
      margin-right: 0;
    }
  }
`
