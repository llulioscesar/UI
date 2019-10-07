import React, {CSSProperties, FC, useEffect, useState} from 'react'
import {COLOR_DEFAULT, COLOR_DEFAULT_BUTTON_TEXT} from '../../const/color'
import styled from "styled-components";
import {darken, opacify} from 'polished'


type Props = {
    className?: string|undefined,
    text?: string,
    color?: string,
    textColor?: string,
    style?: CSSProperties
    full?: boolean,
    width?: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
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
    border-radius: 100px;
    min-width: 100px;
    border: none;
    width: ${(props) => props.width || (props.full ? '100%' : 'auto')}
    background-color: ${ (props) => props.color };
    color: ${(props) => props.textColor};
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
    textColor: COLOR_DEFAULT_BUTTON_TEXT,
    full: false
}

export const Button = button;
