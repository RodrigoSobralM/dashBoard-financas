import { Sidebar } from '@/components'
import { Box, Grid2 } from '@mui/material'

const Home = () => {
  return (
    <Box>
      <Grid2 container>
        <Grid2 size={3}>
          <Sidebar />
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default Home
