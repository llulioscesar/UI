import React, {
    FC,
    ReactNode,
    FunctionComponent,
    ComponentClass, CSSProperties
} from "react";
import styled, {ThemeProvider, withTheme} from 'styled-components'
import {Theme, DefaultTheme} from '../../const/theme'

type Props = {
    style?: CSSProperties,
    className?: string|undefined,
    theme?:Theme,
    renderNavigationBar?:Element|ReactNode|FunctionComponent<{}>|ComponentClass<{}>,
    children: Element|ReactNode|FunctionComponent<{}>|ComponentClass<{}>,
}

let dashboard: FC<Props> = (props) => {
    return (
        <ThemeProvider theme={DefaultTheme}>
            <div className={props.className} style={props.style}>
                {
                    props.renderNavigationBar
                }
                <div className='ui-dashboard-content'>
                    {
                        props.children
                    }
                </div>
            </div>
        </ThemeProvider>
    )
}


dashboard = styled(dashboard)`
    .ui-dashboard-content {
        padding: 0 15px;
    }
    
    @media(max-width:767px){
        .ui-dashboard-content {
            padding: 0 8px
        }
    }
`;

dashboard.defaultProps = {
    theme: DefaultTheme
}


export const Dashboard = withTheme(dashboard)

