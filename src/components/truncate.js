import glamorous from 'glamorous'

const truncate = (Component) => (
  glamorous(Component)(
    props => (props.truncate && ({
      maxWidth: '100%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }))
  )
)

export default truncate
