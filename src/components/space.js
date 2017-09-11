import glamorous from 'glamorous'
import { intersection, keys } from 'lodash'

const spacingProps = {
  p: ['padding'],
  m: ['margin'],
  pt: ['paddingTop'],
  pr: ['paddingRight'],
  pb: ['paddingBottom'],
  pl: ['paddingLeft'],
  mt: ['marginTop'],
  mr: ['marginRight'],
  mb: ['marginBottom'],
  ml: ['marginLeft'],
  py: ['paddingTop', 'paddingBottom'],
  px: ['paddingLeft', 'paddingRight'],
  my: ['marginTop', 'marginBottom'],
  mx: ['marginLeft', 'marginRight']
}

const spacingStyles = (props) => (
  intersection(keys(spacingProps), keys(props)).reduce(
    (res, propKey) => ({ ...res, ...(spacingProps[propKey].reduce(
      (res, cssKey) => ({ ...res, [cssKey]: `${props[propKey]}px` }),
      {}
    ))}),
    {}
  )
)

const space = (Component) => (
  glamorous(Component)(
    props => spacingStyles(props)
  )
)

export default space
