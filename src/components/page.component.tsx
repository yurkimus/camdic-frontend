import styled from 'styled-components'
import { animated } from 'react-spring'

import { to } from '../misc/styled'

export const Wrapper = {
  Page: styled.div`
    width: 100%;
    height: ${({ theme }) => `calc(100% - ${to('px', theme.constraints.header)})`};

    color: ${({ theme }) => theme.color.text};

    background-color: ${({ theme }) => theme.color.secondary};

    position: relative;
    overflow-x: hidden;
  `,

  Section: styled(animated.section)`
    padding: 2rem;

    background-color: transparent;
    border-radius: 2rem 2rem 0 0;

    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  `
}
