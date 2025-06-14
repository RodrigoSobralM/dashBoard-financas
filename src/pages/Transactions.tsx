import {
  CardComponent,
  FormComponent,
  ListItemHomeCardTransactions,
  SidebarComponent,
  StyledH1,
  StyledH4,
  StyledP,
  StyledSpan,
  TableComponent,
} from '@/components'
import { mockData } from '@/mock'
import { currecyConverter, dataFormatted, pxToRem } from '@/utils'
import {
  Box,
  Container,
  Grid2,
  List,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { useState } from 'react'

const Transactions = () => {
  const [age, setAge] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }

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
            <CardComponent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: pxToRem(320) }}>
                  <FormComponent
                    inputs={[
                      {
                        placeholder: 'Buscar Transação',
                        color: '#201F24',
                        iconInputs: {
                          iconImage: '/icon-search.svg',
                        },
                      },
                    ]}
                    buttons={[]}
                  />
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Box>
                    <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      sx={{
                        height: pxToRem(45),
                        width: pxToRem(110),
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#98908D',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#201F24',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#201F24',
                        },
                        borderRadius: pxToRem(8),
                      }}
                    >
                      <MenuItem value="">
                        <StyledP>Latest</StyledP>
                      </MenuItem>
                      <MenuItem value={10}>
                        <StyledP>Ten</StyledP>
                      </MenuItem>
                      <MenuItem value={20}>
                        <StyledP>Twenty</StyledP>
                      </MenuItem>
                      <MenuItem value={30}>
                        <StyledP>Thirty</StyledP>
                      </MenuItem>
                    </Select>
                  </Box>
                  <Box>
                    <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      sx={{
                        height: pxToRem(45),
                        width: pxToRem(177),
                        borderRadius: pxToRem(8),
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  padding: pxToRem(32),
                }}
              >
                <TableComponent />
              </Box>

              {/* Responsividade no mobile */}
              <Box
                sx={{
                  display: { xs: 'block', sm: 'none' },
                  px: pxToRem(20),
                  py: pxToRem(24),
                }}
              >
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
