import React, {ComponentClass, CSSProperties, FC, FunctionComponent, ReactNode} from "react";
import styled, {withTheme} from 'styled-components'
import {DefaultTheme, Theme} from "../../const/theme";
import {COLOR_BASE, COLOR_DEFAULT} from "../../const/color";

type Props = {
    children?: Element|ReactNode|FunctionComponent<{}>|ComponentClass<{}>,
    theme?: Theme,
    color?: string,
    style?: CSSProperties,
    className?: string|undefined,
    large?:boolean
    title?: string
}

let navigationBar: FC<Props> = (props) => {


    return (
        <div className={props.className} style={props.style}>
            {
                props.large == true && (
                    <div className='ui-navigation-bar-container'>
                        <div className='ui-navigation-bar-controls'>
                            {
                                props.children
                            }
                        </div>
                        <div className='ui-navigation-bar-title'>{props.title}</div>

                    </div>
                )
            }
            {
                props.large == false && (
                    <div className='ui-navigation-bar-container'>
                        <div className='ui-navigation-bar-controls'>
                            {
                                // @ts-ignore
                                props.children[0] || props.children ||(<div></div>)
                            }
                            <div className='ui-navigation-bar-title'>{props.title}</div>
                            {
                                // @ts-ignore
                                props.children[1] || (<div></div>)
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )

}

const getColor = (props:Props):string => {
    // @ts-ignore
    let color = props.color || props.theme.colorBase || COLOR_BASE
    return color
}

navigationBar = styled(navigationBar)<Props>`
    display:flex;
    flex:1;
    width: 100%;
    height:${(props) => props.large ? '102px' : '50px'};
    align-items: center;
    background: ${(props) => getColor(props)};
    
    .ui-navigation-bar-container {
        padding: 0 15px;
        display:flex;
        flex:1;
        height:${(props) => props.large ? '102px' : '50px'};
        flex-direction: ${(props) => props.large ? 'column' : 'row'};
        width:100%;
        align-items: center;
    }
    
    .ui-navigation-bar-controls {
        height:44px
        min-height:44px;
        max-height:44px
        display:flex;
        flex:1;
        align-items: center;
        width:100%;
        justify-content: space-between;
    }
    
    .ui-navigation-bar-title {
        font-style: normal;
        font-weight: bold!important;
        display: ${(props) => props.large ? 'block':'unset'};
        font-size: ${(props) => props.large ? '2.3125rem!important' : '1.0625rem!important'};
        color: black;
        max-height: 52px;
        height: ${(props) => props.large ? '52px':'auto'};
        width: ${(props) => props.large ? '100%' : 'auto'};
        text-align: left;
    }
    
    @media (max-width:767px){
        .ui-navigation-bar-container {
            padding:0 8px
            height: ${(props) => props.large ? '96px' : '44px'}
        }
        
        & {
            height: ${(props) => props.large ? '96px' : '44px'}
        }
    }
    
`

navigationBar.defaultProps = {
    theme: DefaultTheme,
    large: true,
    title: 'My App'
}

export const NavigationBar = withTheme(navigationBar)
