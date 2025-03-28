import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Link } from 'react-router'
import StyledListItemButton from './StyledListItemButton'
import { pxToRem } from '@/utils'

const SidebarItem = (props: SidebarItemProps) => (
  <ListItem disablePadding sx={{ display: 'block', width: pxToRem(104) }}>
    <Link
      to={props.path ?? '#'}
      style={{ textDecoration: 'none'}}
    >
      <StyledListItemButton isActive={props.isActive} isOpen={props.isOpen}>
        <ListItemIcon
          sx={{
            minWidth: 0,
            justifyContent: 'center',
          }}
        >
          <img src={props.icon} alt={props.label?.toString()} />
        </ListItemIcon>
        <ListItemText
          primary={props.label}
          sx={{
            opacity: props.isOpen ? 1 : 0,
          }}
        />
      </StyledListItemButton>
    </Link>
  </ListItem>
)

export default SidebarItem
