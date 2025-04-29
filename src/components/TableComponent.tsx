import { mockData } from '@/mock'
import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material'
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions'
import React from 'react'
import { StyledH4, StyledSpan } from './Typographies'
import { currecyConverter, dataFormatted, pxToRem } from '@/utils'

const TableComponent = () => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - mockData.transactions.length)
      : 0

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  return (
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
        <TableBody>
          {(rowsPerPage > 0
            ? mockData.transactions.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : mockData.transactions
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell
                component="th"
                scope="row"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: pxToRem(16),
                  minWidth: pxToRem(272),
                }}
              >
                <Avatar src={row.avatar} />
                <StyledH4 style={{ whiteSpace: 'nowrap' }}>{row.name}</StyledH4>
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                <StyledSpan color="#696868">{row.category}</StyledSpan>
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                <StyledSpan color="#696868" style={{ whiteSpace: 'nowrap' }}>
                  {dataFormatted(new Date(row.date))}
                </StyledSpan>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.amount < 0 ? (
                  <StyledH4>{currecyConverter(row.amount)}</StyledH4>
                ) : (
                  <StyledH4 color="#277C78">
                    +{currecyConverter(row.amount)}
                  </StyledH4>
                )}
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={mockData.transactions.length}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}

export default TableComponent
