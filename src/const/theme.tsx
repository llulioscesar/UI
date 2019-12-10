import {COLOR_DEFAULT, COLOR_WHITE, COLOR_ERROR, COLOR_DANGER, COLOR_BLACK, COLOR_SUCCESS, COLOR_BASE} from './color'

export declare module Theme {
    interface Theme {
        color:string,
        colorBase:string,
        colorSuccess:string,
        colorDanger:string,
        colorError:string,
        colorWhite:string,
        colorBlack:string,
        buttons:{
            default:{
                text:string,
                color:string
            },
            standar:{
                text:string,
                color:string
            },
            success:{
                text:string,
                color:string
            },
            danger:{
                text:string,
                color:string
            },
            error:{
                text:string,
                color:string
            }
        },
        navigationBar:{
            color:string,
            text:string;
            title:string
        },
        menuBar:{
            color: string,
            text:string
        }
    }
}



export const DefaultTheme: Theme.Theme = {
    color: COLOR_DEFAULT,
    colorBase: COLOR_BASE,
    colorDanger: COLOR_DANGER,
    colorError: COLOR_ERROR,
    colorSuccess: COLOR_SUCCESS,
    colorWhite: COLOR_WHITE,
    colorBlack: COLOR_BLACK,
    buttons:{
        default:{
          text: COLOR_WHITE,
          color: COLOR_DEFAULT
        },
        standar:{
            text: COLOR_DEFAULT,
            color: COLOR_WHITE
        },
        success:{
            text:COLOR_WHITE,
            color: COLOR_SUCCESS
        },
        danger:{
            text: COLOR_WHITE,
            color: COLOR_DANGER
        },
        error: {
            text: COLOR_WHITE,
            color: COLOR_ERROR
        }
    },
    navigationBar:{
        color:COLOR_BASE,
        title: COLOR_BLACK,
        text: COLOR_DEFAULT
    },
    menuBar: {
        color:COLOR_BASE,
        text: COLOR_DEFAULT
    }
}
