import {
  CardComponent,
  CustomChart,
  ListItemHomeCardTransactions,
  SidebarComponent,
  StyledBorder,
  StyledH1,
  StyledH2,
  StyledH4,
  StyledP,
  StyledSpan,
} from '@/components'
import { mockData } from '@/mock'
import { currecyConverter, dataFormatted, pxToRem } from '@/utils'
import { Box, Container, Grid2, List } from '@mui/material'

const Home = () => {
  const potsSumTotal = mockData.pots.reduce((sum, pot) => sum + pot.total, 0)
  const budlimitTotal = mockData.budgets.reduce(
    (sum, budgets) => sum + budgets.maximum,
    0
  )

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

          {/* Card da Carteira */}
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
                <CardComponent style={{ padding: pxToRem(32) }}>
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
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                      <CardComponent
                        className="cardBeige"
                        style={{
                          height: pxToRem(110),
                          display: 'flex',
                          alignItems: 'center',
                          gap: pxToRem(22.56),
                          paddingLeft: pxToRem(22.56),
                        }}
                      >
                        <Box>
                          <img src="/icon-pot.svg" alt="" />
                        </Box>
                        <Box>
                          <StyledP color="#696868">Total Economizado</StyledP>
                          <StyledH1>{currecyConverter(potsSumTotal)}</StyledH1>
                        </Box>
                      </CardComponent>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                      <CardComponent className="cardPotsRecents">
                        {mockData.pots.slice(0, 4).map((item, index) => (
                          <Box
                            sx={{
                              display: 'flex',
                              gap: pxToRem(16),
                              width: {
                                xs: pxToRem(143.5),
                                sm: pxToRem(170.5),
                                lg: pxToRem(130.5),
                              },
                            }}
                            key={index}
                          >
                            <StyledBorder
                              width={4}
                              heigth={43}
                              borderRadius={8}
                              backgroundColor={item.theme}
                            />
                            <Box>
                              <Box>
                                <StyledSpan color="#696868">
                                  {item.name}
                                </StyledSpan>
                              </Box>
                              <Box>
                                <StyledH4>
                                  {currecyConverter(item.total)}
                                </StyledH4>
                              </Box>
                            </Box>
                          </Box>
                        ))}
                      </CardComponent>
                    </Grid2>
                  </Grid2>
                </CardComponent>
              </Grid2>

              {/* Card das Trasanções */}
              <Grid2>
                <CardComponent
                  style={{ padding: pxToRem(32) }}
                >
                  <Grid2
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      pb: pxToRem(12)
                    }}
                  >
                    <StyledH2>Transações</StyledH2>
                    <Grid2
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: pxToRem(12),
                      }}
                    >
                      <StyledP color="#696868">Ver tudo</StyledP>
                      <img src="/icon-caret-right.svg" alt="" />
                    </Grid2>
                  </Grid2>
                  <List disablePadding>
                    {mockData.transactions
                      .slice(0, 5)
                      .map((item, index, array) => (
                        <ListItemHomeCardTransactions
                          key={index}
                          img={item.avatar}
                          name={<StyledH4>{item.name}</StyledH4>}
                          value={
                            item.amount < 0 ? (
                              <StyledH4>
                                {currecyConverter(item.amount)}
                              </StyledH4>
                            ) : (
                              <StyledH4 color="#277C78">
                                +{currecyConverter(item.amount)}
                              </StyledH4>
                            )
                          }
                          date={
                            <StyledSpan color="#696868">
                              {dataFormatted(new Date(item.date))}
                            </StyledSpan>
                          }
                          isLast={index === array.length - 1}
                        />
                      ))}
                  </List>
                </CardComponent>
              </Grid2>
            </Grid2>

            {/* Card de Orçamentos */}
            <Grid2
              size={{ xs: 12, lg: 5 }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: pxToRem(24),
              }}
            >
              <Grid2>
                <CardComponent
                  style={{ padding: pxToRem(32) }}
                >
                  <Grid2
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <StyledH2>Orçamentos</StyledH2>
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
                    spacing={2}
                    sx={{
                      alignItems: 'center',
                      pt: { sm: pxToRem(51), xs: pxToRem(28) },
                      gap: pxToRem(16),
                    }}
                  >
                    <Grid2
                      size={{ xs: 12, sm: 8.2 }}
                      sx={{ display: 'flex', justifyContent: 'center' }}
                    >
                      <Box sx={{ height: pxToRem(240), width: pxToRem(240) }}>
                        <CustomChart
                          labels={mockData.budgets.map(
                            (category) => category.category
                          )}
                          data={mockData.budgets.map(
                            (maximum) => maximum.maximum
                          )}
                          backgroundColor={mockData.budgets.map(
                            (theme) => theme.theme
                          )}
                          centerTextMain={currecyConverter(375)}
                          centerTextSub={`de ${currecyConverter(budlimitTotal)}`}
                          type="doughnut"
                        />
                      </Box>
                    </Grid2>
                    <Grid2
                      size={{ xs: 12, sm: 3.8 }}
                      sx={{
                        display: { sm: 'flex', xs: 'grid' },
                        flexDirection: 'column',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: pxToRem(16),
                        alignItems: { sm: 'end' },
                      }}
                    >
                      {mockData.budgets.slice(0, 4).map((item, index) => (
                        <Box
                          sx={{
                            width: pxToRem(101),
                            display: 'flex',
                            gap: pxToRem(16),
                          }}
                          key={index}
                        >
                          <StyledBorder
                            width={4}
                            heigth={43}
                            borderRadius={8}
                            backgroundColor={item.theme}
                          />
                          <Box>
                            <Box>
                              <StyledSpan color="#696868">
                                {item.category}
                              </StyledSpan>
                            </Box>
                            <Box>
                              <StyledH4>
                                {currecyConverter(item.maximum)}
                              </StyledH4>
                            </Box>
                          </Box>
                        </Box>
                      ))}
                    </Grid2>
                  </Grid2>
                </CardComponent>
              </Grid2>

              {/* Card de Contas recorrentes */}
              <Grid2>
                <CardComponent
                  style={{ padding: pxToRem(32) }}
                >
                  <Grid2
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <StyledH2>Contas Recorrentes</StyledH2>
                    <Grid2
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: pxToRem(12),
                      }}
                    >
                      <StyledP color="#696868" style={{ whiteSpace: 'nowrap'}}>Veja Detalhes</StyledP>
                      <img src="/icon-caret-right.svg" alt="" />
                    </Grid2>
                  </Grid2>

                  <Grid2
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: pxToRem(12),
                      pt: pxToRem(32),
                    }}
                  >
                    <CardComponent
                      className="cardBeige cardRecurringBills"
                      style={{ borderLeft: `${pxToRem(4)} solid #277C78` }}
                    >
                      <StyledP color="#696868">Contas Pagas</StyledP>
                      <StyledH4>{currecyConverter(190)}</StyledH4>
                    </CardComponent>
                    <CardComponent
                      className="cardBeige cardRecurringBills"
                      style={{
                        width: '100%',
                        height: pxToRem(61),
                        borderLeft: `${pxToRem(4)} solid #F2CDAC`,
                      }}
                    >
                      <StyledP color="#696868">Total a Vencer</StyledP>
                      <StyledH4>{currecyConverter(194.98)}</StyledH4>
                    </CardComponent>
                    <CardComponent
                      className="cardBeige cardRecurringBills"
                      style={{
                        width: '100%',
                        height: pxToRem(61),
                        borderLeft: `${pxToRem(4)} solid #82C9D7`,
                      }}
                    >
                      <StyledP color="#696868">Vencimento Proximo</StyledP>
                      <StyledH4>{currecyConverter(59.98)}</StyledH4>
                    </CardComponent>
                  </Grid2>
                </CardComponent>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  )
}

export default Home
