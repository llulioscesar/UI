import React, {
    ComponentClass,
    FC,
    FunctionComponent,
    ReactChildren,
    ReactElement,
} from "react";

type Props = {
    icon?: Element|ReactChildren|ReactElement|FunctionComponent<{}>|ComponentClass<{}>,
    text?: string,
    onClick?: (e:React.MouseEvent<HTMLDivElement>) => void
}

const navigationBarLink: FC<Props> = (props) => {

    const click = (e:React.MouseEvent<HTMLDivElement>) => {
        if (props.onClick !== undefined) {
            props.onClick(e);
        }
    }

    return (
        <div className='ui-navigation-bar-link' onClick={(e) => click(e)}>
            {props.icon !== undefined && props.icon}
            {props.text !== undefined && props.text}
            { props.text === undefined && props.icon === undefined && props.children}
        </div>
    );
}


navigationBarLink.displayName = 'NavigationBarLink'

export const NavigationBarLink = navigationBarLink
