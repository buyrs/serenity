import RcSelect                from 'rc-select'
import React                   from 'react'

import { ArrowDownIcon }       from '@ui/icons'

import { dropdownStyles }      from './styles'
import { selectRoundedStyles } from './styles'
import { selectStyles }        from './styles'

export const Select = ({
  children,
  invalid = false,
  multiple = false,
  rounded = false,
  ...props
}) => (
  <RcSelect
    className={`${selectStyles} ${rounded ? selectRoundedStyles : ''}`}
    // @ts-ignore
    dropdownClassName={dropdownStyles.name}
    showSearch={false}
    multiple={multiple}
    showArrow
    inputIcon={<ArrowDownIcon color='#999999' width={8} height={8} />}
    style={invalid ? { borderColor: 'rgb(236,27,52)' } : {}}
    {...props}
  >
    {children}
  </RcSelect>
)
