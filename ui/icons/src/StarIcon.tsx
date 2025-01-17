import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const StarIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 16 15'
      fill={theme.colors[props.color] || props.color || '#D8D8D8'}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <polygon
        points='56 99 51.297718 101.472136 52.1957739 96.236068 48.3915479 92.527864 53.648859 91.763932 56 87 58.351141 91.763932 63.6084521 92.527864 59.8042261 96.236068 60.702282 101.472136'
        transform='translate(-48.000000, -87.000000)'
      />
    </svg>
  )
}
