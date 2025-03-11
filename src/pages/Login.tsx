import { BannerImage } from "@/components"
import { Box, Container, Grid } from "@mui/material"

const Login = () => {
  return (
    <Box>
      <Grid container>
        <Grid item sm={5} sx={{ padding: "20px" }}>
          <BannerImage />
        </Grid>
        <Grid item xs={12} sm={7} sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}>
          <Container maxWidth="sm">
            <h1>LOGIN</h1>
          </Container>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login