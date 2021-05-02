import { ReactNode } from 'react'

import { Wrapper, Title } from './styled'

type Item<Type> = Type extends readonly (infer T)[] ? T : never

type ListProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>

type ComponentProps<Data extends Array<Item<Data>>> = {
  data: Data | undefined
  title: string
  render: (item: Item<Data>) => ReactNode
}

export const List = <Data extends Array<Item<Data>>>({
  data,
  title,
  render
}: ComponentProps<Data> & ListProps) => (
  <Wrapper.Base>
    <Title children={title} />

    <Wrapper.List>
      {Boolean(data?.length) && data.map((item, key) => <li key={key} children={render(item)} />)}
    </Wrapper.List>
  </Wrapper.Base>
)
