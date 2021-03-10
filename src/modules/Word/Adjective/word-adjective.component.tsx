import { FC } from 'react'
import styled from 'styled-components'

type ViewProps = {}

type ComponentProps = {
  adjectives?: string[]
} & { className?: string }

const WordAdjectivesComponent: FC<ComponentProps> = ({ adjectives, className }) =>
  adjectives && adjectives.length ? (
    <div className={className}>
      <h2>adjectives</h2>

      <ul>
        {adjectives.map((adjective) => (
          <li key={adjective}>
            <p children={adjective} />
          </li>
        ))}
      </ul>
    </div>
  ) : null

export const WordAdjectives = styled(WordAdjectivesComponent)<ViewProps>`
  width: 100%;

  h2 {
    margin-bottom: 0.5rem;

    font-size: ${({ theme }) => theme.fz.wordDescriptionTitle};
    color: ${({ theme }) => theme.color.wordDescriptionTitle};
  }

  li {
    margin-bottom: 0.25rem;

    p {
      font-size: ${({ theme }) => theme.fz.wordDescriptionText};
      color: ${({ theme }) => theme.color.wordDescriptionText};

      ::before {
        content: '-';
        margin-right: 0.5rem;
      }
    }
  }
`
