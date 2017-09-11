import glamorous from 'glamorous'

import space from './space'

const Title = space(glamorous.div({
  fontSize: '18px',
  lineHeight: '21px'
}))

const Body = space(glamorous.div({
  fontSize: '15px',
  lineHeight: '18px'
}))

export { Title, Body }
