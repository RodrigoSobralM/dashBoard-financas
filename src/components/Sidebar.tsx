import { Box } from '@mui/material'
import { BottomNavigation, DrawerNavigation } from '@/components'

const Sidebar = () => {
  return (
    <>
      <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
        <DrawerNavigation />
      </Box>
      <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
        <BottomNavigation />
      </Box>
    </>
  )
}

export default Sidebar
