import { FC } from 'react'
import styled from 'styled-components'

type ViewProps = {}

type ComponentProps = {
  transcription: string
} & { className?: string }

const WordTranscriptionComponent: FC<ComponentProps> = ({ transcription, className }) =>
  transcription ? <span className={className} children={transcription} /> : null

export const WordTranscription = styled(WordTranscriptionComponent)<ViewProps>`
  width: 100%;
`
