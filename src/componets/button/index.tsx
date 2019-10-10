import React, {CSSProperties, FC, useEffect, useState} from 'react'
import {COLOR_DEFAULT, COLOR_WHITE} from '../../const/color'
import styled, {withTheme, ThemeConsumer} from "styled-components";
import {darken, opacify} from 'polished'
import {DefaultTheme, Theme} from "../../const/theme";


interface Button {
    className?: string|undefined,
    text?: string,
    color?: string,
    textColor?: string,
    style?: CSSProperties
    full?: boolean,
    width?: string,
    typeStyle?: "default"|"standar"|"danger"|"success"|"error",
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    theme?: Theme,
    invested?: boolean
};

let button: FC<Button> = (props) => {

    // getComputedStyle(document.body).getPropertyValue('--default')

    const click = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (props.onClick !== undefined) {
            props.onClick(event)
        }
    }

    return (
        <button
            className={props.className}
            onClick={event => click(event)}
            style={props.style}>
            {props.text || props.children}
        </button>
    )
};

const getColor = (props:Button): string => {
    let color = (props.color || COLOR_DEFAULT)

    if (props.color === undefined) {
        switch(props.typeStyle){
            case "default":
                // @ts-ignore
                color = props.invested ? 'white' : props.theme.buttons.default.color
                break
            case "standar":
                // @ts-ignore
                color = props.theme.buttons.standar.color
                break
            case "success":
                // @ts-ignore
                color = props.invested ? 'white' : props.theme.buttons.success.color
                break
            case "danger":
                // @ts-ignore
                color = props.invested ? 'white' : props.theme.buttons.danger.color
                break
            case "error":
                // @ts-ignore
                color = props.invested ? 'white' : props.theme.buttons.error.color
                break
        }
    }
    return color
}

const getTextColor = (props:Button):string => {
    let color = (props.textColor||COLOR_WHITE)

    if (props.color === undefined) {
        switch(props.typeStyle){
            case "default":
                // @ts-ignore
                color = props.invested ? props.theme.buttons.default.color : props.theme.buttons.default.text
                break
            case "standar":
                // @ts-ignore
                color = props.theme.buttons.standar.text
                break
            case "success":
                // @ts-ignore
                color = props.invested ? props.theme.buttons.success.color : props.theme.buttons.success.text
                break
            case "danger":
                // @ts-ignore
                color = props.invested ? props.theme.buttons.danger.color : props.theme.buttons.danger.text
                break
            case "error":
                // @ts-ignore
                color = props.invested ? props.theme.buttons.error.color : props.theme.buttons.error.text
                break
        }
    }
    return color
}

button = styled(button)<Button>`
    padding: 8px 16px;
    border-radius: 6px;
    font-family: "sf-pro!important";
    font-weight: normal
    text-align: center;
    font-size: medium;
    text-decoration: none;
    border: none;
    width: ${(props) => props.full ? '100%' : props.width}
    background-color: ${(props) => getColor(props) };
    color: ${(props) => getTextColor(props)};
    outline: none;
    :hover {
        box-shadow: -1px 1px 10px -3px ${(props) => props.typeStyle === 'standar' || props.invested === true ? (props.color !== undefined ? (opacify(0.7, `${props.color}`)) : 'rgba(0,0,0,0.7)' ) : opacify(0.7, getColor(props))};
    }
    :active {
        background-color: ${(props) => darken(0.05, getColor(props))};
    }
`

button.defaultProps = {
    full: false,
    typeStyle: "default",
    theme: DefaultTheme,
    invested: false,
    width: '120px'
}

// @ts-ignore
button.type = 'Button'

export const Button = withTheme(button);
