import React, {ComponentClass, CSSProperties, FC, FunctionComponent, ReactNode} from "react";
import styled, {withTheme} from 'styled-components'
import {DefaultTheme, Theme} from "../../const/theme";
import {COLOR_BASE} from "../../const/color";
import {darken} from "polished";

type Props = {
    children?: Element|ReactNode|FunctionComponent<{}>|ComponentClass<{}>,
    theme?: Theme,
    color?: string,
    textColor?: string,
    titleColor?: string,
    style?: CSSProperties,
    className?: string|undefined,
    large?:boolean
    title?: string,
    subTitle?: string,
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
    let color = props.color || props.theme.navigationBar.color || COLOR_BASE
    return color
}

const getTextColor = (props:Props): string => {
    // @ts-ignore
    return props.textColor || props.theme.navigationBar.text
}

const getTitleColor = (props:Props): string => {
    // @ts-ignore
    return props.titleColor || props.theme.navigationBar.title
}

navigationBar = styled(navigationBar)<Props>`
    display:flex;
    flex:1;
    width: 100%;
    height:${(props) => props.large ? '102px' : '50px'};
    align-items: center;
    background: ${(props) => getColor(props)};
    border-bottom: 1px solid #dddddf;
    
    
    
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
        align-items: center;
        width:100%;
        justify-content: space-between;
        position:relative;
    }
    
    .ui-navigation-bar-title {
        font-style: normal;
        font-weight: bold!important;
        display: ${(props) => props.large ? 'block':'unset'};
        font-size: ${(props) => props.large ? '34px!important' : '17px!important'};
        color: ${(props) => getTitleColor(props)};
        max-height: 52px;
        height: ${(props) => props.large ? '52px':'auto'};
        width: 100%;
        text-align: ${(props) => props.large ? 'left' : 'center'};
        position: ${(props) => props.large ? 'relative': 'absolute'};
        top: ${(props) => props.large ? '0%': 'calc(50% - 20px)'};
        transform: ${(props) => props.large ? 'none': 'translateY(50%)'};
        z-index:1
    }
    
    .ui-navigation-bar-link {
        color: ${(props) => getTextColor(props)};
        display: flex;
        align-items: center;
        cursor:pointer;
        font-size: 17px;
    }
    
    .ui-navigation-bar-controls > svg,
    .ui-navigation-bar-panel > svg,
    .ui-navigation-bar-link > svg {
        fill: ${(props) => getTextColor(props)};
        width:30px;
        height:30px;
        margin-rigth:0px;
        cursor:pointer;
    }
    
    .ui-navigation-bar-controls > svg:active,
    .ui-navigation-bar-panel > svg:active,
    .ui-navigation-bar-link:active > svg {
        fill: ${(props) => darken(0.1, getTextColor(props))}!important; 
    }
    
    .ui-navigation-bar-link:active {
        color: ${(props) => darken(0.1, getTextColor(props))}!important;
    }
    
    .ui-navigation-bar-panel {
        display:flex;
        color:${(props) => getTextColor(props)}!important;
        align-items: center;
        z-index: 10;
        font-size: 17px;
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
