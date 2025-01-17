import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const ForwardArrowLeftIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      {...props}
    >
      <g id='Page-1' stroke='none' strokeWidth={1} fill='none' fillRule='evenodd'>
        <g id='login' transform='translate(-44.000000, -44.000000)'>
          <g
            id='baseline-arrow_forward-24px'
            transform='translate(52.000000, 52.000000) scale(-1, 1) translate(-52.000000, -52.000000) translate(40.000000, 40.000000)'
          >
            <polygon id='Path' points='0 0 24 0 24 24 0 24' />
            <polygon
              id='Path'
              fill={theme.colors[props.color] || props.color || '#FFFFFF'}
              fillRule='nonzero'
              points='12 4 10.59 5.41 16.17 11 4 11 4 13 16.17 13 10.59 18.59 12 20 20 12'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
