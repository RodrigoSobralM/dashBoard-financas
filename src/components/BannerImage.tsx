import { pxToRem } from '@/utils'
import styled from 'styled-components'

export const BannerImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(/illustration-authentication.svg);
  background-repeat: no-repeat;
  background-size: ${pxToRem(560)} ${pxToRem(920)};
  background-position: top;
  width: ${pxToRem(560)};
  height: ${pxToRem(920)};
  border-radius: 12px;
`
