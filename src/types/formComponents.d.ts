export interface CustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  helperText?: string
  iconInputs?: {
    iconImage?: string
    iconFunction?: () => void
  }
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export interface FormComponentsProps {
  inputs: CustomInputProps[]
  buttons: ButtonProps[]
}
