import { FC, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { routes } from '../../routes'
import { useGetWord } from './word.hooks'
import { WordTitle } from './Title/word-title.component'
import { WordAudio } from './Audio/word-audio.component'
import { WordTranscription } from './Transcription/word-transcription.component'
import { WordGuides } from './Guide/word-guides.component'
import { WordNouns } from './Noun/word-nouns.component'
import { WordVerbs } from './Verb/word-verbs.component'
import { WordAdjectives } from './Adjective/word-adjective.component'

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

type LocationState = { word?: string } | undefined

type ViewProps = {}

type ComponentProps = { className?: string }

const WordComponent: FC<ComponentProps> = ({ className }) => {
  const history = useHistory<LocationState>()
  const location = useLocation<LocationState>()

  const [loading, getWord, response] = useGetWord()
  const [word, setWord] = useState<string>('')

  useEffect(() => {
    document.addEventListener('keydown', (e) => e.key.length === 1 && !e.shiftKey && setWord(e.key))
  }, [])

  useEffect(() => {
    location?.state?.word && getWord(location.state.word)
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

          <WordNouns nouns={response.parts_and_descriptions?.noun} />

          <WordVerbs verbs={response.parts_and_descriptions?.verb} />

          <WordAdjectives adjectives={response.parts_and_descriptions?.adjective} />
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
