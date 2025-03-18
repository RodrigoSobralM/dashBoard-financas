import { pxToRem } from "@/utils";
import styled from "styled-components";


export const LogoLarge = styled.figure<{ height: number; width: number }>`
  background-image: url(${(props) => props.theme.appLogoLarge});
  height: ${(props) => pxToRem(props.height)};
  width: ${(props) => pxToRem(props.width)};
  margin: 0;
`;


export const LogoSmall = styled.figure<{height: number, width: number}>`
    background-image: url(/${(props) => props.theme.appLogoSmall});
    background-size: cover;
    height: ${(props) => pxToRem(props.height)};
    width: ${(props) => pxToRem(props.width)};
`