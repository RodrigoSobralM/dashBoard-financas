import { CustomBorderProps } from '@/types'
import { pxToRem } from '@/utils'
import styled from 'styled-components'

export const StyledBorder = styled.div<CustomBorderProps>`
  background-color: ${(props) => props.backgroundColor || '#201F24'};
  border-radius: ${(props) => pxToRem(props.borderRadius || 0)};
  width: ${(props) => pxToRem(props.width || 0)};
  height: ${(props) => pxToRem(props.heigth || 0)};
`
