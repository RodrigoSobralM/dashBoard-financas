import { ListItemProps } from '@/types'
import { pxToRem } from '@/utils'
import { ListItemButton, styled } from '@mui/material'

const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'isActive' && prop !== 'isOpen',
})<ListItemProps>(({ isActive, isOpen }) => ({
  '&.style-sidebar-item': {
    padding: `${pxToRem(16)} ${pxToRem(32)}`,
    gap: pxToRem(16),
    width: isOpen ? pxToRem(276) : pxToRem(81),
    borderLeft: isActive ? `${pxToRem(4)} solid #277C78` : 'none',
    background: isActive ? '#F8F4F0' : 'transparent',
    borderRadius: isActive ? `0 ${pxToRem(12)} ${pxToRem(12)} 0` : 'none',
    '& .MuiListItemIcon-root': {
      minWidth: 0,
      justifyContent: 'center',
    },
    '& img': isActive
      ? {
          filter:
            'invert(38%) sepia(40%) saturate(602%) hue-rotate(136deg) brightness(90%) contrast(88%)',
        }
      : 'none',
    '& h3': isActive ? { color: '#201F24' } : { color: '#B3B3B3' },
    '&:hover': {
      borderLeft: `${pxToRem(4)} solid #277C78`,
      background: '#F8F4F0',
      borderRadius: `0 ${pxToRem(12)} ${pxToRem(12)} 0`,
      '& img': {
        filter:
          'invert(38%) sepia(40%) saturate(602%) hue-rotate(136deg) brightness(90%) contrast(88%)',
      },
      '& h3': { color: '#201F24' },
      transition: 'all 0.3s ease-out',
    },
  },

  '@media (max-width: 1200px)': {
    '&.style-sidebar-item': {
      flexDirection: 'column',
      gap: pxToRem(7),
      borderLeft: 'none',
      padding: `${pxToRem(10.25)} 0  0 0`,
      borderBottom: isActive ? `${pxToRem(4)} solid #277C78` : 'none',
      borderRadius: isActive ? `${pxToRem(12)} ${pxToRem(12)} 0  0` : 'none',
      width: pxToRem(104),
      height: pxToRem(64),
      whiteSpace: 'nowrap',
      '& h5': isActive ? { color: '#201F24' } : { color: '#B3B3B3' },
    },
  },

  '@media (max-width: 500px)': {
    '&.style-sidebar-item': {
      width: pxToRem(68.6),
      height: pxToRem(44),
      '& h5': isActive ? { display: 'none' } : { display: 'none' },
    },
  },
}))

export default StyledListItemButton
