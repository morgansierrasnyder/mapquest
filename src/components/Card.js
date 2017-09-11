import React from 'react'
import glamorous from 'glamorous'

import { Title, Body } from './typography'
import theme from './theme'

const Card = glamorous.div({
  width: '400px',
  height: '140px',
  display: 'flex',
  border: `2px solid ${theme.colors.topaz}`,
  backgroundColor: theme.colors.white
})

const Thumbnail = glamorous.div({
  width: '100px',
  height: '100px',
  margin: '20px',
  backgroundColor: theme.colors.concrete
})

const Content = glamorous.div({
  margin: '0px 20px',

})

export default (props) => (
  <Card>
    <Thumbnail />
    <div>
      <Title>EdCorps Name</Title>
      <Body>description description description</Body>
    </div>
  </Card>
)
