import { FC, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { routes } from '../../routes'
import { useGetWord } from './word.hooks'
import { List } from '../Common/List/list.component'
import { WordTitle } from './Title/word-title.component'
import { WordAudio } from './Audio/word-audio.component'
import { WordTranscription } from './Transcription/word-transcription.component'
import { WordGuides } from './Guide/word-guides.component'
import { PartsAndDescriptions, RestItem } from './word.api'
import { useLocalStorage } from '../Common/Hooks/useLocalStorage'

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

const entries = {}

type LocationState = { word?: string } | undefined

type ViewProps = {}

type ComponentProps = { className?: string }

const WordComponent: FC<ComponentProps> = ({ className }) => {
  const history = useHistory<LocationState>()
  const location = useLocation<LocationState>()

  const [loading, getWord, response] = useGetWord()
  const [setLsItem, getLsItem] = useLocalStorage()
  const lsKey = 'cdict-word-to-get'
  const [word, setWord] = useState<string>('')

  const keyDownHandler = (e: KeyboardEvent) =>
    !e.shiftKey && !e.ctrlKey && e.key.length === 1 && e.key.match(/\p{L}/u) && setWord(e.key)

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler)

    return () => document.removeEventListener('keydown', keyDownHandler)
  }, [])

  useEffect(() => {
    const word = location?.state?.word

    if (word) {
      setLsItem(lsKey, word)

      getWord(word)
    } else {
      const found = getLsItem(lsKey)

      found && getWord(found)
    }
  }, [location])

  useEffect(() => {
    word && history.replace(`${routes.home}`, { word })
  }, [word])

  return (
    <Wrapper className={className}>
      {!loading && response && (
        <>
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
                    <List
                      key={category}
                      title={category}
                      data={data}
                      render={(item) => <p children={item} />}
                    />
                  )
              }
            })}
          </>
        </>
      )}

      {!loading && !response && <h1 children='Not Found!' />}
    </Wrapper>
  )
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
