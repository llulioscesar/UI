import React, {FC, ReactChildren, ComponentType, createContext, ReactNode} from "react";
import {ThemeProvider} from 'styled-components'
import {Theme, DefaultTheme} from '../../const/theme'
import {Toolbar} from '../toolbar'

type Props = {
    theme?:Theme
    toolbar?: ComponentType,
    children: ReactNode
}

export const app: FC<Props> = (props) => {
    return (
        <ThemeProvider theme={DefaultTheme}>
            <div id='ui-app'>
                {
                    props.toolbar !== undefined && (
                        <Toolbar>
                            {props.toolbar}
                        </Toolbar>
                    )
                }
                <div id='ui-contenido'>
                    {
                        props.children
                    }
                </div>
            </div>
        </ThemeProvider>
    )
}

export const Dashboard = app

