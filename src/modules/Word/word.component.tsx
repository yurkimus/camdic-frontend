import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { PartsAndDescriptions } from './word.api'

import { routes } from '../../misc/routes'

import { useGetWord } from './word.hooks'

import { helpers as h } from './word.helpers'

import { List } from '../Common/List/list.component'

import { Title } from './Title/title.component'
import { Transcription } from './Transcription/transcription.component'
import { Audio } from './Audio/audio.component'
import { Guides } from './Guides/guides.component'

import { Wrapper } from './styled'

type ComponentProps = { word?: string }

export const Word: FC<ComponentProps> = ({ word }) => {
  const router = useRouter()

  const [loading, getWord, response] = useGetWord()
  const [char, setChar] = useState<string | undefined>(undefined)

  const handleKeyDown = (e: KeyboardEvent) => h.detect.char(e) && setChar(h.get.char(e))

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    char && router.replace({ pathname: `${routes.home}`, query: { char } })
  }, [char])

  useEffect(() => {
    if (word) getWord(word)
  }, [word])

  return !loading && typeof response != 'undefined' ? (
    <Wrapper.Base>
      <div>
        <Title title={response.title} />

        <Transcription transcription={response.transcription} />
      </div>
      <Audio link={response.audio_link} />
      <Guides guidewords={response.guidewords} />
      <>
        {/* TODO: Fix types & extend entries type inference */}
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
    </Wrapper.Base>
  ) : !loading ? (
    <h1 children='Not Found' />
  ) : null
}
