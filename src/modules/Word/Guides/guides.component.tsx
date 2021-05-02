import { FC } from 'react'

import { Wrapper } from './styled'

type ComponentProps = {
  guidewords?: string[]
}

export const Guides: FC<ComponentProps> = ({ guidewords }) =>
  Boolean(guidewords?.length) ? (
    <Wrapper.List>
      {guidewords.map((word) => (
        <Wrapper.Item key={word}>
          <span children={word} />
        </Wrapper.Item>
      ))}
    </Wrapper.List>
  ) : null
