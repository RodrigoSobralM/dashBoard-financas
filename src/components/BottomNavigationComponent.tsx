import { pxToRem } from '@/utils'
import { Box, List, useMediaQuery, useTheme } from '@mui/material'
import { MenuItemsMock } from '@/mock'
import { StyledH5 } from './Typographies'
import { SidebarItemComponent } from '@/components'

const BottomNavigationComponent = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        backgroundColor: '#201F24',
        height: isMobile ? pxToRem(52) : pxToRem(74),
        borderTopLeftRadius: pxToRem(8),
        borderTopRightRadius: pxToRem(8),
      }}
    >
      <List
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-around',
          paddingTop: {xs: pxToRem(4) , sm: pxToRem(6)}  
        }}
      >
        {MenuItemsMock.map((item) => (
          <SidebarItemComponent
            key={item.label}
            label={<StyledH5>{item.label}</StyledH5>}
            path={item.path}
            icon={item.icon}
            isOpen={true}
            isActive={location.pathname === item.path}
          />
        ))}
      </List>
    </Box>
  )
}

export default BottomNavigationComponent
