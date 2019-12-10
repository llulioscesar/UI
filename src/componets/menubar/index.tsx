import React, {FC} from "react";
import styled from "styled-components";
import {DefaultTheme, Theme} from "../../const/theme";

type Props = {
    color?:string
    theme?: Theme.Theme
}

let menuBar: FC<Props> = (props) => {

    return (
        <div>
            {}
        </div>
    )

}

const getColor = (props:Props) => {
    return props.color || props.theme.menuBar
}

menuBar = styled(menuBar)<Props>`
    postion:fixed;
    height: 100vh;
    top:0;
    bottom:0;
    left:0;
    background:     
`


export const MenuBar = menuBar
