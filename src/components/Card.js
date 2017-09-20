import React from 'react'
import glamorous, { Div } from 'glamorous'

import { Title, Body } from './typography'
import theme from './theme'
import space from './space'

const placeholder = 'For instance, on the planet Earth, man had always assumed that he was more intelligent than dolphins because he had achieved so much—the wheel, New York, wars and so on—whilst all the dolphins had ever done was muck about in the water having a good time. But conversely, the dolphins had always believed that they were far more intelligent than man—for precisely the same reasons.'

const Card = space(glamorous.div(
  {
    position: 'relative',
    width: '400px',
    maxHeight: '140px',
    display: 'flex',
    overflowY: 'hidden',
    whitespace: 'nowrap',
    border: `2px solid ${theme.colors.topaz}`,
    backgroundColor: theme.colors.white,
    transition: 'all 0.15s cubic-bezier(0.645, 0.045, 0.355, 1)',
  },
  (props => props.showing ? ({
    opacity: 1
  }) : ({
    opacity: 0,
    transform: 'translateY(15px) scale(0.85, 0.85)'
  }))
))

const Thumbnail = glamorous.div({
  width: '100px',
  height: '100px',
  backgroundColor: theme.colors.concrete
})

const Content = space(glamorous.div({
  maxWidth: '280px',
  maxHeight: '100px',
  overflow: 'hidden',
  whitespace: 'nowrap',
  textOverflow: 'ellipsis'
}))

export default ({ active }) => (
  <Card py={20} px={20} showing={active}>
    <Thumbnail />
    <Content ml={20} style={{ textAlign: 'left' }}>
      <Title mb={12}>EdCorps Name</Title>
      <Body>{placeholder}</Body>
    </Content>
  </Card>
)
