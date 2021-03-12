import { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { routes } from '../../routes'
import { useGetWord } from './word.hooks'
import { List } from '../Common/List/list.component'
import { WordTitle } from './Title/word-title.component'
import { WordAudio } from './Audio/word-audio.component'
import { WordTranscription } from './Transcription/word-transcription.component'
import { WordGuides } from './Guide/word-guides.component'
import { PartsAndDescriptions } from './word.api'
import { detectChar, getChar } from './word.helpers'

const Wrapper = styled.div`
  height: 100%;

  display: flex;
  flex-flow: column nowrap;

  > * {
    margin-bottom: 1rem;

    :last-child {
      margin-bottom: 0;
    }
  }
`

type ViewProps = {}

type ComponentProps = { word?: string; className?: string }

const WordComponent: FC<ComponentProps> = ({ className, word }) => {
  const history = useHistory()
  const [loading, getWord, response] = useGetWord()
  const [char, setChar] = useState<string | undefined>(undefined)

  const handleKeyDown = (e: KeyboardEvent) => detectChar(e) && setChar(getChar(e))

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    char && history.replace(`${routes.home}`, { char })
  }, [char])

  useEffect(() => {
    if (word) getWord(word)
  }, [word])

  return !loading && typeof response !== 'undefined' ? (
    <Wrapper className={className}>
      <div>
        <WordTitle title={response.title} />

        <WordTranscription transcription={response.transcription} />
      </div>
      <WordAudio audio_link={response.audio_link} />
      <WordGuides guidewords={response.guidewords} />
      {/* TODO: Fix types & extend entries type inference */}
      <>
        {Object.entries(response.parts_and_descriptions).map(([category, data]) => {
          switch (category as keyof PartsAndDescriptions) {
            case 'rest':
              return data?.map((item: any) => (
                <List
                  key={item.title}
                  title={item.title}
                  data={item.descriptions}
                  render={(item) => <p children={item as string} />}
                />
              ))
            default:
              return (
                <List key={category} title={category} data={data} render={(item) => <p children={item} />} />
              )
          }
        })}
      </>
      )
    </Wrapper>
  ) : !loading ? (
    <h1 children='Not Found' />
  ) : null
}

export const Word = styled(WordComponent)<ViewProps>`
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
