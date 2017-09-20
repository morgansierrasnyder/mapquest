import glamorous from 'glamorous'

import space from './space'

const Title = space(glamorous.div({
  fontSize: '18px',
  lineHeight: '21px',
  fontFamily: '"Sura", serif',
  fontWeight: '700'
}))

const Body = space(glamorous.div({
  fontSize: '15px',
  lineHeight: '18px',
  fontFamily: '"Yanone Kaffeesatz", sans-serif',
  fontWeight: '200'
}))

export { Title, Body }
