import { useEffect } from 'react'
import { FC } from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import { LocationState } from './Form/word-form.component'
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

type ViewProps = {}

type ComponentProps = {} & { className?: string }

const WordComponent: FC<ComponentProps> = ({ className }) => {
  const { state } = useLocation<LocationState>()
  const [loading, getWord, response] = useGetWord()

  useEffect(() => {
    getWord(state.word)
  }, [state])

  return (
    <Wrapper className={className}>
      {response && Object.keys(response).length !== 0 ? (
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
      ) : (
        !loading && <h1>Not Found!</h1>
      )}
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
