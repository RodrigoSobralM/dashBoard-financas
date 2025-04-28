export interface ListItemProps {
  label?: string | React.ReactElement
  path?: string
  icon?: string
  isOpen?: boolean
  isActive?: boolean
  classname?: string
}

export interface ListItemAvatarProps {
  img?: string
  name: string | React.ReactElement
  value: string | React.ReactElement
  date: string | React.ReactElement
  isLast?: boolean
}
