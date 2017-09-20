import React from 'react'
import glamorous from 'glamorous'
import { omit, pick } from 'lodash'

import theme from '../theme'

const defaultProps = {
  size: 42,
  fill: theme.colors.topaz,
  fillOpacity: 0.6
}

const activeProps = {
  ...omit(defaultProps, 'fillOpacity'),
  stroke: theme.colors.white,
  strokeWidth: 75,
  filter: `drop-shadow(0px 2px 4px ${theme.colors.shadow})`
}

const pathProps = (props) => (
  // keep it simple with svgs for now
  pick(props, [
    'fill',
    'fillOpacity',
    'stroke',
    'strokeOpacity',
    'strokeWidth',
    'filter'
  ])
)

const Icon = glamorous.svg(
  {
    marginTop: '8px',
    transition: 'all 0.075s cubic-bezier(0.645, 0.045, 0.355, 1)'
  },
  (props => ({
    ...(props.size && {
      width: props.size,
      height: props.size
    }),
    ...({
      '> path': pathProps(props)
    })
  }))
)

const MarkerIcon = ({ active }) => (
  <Icon
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="801"
    height="1024"
    viewBox="0 0 1024 1024"
    {...(active ? activeProps : defaultProps)}
  >
    <title>Map Marker</title>
    <path
      fill="currentColor"
      d="M400.696 0c-195.896 0-400.696 151.374-400.696 400.696 0 235.965 356.174 596.591 369.53 609.948 8.904 8.904 17.809 13.357 31.165 13.357s22.261-4.452 31.165-13.357c13.357-13.357 369.53-373.983 369.53-609.948 0-249.322-204.8-400.696-400.696-400.696zM400.696 534.261c-75.687 0-133.565-57.878-133.565-133.565s57.878-133.565 133.565-133.565 133.565 57.878 133.565 133.565-57.878 133.565-133.565 133.565z">
    </path>
  </Icon>
)

export default MarkerIcon
