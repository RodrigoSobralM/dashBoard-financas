import {
  BannerImage,
  CardComponent,
  FormComponent,
  LogoLarge,
  StyledH1,
  StyledH4,
  StyledP,
} from '@/components'
import { pxToRem } from '@/utils'
import { Box, Container, Grid2 } from '@mui/material'
import { Link } from 'react-router'

const Registration = () => {
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
          }}
        >
          <Container maxWidth="sm">
            <CardComponent style={{ padding: `${pxToRem(0)} ${pxToRem(32)}` }}>
              <Box sx={{ padding: `${pxToRem(32)} ${pxToRem(0)}` }}>
                <StyledH1>Sign Up</StyledH1>
              </Box>
              <FormComponent
                inputs={[
                  {
                    type: 'text',
                    placeholder: 'Digite seu nome',
                    label: 'Nome',
                  },
                  {
                    type: 'email',
                    placeholder: 'Digite seu email',
                    label: 'Email',
                  },
                  {
                    type: 'password',
                    placeholder: 'Digite sua senha',
                    label: 'Criar senha',
                    iconinputs: {
                      iconImage: '/icon-show-password.svg',
                    },
                    helperText: 'As senhas devem ter pelo menos 8 caracteres',
                  },
                ]}
                buttons={[
                  {
                    className: 'primary login-button',
                    type: 'submit',
                    children: 'Criar Conta',
                  },
                ]}
              />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: `${pxToRem(8)}`,
                  padding: `${pxToRem(32)} ${pxToRem(0)}`,
                }}
              >
                <StyledP color="#696868">Já tem uma conta?</StyledP>
                <Link
                  style={{
                    textDecorationColor: '#201F24',
                    textUnderlineOffset: `${pxToRem(3)}`,
                  }}
                  to={'/'}
                >
                  <StyledH4>Login</StyledH4>
                </Link>
              </Box>
            </CardComponent>
          </Container>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default Registration
