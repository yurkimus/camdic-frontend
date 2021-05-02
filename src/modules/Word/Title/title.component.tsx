import { FC } from 'react'

type ComponentProps = { title?: string }

export const Title: FC<ComponentProps> = ({ title = 'Default Title' }) => <h1 children={title} />
