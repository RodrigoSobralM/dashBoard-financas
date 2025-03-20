import * as React from 'react'
import { useLocation } from 'react-router'
import { styled, Theme, CSSObject } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { pxToRem } from '@/utils'
import { StyledH3 } from './Typographies'
import { LogoLarge, LogoSmall } from './Logo'
import SidebarItem from './SidebarItem'

const drawerWidth = pxToRem(300)

const getDrawerMixin = (theme: Theme, isOpen: boolean): CSSObject => ({
  width: isOpen ? drawerWidth : pxToRem(88),
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: isOpen
      ? theme.transitions.duration.enteringScreen
      : theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
})

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...getDrawerMixin(theme, open),
  '& .MuiDrawer-paper': getDrawerMixin(theme, open),
}))

const menuItems = [
  {
    label: 'Visão geral',
    path: '/home',
    icon: '/icon-nav-overview.svg',
    alt: 'Visão geral',
  },
  {
    label: 'Transações',
    path: '/transacoes',
    icon: '/icon-nav-transactions.svg',
    alt: 'Transações',
  },
  {
    label: 'Orçamentos',
    path: '/orcamento',
    icon: '/icon-nav-budgets.svg',
    alt: 'Orçamentos',
  },
  {
    label: 'Potes',
    path: '/carteira',
    icon: '/icon-nav-pots.svg',
    alt: 'Potes',
  },
  {
    label: 'Contas recorrentes',
    path: '/conta-corrente',
    icon: '/icon-nav-recurring-bills.svg',
    alt: 'Contas recorrentes',
  },
]

const Sidebar = () => {
  const [open, setOpen] = React.useState(true)
  const location = useLocation() // Hook para obter a localização atual

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        '& .MuiDrawer-paper': {
          backgroundColor: '#201F24',
          color: 'white',
          borderTopRightRadius: pxToRem(12),
          borderBottomRightRadius: pxToRem(12),
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        },
        '& .MuiTypography-root': {
          fontFamily: '"Public Sans", sans-serif',
        },
      }}
    >
      <Box sx={{ px: pxToRem(32), py: pxToRem(40) }}>
        {open ? (
          <LogoLarge height={22} width={122} />
        ) : (
          <LogoSmall height={22} width={12} />
        )}
      </Box>
      {/* Lista de navegação principal */}
      <List sx={{ py: pxToRem(4), flexGrow: 1 }}>
        {menuItems.map((item) => (
          <SidebarItem
            key={item.label}
            label={item.label}
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
          <ListItemButton sx={{ minHeight: pxToRem(48), px: pxToRem(32), gap: pxToRem(16) }} onClick={() => setOpen(!open)}>
            <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', color: '#FFF', mr: open ? pxToRem(3) : 'auto' }}>
              <img
                src="/icon-minimize-menu.svg"
                alt={open ? 'Minimize Menu' : 'Expand Menu'}
                style={open ? {} : { transform: 'rotate(180deg)' }}
              />
            </ListItemIcon>
            {open && <ListItemText primary={<StyledH3 color="#B3B3B3">Minimizar Menu</StyledH3>} />}
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Sidebar
