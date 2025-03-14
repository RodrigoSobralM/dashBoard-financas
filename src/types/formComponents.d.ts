// export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export type MessageProps = {
    msg: string
    type: 'error' | 'success'
}

export interface FormComponentsProps {
    inputs: CustomInputProps[]
    buttons: ButtonProps[]
    message?: MessageProps
}