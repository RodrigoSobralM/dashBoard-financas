import { CardComponent, ListItemHomeCardTransactions, SidebarComponent, StyledH1, StyledH4, StyledSpan, TableComponent } from '@/components'
import { mockData } from '@/mock'
import { currecyConverter, dataFormatted, pxToRem } from '@/utils'
import { Box, Container, Grid2, List } from '@mui/material'

const Transactions = () => {
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
          <StyledH1>Transações</StyledH1>
        </Grid2>
        <Grid2 container>
          <Grid2 size={12}>
            <CardComponent
              style={{ padding: pxToRem(32) }}
            >
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <TableComponent />
              </Box>
              <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <List disablePadding>
                  {mockData.transactions
                    .slice(0, 10)
                    .map((item, index, array) => (
                      <ListItemHomeCardTransactions
                        key={index}
                        img={item.avatar}
                        name={<StyledH4>{item.name}</StyledH4>}
                        value={
                          item.amount < 0 ? (
                            <StyledH4>{currecyConverter(item.amount)}</StyledH4>
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
                        categoria={item.category}
                        isLast={index === array.length - 1}
                      />
                    ))}
                </List>
              </Box>
            </CardComponent>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  )
}

export default Transactions
