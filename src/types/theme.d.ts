export interface Theme {
    appBackground: string
    appColor: string
    appDefaultStroke: string
    appLogoSmall: string
    appLogoLarge: string
    appSkeletonFrom: string 
    appSkeletonTo: string
    buttons: {
        alert: string
        alertColor: string
        alertHover: string
        disabled: string
        disabledColor: string
        primary: string
        primaryColor: string
        primaryHover: string
    }
    cardPrincipal: {
        background: string
        border: string
    }
    cardSecundario: {
        background: string
        border: string
    }
    textInput: {
        active: string
        activeColor: string
        borderColor: string
        disabled: string
        disabledBorderColor: string
        disabledColor: string
        placeHolder: string
    }
    typographies: {
        colorGray300: string
        colorGray900: string
        colorGreen: string
    }
    iconsNav: {
        activeColor: string
        disabledColor: string
        hoverColor: string
    }
}