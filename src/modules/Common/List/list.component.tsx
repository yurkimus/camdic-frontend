import { ReactNode } from 'react'
import styled from 'styled-components'

type Item<Type> = Type extends readonly (infer T)[] ? T : never

type ListViewProps = {
  direction?: 'row' | 'column'
  wrap?: 'wrap' | 'nowrap'
}

type DivViewProps = {}

type ListProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>

type ComponentProps<Data extends Array<Item<Data>>> = {
  data: Data | undefined
  title: string
  flow?: ListViewProps
  className?: string
  render: (item: Item<Data>) => ReactNode
}

const DivView = styled.div<DivViewProps>`
  h2 {
    margin-bottom: 0.5rem;

    font-size: ${({ theme }) => theme.fz.wordDescriptionTitle};
    color: ${({ theme }) => theme.color.wordDescriptionTitle};
  }
`

const ListView = styled.ul<ListViewProps>`
  display: flex;
  flex-direction: ${({ direction = 'column' }) => direction};
  flex-wrap: ${({ wrap = 'nowrap' }) => wrap};

  li {
    margin-bottom: 0.25rem;

    p {
      font-size: ${({ theme }) => theme.fz.wordDescriptionText};
      color: ${({ theme }) => theme.color.wordDescriptionText};

      ::before {
        content: '-';
        margin-right: 0.5rem;
      }
    }
  }
`

export function ListComponent<Data extends Array<Item<Data>>>(props: ComponentProps<Data> & ListProps) {
  return (
    <DivView className={props.className}>
      <h2 children={props.title} />

      <ListView>
        {props?.data && props.data.map((item, key) => <li key={key}>{props.render(item)}</li>)}
      </ListView>
    </DivView>
  )
}

export const List = ListComponent
