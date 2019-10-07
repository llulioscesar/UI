import React, {CSSProperties, FC, useEffect, useState} from 'react'
import {COLOR_DEFAULT, COLOR_WHITE} from '../../const/color'
import styled, {withTheme, ThemeConsumer} from "styled-components";
import {darken, opacify} from 'polished'
import {Theme} from "../../const/theme";


type Props = {
    className?: string|undefined,
    text?: string,
    color?: string,
    textColor?: string,
    style?: CSSProperties
    full?: boolean,
    width?: string,
    typeStyle?: "default"|"standar"|"danger"|"success"|"error",
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    theme: Theme
};

function withDefault<T extends { defaultProps?: Partial<TDefaults> }, TDefaults>(o: T, defaultProps: TDefaults): T & { defaultProps: TDefaults } {
    o.defaultProps = defaultProps;
    return o as any;
}

let button: FC<Props> = (props) => {

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
            {props.text}
        </button>
    )
};

button = styled(button)<Props>`
    padding: 8px 16px;
    border-radius: 6px;
    min-width: 120px;
    font-family: "productsans";
    font-weight: normal
    text-align: center;
    font-size: medium;
    text-decoration: none;
    border: none;
    width: ${(props) => props.width || (props.full ? '100%' : 'auto')}
    background-color: ${
        (props) => {
            let color = props.color
            
            return ''
        }
    };
    color: ${(props) => props.theme.buttonTextColor || props.textColor};
    outline: none;
    :hover {
        box-shadow: -1px 1px 10px -3px ${(props) => opacify(0.7, `${props.color}`)};
    }
    :active {
        background-color: ${(props) => darken(0.05, `${props.color}`)};
    }
`

button.defaultProps = {
    color: COLOR_DEFAULT,
    textColor: COLOR_WHITE,
    full: false,
    typeStyle: "default"
}

export const Button = withTheme(button);
