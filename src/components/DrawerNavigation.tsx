import { pxToRem } from '@/utils'
import { LogoLarge, LogoSmall, SidebarItem, StyledDrawer, StyledH3 } from '.'
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { useState } from 'react'
import { useLocation } from 'react-router'
import { MenuItemsMock } from '@/mock'

const DrawerNavigation = () => {
  const [open, setOpen] = useState(true)
  const location = useLocation()
  return (
    <StyledDrawer variant="permanent" open={open}>
      <Box sx={{ px: pxToRem(32), py: pxToRem(40) }}>
        {open ? (
          <LogoLarge height={22} width={122} />
        ) : (
          <LogoSmall height={22} width={12} />
        )}
      </Box>
      {/* Lista de navegação principal */}
      <List
        sx={{
          py: pxToRem(4),
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: pxToRem(4),
        }}
      >
        {MenuItemsMock.map((item) => (
          <SidebarItem
            key={item.label}
            label={<StyledH3>{item.label}</StyledH3>}
            path={item.path}
            icon={item.icon}
            isOpen={open}
            isActive={location.pathname === item.path}
          />
        ))}
      </List>
      {/* Lista no final */}
      <List sx={{ pb: pxToRem(58.24) }}>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{ minHeight: pxToRem(48), px: pxToRem(32), gap: pxToRem(16) }}
            onClick={() => setOpen(!open)}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                justifyContent: 'center',
                color: '#FFF',
                mr: open ? pxToRem(3) : 'auto',
              }}
            >
              <img
                src="/icon-minimize-menu.svg"
                alt={open ? 'Minimize Menu' : 'Expand Menu'}
                style={open ? {} : { transform: 'rotate(180deg)' }}
              />
            </ListItemIcon>
            {open && (
              <ListItemText
                primary={<StyledH3 color="#B3B3B3">Minimizar Menu</StyledH3>}
              />
            )}
          </ListItemButton>
        </ListItem>
      </List>
    </StyledDrawer>
  )
}

export default DrawerNavigation
