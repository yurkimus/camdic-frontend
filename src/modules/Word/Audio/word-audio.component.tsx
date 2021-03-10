import { FC } from 'react'
import styled from 'styled-components'

type ViewProps = {}

type ComponentProps = {
  audio_link: string
} & { className?: string }

const WordTAudioComponent: FC<ComponentProps> = ({ audio_link, className }) =>
  audio_link ? <audio className={className} src={audio_link} controls /> : null

export const WordAudio = styled(WordTAudioComponent)<ViewProps>`
  width: 100%;
`
