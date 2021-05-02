import { FC } from 'react'

type ComponentProps = {
  link?: string
}

export const Audio: FC<ComponentProps> = ({ link }) => <audio src={link} controls />
