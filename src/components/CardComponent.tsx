import { pxToRem } from '@/utils'
import styled from 'styled-components'

export const CardComponent = styled.div`
  background-color: ${(props) => props.theme.card.background};
  border: none;
  width: 100%;
  border-radius: ${pxToRem(12)};
  box-sizing: border-box;
`
