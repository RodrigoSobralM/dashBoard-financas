import { Theme } from "@/types";

export const defaultTheme: Theme = {
    appBackground: '#F8F4F0',
    appColor: '#201F24',
    appDefaultStroke: '',
    appLogoSmall: 'logo-small.svg',
    appLogoLarge: 'logo-large.svg',
    appSkeletonFrom: '#EEE',
    appSkeletonTo: '#CCC',
    buttons: {
        alert: '#C94736',
        alertColor: '#FFF',
        alertHover: 'D80000',
        disabled: '#F2F2F2',
        disabledColor: '#696868',
        primary: '#201F24',
        primaryColor: '#FFF',
        primaryHover: '#696868',
    },
    cardPrincipal: {
        background: '#FFF',
        border: 'none',
    },
    cardSecundario: {
        background: '#F8F4F0',
        border: 'none',
    },
    textInput: {
        active: '#FFF',
        activeColor: '#696868',
        borderColor: '#98908B',
        disabled: '#FFF',
        disabledBorderColor: '#98908B',
        disabledColor: '#98908B',
        placeHolder: '#98908B',
    },
    typographies: {
        colorGray300: '#B3B3B3',
        colorGray900: '#201F24',
        colorGreen: '#277C78'
    },
    iconsNav: {
        activeColor: '#277C78',
        disabledColor: '#B3B3B3',
        hoverColor: '#277C78'
    }
}