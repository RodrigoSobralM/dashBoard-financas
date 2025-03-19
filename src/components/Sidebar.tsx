import * as React from 'react'
import { useLocation } from 'react-router'
import { styled, Theme, CSSObject } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
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
import { Link } from 'react-router'

const drawerWidth = pxToRem(300)

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: pxToRem(88),
  [theme.breakpoints.up('sm')]: {
    width: pxToRem(88),
  },
})

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      },
    },
  ],
}))

const Sidebar = () => {
  const [open, setOpen] = React.useState(true)
  const location = useLocation() // Hook para obter a localização atual

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const menuItems = [
    'Visão geral',
    'Transações',
    'Orçamentos',
    'Potes',
    'Contas recorrentes',
  ]

  const menuIcons = [
    { alt: 'Visão geral', src: '/home.svg' },
    { alt: 'Transações', src: '/icon-nav-transactions.svg' },
    { alt: 'Orçamentos', src: '/icon-nav-budgets.svg' },
    { alt: 'Potes', src: '/icon-nav-pots.svg' },
    { alt: 'Contas recorrentes', src: '/icon-nav-recurring-bills.svg' },
  ]

  const linkItems = [
    '/home',
    '/transacoes',
    '/orcamento',
    '/carteira',
    '/conta-corrente',
  ]

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
      <Divider />

      {/* Lista de navegação principal */}
      <List sx={{ py: pxToRem(4), flexGrow: 1 }}>
        {menuItems.map((text, index) => {
          const isActive = location.pathname === linkItems[index] // Verifique se a rota está ativa
          return (
            <ListItem
              key={text}
              disablePadding
              sx={{ display: 'block', pb: pxToRem(16) }}
            >
              <Link to={linkItems[index]} style={{ textDecoration: 'none' }}>
                <ListItemButton
                  autoFocus={false}
                  sx={{
                    px: pxToRem(32),
                    py: pxToRem(16),
                    gap: pxToRem(16),
                    transition: 'background-color 0.3s ease-in-out',
                    width: open ? pxToRem(276) : pxToRem(81),
                    '&:hover': {
                      borderLeft: `${pxToRem(4)} solid #277C78`,
                      background: '#F8F4F0',
                      borderTopRightRadius: pxToRem(12),
                      borderBottomRightRadius: pxToRem(12),
                      img: {
                        filter:
                          'invert(38%) sepia(40%) saturate(602%) hue-rotate(136deg) brightness(90%) contrast(88%)',
                      },
                      h3: {
                        color: '#201F24',
                      },
                    },
                    ...(isActive && {
                      borderLeft: `${pxToRem(4)} solid #277C78`,
                      background: '#F8F4F0',
                      borderTopRightRadius: pxToRem(12),
                      borderBottomRightRadius: pxToRem(12),
                      img: {
                        filter:
                          'invert(38%) sepia(40%) saturate(602%) hue-rotate(136deg) brightness(90%) contrast(88%)',
                      },
                      h3: {
                        color: '#201F24',
                      },
                    }),
                  }}
                >
                  <ListItemIcon
                    sx={[
                      { minWidth: 0, justifyContent: 'center' },
                      open ? { mr: pxToRem(3) } : { mr: 'auto' },
                    ]}
                  >
                    <img
                      src={menuIcons[index].src}
                      alt={menuIcons[index].alt}
                      style={{ color: '#FFF' }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={<StyledH3 color="#B3B3B3">{text}</StyledH3>}
                    sx={{
                      opacity: open ? 1 : 0,
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          )
        })}
      </List>

      <Divider />

      {/* Lista no final */}
      <List sx={{ pb: pxToRem(58.24) }}>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{ minHeight: pxToRem(48), px: pxToRem(32), gap: pxToRem(16) }}
            onClick={open ? handleDrawerClose : handleDrawerOpen}
          >
            <ListItemIcon
              sx={[
                { minWidth: 0, justifyContent: 'center', color: '#FFF' },
                open ? { mr: pxToRem(3) } : { mr: 'auto' },
              ]}
            >
              {open ? (
                <img
                  src="/icon-minimize-menu.svg"
                  alt="Minimize Menu"
                  style={{ color: '#FFF' }}
                />
              ) : (
                <img
                  src="/icon-minimize-menu.svg"
                  style={{ transform: 'rotate(180deg)' }}
                  alt="Expand Menu"
                />
              )}
            </ListItemIcon>
            <ListItemText
              primary={<StyledH3 color="#B3B3B3">Minimizar Menu</StyledH3>}
              sx={[open ? { opacity: 1 } : { opacity: 0 }]}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Sidebar
