import React, {FC} from 'react'
import {DEFAULT, DEFAULT_BUTTON_TEXT} from '../../const/color'
import styled from "styled-components";
import {darken} from 'polished'


type Props = {
    className?:string|undefined,
    text?:string|undefined,
    color?:string|undefined,
    textColor?:string|undefined
};

function withDefault<T extends { defaultProps?: Partial<TDefaults> }, TDefaults>(o: T, defaultProps: TDefaults): T & { defaultProps: TDefaults } {
    o.defaultProps = defaultProps;
    return o as any;
}

let button: FC<Props> = (props) => {
    return (
        <button className={props.className}>
            {props.text}
        </button>
    )
};

console.log(getComputedStyle(document.body).getPropertyValue('--default'))

button = withDefault(styled(button)<Props>`
    padding: 8px 16px;
    border-radius: 100px;
    min-width: 100px;
    border: none;
    background-color: ${ (props) => props.color };
    color: ${(props) => props.textColor};
    outline: none;
    
    :focus {
        outline: none;
    }
    
    :active {
        background-color: ${(props) => darken(20, props.color+"")};
    }
`, {
    color: DEFAULT/*getComputedStyle(document.body).getPropertyValue('--default')*/,
    textColor: DEFAULT_BUTTON_TEXT,
});

export const Button = button;
