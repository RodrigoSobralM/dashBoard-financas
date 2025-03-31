import { FormComponentsProps } from '@/types/formComponents'
import { pxToRem } from '@/utils'
import styled from 'styled-components'
import { StyledInput } from './StyledInput'
import { StyledButton } from './StyledButton'
import { StyledLabel, StyledSpan } from './Typographies'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: ${pxToRem(16)};
`

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const Icons = styled.div`
  position: absolute;
  right: ${pxToRem(12)};
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`

const FormComponent = (props: FormComponentsProps) => {
  const { inputs, buttons } = props
  return (
    <>
      <StyledForm action="">
        {inputs.map((inputProps, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
            <StyledLabel>{inputProps.label}</StyledLabel>
            <InputWrapper>
              <StyledInput {...inputProps} />
              {inputProps.iconInputs && (
                <Icons onClick={inputProps.iconInputs.iconFunction}>
                  <img src={inputProps.iconInputs.iconImage} alt="" />
                </Icons>
              )}
            </InputWrapper>
            <StyledSpan
              color="#696868"
              style={{ textAlign: 'right', marginTop: pxToRem(4) }}
            >
              {inputProps.helperText}
            </StyledSpan>
          </div>
        ))}
        {buttons.map((buttonProps, index) => (
          <StyledButton key={index} {...buttonProps} />
        ))}
      </StyledForm>
    </>
  )
}

export default FormComponent
