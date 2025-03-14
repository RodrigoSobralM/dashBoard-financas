import { CustomInputProps } from "@/types";
import { pxToRem } from "@/utils";
import styled from "styled-components";


export const StyledInput = styled.input<CustomInputProps>`
    background-color: ${(props) => props.theme.textInput.active};
    color: ${(props) => props.theme.textInput.activeColor};
    border-radius: ${pxToRem(8)};
    border: ${pxToRem(1)} solid ${(props) => props.theme.textInput.borderColor};
    box-sizing: border-box;
    cursor: pointer;
    height: ${pxToRem(45)};
    font-size: ${pxToRem(14)};
    font-weight: 400;
    padding: ${pxToRem(20)} ${pxToRem(12)};
    transition: background-color 0.3s;
    width: 100%

    &::placeholder {
        color: ${(props) => props.theme.textInput.placeHolder}
    }
`