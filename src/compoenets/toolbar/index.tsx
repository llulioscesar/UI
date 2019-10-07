import React, {FC, ReactNode} from "react";

type Props = {
    children: ReactNode
}

let toolbar: FC<Props> = (props) => {

    return (
        <div id='ui-toolbar'>
            {
                props.children
            }
        </div>
    )

}

export const Toolbar = toolbar
