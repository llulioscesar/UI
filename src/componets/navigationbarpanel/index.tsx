import React, {FC} from 'react'

type Props = {}

const navigationBarPanel: FC<Props> = (props) => {

    return (
        <div className='ui-navigation-bar-panel'>
            {props.children}
        </div>
    )

}



export const NavigationBarPanel = navigationBarPanel
