import React, {FC, ReactChildren, ComponentType, createContext} from "react";
import {Toolbar} from '../toolbar'

export interface Theme {
    color?: string,
}

type Props = {
    theme?:Theme
    toolbar?: ComponentType
}

// Tema por defecto
const defaultTheme: Theme = {
    color: 'red'
}

// Context del tema
const ThemeContext = createContext({
    theme: defaultTheme
})

export const app: FC<Props> = (props) => {
    return (
        <div id='ui-app'>
            <ThemeContext.Provider value={{theme: defaultTheme}}>
                {
                    props.toolbar !== undefined && (
                        <Toolbar>
                            {props.toolbar}
                        </Toolbar>
                    )
                }
            </ThemeContext.Provider>
        </div>
    )
}

export const App = app

