import styled from "styled-components";
import { TypographiesProps } from "@/types";
import { pxToRem } from "@/utils";

export const StyledH1 = styled.h1<TypographiesProps>`
    color: ${(props) => props.color || '#201F24'};
    font-size: ${(props) => pxToRem(props.size || 32)};
    font-weight: ${(props) => props.weight || 700};
    letter-spacing: ${pxToRem(0)};
    line-height: ${(props) => pxToRem(props.lineheight || 120)};
`
export const StyledH2 = styled.h2<TypographiesProps>`
    color: ${(props) => props.color || '#201F24'};
    font-size: ${(props) => pxToRem(props.size || 20)};
    font-weight: ${(props) => props.weight || 700};
    letter-spacing: ${pxToRem(0)};
    line-height: ${(props) => props.lineheight || 120};
`

export const StyledH3 = styled.h3<TypographiesProps>`
    color: ${(props) => props.color || '#201F24'};
    font-size: ${(props) => pxToRem(props.size || 16)};
    font-weight: ${(props) => props.weight || 700};
    letter-spacing: ${pxToRem(0)};
    line-height: ${(props) => pxToRem(props.lineheight || 150)};

`
export const StyledH4 = styled.h4<TypographiesProps>`
    color: ${(props) => props.color || '#201F24'};
    font-size: ${(props) => pxToRem(props.size || 14)};
    font-weight: ${(props) => props.weight || 700};
    letter-spacing: ${pxToRem(0)};
    line-height: ${(props) => pxToRem(props.lineheight || 150)};
`

export const StyledH5 = styled.h5<TypographiesProps>`
    color: ${(props) => props.color || '#201F24'};
    font-size: ${(props) => pxToRem(props.size || 12)};
    font-weight: ${(props) => props.weight || 700};
    letter-spacing: ${pxToRem(0)};
    line-height: ${(props) => pxToRem(props.lineheight || 150)};
`

export const StyledP = styled.p<TypographiesProps>`
    color: ${(props) => props.color || '#201F24'};
    font-size: ${(props) => pxToRem(props.size || 14)};
    font-weight: ${(props) => props.weight || 400};
    letter-spacing: ${pxToRem(0)};
    line-height: ${(props) => pxToRem(props.lineheight || 150)};
`

export const StyledSpan = styled.span<TypographiesProps>`
    color: ${(props) => props.color || '#201F24'};
    font-size: ${(props) => pxToRem(props.size || 12)};
    font-weight: ${(props) => props.weight || 400};
    letter-spacing: ${pxToRem(0)};
    line-height: ${(props) => pxToRem(props.lineheight || 150)};
`

export const StyledLabel = styled.label<TypographiesProps>`
    color: ${(props) => props.color || '#696868'};
    font-size: ${(props) => pxToRem(props.size || 12)};
    font-weight: ${(props) => props.weight || 700};
    letter-spacing: ${pxToRem(0)};
    margin-bottom: ${pxToRem(4)}
`