import { Box } from '@mui/material'
import { BottomNavigationComponent, DrawerNavigationComponent } from '@/components'

const SidebarComponent = () => {
  return (
    <>
      <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
        <DrawerNavigationComponent />
      </Box>
      <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
        <BottomNavigationComponent />
      </Box>
    </>
  )
}

export default SidebarComponent
