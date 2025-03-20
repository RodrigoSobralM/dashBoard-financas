import { pxToRem } from '@/utils'
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { Link } from 'react-router'
import { StyledH3 } from './Typographies'

const SidebarItem = (props: SidebarItemProps) => (
  <ListItem disablePadding sx={{ display: 'block', pb: pxToRem(16) }}>
    <Link to={props.path} style={{ textDecoration: 'none' }}>
      <ListItemButton
        sx={{
          px: pxToRem(32),
          py: pxToRem(16),
          gap: pxToRem(16),
          transition: 'background-color 0.3s ease-in-out',
          width: props.isOpen ? pxToRem(276) : pxToRem(81),
          borderLeft: props.isActive ? `${pxToRem(4)} solid #277C78` : 'none',
          background: props.isActive ? '#F8F4F0' : 'transparent',
          borderRadius: props.isActive
            ? `0 ${pxToRem(12)} ${pxToRem(12)} 0`
            : 'none',
          img: props.isActive
            ? {
                filter:
                  'invert(38%) sepia(40%) saturate(602%) hue-rotate(136deg) brightness(90%) contrast(88%)',
              }
            : 'none',
          h3: props.isActive ? { color: '#201F24' } : { color: '#B3B3B3' },
          '&:hover': {
            borderLeft: `${pxToRem(4)} solid #277C78`,
            background: '#F8F4F0',
            borderRadius: `0 ${pxToRem(12)} ${pxToRem(12)} 0`,
            img: {
              filter:
                'invert(38%) sepia(40%) saturate(602%) hue-rotate(136deg) brightness(90%) contrast(88%)',
            },
            h3: { color: '#201F24' },
          },
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            justifyContent: 'center',
            mr: props.isOpen ? pxToRem(3) : 'auto',
          }}
        >
          <img src={props.icon} alt={props.label} />
        </ListItemIcon>
        <ListItemText
          primary={<StyledH3 color="#B3B3B3">{props.label}</StyledH3>}
          sx={{
            opacity: props.isOpen ? 1 : 0,
          }}
        />
      </ListItemButton>
    </Link>
  </ListItem>
)

export default SidebarItem
