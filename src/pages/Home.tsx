import {
  CardComponent,
  SidebarComponent,
  StyledH1,
  StyledP,
} from '@/components'
import { mockData } from '@/mock'
import { currecyConverter, pxToRem } from '@/utils'
import { Box, Container, Grid2 } from '@mui/material'

const Home = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <SidebarComponent />
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          px: { xs: pxToRem(16), sm: pxToRem(40) },
          py: { xs: pxToRem(24), sm: pxToRem(32) },
        }}
      >
        <Grid2 sx={{ mb: pxToRem(32) }}>
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
        </Grid2>
      </Container>
    </Box>
  )
}

export default Home
