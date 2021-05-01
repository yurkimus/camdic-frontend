import styled from 'styled-components'
import { animated } from 'react-spring'

import { constraints } from '../misc/styled'

export const Wrapper = {
  Page: styled.div`
    width: 100%;
    height: calc(100% - ${constraints.header}px);

    color: #3a3131;

    background-color: #f3eeee;

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
