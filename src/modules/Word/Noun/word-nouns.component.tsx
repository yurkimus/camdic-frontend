import { FC } from 'react'
import styled from 'styled-components'

type ViewProps = {}

type ComponentProps = {
  nouns?: string[]
} & { className?: string }

const WordNounsComponent: FC<ComponentProps> = ({ nouns, className }) =>
  nouns && nouns.length ? (
    <div className={className}>
      <h2>nouns</h2>

      <ul>
        {nouns.map((noun) => (
          <li key={noun}>
            <p children={noun} />
          </li>
        ))}
      </ul>
    </div>
  ) : null

export const WordNouns = styled(WordNounsComponent)<ViewProps>`
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
