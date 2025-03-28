import { pxToRem } from '@/utils'
import { CSSObject, styled, Theme } from '@mui/material'
import MuiDrawer from '@mui/material/Drawer'

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
  backgroundColor: '#201F24',
  borderTopRightRadius: pxToRem(12),
  borderBottomRightRadius: pxToRem(12),
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  '& .MuiTypography-root': {
    fontFamily: '"Public Sans", sans-serif',
  },
})

const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...getDrawerMixin(theme, open),
  '& .MuiDrawer-paper': getDrawerMixin(theme, open),
}))

export default StyledDrawer
