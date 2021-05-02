import { FC } from 'react'

type ComponentProps = {
  transcription?: string
}

export const Transcription: FC<ComponentProps> = ({ transcription = 'Default Transcription' }) => (
  <span children={transcription} />
)
