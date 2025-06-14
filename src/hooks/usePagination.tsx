import { styled, Button, Box } from '@mui/material'
import { StyledP } from '@/components'
import { pxToRem } from '@/utils'
import usePagination from '@mui/material/usePagination/usePagination'

interface UsePaginationProps {
  currentPage: number
  totalPages: number
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void
}

const List = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  justifyContent: 'space-between',
  gap: '8px',
  alignItems: 'center',
})

const PageButton = styled(Button)<{ selected?: boolean }>(({ selected }) => ({
  width: pxToRem(40),
  height: pxToRem(40),
  borderRadius: pxToRem(8),
  border: `${pxToRem(1)} solid #98908B`,
  fontWeight: 500,
  backgroundColor: selected ? '#201F24' : '#fff',
  textTransform: 'none',
  color: selected ? '#FFF' : '#201F24',
  minWidth: 0,

  '&.btnPrevNext': {
    width: pxToRem(94),
    height: pxToRem(40),
  },

  '&:hover': {
    backgroundColor: selected ? '' : '#98908B',

    '& img, p': {
      filter: 'brightness(0) invert(1)',
      color: selected ? '' : '#FFF',
    },
  },
}))

const UsePagination = ({
  currentPage,
  totalPages,
  onChange,
}: UsePaginationProps) => {
  const { items } = usePagination({
    count: totalPages,
    page: currentPage,
    onChange,
  })

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            return <li key={index}>…</li>
          }

          let children = null
          if (type === 'previous') {
            children = (
              <PageButton
                className="btnPrevNext"
                {...item}
                startIcon={<img src="/icon-caret-left.svg" alt="Previous" />}
              >
                <StyledP color={selected ? '#FFF' : '#201F24'}>Prev</StyledP>
              </PageButton>
            )
          } else if (type === 'next') {
            children = (
              <PageButton
                className="btnPrevNext"
                {...item}
                endIcon={<img src="/icon-caret-right.svg" alt="Next" />}
              >
                <StyledP color={selected ? '#FFF' : '#201F24'}>Next</StyledP>
              </PageButton>
            )
          } else {
            children = (
              <PageButton className="btnList" {...item} selected={selected}>
                <StyledP color={selected ? '#FFF' : '#201F24'}>{page}</StyledP>
              </PageButton>
            )
          }

          return (
            <Box sx={{height: pxToRem(64), display: 'flex', alignItems: 'end'}}>
              <li key={index}>{children}</li>
            </Box>
          )
        })}
      </List>
    </nav>
  )
}

export default UsePagination
