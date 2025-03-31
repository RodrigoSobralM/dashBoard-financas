import { pxToRem } from '@/utils'
import styled from 'styled-components'

export const BannerImage = styled.div`
  background-color: #201f24;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(/illustration-authentication.svg);
  background-repeat: no-repeat;
  backgorund-size: cover;
  width: ${pxToRem(560)};
  height: 100vh;
  border-radius: 12px;
`
