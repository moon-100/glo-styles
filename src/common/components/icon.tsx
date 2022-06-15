import React, { cloneElement, useMemo } from 'react'
import * as Icons from 'src/assets/icon'
export type IconNames = keyof typeof Icons
const DEFAULT_SIZE = '24'
export type IconSize =
  | '8'
  | '12'
  | '14'
  | '18'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '56'
  | '80'

interface Props {
  className?: string
  style?: React.CSSProperties
  size?: IconSize
  color?: string
  name: IconNames
  onClick?: any
}

export default function Icon(props: Props) {
  const CurrentIcon = useMemo(() => Icons[props.name], [props])
  return cloneElement(<CurrentIcon />, {
    width: props.size,
    height: props.size,
    style: {
      ...props.style,
      minWidth: props.size,
      maxHeight: props.size,
    },
    // verticalAlign: 'sub',
    className: props.className,
    onClick: props.onClick,
  })
}

Icon.defaultProps = {
  size: DEFAULT_SIZE,
  style: {
    verticalAlign: 'sub',
  },
  onClick: () => console.log('click icon'),
}
