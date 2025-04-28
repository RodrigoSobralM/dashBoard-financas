import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Link } from 'react-router'
import StyledListItemButton from './StyledListItemButton'
import { pxToRem } from '@/utils'
import { ListItemProps } from '@/types'

const ListItemSidebarComponent = (props: ListItemProps) => (
  <ListItem
    disablePadding
    sx={{
      width: { xs: pxToRem(68.6), sm: '100%' },
      justifyContent: { xs: 'center', sm: 'center', lg: 'flex-start' },
    }}
  >
    <Link to={props.path ?? '#'} style={{ textDecoration: 'none' }}>
      <StyledListItemButton
        className={props.classname}
        isActive={props.isActive}
        isOpen={props.isOpen}
      >
        <ListItemIcon>
          <img src={props.icon} alt={props.label?.toString()} />
        </ListItemIcon>
        <ListItemText primary={props.label} />
      </StyledListItemButton>
    </Link>
  </ListItem>
)

const ListItemHomeCardTransactions = () => {
  
}

export { ListItemSidebarComponent, ListItemHomeCardTransactions }
