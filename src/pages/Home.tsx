import {
  CardComponent,
  SidebarComponent,
  StyledH1,
  StyledH2,
  StyledP,
} from '@/components'
import { mockData } from '@/mock'
import { currecyConverter, pxToRem } from '@/utils'
import { Box, Container, Grid2 } from '@mui/material'

const Home = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <SidebarComponent />
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          px: { xs: pxToRem(16), sm: pxToRem(40) },
          pt: { xs: pxToRem(24), sm: pxToRem(32) },
          height: 'max-content',
          overflow: { xs: 'scroll', lg: 'visible' },
          pb: { xs: pxToRem(76), sm: pxToRem(106), lg: pxToRem(32) },
        }}
      >
        <Grid2 sx={{ mb: pxToRem(42), mt: pxToRem(8) }}>
          <StyledH1>Visão Geral</StyledH1>
        </Grid2>
        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <CardComponent
              className="cardBlack"
              style={{ padding: pxToRem(24) }}
            >
              <StyledP color="white">Saldo Atual</StyledP>
              <StyledH1 color="white">
                {currecyConverter(mockData.balance.current)}
              </StyledH1>
            </CardComponent>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <CardComponent style={{ padding: pxToRem(24) }}>
              <StyledP color="#B3B3B3">Renda</StyledP>
              <StyledH1>{currecyConverter(mockData.balance.income)}</StyledH1>
            </CardComponent>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <CardComponent style={{ padding: pxToRem(24) }}>
              <StyledP color="#B3B3B3">Despesas</StyledP>
              <StyledH1>{currecyConverter(mockData.balance.expenses)}</StyledH1>
            </CardComponent>
          </Grid2>

          <Grid2 container size={{ xs: 12, lg: 12 }} sx={{ pt: pxToRem(8) }}>
            <Grid2
              size={{ xs: 12, lg: 7 }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: pxToRem(24),
              }}
            >
              <Grid2>
                <CardComponent
                  style={{ padding: `${pxToRem(32)} ${pxToRem(32)}` }}
                >
                  <Grid2
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <StyledH2>Carteira</StyledH2>
                    <Grid2
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: pxToRem(12),
                      }}
                    >
                      <StyledP color="#696868">Veja detalhes</StyledP>
                      <img src="/icon-caret-right.svg" alt="" />
                    </Grid2>
                  </Grid2>

                  <Grid2
                    container
                    spacing={2.5}
                    sx={{ alignItems: 'center', pt: pxToRem(20) }}
                  >
                    <Grid2 size={{ xs: 12, md: 6 }}>
                      <CardComponent
                        className="cardBeige"
                        style={{ height: pxToRem(110) }}
                      ></CardComponent>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                      <CardComponent
                        className="cardBeige"
                        style={{ height: pxToRem(102) }}
                      ></CardComponent>
                    </Grid2>
                  </Grid2>
                </CardComponent>
              </Grid2>
              <Grid2>
                <CardComponent style={{ height: pxToRem(519) }}></CardComponent>
              </Grid2>
            </Grid2>

            <Grid2
              size={{ xs: 12, lg: 5 }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: pxToRem(24),
              }}
            >
              <Grid2>
                <CardComponent style={{ height: pxToRem(410) }}></CardComponent>
              </Grid2>
              <Grid2>
                <CardComponent style={{ height: pxToRem(327) }}></CardComponent>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  )
}

export default Home
