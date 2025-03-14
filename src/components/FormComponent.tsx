import { FormComponentsProps } from "@/types/formComponents";
import { pxToRem } from "@/utils";
import styled from "styled-components";
import { StyledInput } from "./StyledInput";
import { StyledButton } from "./StyledButton";
import { StyledLabel } from "./Typographies";


export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: ${pxToRem(16)}
`

const FormComponent = (props: FormComponentsProps) => {
    const {inputs, buttons, message} = props
    return(
        <>
            <StyledForm action="" >
                {inputs.map((inputProps, index) => (
                    <div key={index} style={{display: 'flex', flexDirection: 'column'}}>
                        <StyledLabel>{inputProps.label}</StyledLabel>
                        <StyledInput {...inputProps} />
                    </div>
                ))}
                {buttons.map((buttonProps, index) => (
                    <StyledButton key={index} {...buttonProps} />
                ))}
                {message && (
                    <div style={{color: message.type === 'error' ? 'red' : 'green'}}>
                        {message.msg}
                    </div>
                )}
            </StyledForm>
        </>
    )
}

export default FormComponent;