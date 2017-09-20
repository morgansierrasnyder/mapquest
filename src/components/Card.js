import React from 'react'
import glamorous, { Div } from 'glamorous'

import { Title, Body } from './typography'
import space from './space'
import theme from './theme'
import truncate from './truncate'

const splitContent = (s) => {
  if (s.length < 100) {
    return [s]
  }
  const trim = s.substring(0, 100)
  let i = trim.lastIndexOf(' ')
  i = i > -1 ? i + 1 : 100

  return [s.substring(0, i), s.substring(i)]
}

const Card = space(glamorous.div(
  {
    position: 'relative',
    maxWidth: '400px',
    maxHeight: '140px',
    display: 'flex',
    overflow: 'hidden',
    whitespace: 'nowrap',
    border: `2px solid ${theme.colors.topaz}`,
    backgroundColor: theme.colors.white,
    transition: 'all 0.15s cubic-bezier(0.645, 0.045, 0.355, 1)',
    '> div': {
      display: 'inline-block'
    }
  },
  (props => props.showing ? ({
    opacity: 1,
    zIndex: 100
  }) : ({
    opacity: 0,
    transform: 'translateY(15px) scale(0.85, 0.85)'
  }))
))

const Thumbnail = glamorous.div({
  float: 'left',
  width: '100px',
  height: '100px',
  backgroundColor: theme.colors.concrete
})

const Content = space(glamorous.div({
  maxWidth: '280px',
  maxHeight: '100px',
  overflow: 'hidden'
}))

export default ({ active, title, description }) => {
  const content = splitContent(description)

  return (
    <Card py={20} pl={20} pr={36} showing={active}>
      <Thumbnail />
      <Content ml={20} style={{ textAlign: 'left' }}>
        <Title mb={12}>{title}</Title>
        {content[0] && <Body>{content[0]}</Body>}
        {content[1] && <Body truncate>{content[1]}</Body>}
      </Content>
    </Card>
  )
}
