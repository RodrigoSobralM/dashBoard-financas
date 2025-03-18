import {
  BannerImage,
  CardComponent,
  LogoLarge,
  StyledH4,
  StyledP,
} from '@/components'
import { Box, Container, Grid2 } from '@mui/material'
import { pxToRem } from '@/utils'
import { StyledH1, FormComponent } from '@/components'
import { Link } from 'react-router'

const Login = () => {
  return (
    <Box>
      <Grid2
        container
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid2
          size={{ xs: 12 }}
          sx={{
            backgroundColor: '#201F24',
            display: { xs: 'block', lg: 'none' },
            borderEndStartRadius: `${pxToRem(8)}`,
            borderEndEndRadius: `${pxToRem(8)}`,
          }}
        >
          <Box
            sx={{
              padding: `${pxToRem(24)}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <LogoLarge height={22} width={122} />
          </Box>
        </Grid2>
        <Grid2
          size={{ sm: 4.2 }}
          sx={{
            padding: `${pxToRem(20)}`,
            display: { xs: 'none', lg: 'block' },
          }}
        >
          <BannerImage>
            <Box sx={{ padding: `${pxToRem(40)}` }}>
              <LogoLarge height={22} width={122} />
            </Box>
            <Box sx={{ width: `${pxToRem(480)}`, padding: `${pxToRem(40)}` }}>
              <StyledH1
                color="#FFF"
                style={{ paddingBottom: `${pxToRem(15)}` }}
              >
                Mantenha o controle do seu dinheiro e economize para o seu
                futuro
              </StyledH1>
              <StyledP color="#FFF">
                O aplicativo de finanças pessoais coloca você no controle de
                seus gastos. Acompanhe transações, defina orçamentos e adicione
                aos potes de poupança facilmente.
              </StyledP>
            </Box>
          </BannerImage>
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 7.8 }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            padding: `${pxToRem(16)}`,
          }}
        >
          <Container maxWidth="sm" disableGutters>
            <CardComponent style={{ padding: `${pxToRem(32)}` }}>
              <Box sx={{ marginBottom: `${pxToRem(32)}` }}>
                <StyledH1>Login</StyledH1>
              </Box>
              <FormComponent
                inputs={[
                  {
                    type: 'email',
                    placeholder: 'Digite seu email',
                    label: 'Email',
                  },
                  {
                    type: 'password',
                    placeholder: 'Digite sua senha',
                    label: 'Senha',
                    iconinputs: {
                      iconImage: '/icon-show-password.svg',
                    },
                  },
                ]}
                buttons={[
                  {
                    className: 'primary login-button',
                    type: 'submit',
                    children: 'Login',
                  },
                ]}
              />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: `${pxToRem(8)}`,
                  marginTop: `${pxToRem(32)}`,
                }}
              >
                <StyledP color="#696868">Precisa criar uma conta?</StyledP>
                <Link
                  style={{
                    textDecorationColor: '#201F24',
                    textUnderlineOffset: `${pxToRem(3)}`,
                  }}
                  to={'/cadastro'}
                >
                  <StyledH4>Sign Up</StyledH4>
                </Link>
              </Box>
            </CardComponent>
          </Container>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default Login
