import { ButtonProps } from "@/types";
import { pxToRem } from "@/utils";
import styled from "styled-components";


export const StyledButton = styled.button<ButtonProps>`
    border-radius: ${pxToRem(8)};
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    font-size: ${pxToRem(14)};
    font-weight: bold;
    height: ${pxToRem(53)};
    padding: ${pxToRem(16)} ${pxToRem(16)};
    transition: background-color 0.3s;
    width: 100%;

    &.login-button {
        margin-top: ${pxToRem(16)}
    }

    &.primary {
        background-color: ${(props) => props.theme.buttons.primary};
        color: ${(props) => props.theme.buttons.primaryColor};
        &:hover {
            background-color: ${(props) => props.theme.buttons.primaryHover};
        }
    }
`