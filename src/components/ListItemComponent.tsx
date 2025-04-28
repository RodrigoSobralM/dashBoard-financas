import {
  Avatar,
  Box,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { Link } from 'react-router'
import StyledListItemButton from './StyledListItemButton'
import { pxToRem } from '@/utils'
import { ListItemAvatarProps, ListItemProps } from '@/types'

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

const ListItemHomeCardTransactions = (props: ListItemAvatarProps) => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemAvatar
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pt: pxToRem(20),
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: pxToRem(16) }}>
            <Avatar alt="" src={props.img} />
            <ListItemText primary={props.name} />
          </Box>
          <Box>
            <ListItemText primary={props.value} secondary={props.date} sx={{textAlign: 'right'}} />
          </Box>
        </ListItemAvatar>
      </ListItem>
      {!props.isLast && <Divider sx={{pb: pxToRem(20)}} />}
    </>
  )
}

export { ListItemSidebarComponent, ListItemHomeCardTransactions }
