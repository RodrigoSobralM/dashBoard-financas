import { BannerImage } from '@/components'
import { Box, Container, Grid } from '@mui/material'
import { pxToRem } from '@/utils'
import { StyledH1, FormComponent } from '@/components'

const Login = () => {
  return (
    <Box>
      <Grid container>
        <Grid item sm={5} sx={{ padding: pxToRem(20) }}>
          <BannerImage />
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}
        >
          <Container maxWidth="sm">
            <Box>
              <StyledH1>Login</StyledH1>
            </Box>
            <FormComponent 
              inputs={[
                {type: 'email', placeholder: 'Digite seu email', label: 'Email'},
                {type: 'password', placeholder: 'Digite sua senha', label: 'Senha'},
              ]}
              buttons={[
                {
                  className: 'primary login-button',
                  type: 'submit',
                  children: 'Login',
                },
              ]}
              message={{
                msg: 'Sucesso!!',
                type: 'success',
              }}
            />
          </Container>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login
