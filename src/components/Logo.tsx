import { pxToRem } from '@/utils'
import styled from 'styled-components'

export const LogoLarge = styled.figure<{ height: number; width: number }>`
  margin: 0;
  background-image: url(${(props) => props.theme.appLogoLarge});
  height: ${(props) => pxToRem(props.height)};
  width: ${(props) => pxToRem(props.width)};
`

export const LogoSmall = styled.figure<{ height: number; width: number }>`
  margin: 0;
  background-image: url(/${(props) => props.theme.appLogoSmall});
  height: ${(props) => pxToRem(props.height)};
  width: ${(props) => pxToRem(props.width)};
`
