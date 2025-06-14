import { useState, useMemo } from 'react'
import { mockData } from '@/mock'
import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { StyledH4, StyledSpan } from './Typographies'
import { currecyConverter, dataFormatted, pxToRem } from '@/utils'
import UsePagination from '@/hooks/usePagination'

const TableComponent = () => {
  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(mockData.transactions.length / itemsPerPage)

  const currentData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return mockData.transactions.slice(start, start + itemsPerPage)
  }, [currentPage])

  return (
    <>
      <TableContainer>
        <Table
          sx={{
            minWidth: 500,
            '& td, & th': {
              borderColor: '#F2F2F2',
            },
          }}
          aria-label="custom pagination table"
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <StyledSpan color="#696868">Recebidos / gastos</StyledSpan>
              </TableCell>
              <TableCell align="left">
                <StyledSpan color="#696868">Categoria</StyledSpan>
              </TableCell>
              <TableCell align="left">
                <StyledSpan color="#696868">Data Transação</StyledSpan>
              </TableCell>
              <TableCell align="right">
                <StyledSpan color="#696868">Quantia</StyledSpan>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              height: pxToRem(696),
            }}
          >
            {currentData.map((row, index) => {
              const isLastItem = index === currentData.length - 1
              return (
                <TableRow key={index}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: pxToRem(16),
                      minWidth: pxToRem(272),
                      borderBottom: isLastItem ? 'none' : '1px solid #F2F2F2', // Remove a borda no último item
                    }}
                  >
                    <Avatar src={row.avatar} />
                    <StyledH4 style={{ whiteSpace: 'nowrap' }}>
                      {row.name}
                    </StyledH4>
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: isLastItem ? 'none' : '1px solid #F2F2F2',
                    }}
                    style={{ width: 160 }}
                    align="left"
                  >
                    <StyledSpan color="#696868">{row.category}</StyledSpan>
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: isLastItem ? 'none' : '1px solid #F2F2F2',
                    }}
                    style={{ width: 160 }}
                    align="left"
                  >
                    <StyledSpan
                      color="#696868"
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {dataFormatted(new Date(row.date))}
                    </StyledSpan>
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: isLastItem ? 'none' : '1px solid #F2F2F2',
                    }}
                    style={{ width: 160 }}
                    align="right"
                  >
                    {row.amount < 0 ? (
                      <StyledH4>{currecyConverter(row.amount)}</StyledH4>
                    ) : (
                      <StyledH4 color="#277C78">
                        +{currecyConverter(row.amount)}
                      </StyledH4>
                    )}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={2}>
        <UsePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChange={(_, page) => setCurrentPage(page)}
        />
      </Box>
    </>
  )
}

export default TableComponent
