import { FC } from 'react'
import styled from 'styled-components'

type ViewProps = {}

type ComponentProps = {
  verbs?: string[]
} & { className?: string }

const WordVerbsComponent: FC<ComponentProps> = ({ verbs, className }) =>
  verbs && verbs.length ? (
    <div className={className}>
      <h2>verbs</h2>

      <ul>
        {verbs.map((verb) => (
          <li key={verb}>
            <p children={verb} />
          </li>
        ))}
      </ul>
    </div>
  ) : null

export const WordVerbs = styled(WordVerbsComponent)<ViewProps>`
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
